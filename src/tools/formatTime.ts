/**
* 时间显示规则 https://blog.csdn.net/weixin_42601134/article/details/112671537
* 1. 12小时制
*       条件            显示内容           备注
*       0<=n<6         凌晨 2：41        0点到6点为凌晨
*       6<=n<12        上午 8；12        6点到12点为上午
*       12<=n<14       中午 1；12        12点到14点为中午
*       14<=n<18       下午 4；16        14点到18点为下午
*       18<=n<24       晚上 7；12        18点到24点为晚上
*       当天<n<昨天     昨天              这条消息发布于昨天00：01-昨天23：59
*       昨天<n<=一周    星期三            一周包含今天 例如今天是星期三，最早显示到上周星期四00：00
*       一周<n         2023年03月02日     从今天开始算超过一周显示年月日
*
* 2. 24小时制
*       条件            显示内容           备注
*       当天            12：12            显示最新一条信息的时间
*       当天<n<昨天      昨天              这条消息发布于昨天00：01-昨天23：59
*       昨天<n<=一周     星期三            一周包含今天 例如今天是星期三，最早显示到上周星期四00：00
*       一周<n          2023年03月02日     从今天开始算超过一周显示年月日
*/

// 时间戳转日期
export function formatDate (time: any) {
    let date = new Date(time);
    // 年月日
    let y = date.getFullYear();
    let M: any = date.getMonth() + 1;
    M = M < 10 ? ('0' + M) : M;
    let d: any = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    // 时分秒
    let h: any = date.getHours();
    // h = h < 10 ? ('0' + h) : h;
    let m: any = date.getMinutes();
    m = m < 10 ? ('0' + m) : m;
    let s: any = date.getSeconds();
    s = s < 10 ? ('0' + s) : s;
    // 星期
    let w: any = date.getDay();
    switch (w) {
        case 0:
            w = '星期日';
            break;
        case 1:
            w = '星期一';
            break;
        case 2:
            w = '星期二';
            break;
        case 3:
            w = '星期三';
            break;
        case 4:
            w = '星期四';
            break;
        case 5:
            w = '星期五';
            break;
        case 6:
            w = '星期六';
            break;
    }
    return { y, M, d, h, m, s, w }
}
// 12小时制
export function formatHafTime (time: string) {
    // 获取当前时间戳
    let now: any = new Date().getTime();
    // 传参转成时间戳
    let historyTime: any = new Date(time).getTime();
    let { y, M, d, h, m, s, w } = formatDate(historyTime);
    // 当天零点时间戳
    // let nowTime0 = now - now % (24 * 60 * 60 * 1000) - 8 * 60 * 60 * 1000;
    let nowTime0: any = new Date(new Date().setHours(0, 0, 0, 0)).getTime();

    // 0<=n<6 凌晨 2：41
    if (historyTime >= nowTime0 && historyTime < nowTime0 + 3600000 * 6) {
        return `凌晨 ${h}: ${m}`;
    }
    // 6<=n<12 上午 8：12
    if (historyTime >= nowTime0 + 3600000 * 6 && historyTime < nowTime0 + 3600000 * 12) {
        return `上午 ${h}: ${m}`;
    }
    // 12<=n<14 中午 1：12
    if (historyTime >= nowTime0 + 3600000 * 12 && historyTime < nowTime0 + 3600000 * 14) {
        return `中午 ${h > 12 ? h - 12 : h}: ${m}`;
    }
    // 14<=n<18 下午 3：12
    if (historyTime >= nowTime0 + 3600000 * 14 && historyTime < nowTime0 + 3600000 * 18) {
        return `下午 ${h - 12}: ${m}`;
    }
    // 18<=n<24 晚上 7：12
    if (historyTime >= nowTime0 + 3600000 * 18 && historyTime < nowTime0 + 3600000 * 24) {
        return `晚上 ${h - 12}: ${m}`;
    }
    // 当天<n<昨天 昨天
    if (historyTime >= nowTime0 - 3600000 * 24 && historyTime < nowTime0) {
        return '昨天';
    }
    // 昨天<n<=一周 星期三
    if (historyTime >= nowTime0 - 3600000 * 24 * 7 && historyTime < nowTime0 - 3600000 * 24) {
        return `${w}`;
    }
    // 一周<n 2023年03月02日
    if (historyTime < nowTime0 - 3600000 * 24 * 7) {
        return `${y}年${M}月${d}日`;
    }
    return 'The input entry is not a time format';
}

// 24小时制
export function formatFullTime (time: string) {
    // 获取当前时间戳
    let now: any = new Date().getTime();
    // 传参转成时间戳
    let historyTime: any = new Date(time).getTime();
    let { y, M, d, h, m, s, w } = formatDate(historyTime);
    // 当天零点时间戳
    let nowTime0 = now - now % (24 * 60 * 60 * 1000) - 8 * 60 * 60 * 1000;

    // 当天 12：32
    if (historyTime >= nowTime0 && historyTime < now) {
        return `${h < 10 ? '0' + h : h}: ${m}`;
    }
    // 当天<n<昨天 昨天
    if (historyTime >= nowTime0 - 3600000 * 24 && historyTime < nowTime0) {
        return '昨天';
    }
    // 昨天<n<=一周 星期三
    if (historyTime >= nowTime0 - 3600000 * 24 * 7 && historyTime < nowTime0 - 3600000 * 24) {
        return `${w}`;
    }
    // 一周<n 2023年03月02日
    if (historyTime < nowTime0 - 3600000 * 24 * 7) {
        return `${y}年${M}月${d}日`;
    }
    return 'The input entry is not a time format';
}