document.addEventListener("DOMContentLoaded", function () {
    var floatingImageContainer = document.getElementById("floatingImageContainer");
    var bottomLeftImageContainer = document.getElementById("bottomLeftImageContainer");
    var bottomRightImageContainer = document.getElementById("bottomRightImageContainer");
    var topLeftImageContainer = document.getElementById("topLeftImageContainer");
    var topCenterImageContainer = document.getElementById("topCenterImageContainer");
    var topRightImageContainer = document.getElementById("topRightImageContainer");
    var imageContainers = document.querySelectorAll(".image-container");
    // 设置初始位置在页面之外
    floatingImageContainer.style.bottom = `-${window.innerHeight}px`;
    floatingImageContainer.style.opacity = "0";

    bottomLeftImageContainer.style.bottom = `-${window.innerHeight}px`;
    bottomLeftImageContainer.style.opacity = "0";

    bottomRightImageContainer.style.bottom = `-${window.innerHeight}px`;
    bottomRightImageContainer.style.opacity = "0";

    topLeftImageContainer.style.top = `-${window.innerHeight}px`;
    topLeftImageContainer.style.opacity = "0";

    topCenterImageContainer.style.top = `-${window.innerHeight}px`;
    topCenterImageContainer.style.left = "50%";
    topCenterImageContainer.style.transform = "translateX(-50%)";
    topCenterImageContainer.style.opacity = "0";

    topRightImageContainer.style.top = `-${window.innerHeight}px`; // 位于页面上方
    topRightImageContainer.style.right = "20px"; // 调整右边距
    topRightImageContainer.style.opacity = "0";

    // 页面加载后一段时间后，将图片容器移动到页面底部中间并显现出来
    setTimeout(function () {
        floatingImageContainer.style.bottom = "20px";
        floatingImageContainer.style.opacity = "1";

        bottomLeftImageContainer.style.bottom = "20px";
        bottomLeftImageContainer.style.opacity = "1";

        bottomRightImageContainer.style.bottom = "20px";
        bottomRightImageContainer.style.opacity = "1";

        topLeftImageContainer.style.top = "20px";
        topLeftImageContainer.style.opacity = "1";

        topCenterImageContainer.style.top = "20px";
        topCenterImageContainer.style.opacity = "1";

        topRightImageContainer.style.top = "20px"; // 调整顶部距离，使图片到达右上角
        topRightImageContainer.style.opacity = "1";
    }, 1000);

     floatingImageContainer.addEventListener("click", function () {
        var relativeLink = "entries/entry1/final/nose%202.html";
        var absoluteLink = new URL(relativeLink, window.location.href).href;
        window.open(absoluteLink, "_blank");
    });
});
 bottomLeftImageContainer.addEventListener("click", function () {
        var relativeLink = "https://334234.github.io/entries/entry2/final/index.html";
        var absoluteLink = new URL(relativeLink, window.location.href).href;
        window.open(absoluteLink, "_blank");
    });




