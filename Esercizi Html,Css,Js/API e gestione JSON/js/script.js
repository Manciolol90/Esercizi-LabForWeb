document.addEventListener("DOMContentLoaded", function () {
  //  this is the endpoint for the dummy data
  // https://dummyjson.com/products

  const products = document.querySelector(".products");

  const stampaProdotti = (prodotti) => {
    prodotti.forEach((prodotto) => {
      const template = `<div class="product">
          <div class="content">
            <h2>${prodotto.category}</h2>
            <img
              src="${prodotto.images[0]}"
              alt="${prodotto.description}"
            />
            <h3>${prodotto.title}</h3>
            <p>${controlla_brand(prodotto.brand)}</p>
            <p>$ ${prodotto.price}</p>
            <p>In stock: ${prodotto.stock}</p>
          </div>
          <button class="btn button--product">View</button>
        </div>`;
      products.innerHTML += template;
    });

    const modal = document.querySelector(".modal");
    prodotti.forEach((prodotto, index) => {
      const button = document.querySelectorAll(".button--product");
      button[index].addEventListener("click", function () {
        modal.classList.toggle("modal--hidden");
        modal.innerHTML = "";

        modal.innerHTML += `<div class="modal-inner">
        <button class="btn btn--close-modal">
          <i class="fa-solid fa-circle-xmark"></i>
        </button>
        <div class="modal-content">
          <img
            class="modal-image"
            src="${prodotto.images[0]}"
            alt="${prodotto.title}"
          />
          <ul class="list-image">
            ${inietta_immagini(prodotto.images)}
          </ul>
          <div class="modal-text">
            <h2 class="modal-title">${prodotto.title}</h2>
            <p class="modal-price">$ ${prodotto.price}</p>
            <h3 class="modal-title-description">Description:</h3>
            <p class="modal-description">
              ${prodotto.description}
            </p>
            <p class="modal-rating">Rating: ${prodotto.rating}</p>
            <button class="btn btn--add-to-cart">Add to cart</button>
          </div>
        </div>
      </div>`;
      });
    });
    modal.addEventListener("click", function (event) {
      if (event.target.classList.contains("fa-circle-xmark")) {
        modal.classList.toggle("modal--hidden");
      }
    });
  };

  controlla_brand = (brand) => {
    if (brand) {
      return brand;
    } else {
      return " ";
    }
  };

  inietta_immagini = (immagini) => {
    let template = "";
    for (let i = 0; i < immagini.length; i++) {
      template += `<li class="list-image">
              <img
                src="${immagini[i]}"
                alt="image"
              />
            </li>`;
    }
    return template;
  };

  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      stampaProdotti(data.products);
    })
    .catch((error) => console.log(error));
});
