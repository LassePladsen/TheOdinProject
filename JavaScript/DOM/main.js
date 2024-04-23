// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello world 2");
// const btn2 = document.querySelector("#btn2");
// btn2.addEventListener("click", (e) => {
//   console.log(e);
//   console.log(e.target);
//   e.target.style.background = "blue";
//   alert("Hello world too");
// });

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
