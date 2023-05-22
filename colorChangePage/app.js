// const container = document.querySelector(".container")

// const rgb = document.querySelector("#rgb")

// const red = document.querySelector(".red")

// const green = document.querySelector(".green")
// const blue = document.querySelector(".blue")

// const btn = document.querySelector("#btn")

// const randomNumber = Math.floor(Math.random() * 255);


// btn.addEventListener("click", function(){
//   rgb.innerText = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
//   container.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
// });


// const container = document.querySelector(".container")

const h1 = document.querySelector("h1")
const btn = document.querySelector("#btn")

btn.addEventListener("click", function(){
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const neyColor = `rgb(${r},${g},${b})`

  document.body.style.backgroundColor = neyColor;
  h1.innerText = neyColor
});

