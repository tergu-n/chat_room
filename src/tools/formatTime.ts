/**
* 时间显示规则 https://blog.csdn.net/weixin_42601134/article/details/112671537
* 1. 12小时制
*       条件            显示内容           备注
*       0<=n<6         凌晨 2：41        0点到6点为凌晨
*       0<=n<12        上午 8；12        6点到12点为上午
*       12<=n<14       中午 1；12        12点到14点为中午
*       14<=n<18       下午 4；16        14点到18点为下午
*       18<=n<24       晚上 7；12        18点到24点为晚上
*       当天<n<昨天     昨天 18：12        这条消息发布于昨天00：01-昨天23：59
*       昨天<n<=一周    星期三 12：12       一周包含今天 例如今天是星期三，最早显示到上周星期四00：00
*       一周<n         2023年03月02日     从今天开始算超过一周显示年月日
*
* 2. 24小时制
*       条件            显示内容           备注
*       当天            12：12            显示最新一条信息的时间
*       当天<n<昨天      昨天 18：12        这条消息发布于昨天00：01-昨天23：59
*       昨天<n<=一周     星期三 12：12      一周包含今天 例如今天是星期三，最早显示到上周星期四00：00
*       一周<n          2023年03月02日     从今天开始算超过一周显示年月日
*/

// 12小时制
export function formatHafTime () {

}

// 24小时制
export function formatFullTime () {

}