function toggleNavbar() {
    const width = window.innerWidth;
    const mobileMyPostBody = document.getElementById('mobileMyPostBody');
    const desktopMyPostBody = document.getElementById('desktopMyPostBody');

    if (width < 769) {
      mobileMyPostBody.style.display = 'block';
      desktopMyPostBody.style.display = 'none';
    } else {
      mobileMyPostBody.style.display = 'none';
      desktopMyPostBody.style.display = 'block';
    }
  }

  // Run on initial load
  toggleNavbar();

  // Run on window resize
  window.addEventListener('resize', toggleNavbar);
