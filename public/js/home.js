function toggleNavbar() {
    const width = window.innerWidth;
    const mobileBody = document.getElementById('mobileBody');
    const desktopBody = document.getElementById('desktopBody');

    if (width < 769) {
      mobileBody.style.display = 'block';
      desktopBody.style.display = 'none';
    } else {
      mobileBody.style.display = 'none';
      desktopBody.style.display = 'block';
    }
  }

  // Run on initial load
  toggleNavbar();

  // Run on window resize
  window.addEventListener('resize', toggleNavbar);
