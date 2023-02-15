function Bio() {
  let bio = document.querySelector("#bioSection");
  let port = document.querySelector("#portSection");
  let welcome = document.querySelector("#welcome");
  bio.style.display = "flex";
  port.style.display = "none";
  welcome.style.color = "rgb(240, 255, 255)"
};

function Port() {
  let bio = document.querySelector("#bioSection");
  let port = document.querySelector("#portSection");
  let welcome = document.querySelector("#welcome");
  bio.style.display = "none";
  port.style.display = "block";
  welcome.style.color = "rgb(240, 255, 255)"
};