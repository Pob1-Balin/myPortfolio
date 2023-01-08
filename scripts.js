// For both small, medium and large devices
// NB: Any "console.log(...)" will be for debugging.

// Anytime the document is clicked.
document.onclick = function(ev) {
    // console.log("Stop giving me orders. Here is your request though.")
    // console.log("It's",
    // (ev.target.id !== "dropdown-btn-lg" && ev.target.id !== "langicon-lg" &&  ev.target.id !== "btn-text-lg"), 
    // "that the document's body was clicked just now!");

    // this is for PCS and large devices
    // displays off the langauge options list seen on the screen but not clicked. 
    if (ev.target.id !== "dropdown-btn-lg" && ev.target.id !== "langicon-lg" &&  ev.target.id !== "btn-text-lg") {
        document.getElementById("dropdown-lang-options-lg").classList.remove("drop-lang-active-lg");

    }
    
    // for tablets and mobiles
    // displays off the sidebar and initialises the toggle icon.
    // This is if the sidebar and toggle icon were vissible and the icon crossed respectively :-),
    // but none of them were clicked. :-)
    // Sorry if you did not get my poor english.
    // Just Google "Slidebars how tos" :-).
    if (ev.target.id !=="toggle" && ev.target.id !== "sidebar" &&  ev.target.id !== "dropdown-btn" && ev.target.id !== "langicon" &&  ev.target.id !== "btn-text") {
        document.getElementById("toggle").classList.remove("change");
        document.getElementById("sidebar").classList.remove("active");

    }
};

// load skill levels when user moves mouse over section two
// initialising variables to use here. :-)
// section two itself
var sectionTwo = document.getElementById("about-area");


// function to invoke when user enters section two with mouse
function mouseEntersSectionTwo() {
    sectionTwo.style.transition = "0.4s";
    

}

// function to invoke when user leaves section two with mouse.
function mouseLeavesSectionTwo() {
    // checks if it's still opaque
    // if (getComputedStyle(sectionTwo).opacity.length > 0) {
    //     sectionTwo.style.opacity = "1";
    // }
    
}

// testing effect, when user enters section about 
sectionTwo.onmouseenter = function(ev) {
        // setTimeout(mouseEntersSectionTwo, 1500);

}

// When user leaves section about
sectionTwo.onmouseleave = function(ev) {
    setTimeout(mouseLeavesSectionTwo, 500);
}



// ###############################################################################
// For medium and small devices
// Initialising variables to be used.
// the langauge preference button(LPB), langauge options, english 
// and french options.
var  dropLangBtn = document.getElementById("dropdown-btn");
console.log(dropLangBtn.innerHTML);
var dropdownOptions = document.getElementById("dropdown-lang-options");
var en = document.getElementById("en");
var fr = document.getElementById("fr");

// When the english language option is clicked.
// Changes the LPB text to "English",
// then displays off the showing language options list.
en.onclick = function() {
    var charIndex = 0;
    console.log("You choosed EN", charIndex < dropdownOptions.innerHTML.length);
    document.getElementById("btn-text").innerText = "English";
    dropdownOptions.classList.remove("drop-lang-active");
};

// When the french language option is clicked.
// Changes the LPB text to "French",
// then displays off the showing language options list.
fr.onclick = function() {
    var charIndex = 0;
    console.log("You choosed FR", charIndex < dropdownOptions.innerHTML.length);
    document.getElementById("btn-text").innerText = "French";
    dropdownOptions.classList.remove("drop-lang-active");
};

// When the drop langauge button is clicked.
// Displays on and off the langauge options list.
dropLangBtn.onclick = function() {
    dropdownOptions.classList.toggle("drop-lang-active");
};


// Crosses the toggle icon when clicked.
// Show the side bar too.
// The fades the rest of the document
function cross(x) {
    x.classList.toggle("change");
    document.querySelector("#sidebar").classList.toggle("active");
};


//################################################################################


// ###############################################################################
// For PCs and large devices
// Initialising variables to be used.
// the langauge preference button(LPB), langauge options, english 
// and french options.
var  dropLangBtnLg = document.getElementById("dropdown-btn-lg");
var dropdownOptionsLg = document.getElementById("dropdown-lang-options-lg");
var enLg = document.getElementById("en-lg");
var frLg = document.getElementById("fr-lg");
console.log(dropLangBtnLg);

// When the english language option is clicked.
// Changes the LPB text to "English",
// then displays off the showing language options list.
enLg.onclick = function() {
    var charIndex = 0;
    console.log("You choosed EN", charIndex < dropdownOptionsLg.innerHTML.length);
    document.getElementById("btn-text-lg").innerText = "EN";
    dropdownOptionsLg.classList.remove("drop-lang-active-lg");
};

// When the french language option is clicked.
// Changes the LPB text to "French",
// then displays off the showing language options list.
frLg.onclick = function() {
    var charIndex = 0;
    console.log("You choosed FR", charIndex < dropdownOptionsLg.innerHTML.length);
    document.getElementById("btn-text-lg").innerText = "FR";
    dropdownOptionsLg.classList.remove("drop-lang-active-lg");
};

// When the drop langauge button is clicked.
// Displays on and off the langauge options list.
dropLangBtnLg.onclick = function() {
    console.log("You clicked me sir!")
    dropdownOptionsLg.classList.toggle("drop-lang-active-lg");
};

//#####################################################################################
