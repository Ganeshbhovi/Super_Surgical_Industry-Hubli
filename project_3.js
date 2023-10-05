
    // Get the current page's ID from the URL
    const currentPageId = window.location.href.split('/').pop().split('.')[0];

    // Find the corresponding <li> element and add the "active" class
        const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach((link) => {
        const href = link.querySelector('a').getAttribute('href').split('/').pop().split('.')[0];
        if (href === currentPageId) {
            link.classList.add('active');
        }
    });



   