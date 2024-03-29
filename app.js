const btn = document.querySelector(".btn");
const cancel_btn = document.querySelector(".cancel_btn");
const toast_box = document.querySelector(".toast_box");
const seconds = document.querySelector(".seconds");

let time = 5;
let interval;
let timeout;

btn.addEventListener("click", () => {
 btn.setAttribute("disabled", "");
 time = 5;
 toast_box.style.transform = "translate(0%)";
 interval = setInterval(()  => {
  time -= 1;
  seconds.innerHTML = `0${time}s`;
 },  1000);
 timeout = setTimeout(() => {
  toast_box.style.transform = "translate(110%)";
  time = 5;
  seconds.innerHTML = `0${time}s`;
  clearInterval(interval);
  btn.removeAttribute("disabled", "");
 }, 6000);
});


cancel_btn.addEventListener("click", () => {
 btn.removeAttribute("disabeld", "");
 toast_box.style.transform = "translate(110%)";
 time = 5;
 seconds.innerHTML = `0${time}s`;
 clearInterval(interval);
 clearTimeout(timeout);
});