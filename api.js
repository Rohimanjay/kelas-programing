fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data =>{
     console.log(data.products[0].title)
     data.products.forEach(element => {
        document.getElementById("table-body").innerHTML += `
        <tr>
      <th scope="row">1</th>
      <td>${element.title}</td>
      <td>${element.category}</td>
      <td>${element.price}</td>
    </tr>`
     });
    });
 
    