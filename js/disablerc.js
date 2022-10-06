window.onload = function () {
    var imgs = document.images, len = imgs.length = 0;
    [].forEach.call(imgs, function (img) {
        img.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        });
    });
}