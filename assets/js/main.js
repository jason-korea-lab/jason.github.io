document.querySelectorAll('.quick-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.quick-nav a').forEach((a) => a.classList.remove('active'));
    link.classList.add('active');
  });
});
