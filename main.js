(function () {
  'use strict';

  // 导航高亮当前区块
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));
  var map = {};
  links.forEach(function (a) {
    var id = a.getAttribute('href').slice(1);
    map[id] = a;
  });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && map[entry.target.id]) {
          links.forEach(function (l) { l.classList.remove('active'); });
          map[entry.target.id].classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    document.querySelectorAll('main section[id]').forEach(function (s) {
      observer.observe(s);
    });
  }

  // 页脚年份
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // 头像加载失败时回退为文字头像
  var img = document.getElementById('avatar-img');
  var fallback = document.getElementById('avatar-fallback');
  if (img && fallback) {
    img.addEventListener('error', function () {
      img.style.display = 'none';
      fallback.style.display = 'grid';
    });
  }
})();
