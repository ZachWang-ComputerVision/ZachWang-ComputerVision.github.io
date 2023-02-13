function Bio() {
  let bio = document.querySelector("#bioSection");
  let port = document.querySelector("#portSection");
  bio.style.display = "flex";
  port.style.display = "none";
};

function Port() {
  let bio = document.querySelector("#bioSection");
  let port = document.querySelector("#portSection");
  bio.style.display = "none";
  port.style.display = "block";
};