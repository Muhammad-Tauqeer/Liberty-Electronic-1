function imgsamsung1(){
    const link="../PICS/S23-1.jpg"
    const html=`<img
            src="${link}"
            alt="" height="400" width="400"  />`
            document.getElementById("imgbox").innerHTML = html;
}
function imgsamsung2(){
    const link="../PICS/S23-2.jpg"
    const html=`<img
            src="${link}"
            alt="" height="400" width="400" />`
            document.getElementById("imgbox").innerHTML = html;
}
function imgsamsung3(){
    const link="../PICS/S23-3.jpg"
    const html=`<img
            src="${link}"
            alt="" height="400" width="400" />`
            document.getElementById("imgbox").innerHTML = html;
}

 let i = 0; // Global variable

    function addItem() {
      i++; // Increment i
      document.getElementById("putitem").innerText = i;
    }
 function deleteItem(){
    i--; // Decrement i
    document.getElementById("putitem").innerText = i;
 }
