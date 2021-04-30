/*


转载注明出处
作者: @𝐃𝐃
=========================================


下载链接

=========================================

说明:
食材大冲关APP 

圈x获取不到ck就把body改成header
跑脚本时不要进软件key会过期

⚠️2处获取数据的地方  领红包获取


=========================================



=========================================
surge:获取数据

食材大冲关APP  = type=http-request,pattern=^https:\/\/redbag\.renyouwangluo\.cn\/*,request-header=1,max-size=0,script-path=scdyjsign.js

食材大冲关APP  = type=http-request,pattern=^https:\/\/api-access\.pangolin-sdk-toutiao\.com\/*,request-header=1,max-size=0,script-path=scdyjsign.js


=========================================
圈x:获取数据

^https:\/\/redbag\.renyouwangluo\.cn\/* url script-request-body scdyjsign.js

^https:\/\/api-access\.pangolin-sdk-toutiao\.com\/* url script-request-body scdyjsign.js
 



=========================================
loon:获取数据

http-request ^https:\/\/redbag\.renyouwangluo\.cn\/* script-path=scdyjsign.js, request-header=true, timeout=10, tag=食材大冲关APP 

http-request ^https:\/\/api-access\.pangolin-sdk-toutiao\.com\/* script-path=scdyjsign.js, request-header=true, timeout=10, tag=食材大冲关APP 



=========================================
小火箭:获取数据

食材大冲关APP  = type=http-request,script-path=scdyjsign.js,pattern=^https:\/\/redbag\.renyouwangluo\.cn\/*,max-size=131072,requires-body=true,timeout=10,enable=true





MITM= redbag.renyouwangluo.cn, api-access.pangolin-sdk-toutiao.com



=========================================






*/








const DD = '食材大冲关APP';
const $ = new Env(DD);
$.idx = ($.idx = ($.getval('scdyjSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const logs = 0; //设置0关闭日志,1开启日志
const log = 0; //0关闭系统日志,1开启系统日志,和系统通知不要一起打开,关闭系统通知就要打开,系统日志
let noNolog = ''; //1为所有通知 2为11小时通知一次 3为3小时通知一次 4为5小时通知一下
let dd = "" //
let Times = Math.round(Date.now() / 1000)
let times = new Date(new Date()
        .getTime() + 0 * 60 * 60 * 1000)
    .toLocaleString('zh'
    , {
        hour12: false
    });
let Time = new Date(
    new Date()
    .getTime() +
    new Date()
    .getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000);
const normalheaderArr = [];
const normalbodyArr = [];
const scdcgheaderArr = [];
const scdcgbodyArr = [];



let normalheader = $.getdata('normalheader');
let normalbody = $.getdata('normalbody');
let scdcgheader = $.getdata('scdcgheader');
let scdcgbody = $.getdata('scdcgbody');
if ($.isNode())
{
    if (process.env.XIAOMUYUHEADER && process.env.XIAOMUYUHEADER.indexOf('#') > -1)
    {
        xiaomuyuheader = process.env.XIAOMUYUHEADER.split('#');
        console.log(`您选择的是用"#"隔开\n`)
    }
    else if (process.env.XIAOMUYUHEADER && process.env.XIAOMUYUHEADER.indexOf('\n') > -1)
    {
        xiaomuyuheader = process.env.XIAOMUYUHEADER.split('\n');
        console.log(`您选择的是用换行隔开\n`)
    }
    else
    {
        xiaomuyuheader = process.env.XIAOMUYUHEADER.split()
    };
    Object.keys(doubleheader)
        .forEach((item) =>
        {
            if (doubleheader[item])
            {
                doubleheaderArr.push(doubleheader[item])
            }
        });
    console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`);
}
else
{

normalheaderArr.push($.getdata("normalheader"));
    normalbodyArr.push($.getdata("normalbody"));
    scdcgheaderArr.push($.getdata("scdcgheader"));
    scdcgbodyArr.push($.getdata("scdcgbody"));
    if ("NOLOG")
    {
        noNolog = $.getval("NOLOG") || '3';
    }
    // boxjs中设置多账号数
    let scdyjCount = ($.getval('scdyjCount') || '1') - 0;
    for (let i = 2; i <= scdyjCount; i++)
    {
        if ($.getdata(`normalheader${i}`))
        {
            normalheaderArr.push($.getdata(`normalheader${i}`));
            normalbodyArr.push($.getdata(`normalbody${i}`));
            scdcgheaderArr.push($.getdata(`scdcgheader${i}`));
            scdcgbodyArr.push($.getdata(`scdcgbody${i}`));
        }
    }
}!(async () =>
{
    if (typeof $request != "undefined")
    {
        await ddsign()
    }
    else
    {
        if (!normalheaderArr[0])
        {
            $.msg($.name, '运行前需要获取cookie点击前往\n', ''
            , {
                "open-url": ""
            });
            return;
        }
        else
        {
            console.log(`\n************ 脚本共${normalheaderArr.length}个${$.name}账号  ************\n`);
            console.log(`\n============ 脚本执行时间(TM)：${new Date(new Date().getTime() + 0 * 60 * 60 * 1000).toLocaleString('zh', {hour12: false})}  =============\n`)
        }
        for (let i = 0; i < normalheaderArr.length; i++)
        {
            if (normalheaderArr[i])
            {
                $.index = i + 1;

                normalheader = normalheaderArr[i];
                normalbody = normalbodyArr[i];
                scdcgheader = scdcgheaderArr[i];
                scdcgbody = scdcgbodyArr[i];
                zh = (`【账号${$.index}】`);
                console.log(`\n开始执行【${$.name}${$.index}】\n`)
            }
            await sign();
        }
    }
})()
.catch((e) => $.logErr(e))
    .finally(() => $.done())




function sign(timeout = 0)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            let Url = {
                url: 'https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/'
                , headers: JSON.parse(scdcgheader)
                , body: scdcgbody
            , }
            $.post(Url, async (err, resp, data) =>
            {
                try
                {
                    data = JSON.parse(data);
                    if (logs == 1) console.log(data)
                    $.signCoin = data;
                    if ($.signCoin.cypher == 2)
                    {
                        $.log(`成功`);
                  await $.wait(1200);
                        await signs()
                    }
                 
                }
                catch (e)
                {
                    $.logErr(e, resp);
                }
                finally
                {
                    resolve()
                }
            })
        }, timeout)
    })
}


function signs(timeout = 0)
{
    return new Promise((resolve) =>
    {
        setTimeout(() =>
        {
            let Url = {
                url: 'https://redbag.renyouwangluo.cn/api/redbag/normal'
                , headers: JSON.parse(normalheader)
                , body: normalbody
            , }
            $.post(Url, async (err, resp, data) =>
            {
                try
                {
                    data = JSON.parse(data);
                    if (logs == 1) console.log(data)
                    $.signCoin = data;
                    if ($.signCoin.code == 1)
                    {
                        $.log(`+${$.signCoin.data.money} 计${$.signCoin.data.redbag}` + '\n');
await $.wait(1200);
     await sign()
                        
                    }
                    else if ($.signCoin.code == -6)
                    {
                        $.log(`${$.signCoin.msg}\n`)
                    }
                }
                catch (e)
                {
                    $.logErr(e, resp);
                }
                finally
                {
                    resolve()
                }
            })
        }, timeout)
    })
}



function Msg()
{
    if (log == 1) console.log(`\n==============📣系统通知📣==============\n${$.name}${dd}`);
    if (noNolog == 1)
    {
        $.msg($.name, "", `${dd}`);
    }
    if (noNolog == 2 && (Time.getHours() == 11 || Time.getHours() == 23) && (Time.getMinutes() >= 0 && Time.getMinutes() <= 5))
    {
        $.msg($.name, "", dd);
    }
    if (noNolog == 3 && (Time.getHours() == 0 || Time.getHours() == 3 || Time.getHours() == 6 || Time.getHours() == 9 || Time.getHours() == 12 || Time.getHours() == 15 || Time.getHours() == 18 || Time.getHours() == 21) && (Time.getMinutes() >= 0 && Time.getMinutes() <= 5))
    {
        $.msg($.name, "", dd);
    }
    if (noNolog == 4 && (Time.getHours() == 0 || Time.getHours() == 5 || Time.getHours() == 10 || Time.getHours() == 15 || Time.getHours() == 20) && (Time.getMinutes() >= 0 && Time.getMinutes() <= 5))
    {
        $.msg($.name, "", dd);
    }
}

function ddsign()
{
    if ($request.url.indexOf("api/ad/union/sdk/reward_video/reward/") > 0)
    {
        const scdcgheader = JSON.stringify($request.headers);
        if (scdcgheader)
            $.setdata(scdcgheader, "scdcgheader" + $.idx);
        const scdcgbody = $request.body;
        if (scdcgbody)
            $.setdata(scdcgbody, "scdcgbody" + $.idx);
        $.msg($.name + $.idx, "", "[获取视频数据]✅成功");
    }
    if ($request.url.indexOf("redbag/normal") > 0)
    {
        const normalbody = $request.body;
        if (normalbody)
            $.setdata(normalbody, "normalbody" + $.idx);

const normalheader = JSON.stringify($request.headers);
        if (normalheader)
            $.setdata(normalheader, "normalheader" + $.idx);

        $.msg($.name + $.idx, "", "[获取红包数据]✅成功");
    }
    
    }


function Env(t, e)
{
    class s
    {
        constructor(t)
        {
            this.env = t
        }
        send(t, e = "GET")
        {
            t = "string" == typeof t ?
            {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) =>
            {
                s.call(this, t, (t, s, r) =>
                {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t)
        {
            return this.send.call(this.env, t)
        }
        post(t)
        {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class
    {
        constructor(t, e)
        {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date)
                .getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }
        isNode()
        {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX()
        {
            return "undefined" != typeof $task
        }
        isSurge()
        {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon()
        {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null)
        {
            try
            {
                return JSON.parse(t)
            }
            catch
            {
                return e
            }
        }
        toStr(t, e = null)
        {
            try
            {
                return JSON.stringify(t)
            }
            catch
            {
                return e
            }
        }
        getjson(t, e)
        {
            let s = e;
            const i = this.getdata(t);
            if (i) try
            {
                s = JSON.parse(this.getdata(t))
            }
            catch
            {}
            return s
        }
        setjson(t, e)
        {
            try
            {
                return this.setdata(JSON.stringify(t), e)
            }
            catch
            {
                return !1
            }
        }
        getScript(t)
        {
            return new Promise(e =>
            {
                this.get(
                {
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e)
        {
            return new Promise(s =>
                {
                    let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                    i = i ? i.replace(/\n/g, "")
                        .trim() : i;
                    let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                    r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                    const [o, h] = i.split("@"), a = {
                        url: `http://${h}/v1/scripting/evaluate`
                        , body:
                        {
                            script_text: t
                            , mock_type: "cron"
                            , timeout: r
                        }
                        , headers:
                        {
                            "X-Key": o
                            , Accept: "*/*"
                        }
                    };
                    this.post(a, (t, e, i) => s(i))
                })
                .catch(t => this.logErr(t))
        }
        loaddata()
        {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile)
                    , e = this.path.resolve(process.cwd(), this.dataFile)
                    , s = this.fs.existsSync(t)
                    , i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try
                    {
                        return JSON.parse(this.fs.readFileSync(i))
                    }
                    catch (t)
                    {
                        return {}
                    }
                }
            }
        }
        writedata()
        {
            if (this.isNode())
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile)
                    , e = this.path.resolve(process.cwd(), this.dataFile)
                    , s = this.fs.existsSync(t)
                    , i = !s && this.fs.existsSync(e)
                    , r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s)
        {
            const i = e.replace(/\[(\d+)\]/g, ".$1")
                .split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s)
        {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString()
                    .match(/[^.[\]]+/g) || []), e.slice(0, -1)
                .reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] :
                {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t)
        {
            let e = this.getval(t);
            if (/^@/.test(t))
            {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try
                {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                }
                catch (t)
                {
                    e = ""
                }
            }
            return e
        }
        setdata(t, e)
        {
            let s = !1;
            if (/^@/.test(e))
            {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try
                {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                }
                catch (e)
                {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            }
            else s = this.setval(t, e);
            return s
        }
        getval(t)
        {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e)
        {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t)
        {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers :
            {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() =>
        {}))
        {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers ||
            {}, Object.assign(t.headers
            , {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) =>
            {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts ||
                {}, Object.assign(t.opts
                , {
                    hints: !1
                })), $task.fetch(t)
                .then(t =>
                {
                    const
                    {
                        statusCode: s
                        , statusCode: i
                        , headers: r
                        , body: o
                    } = t;
                    e(null
                    , {
                        status: s
                        , statusCode: i
                        , headers: r
                        , body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t)
                .on("redirect", (t, e) =>
                {
                    try
                    {
                        if (t.headers["set-cookie"])
                        {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse)
                                .toString();
                            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                        }
                    }
                    catch (t)
                    {
                        this.logErr(t)
                    }
                })
                .then(t =>
                {
                    const
                    {
                        statusCode: s
                        , statusCode: i
                        , headers: r
                        , body: o
                    } = t;
                    e(null
                    , {
                        status: s
                        , statusCode: i
                        , headers: r
                        , body: o
                    }, o)
                }, t =>
                {
                    const
                    {
                        message: s
                        , response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() =>
        {}))
        {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers ||
            {}, Object.assign(t.headers
            , {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) =>
            {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts ||
                {}, Object.assign(t.opts
                , {
                    hints: !1
                })), $task.fetch(t)
                .then(t =>
                {
                    const
                    {
                        statusCode: s
                        , statusCode: i
                        , headers: r
                        , body: o
                    } = t;
                    e(null
                    , {
                        status: s
                        , statusCode: i
                        , headers: r
                        , body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode())
            {
                this.initGotEnv(t);
                const
                {
                    url: s
                    , ...i
                } = t;
                this.got.post(s, i)
                    .then(t =>
                    {
                        const
                        {
                            statusCode: s
                            , statusCode: i
                            , headers: r
                            , body: o
                        } = t;
                        e(null
                        , {
                            status: s
                            , statusCode: i
                            , headers: r
                            , body: o
                        }, o)
                    }, t =>
                    {
                        const
                        {
                            message: s
                            , response: i
                        } = t;
                        e(s, i, i && i.body)
                    })
            }
        }
        time(t)
        {
            let e = {
                "M+": (new Date)
                    .getMonth() + 1
                , "d+": (new Date)
                    .getDate()
                , "H+": (new Date)
                    .getHours()
                , "m+": (new Date)
                    .getMinutes()
                , "s+": (new Date)
                    .getSeconds()
                , "q+": Math.floor(((new Date)
                    .getMonth() + 3) / 3)
                , S: (new Date)
                    .getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date)
                    .getFullYear() + "")
                .substr(4 - RegExp.$1.length)));
            for (let s in e) new RegExp("(" + s + ")")
                .test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s])
                    .substr(("" + e[s])
                        .length)));
            return t
        }
        msg(e = t, s = "", i = "", r)
        {
            const o = t =>
            {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ?
                {
                    "open-url": t
                } : this.isSurge() ?
                {
                    url: t
                } : void 0;
                if ("object" == typeof t)
                {
                    if (this.isLoon())
                    {
                        let e = t.openUrl || t.url || t["open-url"]
                            , s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e
                            , mediaUrl: s
                        }
                    }
                    if (this.isQuanX())
                    {
                        let e = t["open-url"] || t.url || t.openUrl
                            , s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e
                            , "media-url": s
                        }
                    }
                    if (this.isSurge())
                    {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============📣系统通知📣=============="];
            h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
        }
        log(...t)
        {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e)
        {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }
        wait(t)
        {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {})
        {
            const e = (new Date)
                .getTime()
                , s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
