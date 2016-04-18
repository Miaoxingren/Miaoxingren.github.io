
window.onload = function() {
    document.querySelector(".main").style.height = window.innerHeight + 'px';
    addEvent(window, "mousemove", onMove);
};

function addEvent(eventTarget, eventType, eventHandler) {
    if (eventTarget.addEventListener) {
        eventTarget.addEventListener(eventType, eventHandler, false);
    } else if (eventTarget.attachEvent) {
        eventTarget.attachEvent('on' + eventType, eventHandler);
    } else {
        eventTarget['on' + eventType] = eventHandler;
    }
}

function onMove(event) {
    var range = [100, 80, 60, 40, 20];
    var distanceheight = [];
    var distancewidth = [];
    var midwidth = window.innerWidth / 2;
    var midheight = window.innerHeight / 2;
    var i = 0;
    while (i < 5) {
        var ratiow = range[i] / window.innerWidth;
        var ratioh = range[i] / window.innerHeight;
        distancewidth[i] = (0 - (event.screenX - midwidth)) * ratiow;
        distanceheight[i] = (0 - (event.screenY - midheight)) * ratioh;
        i += 1;
    }
    var layers = ['.layer_1', '.layer_2', '.layer_3', '.layer_4', '.layer_5'];
    for (i = 0; i < layers.length; i += 1) {
        var layer = document.querySelectorAll(layers[i]);
        for (var j = 0; j < layer.length; j += 1) {
            layer[j].style.marginLeft = distancewidth[i] + 'px';
            layer[j].style.marginTop = distanceheight[i] + 'px';
        }
    }
}