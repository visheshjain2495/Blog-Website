function toggleNavbar() {
    const width = window.innerWidth;
    const mobilePostBody = document.getElementById('mobilePostBody');
    const desktopPostBody = document.getElementById('desktopPostBody');

    if (width < 769) {
      mobilePostBody.style.display = 'block';
      desktopPostBody.style.display = 'none';
    } else {
      mobilePostBody.style.display = 'none';
      desktopPostBody.style.display = 'block';
    }
  }

  // Run on initial load
  toggleNavbar();

  // Run on window resize
  window.addEventListener('resize', toggleNavbar);
