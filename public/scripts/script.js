let searchInput = document.getElementById("SearchBar");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  //window.location.href = `127.0.0.1:3000/stocks/${searchInput.value}`;
  console.log(searchInput.value);
});

searchInput.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    console.log(searchInput.value);
    window.location.href = `/stocks/rsi/${searchInput.value}`;
    // Trigger the button element with a click
  }
});
