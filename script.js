const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;

      if (!img.src) {
        img.src = img.dataset.src;
        img.onload = () => {
          img.classList.add('loaded');
        };
      }

      obs.unobserve(img);
    }
  });
}, {
  rootMargin: '0px', 
  threshold: 0.1
});

const lazyImages = document.querySelectorAll('img.lazy');

lazyImages.forEach(img => {
  observer.observe(img);
});

const loadBtn = document.getElementById('loadImages');
if (loadBtn) {
  loadBtn.addEventListener('click', () => {
    lazyImages.forEach(img => {
      if (!img.src) {
        img.src = img.dataset.src;
        img.onload = () => {
          img.classList.add('loaded');
        };
        observer.unobserve(img); // Якщо користувач вирішив завантажити вручну
      }
    });
  });
}