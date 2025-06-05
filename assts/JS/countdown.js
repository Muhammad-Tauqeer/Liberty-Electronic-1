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

// const products = {
//     iphone14: {
//       name: "iPhone 14",
//       price: "$799",
//       ram: "6GB",
//       storage: "128GB",
//       camera: "12MP",
//       image: "image-removebg-preview.png"
//     },
//     s23: {
//       name: "Samsung Galaxy S23",
//       price: "$899",
//       ram: "8GB",
//       storage: "256GB",
//       camera: "50MP",
//       image: "image-removebg-preview.png"
//     }
//     ,
//     iphone15: {
//       name: "iphone 15",
//       price: "$899",
//       ram: "8GB",
//       storage: "256GB",
//       camera: "50MP",
//       image: "image-removebg-preview.png"
//     }
//     ,
//     s24: {
//       name: "Samsung Galaxy S24",
//       price: "$899",
//       ram: "8GB",
//       storage: "256GB",
//       camera: "50MP",
//       image: "image-removebg-preview.png"
//     }
//   };

//   document.getElementById("product1").addEventListener("change", compareProducts);
//   document.getElementById("product2").addEventListener("change", compareProducts);

//   function compareProducts() {
//     const p1 = document.getElementById("product1").value;
//     const p2 = document.getElementById("product2").value;

//     if (p1 && p2 && products[p1] && products[p2]) {
//       const html = `
//         <div class="col-6">
//           <div class="card card-1 p-3 text-center">
//             <img src="${products[p1].image}" alt="${products[p1].name}" class="product-img mb-3">
//             <h4>${products[p1].name}</h4>
//             <p><strong>Price:</strong> ${products[p1].price}</p>
//             <p><strong>RAM:</strong> ${products[p1].ram}</p>
//             <p><strong>Storage:</strong> ${products[p1].storage}</p>
//             <p><strong>Camera:</strong> ${products[p1].camera}</p>
//           </div>
//         </div>
//         <div class="col-6">
//           <div class="card p-3 text-center">
//             <img src="${products[p2].image}" alt="${products[p2].name}" class="product-img mb-3">
//             <h4>${products[p2].name}</h4>
//             <p><strong>Price:</strong> ${products[p2].price}</p>
//             <p><strong>RAM:</strong> ${products[p2].ram}</p>
//             <p><strong>Storage:</strong> ${products[p2].storage}</p>
//             <p><strong>Camera:</strong> ${products[p2].camera}</p>
//           </div>
//         </div>
//       `;
//       document.getElementById("comparisonResult").innerHTML = html;
//     } else {
//       document.getElementById("comparisonResult").innerHTML = "";
//     }
//   }