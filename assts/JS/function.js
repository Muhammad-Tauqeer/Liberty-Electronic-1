
document.addEventListener("DOMContentLoaded", function () {
    showitem();
  });

  window.onload = function () {
    showitem(); // Page load hone par function call hoga
  };


function showitem() {
  event.preventDefault();
  
  let mobile = {
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
        "https://demothemesky-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/18-768x768.jpg"
    },

    Name: {
      Brand_1: "Samsung Galaxy",
      Brand_2: "Iphone",
      Brand_3: "Realme",
      Brand_4: "Prepaid Phone",
      Brand_5: "Samsung Galaxy",
      Brand_6: "Iphone",
    },
    Description: {
      desc_1: "Samsung Galaxy S23 Ultra, Factory...",
      desc_2: "Apple iPhone 11 Pro, Factory Unlocked...",
      desc_3: "Realme GT 5G, Factory Unlocked...",
      desc_4: "Apple iPhone 14 Pro, Factory Unlocked...",
      desc_5: "Samsung Galaxy S23 Ultra, Factory...",
      desc_6: "Apple iPhone SE 64 GB, Factory Unlocked...",
    },
    Prices: {
      price_1: "$1,499.99",
      price_2: "$999.99",
      price_3: "$699.99",
      price_4: "$719.99",
      price_5: "$1519.99",
      price_6: "$819.99",
    },
  };

  let link = "#";
  let Mobilekey0 = Object.keys(mobile.pics);
  let MobileKeys2 = Object.keys(mobile.Name);
  let MobileKeys3 = Object.keys(mobile.Description);
  let MobileKeys4 = Object.keys(mobile.Prices);

  let html = `<div class="row">`; // start row

  for (let i = 0; i < Mobilekey0.length; i++) {
    let key = Mobilekey0[i];
    let key2 = MobileKeys2[i];
    let key3 = MobileKeys3[i];
    let key4 = MobileKeys4[i];

    html += `
        <style>
.card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  transition: box-shadow 0.3s ease;
  }
  .w{
     width: 320px !important;
  }
     @media only screen and (max-width: 767px){
     .w{
     width: 100% !important;
   
.btn-click-animate {
  transition: transform 0.1s ease, box-shadow 0.2s ease;
}

.btn-click-animate:active {
  transform: scale(0.95);
  box-shadow: 0 0 10px rgba(0,0,0,0.2) inset;
}


  }
  }
</style>


        <div class="col-md-4 mb-4 card-hover ">
            <div class="card h-100">
                <img src="${mobile.pics[key]}" class="card-img-top" alt="...">
                <div class="card-body d-flex flex-column ">
                    <h5 class="card-title">${mobile.Name[key2]}</h5>
                    <p class="card-text">${mobile.Description[key3]}</p>
                    <p class="card-text text-warning">${mobile.Prices[key4]}</p>
                    <a href="${link}" class="btn btn-outline-primary w ">Buy Now</a>
                </div>
            </div>
        </div>
        `;
  }

  html += `</div>`; // end row

  document.getElementById("card-box").innerHTML = html;
}
//////////////////////Laptop Fuction ///////////////////////////////////
function laptopitem() {
  event.preventDefault();
  let mobile = {
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
        "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/03-768x768.jpg"
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
      desc_1: "HP Pavilion 15.6 Laptop, 12th Gen ....",
      desc_2: " Dell Inspiron 14” FHD Laptop, AMD Ryzen 7...",
      desc_3: "Lenovo IdeaPad Slim 3, Intel Core i5 12th Gen....",
      desc_4: "Apple MacBook Air with Apple M1 chip, 8GB RAM....",
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

  let link = "../Pages/cart.html";
  let Mobilekey0 = Object.keys(mobile.pics);
  let MobileKeys2 = Object.keys(mobile.Name);
  let MobileKeys3 = Object.keys(mobile.Description);
  let MobileKeys4 = Object.keys(mobile.Prices);

  let html = `<div class="row">`; // start row

  for (let i = 0; i < Mobilekey0.length; i++) {
    let key = Mobilekey0[i];
    let key2 = MobileKeys2[i];
    let key3 = MobileKeys3[i];
    let key4 = MobileKeys4[i];

    html += `
        <style>
.card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  transition: box-shadow 0.3s ease;
  }
  .w{
     width: 320px !important;
  }
     @media only screen and (max-width: 767px){
     .w{
     width: 100% !important;
  }
     .btn-click-animate {
  transition: transform 0.1s ease, box-shadow 0.2s ease;
}

.btn-click-animate:active {
  transform: scale(0.95);
  box-shadow: 0 0 10px rgba(0,0,0,0.2) inset;
}
  }
</style>


        <div class="col-md-4 mb-4 card-hover ">
            <div class="card h-100">
                <img src="${mobile.pics[key]}" class="card-img-top" alt="...">
                <div class="card-body d-flex flex-column ">
                    <h5 class="card-title">${mobile.Name[key2]}</h5>
                    <p class="card-text">${mobile.Description[key3]}</p>
                    <p class="card-text text-warning">${mobile.Prices[key4]}</p>
                   <a href="${link}" class="btn btn-outline-primary w btn-click-animate">Buy Now</a>

                </div>
            </div>
        </div>
        `;
  }

  html += `</div>`; // end row


  document.getElementById("card-box").innerHTML = html;
}
////////////////////////////////////// Accessrioes ///////////////////////////////
function accessoriesItem() {
  event.preventDefault();
  let accessories = {
    pics: {
      Img_1: "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/83-400x400.jpg",
      Img_2: "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/35-400x400.jpg",
      Img_3: "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/93-768x768.jpg",
      Img_4: "https://m.media-amazon.com/images/I/71O2w5u9ECL._AC_UY327_FMwebp_QL65_.jpg",
      Img_5: "https://m.media-amazon.com/images/I/61c0UMl3MPL._AC_UY327_FMwebp_QL65_.jpg",
      Img_6: "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/71-400x400.jpg"
    },
    Name: {
      Brand_1: "Wireless Earbuds",
      Brand_2: "Bluetooth Speaker",
      Brand_3: "Smartwatch Strap",
      Brand_4: "Phone Holder",
      Brand_5: "USB-C Cable",
      Brand_6: "Gaming Mouse"
    },
    Description: {
      desc_1: "True wireless earbuds with noise cancellation.",
      desc_2: "Portable Bluetooth speaker with deep bass.",
      desc_3: "Silicone strap for smartwatches (universal fit).",
      desc_4: "360° adjustable mobile phone holder.",
      desc_5: "Fast charging USB-C cable 1.5m.",
      desc_6: "RGB wired gaming mouse with 6 buttons."
    },
    Prices: {
      price_1: "$59.99",
      price_2: "$39.99",
      price_3: "$12.99",
      price_4: "$7.99",
      price_5: "$9.99",
      price_6: "$24.99"
    }
  };

  let link = "#";
  let keys = Object.keys(accessories.pics);
  let names = Object.keys(accessories.Name);
  let desc = Object.keys(accessories.Description);
  let prices = Object.keys(accessories.Prices);

  let html = `<div class="row">`;

  for (let i = 0; i < keys.length; i++) {
    html += `
    <style>
.card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  transition: box-shadow 0.3s ease;
}
.w {
  width: 320px !important;
}
@media only screen and (max-width: 767px) {
  .w {
    width: 100% !important;
  }
}
.btn-click-animate {
  transition: transform 0.1s ease, box-shadow 0.2s ease;
}
.btn-click-animate:active {
  transform: scale(0.95);
  box-shadow: 0 0 10px rgba(0,0,0,0.2) inset;
}
</style>

    <div class="col-md-4 mb-4 card-hover">
      <div class="card h-100">
        <img src="${accessories.pics[keys[i]]}" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${accessories.Name[names[i]]}</h5>
          <p class="card-text">${accessories.Description[desc[i]]}</p>
          <p class="card-text text-warning">${accessories.Prices[prices[i]]}</p>
          <a href="${link}" class="btn btn-outline-primary w btn-click-animate">Buy Now</a>
        </div>
      </div>
    </div>
    `;
  }

  html += `</div>`;
  document.getElementById("card-box").innerHTML = html;
}
///////////////////////////// Watch //////////////////////////////////////
function watchItem() {
  event.preventDefault();
  let watch = {
    pics: {
      Img_1: "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/15-768x768.jpg",
      Img_2: "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/14-768x768.jpg",
      Img_3: "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/31-768x768.jpg",
      Img_4: "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/33-768x768.jpg",
      Img_5: "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/24-768x768.jpg",
      Img_6: "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/06-768x768.jpg"
    },
    Name: {
      Brand_1: "Fossil Hybrid Watch",
      Brand_2: "Apple Watch Series 8",
      Brand_3: "Samsung Galaxy Watch",
      Brand_4: "Mi Band 7",
      Brand_5: "Garmin Venu Sq",
      Brand_6: "Fitbit Charge 5"
    },
    Description: {
      desc_1: "Hybrid smartwatch with smart features & long battery.",
      desc_2: "Advanced health features with always-on Retina display.",
      desc_3: "Fitness tracking and smart notifications for Android.",
      desc_4: "Budget fitness tracker with AMOLED display.",
      desc_5: "GPS smartwatch with music, health metrics.",
      desc_6: "Heart rate & sleep tracking with GPS."
    },
    Prices: {
      price_1: "$129.99",
      price_2: "$399.99",
      price_3: "$249.99",
      price_4: "$49.99",
      price_5: "$199.99",
      price_6: "$149.99"
    }
  };

  let link = "#";
  let keys = Object.keys(watch.pics);
  let names = Object.keys(watch.Name);
  let desc = Object.keys(watch.Description);
  let prices = Object.keys(watch.Prices);

  let html = `<div class="row">`;

  for (let i = 0; i < keys.length; i++) {
    html += `
    <style>
.card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  transition: box-shadow 0.3s ease;
}
.w {
  width: 320px !important;
}
@media only screen and (max-width: 767px) {
  .w {
    width: 100% !important;
  }
}
.btn-click-animate {
  transition: transform 0.1s ease, box-shadow 0.2s ease;
}
.btn-click-animate:active {
  transform: scale(0.95);
  box-shadow: 0 0 10px rgba(0,0,0,0.2) inset;
}
</style>

    <div class="col-md-4 mb-4 card-hover">
      <div class="card h-100">
        <img src="${watch.pics[keys[i]]}" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${watch.Name[names[i]]}</h5>
          <p class="card-text">${watch.Description[desc[i]]}</p>
          <p class="card-text text-warning">${watch.Prices[prices[i]]}</p>
          <a href="${link}" class="btn btn-outline-primary w btn-click-animate">Buy Now</a>
        </div>
      </div>
    </div>
    `;
  }

  html += `</div>`;
  document.getElementById("card-box").innerHTML = html;
}


