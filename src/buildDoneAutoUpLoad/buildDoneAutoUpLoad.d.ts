import buildDoneAutoOptions from './options'
export class BuildDoneAutoUpLoad {
    constructor(options:buildDoneAutoOptions) {
        
    }
    // webpack 入口函数
    apply(compiler:any):void;

    // 上传dist文件
    upLoadDist():void;
}
