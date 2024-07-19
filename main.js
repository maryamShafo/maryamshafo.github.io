
// const hamburger = document.getElementById('hamburger');
// const navLinks = document.getElementById('nav-links');
// const navbar = document.querySelector('.navbar');

//     hamburger.addEventListener('click', () => {
//         navbar.classList.toggle('active');
//     });

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });




