document.getElementById('showMessage').addEventListener('click', function() {
    document.getElementById('message').style.display = 'block';
});
function showTabContent(tabName) {
    var tabsContent = document.querySelectorAll('.tab-content');
    for (var i = 0; i < tabsContent.length; i++) {
        tabsContent[i].style.display = 'none';
    }

    var tabButtons = document.querySelectorAll('.tab-button');
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }

    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
}

var currentTestimonial = 1;
var totalTestimonials = 2;

function nextTestimonial() {
    document.getElementById('testimonial' + currentTestimonial).style.display = 'none';
    currentTestimonial++;
    if (currentTestimonial > totalTestimonials) {
        currentTestimonial = 1;
    }
    document.getElementById('testimonial' + currentTestimonial).style.display = 'block';
}

let pstate = document.querySelector("#pstate")
let pcity = document.querySelector("#pcity")
let pzip = document.querySelector("#pzip")
let pphonenumber = document.querySelector("#pphonenumber")

let tstate = document.querySelector("#tstate")
let tcity = document.querySelector("#tcity")
let tzip = document.querySelector("#tzip")
let tphonenumber = document.querySelector("#tphonenumber")

let sameaspermanent = document.querySelector("#sameaspermanent")
sameaspermanent.addEventListener('change', () => {
        if (sameaspermanent.checked === true) {
            tstate.value = pstate.value;
            tcity.value = pcity.value;
            tzip.value = pzip.value;
            tphonenumber.value = pphonenumber.value;
        } else if (sameaspermanent.checked === false) {
            tstate.value = "";
            tcity.value = "";
            tzip.value = "";
            tphonenumber.value = "";
        }
    })