interface options {
    account: String,
    password:String,
    serverUrl:Number,
    port:Number,
    localPath:String,
    remotePath:String,
}
const sftp = require('ssh2-sftp-client')
const sftp = new sftp()

// demo
class BuildDoneAutoPlugin {
    /** 
    *@account {String} 服务器账号
    @password {password} 服务器密码
    @serverUrl {Number} 服务器地址
    @port {Number} 端口
    @localPath {String} 本地build-dist之后的地址
    @remotePath {String} 远端目的文件地址
    */
    options: options
    constructor(options:options) {
        this.options = options
    }
}

module.exports = BuildDoneAutoPlugin