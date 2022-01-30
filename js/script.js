let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");
let getButtons = (e) => e.preventDefault();
let changeForm = (e) => {
    switchCtn.classList.add("is-gx");
    setTimeout(function() {
        switchCtn.classList.remove("is-gx");
    }, 1500);
    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");
    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
};
let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons);
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm);
};
window.addEventListener("load", mainF);

// progressbar
function progressBar(progressVal, totalPercentageVal = 100) {
    var strokeVal = (4.64 * 100) / totalPercentageVal;
    var x = document.querySelector('.progress-circle-prog');
    x.style.strokeDasharray = progressVal * (strokeVal) + ' 999';
    var el = document.querySelector('.progress-text');
    var from = $('.progress-text').data('progress');
    $('.progress-text').data('progress', progressVal);
    var start = new Date().getTime();

    setTimeout(function() {
        var now = (new Date().getTime()) - start;
        var progress = now / 700;
        el.innerHTML = progressVal / totalPercentageVal * 100 + '%';
        if (progress < 1) setTimeout(arguments.callee, 10);
    }, 10);

}

progressBar(20, 200);

// jqery
$('.plus').on('click', function() {
    $('#addnew').toggleClass('open');
})

// chart js