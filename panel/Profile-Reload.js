/*
By：Pysta

GitHub:https://github.com/mieqq/mieqq

* [Panel]
* 配置重载 = title=配置重载,content=配置重载,style=info,script-name=配置重载,update-interval=-1

* [Script]
* 配置重载=script-path=https://raw.githubusercontent.com/ZhidaHuang/Surge/main/panel/Profile-Reload.js,type=generic
*/

$httpAPI("POST", "/v1/profiles/reload", {}, data => {
    $notification.post("配置重载","配置重载成功","")
    $done({
        title: "配置重载",
        content: "配置重载成功",
        icon: "arrow.triangle.2.circlepath.doc.on.clipboard",
        "icon-color": "#002FA7",
     })
    });
