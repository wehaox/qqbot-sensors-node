const http = require('http')
const { exec } = require("child_process")
const fs = require('fs')
const file = "./config.json"
    //检测配置文件是否存在
try {
    var bot = JSON.parse(fs.readFileSync(file));
    console.log('读取配置文件成功,请保持程序处于后台运行,开始执行...')
} catch (err) {
const json = `{
    "ip": "",
    "qq": "",
    "token": "",
    "temp": "60",
    "interval": 60000
}`
    fs.writeFile(file, json, function(err) {
        if (err) {
            console.log(err.message)
            process.exit(0)
        }
        console.log('创建文件成功,请修改配置文件后重新启动程序')
        process.exit(0)
    })
    return console.log('读取文件失败,尝试创建文件...')
}
const temp = bot.temp
    //获取服务器温度
function os() {
    exec("sensors", (error, stdout, stderr) => {
        let time = new Date().toLocaleString();
        c0 = stdout.match(/Core 0.*?\+([\d\.]+)/)[1]
        if (c0 > temp) {
            let msg = `注意!当前CPU温度为${c0},已达到规定温度`
            console.log(`${msg} ${time}`);
            //向机器人发送消息
            const url = `${bot.ip}/send_private_msg?access_token=${bot.token}&user_id=${bot.qq}&message=${msg}`
            http.get(encodeURI(url))
        } else {
            console.log(`当前CPU温度:${c0} ${time}`)
        }
    });
}

setTimeout(() => {
    // 启动时查询一次
    os()
        // 然后定时查询
    setInterval(() => {
        os()
    }, bot.interval)
}, 0)