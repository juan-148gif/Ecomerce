const iconmenu = document.querySelector('.Btn_Cart');
console.log(iconmenu)

iconmenu.addEventListener("click", function () {
    console.log("Me estas dando click");
});

const contentFoods = document.querySelector(".products__content");

const nav = document.querySelector(".container");


nav.addEventListener("click", function (){
    console.log("vamos bien")
})

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    console.log(x[i].className, c)
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  
  // Hide elements that are not selected
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  const iconmenu2 = document.querySelector('.botonClick');
  const iconmenu22 = document.querySelector('.botonClick2');
  const iconmenu23 = document.querySelector('.botonClick3');

iconmenu2.addEventListener("click", function () {
    var parrafo = document.getElementById('areaContador');
var contador = Number(parrafo.innerHTML);
    console.log("Me estas dando click");
    contador++;
    parrafo.textContent = contador;
});

iconmenu22.addEventListener("click", function () {
    var parrafo = document.getElementById('areaContador');
var contador = Number(parrafo.innerHTML);
    console.log("Me estas dando click");
    contador++;
    parrafo.textContent = contador;
});

iconmenu23.addEventListener("click", function () {
    var parrafo = document.getElementById('areaContador');
var contador = Number(parrafo.innerHTML);
    console.log("Me estas dando click");
    contador++;
    parrafo.textContent = contador;
});
