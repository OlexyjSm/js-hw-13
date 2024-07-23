// script.js
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");

  const navLeft = document.createElement("div");
  navLeft.className = "nav-left";
  navLeft.innerHTML = `
      <a href="#">WOMAN</a>
      <a href="#">MEN</a>
      <a href="#" class="active">ALL</a>
  `;

  const logo = document.createElement("div");
  logo.className = "logo";
  logo.innerHTML = `<a href="#" class="gradient-text">YOUR SNEAKER</a>`;

  const navRight = document.createElement("div");
  navRight.className = "nav-right";
  navRight.innerHTML = `
      <a href="#"><img src="img/user.svg" alt="User"></a>
      <a href="#"><img src="img/search.svg" alt="Search"></a>
      <a href="#"><img src="img/shopping.svg" alt="Cart"></a>
  `;

  header.appendChild(navLeft);
  header.appendChild(logo);
  header.appendChild(navRight);
});
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  footer.innerHTML = `
    <div class="nav">
      <a href="#">ALL</a>
      <a href="#">WOMAN</a>
      <a href="#">MEN</a>
    </div>
    <div class="logo-container">
      <img src="img/Vector.svg" alt="Logo" class="logo" />
    </div>
    
    <div class="nav">
      <a href="#">WORKOUT</a>
      <a href="#">RUN</a>
      <a href="#">FOOTBALL</a>
    </div>
  `;

  document.getElementById("app").appendChild(footer);
});
