// Hamburger Toggle
const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links');
toggleButton.addEventListener('click', function () {
    for(var i=0; i<navbarLinks.length; i++)
    navbarLinks[i].classList.toggle('active');
});

// Hamburger Toggle
const toggleButton2 = document.getElementsByClassName('navbar-toggle2')[0];
const navbarLinks2 = document.getElementsByClassName('navbar-links2');
toggleButton.addEventListener('click', function () {
    for(var i=0; i<navbarLinks.length; i++)
    navbarLinks[i].classList.toggle('active2');
});
