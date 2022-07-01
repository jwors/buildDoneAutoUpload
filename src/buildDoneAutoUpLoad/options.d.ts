interface buildDoneAutoOptions{
      // 服务器账号
    serverAccount:string,

    // 服务器密码
    serverPassword:string | number,

    // 服务器地址
    serverUrl:string,

    // 端口
    port:number

    // 本地build-dist之后的地址
    localPath:string,

    // 远端目的文件地址
    remotePath:string,

    // 项目名称
    projectName:string,

    // 钉钉提示内容
    text:string
}

export default buildDoneAutoOptions