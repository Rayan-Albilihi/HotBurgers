/*show and hide the review */
var a = 1;
const visibleReview = document.getElementById("show_review");
function show_hide() {
  if (a == 1) {
       
   visibleReview.style.display = "Block";
    visibleReview.classList.add(".animation");
    return (a = 0);
  } else {
    visibleReview.style.display = "none";
    return (a = 1);
  }
}
var hide = 1;
/*show and hide the review, discreption */
const visibleRevSec = document.getElementById("revSection");
const visibleDiscSec = document.getElementById("show_Discription_Section");
function show_rev() {
  if (hide == 1) {
       
    visibleRevSec.style.display = "Block";
    visibleDiscSec.style.display = "none";
    return (hide = 0);
  } else {
    visibleDiscSec.style.display = "Block";
    visibleRevSec.style.display = "none";
    return (hide = 1);
  }
}
function show_disc() {
  if (hide == 0) {
    visibleDiscSec.style.display = "Block";
    visibleRevSec.style.display = "none";  
    return (hide = 1);
  } else {
    visibleRevSec.style.display = "Block";
    visibleDiscSec.style.display = "none";
    return (hide = 0);
  }
}




var counter = 0;
var num = 1;
/* for add to card */
const numOfCart = document.getElementById("rec0")

var countNum = (function () {
  
  return function () {
    return (counter = counter + num);
  };
})();

function card() {
  numOfCart.innerHTML = countNum();
}

/* number of counter */


const numOfOrder = document.getElementById("bttn4");

/*for counter plus */

var numPlus = (function () {
  return function () {
    return (num = num + 1);
  };
})();
function plus() {
  numOfOrder.innerHTML = numPlus();
}

/* for counter minus */
var numMinus = (function () {
  return function () {
    if (num >= 2) {
      return (num = num - 1);
    } else {
      return (num = 1);
    }
  };
})();
function minus() {
  numOfOrder.innerHTML = numMinus();
}
/* review section */
const area =document.getElementById("review_textbox");
const counterOfLitters = document.getElementById("numOfLitters");
const textAlert = document.getElementById("errorMessage")

var b =0; 
area.addEventListener("input",function(){
  const countLitt = area.value.length;
  b = countLitt;
  counterOfLitters.textContent = countLitt;

})
function reviewbtn() {
    
  if (b == 0){
    textAlert.style.display = "block";
    
  }else{
    textAlert.style.display = "none";
   
  }
}
/* var bestSandwich = 23.9 ;
var burger = 25.9;
var burgerMeal = 27.5;
var bestDealMeal = 23.9;
var chickenBurger = 19.9;
var Pizza = 28.5;
var totallprice ;
*/
