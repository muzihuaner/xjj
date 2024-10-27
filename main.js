function resizeVideo(video) {
var videoRatio = video.width / video.height;
var containerRatio = $('#player').width() /$('#player').height();

if (videoRatio > containerRatio) {
// 视频比容器宽
video.width = $('#player').width();
video.height = video.width / videoRatio;
} else {
// 视频比容器高
video.height = $('#player').height();
video.width = video.height * videoRatio;
}
}


(function (window, document) {
if (top != self) {
window.top.location.replace(self.location.href);
}
var get = function (id) {
return document.getElementById(id);
}
var bind = function (element, event, callback) {
return element.addEventListener(event, callback);
}
var auto = true;
var player = get('player');
var videoSourceSelect = get('videoSource');

var randomm = function () {
var selectedSource = videoSourceSelect.value;
player.src = selectedSource + '?_t=' + Math.random();
player.play();
}

var initializePlayer = function () {
// 设置默认的视频源
videoSourceSelect.value = 'http://bao.5364.cn/api/shipin/1';
randomm();
}

bind(get('next1'), 'click', randomm);
bind(player, 'error', function () {
randomm();
});
bind(get('switch'), 'click', function () {
auto = !auto;
this.innerText = '连续: ' + (auto ? '开' : '关');
});
bind(player, 'ended', function () {
if (auto) randomm();
});
bind(videoSourceSelect, 'change', function () {
randomm();
});

document.addEventListener('DOMContentLoaded', initializePlayer);
})(window, document);

document.getElementById('player').onloadeddata = function() {
this.style.backgroundColor = '#2b2f3a'; 

document.getElementById('player').onloadstart = function() {
document.getElementById('loader').style.display = 'block';
};

document.getElementById('player').oncanplay = function() {
document.getElementById('loader').style.display = 'none';
};
};