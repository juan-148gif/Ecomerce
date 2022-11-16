
const iconmenu = document.querySelector('.Btn_Cart');


iconmenu.addEventListener("click", function () {
    console.log("Me estas dando click");
});


const iconMenu = document.querySelector(".botones");
const menu = document.querySelector(".menu-ham");
const contentCartShopItems = document.querySelector(".cart-container");
const contentCartShopTotal = document.querySelector(".contentCartShop__total");
const tienda = document.querySelector('.tienda');
     




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


//****************************************



tienda.addEventListener('click', ()=>{
  contentCartShopItems.classList.toggle('show-cart')
})


/*--------- objeto del inventario------------ */ 
let objectClothes = [
  
  {
    id: 1,
    name: "Hoodies",
    stock: 10,
    price: 14.00,
    imagen: "./src/candado_files/featured1.png"
  } ,
  {
    id: 2,
    name: "Shirt",
    stock: 10,
    price: 24.00,
    imagen: "./src/candado_files/featured2.png",
  }, 
  {
    id: 3,
    name: "Sweatshirts",
    stock: 10,
    price: 24.00,
    imagen: "./src/candado_files/featured3.png"
  } 
  
];


function printTotal() {
  const arrayCartShop = Object.values(objCartShop);

  if (!arrayCartShop.length)
      return (contentCartShopTotal.innerHTML = `<h3>Carrito vacio</h3>`);

  let total = arrayCartShop.reduce((acum, curr) => {
      acum += curr.price * curr.amount;
      return acum;
  }, 0);

  contentCartShopTotal.innerHTML = `
      <h3>${total}</h3>
      <button class="btn btn__buy">Comprar</button>
  `;
}


/*--------pintando el inventario en el dom------- */

const productsContent = document.querySelector('.products__content');

let html = ``;
function printContent(){
  
  objectClothes.forEach(({id,name,stock,price,imagen})=>{
   

      html += `
      <article class="target_hoodies hoodies filterDiv">
        <div class="figure">
          <img src="${imagen}" class="products__img">
        </div>

        <div class="info_sale">
          <h2 class="sale_products"> ${price} <span class="letter">| Stock: ${stock}</span></h2>
          <h3 class="name_sale">${name}</h3>

          <button class="button Button_up btn_add" id="${id}" >
            <i class="bx bx-plus btn_add" id="${id}"></i>
          </button>
        </div>
    </article>
      `
  
    })
}
 

printContent();
productsContent.innerHTML = html;

/*------------pintando el en el carro--------------- */

let objCartShop = {};
 const containerPorductCartShop = document.querySelector('.container-porduct-cart-shop')


 
function printCartShop(){
  let html = ``

  const arrayCartShop = Object.values(objCartShop);

  arrayCartShop.forEach(({id,name,ammout,price,imagen,stock}) =>{
    html += `
    <div class="card-product-shop">
      <div class="box-img">
          <img id="img-shop" src=${imagen} alt="${name}">
      </div>
      <div class="product-data">
        <p class="name-product">${name}</p>
        <p class="data-price">Stock: ${stock} |$ ${price} </p>
        <p class="data-price">Subtotal:$ ${ammout*price} </p>
        <div class="all-btn-shop">
          <div class="btn-add-rest">
            <p class="unid">${ammout} unid </p>
            <button class="rest" id="${id}">restar</button>
            <button class="btn_add" id="${id}">agregar</button>
            <button class="delete" id="${id}">eliminar</button>
          </div> 
        </div>
          
      </div>   
    </div>
    `
  });
  containerPorductCartShop.innerHTML = html;
  printTotal()
}

productsContent.addEventListener('click',(e)=>{
  if(e.target.classList.contains("btn_add")){
    const idclothe = Number(e.target.id)

    const current = objectClothes.find((objet) => objet.id === idclothe );

    if(objCartShop[current.id]){
      objCartShop[current.id].ammout++
    }else{
      objCartShop[current.id] =  { ...current };
      objCartShop[current.id].ammout = 1;
    }
    printCartShop();
  }
})



function countProduct() {
    const arrayCartShop = Object.values(objCartShop);

    let suma = arrayCartShop.reduce((acum, curr) => {
        acum += curr.amount;
        return acum;
    }, 0);

    countFood.textContent = suma;
}

function addFood(idclothe) {
  const current = objectClothes.find((objet) => objet.id === idclothe);

  if (current.stock === objCartShop[idclothe].amount)
     
  return alert("No hay mas productos en el stock");

  objCartShop[current.id].amount++;
}

function deletefood(idclothe) {
  const op = confirm("Seguro que quieres eliminar?");

  if (op) {
      delete objCartShop[idclothe];
  }
}



contentCartShopItems.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn_add")) {
      const idclothe = Number(e.target.id);
      addFood(idclothe);
  }


  if (e.target.classList.contains("rest")) {
      const idclothe = Number(e.target.id);

      if (objCartShop[idclothe].amount === 1) {
          deletefood(idclothe);
      } else {
          objCartShop[idclothe].amount--;
      }
  }

  if (e.target.classList.contains("delete")) {
      const idclothe = Number(e.target.id);

      deletefood(idclothe);
  }

  printCartShop();
});