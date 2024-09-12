
var tl = gsap.timeline();
tl.from("#nav h1", { 
  y:-50, 
  ease: "expo.inOut", 
  duration: 2,
});
tl.to("#nav h1", { 
opacity:1,
delay:-2,
  ease: "expo.inOut", 
  duration: 2,
});

tl.from("#nav i", { 
  x:50, 
  delay:-2,
  ease: "expo.inOut", 
  duration: 2,
});
tl.to("#nav i", { 
opacity:1,
delay:-2,
  ease: "expo.inOut", 
  duration: 2,
});



const foodtimer = document.querySelector("#timmer");
const foodrating = document.querySelector("#ratingg");
const foodprice = document.querySelector("#pricee");
const foodname = document.querySelector("#nammes");
const foodimg = document.querySelector("#foodimage");
let fakeimg = window.getComputedStyle(foodimg).backgroundImage;

var food = document.querySelectorAll(".food");
const bt = document.querySelector("#fooddetails");
const icon = document.querySelector(".iconn");
const elements = document.querySelectorAll(".card");

elements.forEach(el => {
  el.addEventListener("click", function() {
    const h5Elements = el.querySelectorAll("h5");
    h5Elements.forEach((h5) => {
      const h5txt = h5.innerHTML;
      foodname.innerHTML = h5txt;
    });

    const ratings = el.querySelectorAll(".ratings");
    ratings.forEach((ratingss) => {
      const ratingvalue = ratingss.innerHTML;
      foodrating.innerHTML = ratingvalue;
    });

    const timer = el.querySelectorAll(".timer");
    timer.forEach((t) => {
      const timevalue = t.innerHTML;
      foodtimer.innerHTML = timevalue;
    });

    const foodprices = el.querySelectorAll(".price");
    foodprices.forEach((pricees) => {
      const foodpricess = pricees.innerHTML;
      foodprice.innerHTML = foodpricess;
    });

    const cardElements = el.querySelectorAll(".food");
    cardElements.forEach((food) => {
      const bgImgUrl = window.getComputedStyle(food).backgroundImage;
      foodimg.style.backgroundImage = bgImgUrl;
      bt.style.width = "100vw";
    });
  });

  el.addEventListener("touchstart", () => el.style.scale = "1.05");
  el.addEventListener("touchend", () => el.style.scale = "1");
});

icon.addEventListener("click", () => 

bt.style.width = "0vw");

const searchInput = document.querySelector('#searchbox input');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  cards.forEach((card) => {
    const cardText = card.textContent.toLowerCase();
    if (cardText.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

var h4 = document.querySelectorAll("h4");
h4.forEach(function(el){
  el.addEventListener("click", function(){
    var newHeading = document.createElement("h2");
    newHeading.innerHTML = el.innerHTML;
    el.parentNode.replaceChild(newHeading, el);
  })
});