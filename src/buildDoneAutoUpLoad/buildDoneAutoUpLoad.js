const sftp = require('ssh2-sftp-client')
const path = require('path')
const {
    validate
} = require("schema-utils");
const schema = require("./options.json");
const upLoad = new sftp()
const DingHint = require('../dingHint/dingHint.js')

class BuildDoneAutoUpLoad {
    /** 
     *@param {Object} options - 整个参数
     *@param {string} options.serverAccount- 服务器账号
     *@param {password}  options.serverPassword - 服务器密码
     *@param {Number} options.serverUrl - 服务器地址
     *@param {Number} options.port - 端口
     *@param {string} options.localPath - 本地build-dist之后的地址
     *@param {string} options.remotePath - 远端目的文件地址
     *@param {string} options.projectName - 项目名称
     *@param {string} options.text - 钉钉提示内容
     * @param {string} options.webHookUrl - 钉钉推送地址
     * @param {string | number } options.keyWord - 机器人关键字
     */
    constructor(options) {
        validate(schema, options, {
            name: "BuildDoneAutoUpLoad",
            baseDataPath: "options",
        })
        this.options = options
    }

    apply(compiler) {
        compiler.hooks.done.tap('BuildDoneAutoUpLoad', stats => {
            if (stats.compiler.options.mode === 'production') {
                this.upLoadDist()
            }
        })
    }

    upLoadDist() {
        const jsSrc = path.join(__dirname, this.options.localPath) + '/js'
        const cssSrc = path.join(__dirname, this.distFileUrl) + '/css'
        const {
            serverUrl,
            port,
            serverAccount,
            serverPassword
        } = this.options
        const account = {
            host: serverUrl,
            port: port,
            username: serverAccount,
            password: serverPassword,
        }
        upLoad.connect(account).then(() => {
            return Promise.all([upLoad.uploadDir(jsSrc, `${this.remotePath}/js`), upLoad.uploadDir(cssSrc, `${this.remotePath}/css`)])
        }).then(() => {
            const {
                projectName,
                text,
                webHookUrl,
                keyWord,
            } = this.options
            const Ding = new DingHint(webHookUrl, projectName, text, keyWord)
            Ding.pushNotification()
            upLoad.end()
        })
    }
}

module.exports = BuildDoneAutoUpLoad