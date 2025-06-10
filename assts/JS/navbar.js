function showserchbar() {
  const container = document.getElementById("searchbar");
  
  if (container.innerHTML.trim() === "") {
    // Show the search bar
    const html = `
      <div class="col-12 col-lg-9 d-flex justify-content-center">
       <input
        type="text"
        id="productSearch"
        class="form-control"
        placeholder="Search Products..."
        onkeyup="filterCards()" />
      </div>`;
    container.innerHTML = html;
  } else {
    // Hide the search bar
    container.innerHTML = "";
  }
}

