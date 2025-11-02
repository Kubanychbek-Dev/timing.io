import { LocalStore } from "./class.js";
window.addEventListener("load", () => {
  // Add Times
  const btn = document.querySelector(".add-time");
  btn.addEventListener("click", function () {
    document.querySelector(".add-time").remove();
    let count = 0;
    const interval = setInterval(() => {
      count++
      let indicator = document.getElementById(`indicator-${count}`)
      indicator.style.cssText = "background-color: green;";

      if(count == 3) {
        clearInterval(interval);
        console.log("Stopped on", count);
        const store = new LocalStore();
        store.addTimes();
        setTimeout(() => {
          window.location.href = "../times.html";
        },1000);
      }
    },1000);

    
  })

});