const sftp = require('ssh2-sftp-client')
const path = require('path')
const upLoad = new sftp()

// demo
class BuildDoneAutoUpLoad {
    /** 
    *@param {String} serverAccount 服务器账号
    @param {password}  serverPassword 服务器密码
    @param {Number} serverUrl 服务器地址
    @param {Number} port 端口
    @param {String} localPath  本地build-dist之后的地址
    @param {String}  remotePath 远端目的文件地址
    @param {String}  projectName 项目名称
    @param {String}  text  钉钉提示内容
    */
    constructor(options) {
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
                text
            } = this.options
            const hint = projectName + text
            const DingHint =
        })
    }
}

module.exports = BuildDoneAutoUpLoad