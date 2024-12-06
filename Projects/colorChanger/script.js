const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "grey") {
      body.style.background = event.target.id;
      body.style.color = "#ffff";
      document.querySelector(".container").style.border = "2px solid white";
      document.querySelectorAll(".button").forEach((button) => {
        button.style.border = "2px solid #fff";
      });
    }
    if (event.target.id === "red") {
      body.style.background = event.target.id;
      body.style.color = "#ffff";
      document.querySelector(".container").style.border = "2px solid white";
      document.querySelectorAll(".button").forEach((button) => {
        button.style.border = "2px solid #fff";
      });
    }
    if (event.target.id === "orange") {
      body.style.background = event.target.id;
      body.style.color = "#ffff";
      document.querySelector(".container").style.border = "2px solid white";
      document.querySelectorAll(".button").forEach((button) => {
        button.style.border = "2px solid #fff";
      });
    }
    if (event.target.id === "blue") {
      body.style.background = event.target.id;
      body.style.color = "#ffff";
      document.querySelector(".container").style.border = "2px solid white";
      document.querySelectorAll(".button").forEach((button) => {
        button.style.border = "2px solid #fff";
      });
    }
    if (event.target.id === "black") {
      body.style.background = "#212121";
      body.style.color = "#ffff";
      document.querySelector(".container").style.border = "2px solid white";
      document.querySelectorAll(".button").forEach((button) => {
        button.style.border = "2px solid #fff";
      });
      
    }
    if (event.target.id === "white") {
      body.style.background = "white";
      body.style.color = "#000"; // or "black"
      document.querySelector(".container").style.border = "2px solid #212121";
      document.querySelectorAll(".button").forEach((button) => {
        button.style.border = "2px solid #212121";
      });
    }
  });
});
