(function () {
  const TARGET = "/music-comments";                 // 你的页面路径
  const BG = "/image/music-comments-bg.png";        // 你的图片路径（你能直接访问的那个）

  function apply() {
    const path = location.pathname.replace(/\/+$/, "");
    if (path !== TARGET) return;

    const header = document.querySelector("#page-header");
    if (!header) return;

    header.style.backgroundImage = `url(${BG})`;
    header.style.backgroundSize = "cover";
    header.style.backgroundPosition = "center";
    header.style.backgroundRepeat = "no-repeat";

    // 你现在这段 CSS 的“遮罩透明”才能生效（否则有些主题会改回去）
    // 也可以不写这行，只靠 CSS
  }

  document.addEventListener("DOMContentLoaded", apply);

  // 如果你启用了 PJAX（anzhiyu 很常见），需要这个
  document.addEventListener("pjax:complete", apply);
  document.addEventListener("pjax:end", apply);
})();
