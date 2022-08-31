
# 为什么写这个
    有时候开发会很忙碌，打包之后会忘记丢到测试服务器，所以就弄了一个这个小玩意，可以打包完成之后自称上服务器
    之前我们都是通过 filezilla ，所以也节省了一些时间，另外再通过DD机器人通知群里，就可以去检验了

**使用方法**
```js
    /** 参数说明
    *@param {Object} options - 整个参数
    *@param {string} options.serverAccount- 服务器账号
    *@param {password}  options.serverPassword - 服务器密码
    *@param {Number} options.serverUrl - 服务器地址
    *@param {Number} options.port - 端口
    path.join(__dirname)
    *@param {string} options.localPath - 本地build-dist之后的地址  path.join之后的地址 const urk = path.join(__dirname,'dist/static/')

    *@param {string} options.remotePath - 远端目的文件地址
    *@param {string} options.projectName - 项目名称
    *@param {string} options.text - 钉钉提示内容
    * @param {string} options.webHookUrl - 钉钉推送地址
    * @param {string | number } options.keyWord - 机器人关键字
    * */
{
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
     new BuildDoneAutoUpLoad({
        serverAccount:'xxx',
        serverPassword:'xxx',
        serverUrl:'xxx',
        remotePath:'xxx',
        projectName:"/xxx/xx"
        port:'8080'
     })
  ]
}
```
