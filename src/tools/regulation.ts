const regexUtils = {
    allNum (str: string) { // 匹配所有数字 0 正负数 小数
        return /^([-+])?\d+(.\d+)?$/.test(str)
    },
    positiveInt (str: string) { // 非零正整数
        return /^[1-9]\d*$/.test(str)
    },
    negativeInt (str: string) { // 非零负整数
        return /^-[1-9]\d*$/.test(str)
    },
    notPositiveInt (str: string) { // 0或负数
        return /^-[1-9]\d*|0$/.test(str)
    },
    notNegativeInt (str: string) { // 非负整数
        return /^\d+$/.test(str)
    },
    floatNum (str: string) { // 是否是浮点数
        return /^(-?\d+)(.\d+)?$/.test(str)
    },
    positiveFloatNum (str: string) { // 正浮点数
        return /^[1-9]\d*.\d*|0.\d*[1-9]\d*$/.test(str)
    },
    negativeFloatNum (str: string) { // 负浮点数
        return /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/.test(str)
    },
    numDigit (str: string, n: number) { // n位数字的正整数
        return new RegExp('^\\d{' + n + '}$').test(str)
    },
    numLeastBits (str: string, n: number) { // 至少n为数字
        return new RegExp('^\\d{' + n + ',' + '}$').test(str)
    },
    numBetweenBits (str: string, n: number, m: number) { // 数字位数介于n-m之间包含
        return new RegExp('^\\d{' + n + ',' + m + '}$').test(str)
    },
    firstNotZero (str: string) { // 开头不是0的数字
        return /^[1-9][0-9]*$/.test(str)
    },
    decimalDigit (str: string, n: number) { // 判断有几位小数
        return new RegExp('^([1-9][0-9]*)+(.[0-9]{' + n + '}){1}$').test(str)
    },
    decimalLeastDigit (str: string, n: number) { // 判断有至少几位小数
        return new RegExp('^([1-9][0-9]*)+(.[0-9]{' + n + ',' + '}){1}$').test(str)
    },
    ifChinaLetter (str: string) { // 是否为汉字
        return /^[\u4e00-\u9fa5]*$/.test(str)
    },
    engAndNum (str: string) { // 英文或数字
        return /^[A-Za-z0-9]+$/.test(str)
    },
    lengthLimit (str: string, n: number, m: number) { // 字符长度为n-m之间
        return new RegExp('^.{' + n + ',' + m + '}$').test(str)
    },
    engAll (str: string) { // 26英文字母不区分大小写
        return /^[A-Za-z]+$/.test(str)
    },
    smallEng (str: string) { // 小写英文字母
        return /^[a-z]+$/.test(str)
    },
    bigEng (str: string) { // 大写英文字母
        return /^[A-Z]+$/.test(str)
    },
    emailRule (str: string) { // 邮箱验证
        return /^\w+([-+.]\w+)*@\w+([-.]\w+)*.\w+([-.]\w+)*$/.test(str)
    },
    phoneRule (str: string) { // 手机号验证
        return /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(str)
    },
    idCardRule (str: string) { // 身份证验证 15-18位
        return /^\d{15}|\d{18}$/.test(str)
    },
    qqRule (str: string) { // qq号验证（腾讯QQ号从10000开）
        return /[1-9][0-9]{4,}/.test(str)
    },
    postCodeRule (str: string) { // 邮政验证（中国邮政编码为6位数字）
        return /[1-9]\d{5}(?!\d)/.test(str)
    },
    passwordRule (str: string) { // 密码验证 包含数字、字母和特殊字符 长度为8-16位
        return /^(?![0-9]+$)(?![^0-9]+$)(?![a-zA-Z]+$)(?![^a-zA-Z]+$)(?![a-zA-Z0-9]+$)[a-zA-Z0-9\S]{8,16}$/.test(str);
    }
}

export {
    regexUtils
}