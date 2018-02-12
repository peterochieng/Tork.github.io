/* NEW ARRIVAL JAVASCRIPR SLIDE STARTS HERE, IN ORDER AS IN THE PAGE LAYOUT  */


/* IMAGE SLIDER FOR CARS  */

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].classList.remove("w3-red");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].classList.add("w3-pale-green");
}

/* ENDS HERE  */




/* IMAGE SLIDER FOR CARS  */

var NextIndex = 1;
ViewDivs(NextIndex);

function nextDivs(n) {
  ViewDivs(NextIndex += n);
}

function ThisDiv(n) {
  ViewDivs(NextIndex = n);
}

function ViewDivs(n) {
  var i;
  var x = document.getElementsByClassName("MySlides");
  var dots = document.getElementsByClassName("Demo");
  if (n > x.length) {NextIndex = 1}    
  if (n < 1) {NextIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].classList.remove("w3-red");
  }
  x[NextIndex-1].style.display = "block";  
  dots[NextIndex-1].classList.add("w3-pale-green");
}

/* ENDS HERE  */






/* IMAGE SLIDER FOR CARS 3RD PIC  */

var firstIndex = 1;
shijnDivs(firstIndex);

function plussignDivs(n) {
  shijnDivs(firstIndex += n);
}

function actueelDiv(n) {
  shijnDivs(firstIndex = n);
}

function shijnDivs(n) {
  var i;
  var x = document.getElementsByClassName("mijnSlides");
  var dots = document.getElementsByClassName("demonstrate");
  if (n > x.length) {firstIndex = 1}    
  if (n < 1) {firstIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].classList.remove("w3-red");
  }
  x[firstIndex-1].style.display = "block";  
  dots[firstIndex-1].classList.add("w3-pale-green");
}

/* ENDS HERE  */





/* IMAGE SLIDER FOR CARS 4TH PIC  */

var eersteIndex = 1;
ShijnDivs(eersteIndex);

function PlussignDivs(n) {
  ShijnDivs(eersteIndex += n);
}

function ActueelDiv(n) {
  ShijnDivs(eersteIndex = n);
}

function ShijnDivs(n) {
  var i;
  var x = document.getElementsByClassName("mineSlides");
  var dots = document.getElementsByClassName("Demonstrate");
  if (n > x.length) {eersteIndex = 1}    
  if (n < 1) {eersteIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].classList.remove("w3-red");
  }
  x[eersteIndex-1].style.display = "block";  
  dots[eersteIndex-1].classList.add("w3-pale-green");
}

/* ENDS HERE  */

/* IMAGE SLIDER FOR CARS 5TH PIC  */

var primaryIndex = 1;
vertoonDivs(primaryIndex);

function extraDivs(n) {
  vertoonDivs(primaryIndex += n);
}

function stroomDiv(n) {
  vertoonDivs(primaryIndex = n);
}

function vertoonDivs(n) {
  var i;
  var x = document.getElementsByClassName("MijnSlides");
  var dots = document.getElementsByClassName("perfom");
  if (n > x.length) {primaryIndex = 1}    
  if (n < 1) {primaryIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].classList.remove("w3-red");
  }
  x[primaryIndex-1].style.display = "block";  
  dots[primaryIndex-1].classList.add("w3-pale-green");
}

/* ENDS HERE 5TH */



/* IMAGE SLIDER FOR CARS 6TH  */

var oneIndex = 1;
VertoonDivs(oneIndex);

function ExtraDivs(n) {
  VertoonDivs(oneIndex += n);
}

function StroomDiv(n) {
  VertoonDivs(oneIndex = n);
}

function VertoonDivs(n) {
  var i;
  var x = document.getElementsByClassName("MineSlides");
  var dots = document.getElementsByClassName("Perfom");
  if (n > x.length) {oneIndex = 1}    
  if (n < 1) {oneIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].classList.remove("w3-red");
  }
  x[oneIndex-1].style.display = "block";  
  dots[oneIndex-1].classList.add("w3-pale-green");
}

/* ENDS HERE 6TH */



/* NEW ARRIVAL JAVASCRIPT SLIDE ENDS HERE  */



