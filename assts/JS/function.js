document.addEventListener("DOMContentLoaded", function () {
  showitem();
});

window.onload = function () {
  showitem(); // Page load hone par function call hoga
};
document.addEventListener("DOMContentLoaded", function () {
  AppleItem();
});

window.onload = function () {
  AppleItem(); // Page load hone par function call hoga
};

/////////////////////////////////// create link /////////////////////////////////////////
let itemlink = {
  mobilelink: {},
  laptoplink: {},
  watchlink: {},
  accessorieslink: {},
  applelinks: {},
  smasunglinks: {},
  delllinks: {},
  hplinks: {},
  sonylinks: {},
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
        "https://demothemesky-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/18-768x768.jpg",
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
    function: {
      function_1: "f1()",
      function_2: "f2()",
      function_3: "f3()",
      function_4: "f4()",
      function_5: "f5()",
      function_6: "f6()",
    },
  };

  let link = "#";
  let Mobilekey0 = Object.keys(mobile.pics);
  let MobileKeys2 = Object.keys(mobile.Name);
  let MobileKeys3 = Object.keys(mobile.Description);
  let MobileKeys4 = Object.keys(mobile.Prices);
  let fuctionkeys5 = Object.keys(mobile.function);

  let html = `<div class="row">`; // start row

  for (let i = 0; i < Mobilekey0.length; i++) {
    let key = Mobilekey0[i];
    let key2 = MobileKeys2[i];
    let key3 = MobileKeys3[i];
    let key4 = MobileKeys4[i];
    let key5 = fuctionkeys5[i];

    html += `
       <style>
  .hover-3 {
    transition: all 0.3s ease-in-out;
  }
  .hover-3:hover,
  .icon {
    transform: scale(1.1);
  }
</style>
<div class="col-md-4 mb-4">
  <div class="card h-100">
    <img
      src="${mobile.pics[key]}"
      class="card-img-top"
      alt="Sony Product" />
    <div class="card-body d-flex flex-column bg-dark">
      <h5 class="card-title text-white">${mobile.Name[key2]}</h5>
      <p class="card-text text-white">${mobile.Description[key3]}</p>
      <p class="card-text text-warning">${mobile.Prices[key4]}</p>
      <div class="row d-flex justify-content-center flex-row container gap-2">
        <a href="#" class="btn col-3 btn-primary hover-3">
          <i class="bi bi-arrows-angle-contract"></i>
        </a>
        <button class="btn col-3 btn-primary hover-3" id="likeBtn">
          <i class="bi bi-heart" id="heartIcon"></i>
        </button>
       <button onclick="addToCart(${i})" class="btn col-3 btn-primary hover-3">
  <i class="bi bi-cart-check"></i>
</button>
      </div>
    </div>
  </div>
</div>
`;
  }

  html += `</div>`; // end row

  document.getElementById("card-box").innerHTML = html;
}
function addToCart(index){
  alert("Item Added to cart")
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
  .hover-3 {
    transition: all 0.3s ease-in-out;
  }
  .hover-3:hover,
  .icon {
    transform: scale(1.1);
  }
</style>
<div class="col-md-4 mb-4">
  <div class="card h-100">
    <img
      src="${mobile.pics[key]}"
      class="card-img-top"
      alt="Sony Product" />
    <div class="card-body d-flex flex-column bg-dark">
      <h5 class="card-title text-white">${mobile.Name[key2]}</h5>
      <p class="card-text text-white">${mobile.Description[key3]}</p>
      <p class="card-text text-warning">${mobile.Prices[key4]}</p>
      <div class="row d-flex justify-content-center flex-row container gap-2">
        <a href="#" class="btn col-3 btn-primary hover-3">
          <i class="bi bi-arrows-angle-contract"></i>
        </a>
        <button class="btn col-3 btn-primary hover-3" id="likeBtn">
          <i class="bi bi-heart" id="heartIcon"></i>
        </button>
        <a href="#" onclick="addToCart(${i})" class="btn col-3 btn-primary hover-3">
          <i class="bi bi-cart-check"></i>
        </a>
      </div>
    </div>
  </div>
</div>
`;
  }

  html += `</div>`; // end row

  document.getElementById("card-box").innerHTML = html;
}
////////////////////////////////////// Accessrioes ///////////////////////////////
function accessoriesItem(event) {
  event.preventDefault();

  let accessories = {
    pics: {
      Img_1:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/83-400x400.jpg",
      Img_2:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/35-400x400.jpg",
      Img_3:
        "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/93-768x768.jpg",
      Img_4:
        "https://m.media-amazon.com/images/I/71O2w5u9ECL._AC_UY327_FMwebp_QL65_.jpg",
      Img_5:
        "https://m.media-amazon.com/images/I/61c0UMl3MPL._AC_UY327_FMwebp_QL65_.jpg",
      Img_6:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/71-400x400.jpg",
    },
    Name: {
      Brand_1: "Wireless Earbuds",
      Brand_2: "Bluetooth Speaker",
      Brand_3: "Smartwatch Strap",
      Brand_4: "Phone Holder",
      Brand_5: "USB-C Cable",
      Brand_6: "Gaming Mouse",
    },
    Description: {
      desc_1: "True wireless earbuds with noise cancellation.",
      desc_2: "Portable Bluetooth speaker with deep bass.",
      desc_3: "Silicone strap for smartwatches (universal fit).",
      desc_4: "360° adjustable mobile phone holder.",
      desc_5: "Fast charging USB-C cable 1.5m.",
      desc_6: "RGB wired gaming mouse with 6 buttons.",
    },
    Prices: {
      price_1: "$59.99",
      price_2: "$39.99",
      price_3: "$12.99",
      price_4: "$7.99",
      price_5: "$9.99",
      price_6: "$24.99",
    },
  };

  let keys = Object.keys(accessories.pics);
  let names = Object.keys(accessories.Name);
  let desc = Object.keys(accessories.Description);
  let prices = Object.keys(accessories.Prices);

  let html = `
  <style>
    .hover-3 {
      transition: all 0.3s ease-in-out;
    }
    .hover-3:hover,
    .icon {
      transform: scale(1.1);
    }
  </style>
  <div class="row">
  `;

  for (let i = 0; i < keys.length; i++) {
    html += `
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <img
          src="${accessories.pics[keys[i]]}"
          class="card-img-top"
          alt="${accessories.Name[names[i]]}" />
        <div class="card-body d-flex flex-column bg-dark">
          <h5 class="card-title text-white">${accessories.Name[names[i]]}</h5>
          <p class="card-text text-white">${
            accessories.Description[desc[i]]
          }</p>
          <p class="card-text text-warning">${accessories.Prices[prices[i]]}</p>
          <div class="row d-flex justify-content-center flex-row container gap-2">
            <a href="#" class="btn col-3 btn-primary hover-3">
              <i class="bi bi-arrows-angle-contract"></i>
            </a>
            <button class="btn col-3 btn-primary hover-3" id="likeBtn">
              <i class="bi bi-heart" id="heartIcon"></i>
            </button>
            <a href="#" onclick="addToCart(${i})" class="btn col-3 btn-primary hover-3">
              <i class="bi bi-cart-check"></i>
            </a>
          </div>
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
      Img_1:
        "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/15-768x768.jpg",
      Img_2:
        "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/14-768x768.jpg",
      Img_3:
        "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/31-768x768.jpg",
      Img_4:
        "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/33-768x768.jpg",
      Img_5:
        "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/24-768x768.jpg",
      Img_6:
        "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/06-768x768.jpg",
    },
    Name: {
      Brand_1: "Fossil Hybrid Watch",
      Brand_2: "Apple Watch Series 8",
      Brand_3: "Samsung Galaxy Watch",
      Brand_4: "Mi Band 7",
      Brand_5: "Garmin Venu Sq",
      Brand_6: "Fitbit Charge 5",
    },
    Description: {
      desc_1: "Hybrid smartwatch with smart features & long battery.",
      desc_2: "Advanced health features with always-on Retina display.",
      desc_3: "Fitness tracking and smart notifications for Android.",
      desc_4: "Budget fitness tracker with AMOLED display.",
      desc_5: "GPS smartwatch with music, health metrics.",
      desc_6: "Heart rate & sleep tracking with GPS.",
    },
    Prices: {
      price_1: "$129.99",
      price_2: "$399.99",
      price_3: "$249.99",
      price_4: "$49.99",
      price_5: "$199.99",
      price_6: "$149.99",
    },
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
  .hover-3 {
    transition: all 0.3s ease-in-out;
  }
  .hover-3:hover,
  .icon {
    transform: scale(1.1);
  }
</style>
<div class="col-md-4 mb-4">
  <div class="card h-100">
    <img
      src="${watch.pics[keys[i]]}"
      class="card-img-top"
      alt="Sony Product" />
    <div class="card-body d-flex flex-column bg-dark">
      <h5 class="card-title text-white">${watch.Name[names[i]]}</h5>
      <p class="card-text text-white">${watch.Description[desc[i]]}</p>
      <p class="card-text text-warning">${watch.Prices[prices[i]]}</p>
      <div class="row d-flex justify-content-center flex-row container gap-2">
        <a href="#" class="btn col-3 btn-primary hover-3">
          <i class="bi bi-arrows-angle-contract"></i>
        </a>
        <button class="btn col-3 btn-primary hover-3" id="likeBtn">
          <i class="bi bi-heart" id="heartIcon"></i>
        </button>
        <a href="#" onclick="addToCart(${i})" class="btn col-3 btn-primary hover-3">
          <i class="bi bi-cart-check"></i>
        </a>
      </div>
    </div>
  </div>
</div>
`;
  }

  html += `</div>`;
  document.getElementById("card-box").innerHTML = html;
}
///////////////////////////////////IMG SHOWASE CLICK ///////////////////////////////////
document.getElementById("clickable-img").addEventListener("click", function () {
  alert("Image clicked!");
});
///////////////////////////////////////Brand Filter ////////////////////////////////
///////////////////Apple////////////////////
function AppleItem() {
  event.preventDefault();

  let mobile = {
    pics: {
      Img_1:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/17-400x400.jpg",
      Img_2:
        "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/mba_13_m3_2024_hero.png",
      Img_3:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/127.jpg",
      Img_4:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/15-400x400.jpg",
      Img_5:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/27-400x400.jpg",
      Img_6:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/136.jpg",
    },

    Name: {
      Brand_1: "Iphone",
      Brand_2: "MacBook",
      Brand_3: "iPad",
      Brand_4: "Apple Wacth",
      Brand_5: "AirPods Pro",
      Brand_6: "Apple TV",
    },
    Description: {
      desc_1: "Iphone 15 Pro Max , 8 GB RAM, 512 GB Storage...",
      desc_2: "The Apple MacBook Air M3 (2024) is a sleek  ..",
      desc_3: "iPad Pro 12.9-inch (6th Generation) Apple's ...",
      desc_4: "The Apple Watch Series 9 is Apple's latest smartwatch, ...",
      desc_5:
        "Apple – AirPods PRO with Magsafe Charging Case – White  2 day Battery ......",
      desc_6: " Apple QLED Tivi 4K Samsung 55Q60B 55 inch Smart TV ......",
    },
    Prices: {
      price_1: "$1,499.99",
      price_2: "$1999.99",
      price_3: "$1,148.80",
      price_4: "$950.00",
      price_5: "$200.00",
      price_6: "$549.99",
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
                    <a href="${link}" class="btn btn-outline-primary  ">Buy Now</a>
                </div>
            </div>
        </div>
        `;
  }

  html += `</div>`; // end row

  document.getElementById("card-box-1").innerHTML = html;
}
function SonyItem() {
  event.preventDefault();

  let sony = {
    pics: {
      Img_1:
        "https://m.media-amazon.com/images/I/51IpPUNKagL._AC_UY327_FMwebp_QL65_.jpg", // Sony Bravia TV
      Img_2:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/96.jpg", // PS5
      Img_3:
        "https://sp.yimg.com/ib/th?id=OPHS.w0RhglH9FMIYiw474C474&o=5&pid=21.1&w=174&h=174", // WH-1000XM5
      Img_4:
        "https://sp.yimg.com/ib/th?id=OIP.oPJgVtdequRhQ8PwM3T5vgHaLZ&pid=Api&w=148&h=148&c=7&dpr=2&rs=1", // Xperia 1 V
      Img_5:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/43-400x400.jpg", // Soundbar
      Img_6:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/90-400x400.jpg", // Alpha A7 IV
    },

    Name: {
      Brand_1: "Sony Bravia 4K TV",
      Brand_2: "Sony PlayStation 5",
      Brand_3: "Sony WH-1000XM5",
      Brand_4: "Sony Xperia 1 V",
      Brand_5: "Sony Soundbar",
      Brand_6: "Sony Alpha A7 IV",
    },

    Description: {
      desc_1:
        "Sony Bravia 55-inch 4K UHD Smart Google TV with vibrant display and smart features.",
      desc_2: "Sony PlayStation 5 – Next-gen console..",
      desc_3: "Sony WH-1000XM5 Wireless Noise.",
      desc_4:
        "Sony Xperia 1 V – 6.5-inch OLED, 4K HDR display, triple camera setup.",
      desc_5:
        "Sony 5.1 Channel Soundbar with Subwoofer – Immersive audio for ..",
      desc_6:
        "Sony Alpha A7 IV – Full-frame mirrorless camera with 33MP sensor and 4K video.",
    },

    Prices: {
      price_1: "$899.99",
      price_2: "$499.99",
      price_3: "$348.00",
      price_4: "$1,199.99",
      price_5: "$279.99",
      price_6: "$2,498.00",
    },
  };

  let link = "#";
  let keys = Object.keys(sony.pics);
  let nameKeys = Object.keys(sony.Name);
  let descKeys = Object.keys(sony.Description);
  let priceKeys = Object.keys(sony.Prices);

  let html = `<div class="row">`;

  for (let i = 0; i < keys.length; i++) {
    html += `
      <style>
      .hover-3 {
        transition: all 0.3s ease-in-out;
      }
      .hover-3:hover,
      .icon {
        transform: scale(1.1);
        
      }
    </style>
      <div class="col-md-4 mb-4">
        <div class="card h-100 bg-dark">
          <img
            src="${sony.pics[keys[i]]}"
            class="card-img-top"
            alt="Sony Product" />
          <div class="card-body d-flex flex-column bg-dark">
            <h5 class="card-title text-white">${sony.Name[nameKeys[i]]}</h5>
            <p class="card-text text-white">
             ${sony.Description[descKeys[i]]}
            </p>
            <p class="card-text text-warning"> ${sony.Prices[priceKeys[i]]}</p>
            <div
              class="row d-flex justify-content-center flex-row container gap-2">
              <a href="" class="btn col-3 btn-primary hover-3">
                <i class="bi bi-arrows-angle-contract"></i>
              </a>
              <button href="" class="btn col-3 btn-primary hover-3" id="likeBtn">
                <i class="bi bi-heart" id="heartIcon"></i>
              </button>
              <a href="" onclick="addToCart(${i})" class="btn col-3 btn-primary hover-3">
                <i class="bi bi-cart-check"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

    `;
  }

  html += `</div>`;
  document.getElementById("card-box-1").innerHTML = html;
}
///////////////////Apple////////////////////
function AppleItem() {
  event.preventDefault();

  let mobile = {
    pics: {
      Img_1:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/17-400x400.jpg",
      Img_2:
        "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/mba_13_m3_2024_hero.png",
      Img_3:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/127.jpg",
      Img_4:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/15-400x400.jpg",
      Img_5:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/27-400x400.jpg",
      Img_6:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/136.jpg",
    },

    Name: {
      Brand_1: "Iphone",
      Brand_2: "MacBook",
      Brand_3: "iPad",
      Brand_4: "Apple Wacth",
      Brand_5: "AirPods Pro",
      Brand_6: "Apple TV",
    },
    Description: {
      desc_1: "Iphone 15 Pro Max , 8 GB RAM, 512 GB ...",
      desc_2: "The Apple MacBook Air M3 (2024) is a sleek  ..",
      desc_3: "iPad Pro 12.9-inch (6th Generation) Apple's ...",
      desc_4: "The Apple Watch Series 9 is Apple's latest smartwatch, ...",
      desc_5:
        "Apple – AirPods PRO with Magsafe Charging Case – White  2 day Battery ......",
      desc_6: " Apple QLED Tivi 4K Samsung 55Q60B 55 inch Smart TV ......",
    },
    Prices: {
      price_1: "$1,499.99",
      price_2: "$1999.99",
      price_3: "$1,148.80",
      price_4: "$950.00",
      price_5: "$200.00",
      price_6: "$549.99",
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
      .hover-3 {
        transition: all 0.3s ease-in-out;
      }
      .hover-3:hover,
      .icon {
        transform: scale(1.1);
        
      }
    </style>
      <div class="col-md-4 mb-4">
        <div class="card h-100 ">
          <img
            src="${mobile.pics[key]}"
            class="card-img-top"
            alt="Sony Product" />
          <div class="card-body d-flex flex-column bg-dark">
            <h5 class="card-title text-white">${mobile.Name[key2]}</h5>
            <p class="card-text text-white">
             ${mobile.Description[key3]}
            </p>
            <p class="card-text text-warning"> ${mobile.Prices[key4]}</p>
            <div
              class="row d-flex justify-content-center flex-row container gap-2">
              <a href="" class="btn col-3 btn-primary hover-3">
                <i class="bi bi-arrows-angle-contract"></i>
              </a>
              <button href="" class="btn col-3 btn-primary hover-3" id="likeBtn">
                <i class="bi bi-heart" id="heartIcon"></i>
              </button>
              <a href="" onclick="addToCart(${i})" class="btn col-3 btn-primary hover-3">
                <i class="bi bi-cart-check"></i>
              </a>
            </div>
          </div>
        </div>
      </div>


        `;
  }

  html += `</div>`; // end row

  document.getElementById("card-box-1").innerHTML = html;
}
function SamsungItem() {
  event.preventDefault();

  let sony = {
    pics: {
      Img_1:
        "https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/f90ad0a9-c22d-40f4-bd56-d23c8780927e-1_31af5b39-cce7-4586-bb3e-b0a186a9824f.jpg", //Samsung S24 Ultra
      Img_2:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/48-400x400.jpg", // QLED 8K Samsung
      Img_3:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/22-400x400.jpg", // Tablets
      Img_4:
        "https://demo.theme-sky.com/ecomall/wp-content/uploads/2023/03/31-768x768.jpg", // Xperia 1 V
      Img_5:
        "https://img.drz.lazcdn.com/static/pk/p/6c3650df6db69eac353183f6f11b9f78.png_400x400q75.avif", // Soundbar
      Img_6:
        "https://img.drz.lazcdn.com/static/pk/p/48344ba580bf4aee395a0f503dba023e.jpg_400x400q75.avif", // Alpha A7 IV
    },

    Name: {
      Brand_1: "Samsung Galaxy S24",
      Brand_2: "Samsung QLED kK",
      Brand_3: "Samsung Galaxy Tab S9",
      Brand_4: "Samsung Smartwatch 6",
      Brand_5: "Samsung Refrigerator",
      Brand_6: "Samsung Washing Machine",
    },

    Description: {
      desc_1: "Galaxy S24 – Ultimate performance with next-gen AI....",
      desc_2: " Samsung QLED 4K $ 100% Color Volume, 4K Upscaling, Tizen OS",
      desc_3: "Samsung Galaxy Tab S9 – Ultimate performance with next-gen AI",
      desc_4: "Fitness tracking and smart notifications for Android..",
      desc_5: "Samsung Refigertor  10 Year Compressor Warranty..",
      desc_6: "Samsung Refigertor  10 Year Part Warranty...",
    },

    Prices: {
      price_1: "$859.99",
      price_2: "$999.99",
      price_3: "$629.99 ",
      price_4: "$249.00",
      price_5: "$759.00",
      price_6: "$500.00",
    },
  };

  let link = "#";
  let keys = Object.keys(sony.pics);
  let nameKeys = Object.keys(sony.Name);
  let descKeys = Object.keys(sony.Description);
  let priceKeys = Object.keys(sony.Prices);

  let html = `<div class="row">`;

  for (let i = 0; i < keys.length; i++) {
    html += `
    <style>
      .hover-3 {
        transition: all 0.3s ease-in-out;
      }
      .hover-3:hover,
      .icon {
        transform: scale(1.1);
        
      }
        
    </style>
      <div class="col-md-4 mb-4">
        <div class="card h-100 bg-dark">
          <img
            src="${sony.pics[keys[i]]}"
            class="card-img-top"
            alt="Sony Product" />
          <div class="card-body d-flex flex-column bg-dark">
            <h5 class="card-title text-white">${sony.Name[nameKeys[i]]}</h5>
            <p class="card-text text-white">
             ${sony.Description[descKeys[i]]}
            </p>
            <p class="card-text text-warning"> ${sony.Prices[priceKeys[i]]}</p>
            <div
              class="row d-flex justify-content-center flex-row container gap-2">
              <a href="" class="btn col-3 btn-primary hover-3">
                <i class="bi bi-arrows-angle-contract"></i>
              </a>
              <button href="" class="btn col-3 btn-primary hover-3" id="likeBtn">
                <i class="bi bi-heart" id="heartIcon"></i>
              </button>
              <a href="" onclick="addToCart(${i})" class="btn col-3 btn-primary hover-3">
                <i class="bi bi-cart-check"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  html += `</div>`;
  document.getElementById("card-box-1").innerHTML = html;
}
////////////////////////////////// Dell //////////////////////////////////////
function dellItem() {
  event.preventDefault();

  let mobile = {
    pics: {
      Img_1:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/03-400x400.jpg",
      Img_2:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/02-400x400.jpg",
      Img_3: "assts/PICS/pc.png",
      Img_4:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/74-400x400.jpg",
      Img_5:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/169_2-400x400.jpg",
      Img_6:
        "https://tse4.mm.bing.net/th?id=OIP.dxXL3cIxeotX4pduqj5zTwHaHa&pid=Api&P=0&h=220",
    },

    Name: {
      Brand_1: "Dell XPS 13 Laptop",
      Brand_2: "Dell Inspiron 15",
      Brand_3: "Dell Alienware Gaming PC",
      Brand_4: "Dell 27 4K Monitor",
      Brand_5: "Dell Wireless Keyboard and Mouse",
      Brand_6: "Dell PowerEdge Server",
    },
    Description: {
      desc_1:
        "The Dell XPS 13 is a premium, ultra-portable laptop with a stunning display...",
      desc_2: "The Dell Inspiron 15 is a versatile 15.6-inch laptop series ...",
      desc_3:
        "The Dell Alienware line offers high-performance gaming PCs   ...",
      desc_4:
        "Dell offers several 27-inch 4K monitors that cater to different user...",
      desc_5:
        "Dell offers a range of wireless keyboard and mouse combos designed to ......",
      desc_6:
        "Enterprise-grade server solution offering high performance, ......",
    },
    Prices: {
      price_1: "$849.00",
      price_2: "$479.99",
      price_3: "$1,549.99",
      price_4: "$229.99",
      price_5: "$24.99",
      price_6: "$549.00",
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
      .hover-3 {
        transition: all 0.3s ease-in-out;
      }
      .hover-3:hover,
      .icon {
        transform: scale(1.1);
        
      }
    </style>
      <div class="col-md-4 mb-4">
        <div class="card h-100 ">
          <img
            src="${mobile.pics[key]}"
            class="card-img-top"
            alt="Sony Product" />
          <div class="card-body d-flex flex-column bg-dark">
            <h5 class="card-title text-white">${mobile.Name[key2]}</h5>
            <p class="card-text text-white">
             ${mobile.Description[key3]}
            </p>
            <p class="card-text text-warning"> ${mobile.Prices[key4]}</p>
            <div
              class="row d-flex justify-content-center flex-row container gap-2">
              <a href="" class="btn col-3 btn-primary hover-3">
                <i class="bi bi-arrows-angle-contract"></i>
              </a>
              <button href="" class="btn col-3 btn-primary hover-3" id="likeBtn">
                <i class="bi bi-heart" id="heartIcon"></i>
              </button>
              <a href="" onclick="addToCart(${i})" class="btn col-3 btn-primary hover-3">
                <i class="bi bi-cart-check"></i>
              </a>
            </div>
          </div>
        </div>
      </div>


        `;
  }

  html += `</div>`; // end row

  document.getElementById("card-box-1").innerHTML = html;
}
////////////////////////////// HP ////////////////////////////

function HPItem() {
  event.preventDefault();

  let mobile = {
    pics: {
      Img_1:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/04-400x400.jpg",
      Img_2:
        "https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/11-400x400.jpg",
      Img_3: "assts/PICS/printer.png",
      Img_4: "assts/PICS/hp.png",
      Img_5: "assts/PICS/hpkey.png",
      Img_6: "assts/PICS/hplap.png",
    },

    Name: {
      Brand_1: "HP Pavilion x360 Laptop",
      Brand_2: "HP Spectre x360",
      Brand_3: "HP LaserJet Pro Printer",
      Brand_4: "HP All-in-One Desktop",
      Brand_5: "HP USB Keyboard",
      Brand_6: "HP Omen Gaming Laptop",
    },
    Description: {
      desc_1:
        "The HP Pavilion 13 is a premium, ultra-portable laptop with a stunning display...",
      desc_2: "The HP Spectre 15 is a versatile 15.6-inch laptop series ...",
      desc_3:
        "The Hp Laser Jet Printer line offers high-performance printing   ...",
      desc_4:
        "HP offers several 27-inch 4K monitors that cater to different user...",
      desc_5:
        "Dell offers a range of wire keyboard mehacanical keyboard ......",
      desc_6:
        "The HP Pavilion 13 is a premium, ultra-portable laptop with a stunning display....",
    },
    Prices: {
      price_1: "$849.00",
      price_2: "$479.99",
      price_3: "$1,549.99",
      price_4: "$229.99",
      price_5: "$24.99",
      price_6: "$1549.00",
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
      .hover-3 {
        transition: all 0.3s ease-in-out;
      }
      .hover-3:hover,
      .icon {
        transform: scale(1.1);
        
      }
    </style>
      <div class="col-md-4 mb-4">
        <div class="card h-100 ">
          <img
            src="${mobile.pics[key]}"
            class="card-img-top"
            alt="Sony Product" />
          <div class="card-body d-flex flex-column bg-dark">
            <h5 class="card-title text-white">${mobile.Name[key2]}</h5>
            <p class="card-text text-white">
             ${mobile.Description[key3]}
            </p>
            <p class="card-text text-warning"> ${mobile.Prices[key4]}</p>
            <div
              class="row d-flex justify-content-center flex-row container gap-2">
              <a href="" class="btn col-3 btn-primary hover-3">
                <i class="bi bi-arrows-angle-contract"></i>
              </a>
              <button href="" class="btn col-3 btn-primary hover-3" id="likeBtn">
                <i class="bi bi-heart" id="heartIcon"></i>
              </button>
              <a href="" onclick="addToCart(${i})" class="btn col-3 btn-primary hover-3">
                <i class="bi bi-cart-check"></i>
              </a>
            </div>
          </div>
        </div>
      </div>


        `;
  }

  html += `</div>`; // end row

  document.getElementById("card-box-1").innerHTML = html;
}

function showmore() {
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
  .hover-3 {
    transition: all 0.3s ease-in-out;
  }
  .hover-3:hover,
  .icon {
    transform: scale(1.1);
  }
</style>
<div class="col-md-4 mb-4">
  <div class="card h-100">
    <img
      src="${mobile.pics[key]}"
      class="card-img-top"
      alt="Sony Product" />
    <div class="card-body d-flex flex-column bg-dark">
      <h5 class="card-title text-white">${mobile.Name[key2]}</h5>
      <p class="card-text text-white">${mobile.Description[key3]}</p>
      <p class="card-text text-warning">${mobile.Prices[key4]}</p>
      <div class="row d-flex justify-content-center flex-row container gap-2">
        <a href="#" class="btn col-3 btn-primary hover-3">
          <i class="bi bi-arrows-angle-contract"></i>
        </a>
        <button class="btn col-3 btn-primary hover-3" id="likeBtn">
          <i class="bi bi-heart" id="heartIcon"></i>
        </button>
        <a href="#" onclick="addToCart(${i})" class="btn col-3 btn-primary hover-3">
          <i class="bi bi-cart-check"></i>
        </a>
      </div>
    </div>
  </div>
</div>
`;
  }

  html += `</div>`; // end row

  document.getElementById("card-box-3").innerHTML = html;
}
function f1() {
  document.getElementById("cart-container").innerHTML = "Cart Added";
}
