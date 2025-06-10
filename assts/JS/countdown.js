let count = 0;
const display = document.getElementById("counting");

const timer = setInterval(() => {
  count++;
  if (count > 6) {
    clearInterval(timer); // Stop at 8
  } else {
    display.textContent = count;
  }
}, 150);

let count1 = 0;
const display1 = document.getElementById("counting1");

const timer1 = setInterval(() => {
  count1++;
  if (count1 > 8) {
    clearInterval(timer1); // Stop at 8
  } else {
    display1.textContent = count1;
  }
}, 150);

const products = {
  iphone14: {
    OS: "IOS 16 ",
    UI: " iOS UI (Apple's stock interface)",
    CPU: "Hexa-core (2 x 3.23 GHz Avalanche + 4 x 1.82 GHz Blizzard)  ",
    GPU: "Apple GPU (5-core)",
    Size: "6.1 inches, Super Retina XDR OLED, 1170 x 2532 pixels (~460 PPI)",
    Resolution: "1170 x 2532 Pixels (~457 PPI)  ",
    Main: "Dual 12 MP (Main + Ultra Wide), OIS",
    Front: "12 MP, Autofocus",
    USB: " Lightning port",
    Bulid_in: "128 GB , 256 GB, 512 GB, 1 TB",
    Capacity: " Approx. 3279 mAh, Non-removable",
    Prices: "$799",
    models: "../models/apple14.glb",
  },
  s23: {
    OS: "Android 13",
    UI: " One UI 5",
    CPU: "Octa-core , 1x 3.36 GHz Cortex-X3 ,2x 2.8 GHz Cortex-A715, 4x 2.0 GHz Cortex-A510",
    GPU: "Adreno 740",
    Size: "6.8 inches",
    Resolution: "1440 x 3088 pixels (~501 PPI)",
    Main: "200 MP, f/1.7, OIS, Laser AF",
    Front: "12 MP, Dual Pixel PDAF",
    USB: "USB Type-C 3.2, OTG supported",
    Bulid_in: "12 GB RAM , 512 GB Internal Stroge",
    Capacity: "5000 mAh, Li-ion, Non-removable",
    Prices: "$1499.99",
    models: "../models/S23.glb",
  },

  iphone15: {
    OS: "iOS 17 (upgradable to iOS 18.3.2)",
    UI: "Dynamic Island",
    CPU: "Apple A16 Bionic (4 nm)",
    UL: "6GB RAM, 128/256/512GB storage",
    Size: "6.1 inches",
    Resolution: "1179 x 2556 pixels (Super Retina XDR OLED)",
    Main: "48MP wide + 12MP ultrawide",
    Front: "12MP",
    USB: "USB-C 2.0",
    Build_in: "Face ID, UWB",
    Capacity: "3349 mAh",
    Prices: "PKR 356,500+",
    models: "../models/iphone15.glb",
  },
  s24: {
    OS: "Android 14 with One UI 6.1",
    UI: "One UI 6.1",
    CPU: "Exynos 2400 (International) / Snapdragon 8 Gen 3 (USA)",
    UL: "8GB RAM, 128GB/256GB/512GB storage",
    Size: "6.2 inches",
    Resolution: "2340 x 1080 pixels (Dynamic AMOLED 2X)",
    Main: "50MP wide + 10MP telephoto + 12MP ultrawide",
    Front: "12MP",
    USB: "USB Type-C 3.2",
    Build_in: "In-display fingerprint sensor, IP68 water & dust resistance",
    Capacity: "4000 mAh",
    Prices: "PKR 267,999 to PKR 289,999",
    models: "../models/S24.glb",
  },
  gt5: {
    OS: "Android 13 with Realme UI 4.0",
    UI: "Realme UI 4.0",
    CPU: "Snapdragon 8 Gen 2 (4nm)",
    UL: "12GB/16GB RAM, 256GB/512GB storage",
    Size: "6.74 inches",
    Resolution: "1240 x 2772 pixels (AMOLED, 144Hz)",
    Main: "50MP (f/1.9) + 8MP (ultrawide) + 2MP (macro)",
    Front: "16MP",
    USB: "USB Type-C 2.0",
    Build_in: "Under-display fingerprint sensor, IR Blaster, NFC",
    Capacity: "5240mAh (150W charging)",
    Prices: "PKR 139,500 (12GB/256GB), PKR 148,700 (16GB/512GB)",
    models:
      "https://image01.realme.net/general/20241112/17313948173174aaed907bb0a41258452468fb829cc4c.png.webp?width=1080&height=1080&size=799895",
  },
  HPPavilion15: {
    OS: "Windows 11 Home",
    UI: "Windows Copilot",
    CPU: "Intel Core i5-120U / i7-150U (12MB Cache, up to 5.00 GHz)",
    UL: "8GB/16GB DDR5 RAM, 512GB/1TB SSD",
    Size: "14 inches",
    Resolution: "1920 , 1200 pixels (FHD+)",
    Main: "Intel Integrated Graphics",
    Front: "720p HD Webcam",
    USB: "2x USB Type-C 3.2, 2x USB Type-A 3.2, HDMI 1.4, MicroSD card reader",
    Build_in: "Fingerprint Reader, Backlit Keyboard",
    Capacity: "54 Wh Battery",
    Prices: "PKR 200,000 - PKR 250,000",
    models: "../models/hp.glb",
  },
  lenevoslim3: {
  OS: "Windows 11 Home",
  UI: "Windows Copilot",
  CPU: "Intel Core i5-120U / i7-150U (12MB Cache, up to 5.00 GHz)",
  UL: "7GB/16GB DDR5 RAM, 512GB/1TB SSD",
  Size: "14 inches",
  Resolution: "1920 x 1200 pixels (FHD+)",
  Main: "Intel Integrated Graphics",
  Front: "720p HD Webcam",
  USB: "2x USB Type-C 3.2, 2x USB Type-A 3.2, HDMI 1.4, MicroSD card reader",
  Build_in: "Fingerprint Reader, Backlit Keyboard",
  Capacity: "54 Wh Battery",
  Prices: "PKR 200,000 - PKR 250,000",
  models: "../models/lenevoipad.glb",  // ✅ Correct path for Lenovo model
},
MacBookm1: {
  OS: "macOS Sonoma",
  UI: "macOS UI",
  CPU: "Apple M1 Chip (8-core CPU, 7-core GPU)",
  UL: "8GB / 16GB Unified Memory, 256GB / 512GB SSD",
  Size: "13.3 inches",
  Resolution: "2560 x 1600 pixels (Retina Display)",
  Main: "Apple Integrated 7-core GPU",
  Front: "720p FaceTime HD Camera",
  USB: "2x Thunderbolt 3 (USB‑C), 1x Headphone Jack",
  Build_in: "Touch ID, Magic Keyboard, Force Touch Trackpad",
  Capacity: "49.9 Wh Battery, up to 18 hours usage",
  Prices: "PKR 230,000 - PKR 280,000",
  models: "../models/macbook_pro_2021.glb"  // ✅ Yeh sahi path hoga agar file yeh naam se hai
}
};

document.getElementById("product1").addEventListener("change", compareProducts);
document.getElementById("product2").addEventListener("change", compareProducts);

function compareProducts() {
  const p1 = document.getElementById("product1").value;
  const p2 = document.getElementById("product2").value;

  if (p1 && p2 && products[p1] && products[p2]) {
    const html = `
         <div class="col-12 col-md-6 col-lg-5 boxshdow pt-3 pb-3 mb-4 mb-lg-0 ">
     
         <model-viewer 
  src="${products[p1].models}"
  alt="3D Dell Inspiron 14"
   class="mb-3"
  auto-rotate 
  camera-controls 
  style="width:100%;height:400px;">
 
</model-viewer>
      <!-- Specifications -->
        <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">OS</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p1].OS}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">UI</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p1].UI}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">CPU</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p1].CPU}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">UL</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p1].UL}</span>
      </div>


      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">Size</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p1].Size}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">Resulation</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p1].Resolution}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">Main</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p1].main}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">Front</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p1].Front}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">USB</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p1].USB}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">Build-in</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p1].Build_in}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">Capacity</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p1].Capacity}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">Prices</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p1].Prices}</span>
      </div>
    </div>

    <!-- Second Column (same content for demo) -->
    <div class="col-12 col-md-6 col-lg-5 boxshdow pt-3 pb-3 mb-4 mb-lg-0 align-items-center">
     <model-viewer 
  src="${products[p2].models}"
  alt="3D Dell Inspiron 14"
  class="mb-3"
  auto-rotate 
  camera-controls 
  style="width:100%;height:400px;">
</model-viewer>

      <!-- Specifications -->
        <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">OS</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p2].OS}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">UI</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p2].UI}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">CPU</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p2].CPU}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">UL</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p2].UL}</span>
      </div>


      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">Size</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p2].Size}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">Resulation</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p2].Resolution}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">Main</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p2].main}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">Front</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p2].Front}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">USB</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p2].USB}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">Build-in</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p2].Build_in}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">Capacity</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p2].Capacity}</span>
      </div>

      <div class="d-flex flex-row mb-1">
        <span class="bg-dark text-white text-center w-25 d-flex align-items-center justify-content-center custom-text">Prices</span>
        <span class="w-100 bg-primary text-white ps-3 custom-text">${products[p2].Prices}</span>
      </div>
    </div>
      `;
    document.getElementById("comparisonResult").innerHTML = html;
  } else {
  
   document.getElementById("comparisonResult").innerHTML = empty; 
  }
}
function returnToShop() {
  window.location.href = '../../index.html'; // Change this to your shop page
}
