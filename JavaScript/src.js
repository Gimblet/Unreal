//!Header

function headerOnHover() {
  document.querySelector("header").style.backgroundColor = "black";
  document.querySelector("header").style.transition = "all 0.35s linear"
}

function headerOnMouseOut() {
  document.querySelector("header").style.backgroundColor = "transparent";
}