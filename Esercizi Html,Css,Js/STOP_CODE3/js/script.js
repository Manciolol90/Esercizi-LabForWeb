const printProducts = (products, container) => {
  products.forEach((product) => {
    const templateCard = `<div class="product">
          <div class="content">
            <h2>${product.category}</h2>
            <img
              src="${product.images[0]}"
              alt="${product.title}"
            />
            <h3>${product.title}</h3>
            <p>${product.brand}</p>
            <p>$ ${product.price}</p>
            <p>In stock: ${product.stock}</p>
          </div>
          <button data-id="${product.id}" class="btn button--product">View</button>
        </div> `
    
    container.innerHTML += templateCard;
  });
}

const addListenerToButtons = (
  buttons,
  modal,
  modalImage,
  ulImages,
  modalTitle,
  modalPrice,
  modalDescription,
  modalRating
) => {
  buttons.forEach((button) => {
    button.addEventListener('click', async function () {
      ulImages.innerHTML = ''
      const id = this.getAttribute('data-id');
      
      const response = await fetch(`https://dummyjson.com/products/${id}`)
      const product = await response.json()
      
      modalImage.src = product.images[0];
      modalTitle.innerHTML = product.title;
      modalDescription.innerHTML = product.description;
      modalPrice.innerHTML = product.price;
      modalRating.innerHTML = product.rating;
      
      product.images.forEach((image) => {
        ulImages.innerHTML += `<li><img
                src="${image}"
                alt="image"
              /></li>`
      })

      modal.classList.remove('modal--hidden');
    })
  })
}


async function getProduct() {
  let response;
  let data;
  
  try {
    response = await fetch('https://dummyjson.com/products');
    data = await response.json();
  } catch (error) {
    console.log(error)
  }
  
  const products = data.products;

  const containerProducts = document.querySelector('.products');
  const modal = document.querySelector('.modal');
  const modalImage = document.querySelector('.modal-image');
  const ulImages = document.querySelector('.list-image');
  const modalTitle = document.querySelector('.modal-title');
  const modalPrice = document.querySelector('.modal-price');
  const modalDescription = document.querySelector('.modal-description');
  const modalRating = document.querySelector('.modal-rating');
  const close = document.querySelector('.btn--close-modal');

  printProducts(products, containerProducts);

  const buttons = document.querySelectorAll('.button--product');

  addListenerToButtons(
    buttons,
    modal,
    modalImage,
    ulImages,
    modalTitle,
    modalPrice,
    modalDescription,
    modalRating
  );

  close.addEventListener('click', function () {
     modal.classList.add('modal--hidden');
  })
}


document.addEventListener(('DOMContentLoaded'), function () {
  //  this is the endpoint for the dummy data
  // https://dummyjson.com/products
  // fetch('https://dummyjson.com/products')
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.log(error));

  getProduct()
});

