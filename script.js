const now = new Date(); //get today's date right now
const month = now.getMonth() + 1; //extract month //index 0-11 so needs +1 to count as you would real life
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date = now.getDate(); //extract day
//array of number in words
const ordinalNum = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth",
  "thirteenth",
  "fourteenth",
  "fifteenth",
  "sixteenth",
  "seventeenth",
  "eighteenth",
  "nineteenth",
  "twentieth",
  "twenty-first ",
  "twenty-second ",
  "twenty-third ",
  "twenty-fourth ",
  "twenty-fifth ",
  "twenty-sixth ",
  "twenty-seventh ",
  "twenty-eighth ",
  "twenty-ninth ",
  "thirtieth",
  "thirty-first ",
];
var shortDateNames;
for (let i = 1; i <= date; i++) {
  if (i == 1 || i == 21 || i == 31) {
    shortDateNames = i + "st";
  } else if (i == 2 || i == 22) {
    shortDateNames = i + "nd";
  } else if (i == 3 || i == 23) {
    shortDateNames = i + "rd";
  } else {
    shortDateNames = i + "th";
  }
}
const fullDateNames = ordinalNum[date - 1]; //-1 because index of arrays start at 0
const fullMonthName = monthNames[month - 1]; //-1 because monthNames array index starts at 0
const shortMonthName = monthNames[month - 1].substring(0, 3); //get first 3 letters of monthNames
const fullYear = now.getFullYear(); //extract full year
const shortYear = fullYear % 100; //get last two digits of year
//format hour and minute so that single numbers are followed by 0
var hourComponent = now.getHours();
var minuteComponent = now.getMinutes();
var hourFormat = "";
var minuteFormat = "";
var time;
if (hourComponent < 10) {
  hourFormat = "0" + hourComponent.toString();
} else {
  hourFormat = now.getHours();
}
if (minuteComponent < 10) {
  minuteFormat = "0" + minuteComponent.toString();
} else {
  minuteFormat = now.getMinutes();
}
time = hourFormat + ":" + minuteFormat;

//month components
var monthComponent = document.querySelectorAll(".Month");
monthComponent.forEach((element) => {
  element.innerHTML = month;
});
var fullMonthComponent = document.querySelectorAll(".fullMonth");
fullMonthComponent.forEach((element) => {
  element.innerHTML = fullMonthName;
});
var shortMonthComponent = document.querySelectorAll(".shortMonth");
shortMonthComponent.forEach((element) => {
  element.innerHTML = shortMonthName;
});
//day component
var dayComponent = document.querySelectorAll(".Day");
dayComponent.forEach((element) => {
  element.innerHTML = date;
});
var fullDayComponent = document.querySelectorAll(".fullDay");
fullDayComponent.forEach((element) => {
  element.innerHTML = fullDateNames;
});
var shortDayComponent = document.querySelectorAll(".shortDay");
shortDayComponent.forEach((element) => {
  element.innerHTML = shortDateNames;
});
//year component
var yearComponent = document.querySelectorAll(".Year");
yearComponent.forEach((element) => {
  element.innerHTML = fullYear;
});

var shortyearComponent = document.querySelectorAll(".shortYear");
shortyearComponent.forEach((element) => {
  element.innerHTML = shortYear;
});

var timeComponent = document.querySelectorAll(".Time");
timeComponent.forEach((element) => {
  element.innerHTML = time;
});

//nav-menu div when click display links else display nothing
function showMenu() {
  var nav = document.querySelectorAll(".nav-link");
  nav.forEach((element) => {
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  });
}
// Get the button:
let mybutton = document.getElementById("topbutton");

//when scrolling detected
addEventListener("scroll", (event) => {
  if (window.scrollY > 20) {
    //if scrolled pass current px
    mybutton.style.display = "block"; //displays button to go to top
  } else {
    mybutton.style.display = "none"; //if near top of screen no need to show button
  }
});

// when click scroll to the top of the document
function scrolltotop() {
  window.scrollTo({ top: 0 });
}
