# qqbot-sensors-node
家里刚好一台24h运行的小型Linux物理机 突发奇想写着玩的  
基于go-cqhttp和sensors的Linux温度监控程序

# 需要安装的软件
> sensors node(可选)  

## 安装sensors  
```bash
sudo apt install lm-sensors
```  
## 安装node(可选) 
```bash
sudo apt install nodejs
``` 
# 使用
程序需要挂在后台运行，建议使用screen或者nohup  
## 如果你有node环境直接运行apiSend.js即可  
```bash
node apiSend.js
``` 
## 如果你没有node环境，你可以下载编译好的二进制文件直接执行即可  
```bash
chmod +x apiSend && ./apiSend
``` 

# 配置文件说明
```json
{
    "ip": "http://0.0.0.0:5700", //仅支持http方式传输(需要其他协议可自行修改代码)
    "qq": "11111", //qq号
    "token": "xxxxx", //机器人token，没有测试，应该可以留空
    "temp": "45", //温度达到45度后机器人发送消息
    "interval": 60000  //多少毫秒查询一次(默认一分钟)
}
```
# 自行编译
全局安装pkg  
```bash
npm install -g pkg
```
下载 apiSend.js
```bash
pkg -t node14-linux apiSend.js
```

