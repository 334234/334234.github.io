$('.title').click(function(){
  $(this).parents('.week').find('.content').slideToggle();
  $(this).parents('.week').toggleClass('no-border'); // 切换是否显示边框
});

function showImage(img) {
  // 显示悬停的图片，隐藏其他图片
  $('.week-image').hide();
  $(img).show();
}

function hideImage() {
  // 显示所有图片
  $('.week-image').show();
}

$(document).ready(function () {
  // 鼠标悬停时隐藏其他图片
  $('.week-image').hover(
    function () {
      hideImage();
    },
    function () {
      showImage(this);
    }
  );
});

   document.addEventListener('DOMContentLoaded', function () {
      // 获取所有图标元素
      const fallingIcons = document.querySelectorAll('.falling-icon');

      // 遍历图标元素并设置不同的延迟时间
      fallingIcons.forEach((icon, index) => {
        // 延迟一段时间后，修改图标的top属性，触发动画
        setTimeout(function () {
          icon.style.top = `calc(${50 + index * 40}px)`; // 间隔40像素，可以根据需要调整
        }, 500 + index * 100); // 每个图标间隔100毫秒触发动画
      });
    });