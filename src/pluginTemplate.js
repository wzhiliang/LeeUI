// 参考链接：https://www.cnblogs.com/Longhua-0/p/9271625.html
// eval的一些不为人知的用法：https://www.oschina.net/translate/global-eval-what-are-the-options?lang=chs&p=2
// (0,eval)('this'):https://www.cnblogs.com/qianlegeqian/p/3950044.html

/**
 * 1.在定义插件之前添加一个分号，可以解决js合并时可能会产生的错误问题；
 * 2.undefined在老一辈的浏览器是不被支持的，直接使用会报错，js框架要考虑到兼容性，因此增加一个形参undefined，就算有人把外面的 undefined 定义了，里面的 undefined 依然不受影响；
 * 3.把window对象作为参数传入，是避免了函数执行的时候到外部去查找。
 */

; (function (undefined) {

    "use strict"  //使用js严格模式检查，使语法更规范

    var _global;

    var leeUI = {
        init: function () {

        },
        render: function () {

        },

    }

    // 最后将插件对象暴露给全局对象
    _global = (function () { return this || (0, eval)('this'); }());   //(0, eval)('this')，实际上(0,eval)是一个表达式，这个表达式执行之后的结果就是eval这一句相当于执行eval('this')
    
    //模块加载器
    if (typeof module !== "undefined" && module.exports) {
        module.exports = leeUI;
    } else if (typeof define === "function" && define.amd) {
        define(function () { return leeUI });
    } else {
        !('leeUI' in _global) && (_global.leeUI = leeUI);
    }

}());