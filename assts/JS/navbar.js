function showserchbar() {
  const container = document.getElementById("searchbar");
  
  if (container.innerHTML.trim() === "") {
    // Show the search bar
    const html = `
      <div class="col-12 col-lg-9 d-flex justify-content-center">
        <input type="text" class="form-control " style=" padding: 5px !important;">
        <button class="btn btn-primary">Submit</button>
      </div>`;
    container.innerHTML = html;
  } else {
    // Hide the search bar
    container.innerHTML = "";
  }
}

