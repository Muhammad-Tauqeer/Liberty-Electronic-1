function showserchbar() {
  const container = document.getElementById("searchbar");

  if (container.innerHTML.trim() === "") {
    // Show the search bar
    const html = `
      <div class="col-12 col-lg-9 d-flex justify-content-center">
       <input
        type="text"
        id="productSearch"
        class="form-control border border-success"
        placeholder="Search Products..."
        onkeyup="filterCards()" />
        <button class="btn btn-success" onclick="breadcrume_output()">Search</button>
      </div>`;
    container.innerHTML = html;
  } else {
    // Hide the search bar
    container.innerHTML = "";
  }
}
showserchbar();

function breadcrume_output() {
  let searchbarinput = document.getElementById("productSearch").value;
  document.getElementById("serchoutput").innerHTML = searchbarinput;
}

let mobiles = {
  pics: {
    Img_1:
      "https://demothemesky-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/119-768x768.jpg",
    Img_2:
      "https://demothemesky-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/112-768x768.jpg",
    Img_3:
      "https://image01.realme.net/general/20241112/17313948173174aaed907bb0a41258452468fb829cc4c.png.webp?width=1080&height=1080&size=799895",
    Img_4:
      "https://demothemesky-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/21-768x768.jpg",
    Img_5:
      "https://demothemesky-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/120-768x768.jpg",
    Img_6:
      "https://demothemesky-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/18-768x768.jpg",
    Img_7:
      "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/17-400x400.jpg",
  },

  Name: {
    Brand_1: "Samsung Galaxy",
    Brand_2: "Iphone",
    Brand_3: "Realme",
    Brand_4: "Prepaid Phone",
    Brand_5: "Samsung Galaxy",
    Brand_6: "Iphone",
    Brand_7: "Iphone",
  },
  Description: {
    desc_1: "Samsung Galaxy S23 Ultra, Factory...",
    desc_2: "Apple iPhone 11 Pro, Factory Unlocked...",
    desc_3: "Realme GT 5G, Factory Unlocked...",
    desc_4: "Apple iPhone 14 Pro, Factory Unlocked...",
    desc_5: "Samsung Galaxy S23 Ultra, Factory...",
    desc_6: "Apple iPhone SE 64 GB, Factory Unlocked...",
    desc_7: "Iphone 15 Pro Max , 8 GB RAM, 512 GB ...",
  },
  Prices: {
    price_1: "$1,499.99",
    price_2: "$999.99",
    price_3: "$699.99",
    price_4: "$719.99",
    price_5: "$1519.99",
    price_6: "$819.99",
    price_7: "$1,499.99",
  },
};

let Laptop = {
  pics: {
    Img_1:
      "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/04-768x768.jpg",
    Img_2:
      "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/77-768x768.jpg",
    Img_3:
      "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/01-768x768.jpg",
    Img_4:
      "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/79-768x768.jpg",
    Img_5:
      "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/76-768x768.jpg",
    Img_6:
      "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/03-768x768.jpg",
  },

  Name: {
    Brand_1: "HP Pavilion 15",
    Brand_2: "Dell Inspiron 14",
    Brand_3: "Lenovo IdeaPad Slim 3",
    Brand_4: "Apple MacBook Air M1",
    Brand_5: "ASUS VivoBook 15",
    Brand_6: "Acer Aspire 5",
  },
  Description: {
    desc_1:
      "HP Pavilion 15.6 Laptop – Stylish and powerful with 12th Gen Intel Core processor for smooth multitasking Enjoy vibrant Full HD display, fast SSD storage, and long battery life in a sleek design.",
    desc_2:
      " Dell Inspiron 14 FHD Laptop – Powered by AMD Ryzen 7 for fast performance and smooth multitasking. Compact design with vibrant 14” Full HD display, fast SSD storage, and long battery backup.",
    desc_3:
      "Lenovo IdeaPad Slim 3 – Powered by Intel Core i5 12th Gen, ensuring smooth multitasking and efficient performance. Boasts a crisp 14″ Full HD display, fast SSD storage, and a slim, lightweight build—ideal for work or study on the move.",
    desc_4: "Apple MacBook Air M1 – Supercharged by Apple’s M1 chip for blazing-fast performance and all-day battery life. Ultralight, fanless design with a stunning 13.3 Retina display—perfect for work, creativity, and entertainment.",
    desc_5: " ASUS VivoBook 15.6” FHD, Intel Core i3 11th Gen ....",
    desc_6: "Acer Aspire 5 A515, AMD Ryzen 5, 8GB RAM...",
  },
  Prices: {
    price_1: "$749.99",
    price_2: "$689.99",
    price_3: "$599.99",
    price_4: "$999.99",
    price_5: "$449.99",
    price_6: "$522.99",
  },
};
function filterCards() {
  let searchQuery = document
    .getElementById("productSearch")
    .value.toLowerCase();
  let output = document.getElementById("serchoutput2");

  let matchedResults = [];

  for (let key in mobiles.Name) {
    if (mobiles.Name[key].toLowerCase().includes(searchQuery)) {
      matchedResults.push({
        name: mobiles.Name[key],
        description: mobiles.Description["desc_" + key.split("_")[1]],
        price: mobiles.Prices["price_" + key.split("_")[1]],
        image: mobiles.pics["Img_" + key.split("_")[1]],
      });
    }
  }
  for (let key in Laptop.Name) {
    if (Laptop.Name[key].toLowerCase().includes(searchQuery)) {
      matchedResults.push({
        name: Laptop.Name[key],
        description: Laptop.Description["desc_" + key.split("_")[1]],
        price: Laptop.Prices["price_" + key.split("_")[1]],
        image: Laptop.pics["Img_" + key.split("_")[1]],
      });
    }
  }

  if (matchedResults.length > 0) {
    output.innerHTML = matchedResults
      .map(
        (item) =>
         
          ` 
          <div class="card mb-3 w-75">
         <a href="#" class="text-decoration-none text-">
  <div class="row g-0">
    <div class="col-md-3">
      <img src="${item.image}" class="img-fluid rounded-start" alt="${item.name}">
    </div>
    <div class="col-md-9 d-flex flex-column gap-5">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
        <p class="card-text"><strong class="text-body-secondary">${item.price}</strong></p>
        <button class="btn btn-success">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
</a>
`
      )
      .join("");
  } else {
    output.innerHTML = "<p>No matching products found.</p>";
  }
}
