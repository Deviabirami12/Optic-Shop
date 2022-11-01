// Changing image and number onclick
document.getElementById('lang-select').addEventListener('change', changeFunc);

function changeFunc() {
  var selectBox = document.getElementById('lang-select');
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  if (selectedValue == 'India') {
    document.getElementById('flag-icon').src = 'Images/langicon.png';
    document.getElementById('ph-number').innerHTML = '+91 9838203708';
  } else if (selectedValue == 'UK') {
    document.getElementById('flag-icon').src = 'Images/UK-flag.png';
    document.getElementById('ph-number').innerHTML = '+44 1632 960846';
  } else if (selectedValue == 'Canada') {
    document.getElementById('flag-icon').src = 'Images/canada-flag.png';
    document.getElementById('ph-number').innerHTML = '+1 202 555 0156';
  } else {
    document.getElementById('flag-icon').src = 'Images/german-flag.png';
    document.getElementById('ph-number').innerHTML = '+49-163-5556-667';
  };
}

// -------------------------------------------------------------------------------------------------------------------------


// Adding the sticky navbar
window.onscroll = () => {
  myFunction1(), show_scroller();
};
var navbar = document.getElementById("sticky-section");
var sticky = navbar.offsetTop;

function myFunction1() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("sticky-shadow");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("sticky-shadow");
  }
}

// Scroll to Top 

let scroll = document.getElementById('scroll-btn')

function show_scroller() {
  if (window.pageYOffset > 34) {
    scroll.style.visibility = "visible";
  } else {
    scroll.style.visibility = "hidden";
  }
}
scroll.addEventListener('click', scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}