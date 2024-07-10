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
    modal = document.querySelector('.mobile-nav-modal');
    modal.classList.remove("modal-hidden");
    modal.classList.add("modal-active");
}

function mobileNav(link) {
    modal = document.querySelector('.mobile-nav-modal');
    modal.classList.add("modal-hidden");

    modal.addEventListener('animationend', () => {
        console.log("remove active");
        modal.classList.remove("modal-active");
    }, {
        once: true,
    });

    window.URL = link;
}

// Call the function on page load to display page content based on URL
window.onload = showContentFromHash;
// Call the function on hash change (for back/forward navigation)
window.onhashchange = showContentFromHash;
