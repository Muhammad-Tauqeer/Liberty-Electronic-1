function imgsamsung1(){
    const link="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/119.jpg"
    const html=`<img
            src="${link}"
            alt=""   />`
            document.getElementById("imgbox").innerHTML = html;
}
function imgsamsung2(){
    const link="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/121-400x400.jpg"
    const html=`<img
            src="${link}"
            alt="" />`
            document.getElementById("imgbox").innerHTML = html;
}
function imgsamsung3(){
    const link="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2023/03/120-400x400.jpg"
    const html=`<img
            src="${link}"
            alt=""  />`
            document.getElementById("imgbox").innerHTML = html;
}

 let i = 0; // Global variable

function addItem() {
  i++; // Increment i
  document.getElementById("putitem").innerText = i;
}

function deleteItem() {
  if (i > 0) { // Sirf tabhi decrement karein jab i 0 se zyada ho
    i--; // Decrement i
    document.getElementById("putitem").innerText = i;
  }
}

