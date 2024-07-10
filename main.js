function showPage(pageId) {
    page = document.getElementById(pageId)
    // hide all pages
    document.querySelectorAll('.page').forEach(function (p) {
        p.classList.remove('active');
    });
    // show the clicked page
    page.classList.add('active');
}

function showContentFromHash() {
    var pageId = window.location.hash.substring(1);
    if (!pageId) {
        showPage('home');
        return
    }

    var page = document.getElementById(pageId);
    if (!page) {
        showPage('404');
        return
    }
    showPage(pageId);
}

function showMobileModal() {
    // activate modal
    document.querySelectorAll('.mobile-nav').forEach((e) => {
        e.classList.add('mobile-nav-active');
    });

    // disable scrolling
    document.querySelector('body').classList.add('no-scroll');
    document.querySelector('html').classList.add('no-scroll');
}

function closeMobileModal() {
    // close modal
    document.querySelectorAll('.mobile-nav').forEach((e) => {
        e.classList.add('mobile-nav-closing');
        // wait for 'close' animation to finish before removing active class
        e.addEventListener('animationend', () => {
            e.classList.remove('mobile-nav-active', 'mobile-nav-closing');
        }, {
            once: true,
        });
    });

    // re-enable scrolling
    document.querySelectorAll('.no-scroll').forEach((e) => {
        e.classList.remove('no-scroll')
    })
}

function mobileNav(link) {
    closeMobileModal();
    window.URL = link;
}

// Call the function on page load to display page content based on URL
window.onload = showContentFromHash;
// Call the function on hash change (for back/forward navigation)
window.onhashchange = showContentFromHash;
