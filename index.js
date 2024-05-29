const Circle1 = document.querySelector(".mouseoverCercle1");
const Circle2 = document.querySelector(".mouseoverCercle2");
const Circle3 = document.querySelector(".mouseoverCercle3");

window.addEventListener("mousemove", function (e) {
  Circle1.style.top = e.pageY + "px";
  Circle1.style.left = e.pageX + "px";
  Circle2.style.top = e.pageY + "px";
  Circle2.style.left = e.pageX + "px";
  Circle3.style.top = e.pageY + "px";
  Circle3.style.left = e.pageX + "px";
});
