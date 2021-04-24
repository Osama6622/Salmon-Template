
// Create Sticky Navbar 
window.addEventListener('scroll', () => {

    let header = document.getElementById('header');

    header.classList.toggle('sticky', this.scrollY > 0 );
})


// Active Class On Links 

let myLinks = document.querySelectorAll('.header .nav .links li a');

myLinks.forEach(link => {

    link.addEventListener('click', (ev) => {

        ev.target.querySelectorAll('.active').forEach(ele => {
            ele.classList.remove('active');
        });

        ev.target.classList.add('active');
    });
});
// Menu Function 
function openMenu (ev, menueName) {

    let tabContent = document.getElementsByClassName('tabcontent'),
        tabLinks = document.getElementsByClassName('tablink'),
        i;

    for ( i = 0; i < tabContent.length; i++) {

        tabContent[i].style.display = "none";
    }

    for ( i = 0; i < tabLinks.length; i++) {

        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(menueName).style.display = "block";
    ev.currentTarget.className += " active"
}

// Menu Default Open 
document.getElementById('default-open').click();

// Book A Table Function 

function bookingTable () {

    let bookForm = document.getElementById('book-form'),
        bookBtn = document.getElementById('booking'),
        close = document.getElementById('close');

    bookForm.style.display = "block";

    close.addEventListener('click', () => {
        bookForm.style.display = "none";
    });

    window.onclick = function (ev) {
        if ( ev.target == bookForm ) {
            bookForm.style.display = "none"; 
        }
    }

}