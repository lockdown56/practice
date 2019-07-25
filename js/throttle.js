function throttle (fn, interval) {
    let __self = fn;
    let firstTime = true;

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