const API_URL = "https://crudcrud.com/api/0d2fdac2d2aa4217ac8bbf636faaa5d2/products";

fetch(API_URL)
  .then((res) => res.json())
  .then((products) => {
    const container = document.querySelector('.container-api');
    products.forEach((product) => {
      const card = document.createElement('div');
      card.classList.add('card');

      const cardImg = document.createElement('img');
      cardImg.classList.add('card-img');
      cardImg.src = product.gambar;
      
      const cardTitle = document.createElement('h3');
      cardTitle.classList.add('card-title');
      cardTitle.innerHTML = product.nama;

      card.append(cardImg, cardTitle);
      container.appendChild(card);
    })
  });
