---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2025-10-15
category:
  - 其他
tag:
  - OpenList
  - 其他
---

# OpenList 使用

## 一、Windows 安装

### 获取 OpenList

您可以在 [下载](https://doc.oplist.org.cn/guide/installation/download) 页面或 [GitHub Release](https://github.com/OpenListTeam/OpenList/releases) 下载待部署系统对应的二进制可执行文件。

## 二、Windows 运行

```bash
使用方法：
  openlist [命令]

可用命令：
  admin      显示管理员用户的信息及管理员用户密码相关操作
  cancel2fa  删除管理员用户的 2FA
  completion 生成指定 shell 的自动补全脚本
  crypt      加密或解密本地文件或目录
  help       显示命令帮助
  kill       强制通过守护进程/进程 ID 文件终止 openlist 服务器进程
  lang       生成语言 JSON 文件
  restart    通过守护进程/进程 ID 文件重启 openlist 服务器
  server     启动指定地址的服务器
  start      静默启动 openlist 服务器，使用 `--force-bin-dir`
  stop       与 kill 命令相同
  storage    管理存储
  version    显示当前 OpenList 版本

标志参数：
  --data string   数据文件夹（默认值 "data"）
  --debug         启动时使用调试模式
  --dev           启动时使用开发模式
  --force-bin-dir 强制使用二进制文件所在目录作为数据目录
  -h, --help      显示 openlist 命令帮助
  --log-std       强制日志输出到标准输出
  --no-prefix     禁用环境前缀

使用 "openlist [命令] --help" 获取更多命令信息。
```

::: tip
手动安装如果有如下提示：是因为你的 GLIBC 版本太低，建议下载 musl 版本。

```txt
lib64/libc.so.6: version `GLIBC_2.28' not found (required by ./openlist)
accept: function not implemented
```

当你看到 `start server@0.0.0.0:5244` 的输出，之后没有报错，说明操作成功。 第一次运行时会输出初始密码。程序默认监听 5244 端口。 现在打开 `http://ip:5244` 可以看到登录页面。
:::

:::warning
v3.25.0 以上版本将密码改成加密方式存储的 hash 值，无法直接反算出密码，如果忘记了密码只能通过重新 `随机生成` 或者 `手动设置`。
:::

## 三、Windows 守护进程

用 **`.VBS`** 脚本启动和停止，分别创建两个脚本 分别是 `启动.vbs` 和 `停止.vbs`。 直接在和 OpenList 启动程序同级文件夹里面双击启动即可，不用担心没有反应，直接去浏览器访问即可。

::: note 两个启动脚本
启动.vbs

```bash
Dim ws
Set ws = Wscript.CreateObject("Wscript.Shell")
ws.run "openlist.exe server",vbhide
Wscript.quit
```

停止.vbs

```bash
Dim ws
Set ws = Wscript.CreateObject("Wscript.Shell")
ws.run "taskkill /f /im openlist.exe",0
Wscript.quit
```

脚本不会创建的可以自行下载：[**脚本下载**](https://www.alipan.com/s/DHPMhRtKUzY/folder/63e0961eae317bd4d4d945cda69dbb00f9837fb7)
脚本不会使用的可以看看视频：[**参考视频**](https://www.bilibili.com/video/BV1wWYTzdE4B/) 如何实现 Windows 开机自启，可以参考上面提到的脚本使用视频
:::

::: note 信息
对于所有平台，您可以使用以下命令来静默启动、停止和重新启动。 （v3.4.0 及更高版本）

```bash
openlist start
openlist stop
openlist restart
```

:::

## 四、如何更新

下载新版 OpenList，把之前的替换了即可。

## 五、界面美化

### 设置

#### 全局

##### 自定义头部

```bash
<!--Alist V3建议添加的，已经默认添加了，如果你的没有建议加上-->
<script src="https://polyfill.io/v3/polyfill.min.js?features=String.prototype.replaceAll"></script>

<!--引入字体，全局字体使用-->
<link rel="stylesheet" href="https://npm.elemecdn.com/lxgw-wenkai-webfont@1.1.0/lxgwwenkai-regular.css" />

<!--评论系统使用的js-->
<script src='https://unpkg.com/valine/dist/Valine.min.js'></script>

<!--不蒜子计数器-->
<script async src="https://busuanzi.icodeq.com/busuanzi.pure.mini.js"></script>

<!-- Font6，自定义底部使用和看板娘使用的图标和字体文件-->
<link type='text/css' rel="stylesheet" href="https://npm.elemecdn.com/font6pro@6.0.1/css/fontawesome.min.css"
    media='all'>
<link href="https://npm.elemecdn.com/font6pro@6.0.1/css/all.min.css" rel="stylesheet">

<!--音乐播放器所用的文件-->
<!-- require APlayer -->
<link rel="stylesheet" href="https://npm.elemecdn.com/aplayer@1.10.1/dist/APlayer.min.css">
<script src="https://npm.elemecdn.com/aplayer@1.10.1/dist/APlayer.min.js"></script>
<!-- require MetingJS -->
<script src="https://npm.elemecdn.com/meting@2.0.1/dist/Meting.min.js"></script>


<style>
    /* 去除通知栏 右上角 X */
    .notify-render .hope-close-button {
        display: none;
    }

    /* 图片API用法点进去都会有食用说明的
  樱花：https://www.dmoe.cc
  夏沫：https://cdn.seovx.com
  搏天：https://api.btstu.cn/doc/sjbz.php
  姬长信：https://github.com/insoxin/API
  小歪：https://api.ixiaowai.cn/
  保罗：https://api.paugram.com
  墨天逸：https://api.mtyqx.cn
  岁月小筑：https://img.xjh.me
  东方Project：https://img.paulzzh.com
  */

    /*白天背景图*/
    .hope-ui-light {
        background-image: url("https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302") !important;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-position-x: center;
    }

    /*夜间背景图*/
    .hope-ui-dark {
        background-image: url("https://cdn.seovx.com/d//img/momcn-2D%20(24).jpg") !important;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-position-x: center;
    }

    /*主列表白天模式透明*/
    .obj-box.hope-stack.hope-c-dhzjXW.hope-c-PJLV.hope-c-PJLV-igScBhH-css {
        background-color: rgba(255, 255, 255, 0.5) !important;
    }

    /*主列表夜间模式透明*/
    .obj-box.hope-stack.hope-c-dhzjXW.hope-c-PJLV.hope-c-PJLV-iigjoxS-css {
        background-color: rgb(0 0 0 / 50%) !important;
    }

    /*readme白天模式透明*/
    .hope-c-PJLV.hope-c-PJLV-ikSuVsl-css {
        background-color: rgba(255, 255, 255, 0.5) !important;
    }

    /*readme夜间模式透明*/
    .hope-c-PJLV.hope-c-PJLV-iiuDLME-css {
        background-color: rgb(0 0 0 / 50%) !important;
    }

    /*顶部右上角切换按钮透明*/
    .hope-ui-light .hope-c-ivMHWx-hZistB-cv.hope-icon-button {
        background-color: rgba(255, 255, 255, 0.3) !important;
    }

    .hope-ui-dark .hope-c-ivMHWx-hZistB-cv.hope-icon-button {
        background-color: rgb(0 0 0 / 10%) !important;

    }

    /*右下角侧边栏按钮透明 第一个是白天 第二个是夜间*/
    .hope-ui-light .hope-c-PJLV-ijgzmFG-css {
        background-color: rgba(255, 255, 255, 0.5) !important;
    }

    .hope-ui-dark .hope-c-PJLV-ijgzmFG-css {
        background-color: rgb(0 0 0 / 50%) !important;
    }

    /*白天模式代码块透明*/
    .hope-ui-light pre {
        background-color: rgba(255, 255, 255, 0.1) !important;
    }

    /*夜间模式代码块透明*/
    .hope-ui-dark pre {
        background-color: rgba(255, 255, 255, 0) !important;
    }

    /*底部CSS，.App .table这三个一起的*/
    dibu {
        border-top: 0px;
        position: absolute;
        bottom: 0;
        width: 100%;
        margin: 0px;
        padding: 0px;
    }

    .App {
        min-height: 85vh;
    }

    .table {
        margin: auto;
    }

    /*去掉底部*/
    .footer {
        display: none !important;
    }

    /*全局字体*/
    * {
        font-family: LXGW WenKai
    }

    * {
        font-weight: bold
    }

    body {
        font-family: LXGW WenKai;
    }





    /*渐变背景CSS*/
    #canvas-basic {
        position: fixed;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -999;
    }


    /*音乐播放器进一步进行隐藏*/
    .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body {
        left: -66px !important;
    }

    .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body:hover {
        left: 0 !important;
    }
</style>


```

##### 自定义内容

```bash
<!--延迟加载-->
<!--如果要写自定义内容建议都加到这个延迟加载的范围内-->
<div id="customize" style="display: none;">
    <div>
        <!--音乐播放器-->
        <meting-js fixed="true" autoplay="false" theme="#409EFF" list-folded="true" server="netease" type="playlist"
            id="606250067"></meting-js>


        <center class="dibu">
            <div style=" line-height: 20px;font-size: 15pt;font-weight: bold;">
                <span>
                    "
                    <span style="color: rgb(13, 109, 252); font-weight: bold;" id="hitokoto">
                        <a href="#" id="hitokoto_text">
                            "人生最大的遗憾,就是在最无能为力的时候遇到一个想要保护一生的人."
                        </a>
                    </span> "
                </span>
                <p style="margin-left: 10rem;font-size: 10pt;">
                    <small>
                        —— Anwen's Cloud
                    </small>
                </p>
            </div>


            <div style="font-size: 13px; font-weight: bold;">
                <span class="nav-item">
                    <a class="nav-link" href="2490626755" target="_blank">
                        <i class="fab fa-qq" style="color:#409EFF" aria-hidden="true">
                        </i>
                        QQ |
                    </a>
                </span>
                <span class="nav-item">
                    <a class="nav-link" href="mailto:2490626755@qq.com" target="_blank">
                        <i class="fa-duotone fa-envelope-open" style="color:#409EFF" aria-hidden="true">
                        </i>
                        邮箱 |
                    </a>
                </span>
                <span class="nav-item">
                    <a class="nav-link" href="https://micok2003.github.io/blog/" target="_blank">
                        <i class="fas fa-edit" style="color:#409EFF" aria-hidden="true">
                        </i>
                        博客 |
                    </a>
                </span>
                <span class="nav-item">
                    <a class="nav-link" href="xxxxxxxx" target="_blank">
                        <i class="fas fa-comment-lines" style="color:#409EFF;" aria-hidden="true">
                        </i>
                        留言 |
                    </a>
                </span>
                <span class="nav-item">
                    <a class="nav-link" href="https://www.alipan.com/" target="_blank">
                        <i class="fa fa-cloud-download" style="color:#409EFF;" aria-hidden="true">
                        </i>
                        云盘 |
                    </a>
                </span>
                <!--后台入口-->
                <span class="nav-item">
                    <a class="nav-link" href="/@manage" target="_blank">
                        <i class="fa-solid fa-folder-gear" style="color:#409EFF;" aria-hidden="true">
                        </i>
                        管理 |
                    </a>
                </span>
                <!--版权，请尊重作者-->
                <span class="nav-item">
                    <a class="nav-link" href="https://github.com/OpenListTeam/OpenList" target="_blank">
                        <i class="fa-solid fa-copyright" style="color:#409EFF;" aria-hidden="true">
                        </i>
                        OpenList
                    </a>
                </span>
                <br />
                <!--添加一个访问量-->
                <span>
                    本"<span style="color: rgb(13, 109, 252); font-weight: bold;"><a href="#">目录</a></span>"访问量 <span
                        id="busuanzi_value_page_pv" style="color: rgb(13, 109, 252); font-weight: bold;"></span> 次
                    本站总访问量 <span id="busuanzi_value_site_pv"
                        style="color: rgb(13, 109, 252); font-weight: bold;"></span> 次 本站总访客数 <span
                        id="busuanzi_value_site_uv" style="color: rgb(13, 109, 252); font-weight: bold;"></span> 人
                </span>
                <br />
                <!--添加备案信息-->
                <span class="nav-item">
                    <a class="nav-link" href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">
                        <i class="fa-solid fa-shield-check" style="color:#409EFF;" aria-hidden="true">
                        </i>
                        浙 ICP备2222000777号
                    </a>
                </span>
            </div>
        </center>
        <br />
        <br />
    </div>



    <!--一言API-->
    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
    <!--延迟加载范围到这里结束-->
</div>
<!--延迟加载配套使用JS-->
<script>
    let interval = setInterval(() => {
        if (document.querySelector(".footer")) {
            document.querySelector("#customize").style.display = "";
            clearInterval(interval);
        }
    }, 200);
</script>



<!-- 渐变背景初始化,如果要使用渐变背景把下面的那一行注释去掉即可-->
<!-- 下面的几行都是渐变的一套,自定义头部内还有一个关联的自定义CSS -->
<canvas id="canvas-basic"></canvas>
<script src="https://npm.elemecdn.com/granim@2.0.0/dist/granim.min.js"></script>
<script>
    var granimInstance = new Granim({
        element: '#canvas-basic',
        direction: 'left-right',
        isPausedWhenNotInView: true,
        states: {
            "default-state": {
                gradients: [
                    ['#a18cd1', '#fbc2eb'],
                    ['#fff1eb', '#ace0f9'],
                    ['#d4fc79', '#96e6a1'],
                    ['#a1c4fd', '#c2e9fb'],
                    ['#a8edea', '#fed6e3'],
                    ['#9890e3', '#b1f4cf'],
                    ['#a1c4fd', '#c2e9fb'],
                    ['#fff1eb', '#ace0f9']

                ]
            }
        }
    });
</script>






<!--鼠标点击特效-->
<html>

<head>

</head>

<body>
    <script>
        function clickEffect() {
            let balls = [];
            let longPressed = false;
            let longPress;
            let multiplier = 0;
            let width, height;
            let origin;
            let normal;
            let ctx;
            const colours = ["#F73859", "#14FFEC", "#00E0FF", "#FF99FE", "#FAF15D"];
            const canvas = document.createElement("canvas");
            document.body.appendChild(canvas);
            canvas.setAttribute("style", "width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;");
            const pointer = document.createElement("span");
            pointer.classList.add("pointer");
            document.body.appendChild(pointer);

            if (canvas.getContext && window.addEventListener) {
                ctx = canvas.getContext("2d");
                updateSize();
                window.addEventListener('resize', updateSize, false);
                loop();
                window.addEventListener("mousedown", function (e) {
                    pushBalls(randBetween(10, 20), e.clientX, e.clientY);
                    document.body.classList.add("is-pressed");
                    longPress = setTimeout(function () {
                        document.body.classList.add("is-longpress");
                        longPressed = true;
                    }, 500);
                }, false);
                window.addEventListener("mouseup", function (e) {
                    clearInterval(longPress);
                    if (longPressed == true) {
                        document.body.classList.remove("is-longpress");
                        pushBalls(randBetween(50 + Math.ceil(multiplier), 100 + Math.ceil(multiplier)), e.clientX, e.clientY);
                        longPressed = false;
                    }
                    document.body.classList.remove("is-pressed");
                }, false);
                window.addEventListener("mousemove", function (e) {
                    let x = e.clientX;
                    let y = e.clientY;
                    pointer.style.top = y + "px";
                    pointer.style.left = x + "px";
                }, false);
            } else {
                console.log("canvas or addEventListener is unsupported!");
            }


            function updateSize() {
                canvas.width = window.innerWidth * 2;
                canvas.height = window.innerHeight * 2;
                canvas.style.width = window.innerWidth + 'px';
                canvas.style.height = window.innerHeight + 'px';
                ctx.scale(2, 2);
                width = (canvas.width = window.innerWidth);
                height = (canvas.height = window.innerHeight);
                origin = {
                    x: width / 2,
                    y: height / 2
                };
                normal = {
                    x: width / 2,
                    y: height / 2
                };
            }
            class Ball {
                constructor(x = origin.x, y = origin.y) {
                    this.x = x;
                    this.y = y;
                    this.angle = Math.PI * 2 * Math.random();
                    if (longPressed == true) {
                        this.multiplier = randBetween(14 + multiplier, 15 + multiplier);
                    } else {
                        this.multiplier = randBetween(6, 12);
                    }
                    this.vx = (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle);
                    this.vy = (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle);
                    this.r = randBetween(8, 12) + 3 * Math.random();
                    this.color = colours[Math.floor(Math.random() * colours.length)];
                }
                update() {
                    this.x += this.vx - normal.x;
                    this.y += this.vy - normal.y;
                    normal.x = -2 / window.innerWidth * Math.sin(this.angle);
                    normal.y = -2 / window.innerHeight * Math.cos(this.angle);
                    this.r -= 0.3;
                    this.vx *= 0.9;
                    this.vy *= 0.9;
                }
            }

            function pushBalls(count = 1, x = origin.x, y = origin.y) {
                for (let i = 0; i < count; i++) {
                    balls.push(new Ball(x, y));
                }
            }

            function randBetween(min, max) {
                return Math.floor(Math.random() * max) + min;
            }

            function loop() {
                ctx.fillStyle = "rgba(255, 255, 255, 0)";
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                for (let i = 0; i < balls.length; i++) {
                    let b = balls[i];
                    if (b.r < 0) continue;
                    ctx.fillStyle = b.color;
                    ctx.beginPath();
                    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
                    ctx.fill();
                    b.update();
                }
                if (longPressed == true) {
                    multiplier += 0.2;
                } else if (!longPressed && multiplier >= 0) {
                    multiplier -= 0.4;
                }
                removeBall();
                requestAnimationFrame(loop);
            }

            function removeBall() {
                for (let i = 0; i < balls.length; i++) {
                    let b = balls[i];
                    if (b.x + b.r < 0 || b.x - b.r > width || b.y + b.r < 0 || b.y - b.r > height || b.r < 0) {
                        balls.splice(i, 1);
                    }
                }
            }
        }
        clickEffect();//调用特效函数
    </script>

</body>

</html>

```
