fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {
    data.products.forEach((element) => {
        document.getElementById("productContainer").innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${element.images}" class="card-img-top" alt="${element.title}">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">${element.description}</p>
    <p class="card-text">Price: $${element.price}</p>
    <p class="card-text">Category: ${element.category}</p>
    <p class="card-text">Brand: ${element.brand}</p>
    <p class="card-text">Rating: ${element.rating}</p>
    <p class="card-text">Stock: ${element.stock}</p>
    <p class="card-text">Discount Percentage: ${element.discountPercentage}%</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

    });
  });