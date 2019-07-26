// 1. event trigger
function throttle (fn, interval) {
    var __self = fn;
    var firstTime = true;
    var timer = null;

    return function () {
        var args = arguments;
        var __me = this;

        if (firstTime) {
            __self.apply(__me, args);            
            return firstTime = false;
        }

        if (timer) {
            return false;
        }

        timer = setTimeout(function () {
            clearTimeout(timer);
            timer = null;
            __self(__me, args);
        }, interval || 500);
    };
}

window.onresize = throttle(function () {
    console.log(1);
}, 500)