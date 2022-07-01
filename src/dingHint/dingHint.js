const Axios = require('axios')
const ApplicationTypeHeader = "application/json;charset=utf-8";


class DingHint {
    /**
     *
     * @param {string} webHookUrl - 钉钉推送地址
     * @param {string} project - 项目名称
     * @param {string} text - 提示内容
     * @param {string | number } keyWord - 机器人关键字
     */

    constructor(webHookUrl, project, text, keyWord) {
        this.webHookUrl = webHookUrl
        this.project = project
        this.text = text
        this.keyWord = keyWord
    }

    pushNotification() {
        let options = {
            headers: {
                "Content-Type": ApplicationTypeHeader
            },
            json: {
                "msgtype": 'markdown',
                "markdown": {
                    "title": null,
                    "text": null
                },
                "at": {
                    "isAtAll": false
                }
            }
        }
        options.json.markdown.title = `${this.project}${this.keyWord}!`
        options.json.markdown.text = this.text
        Axios.post(this.webHookUrl, options.json, options.headers).then((res) => {
            console.log('通知成功');
        }).catch(err => {
            console.log(err);
        })
    }
}

module.exports = DingHint