import { LocalStore } from "./class.js";
window.addEventListener("load", () => {
  const store = new LocalStore();

  function showTimes() {
    const myTimes = store.getTimes();
    
    if(myTimes.length === 0) {
      document.querySelector(".times-list").innerText = "You have no notes";
    }
    
    myTimes.map((item) => {
      const ul = document.querySelector(".times-list");
      const li = document.createElement("li");
      li.classList.add("time-item");
      li.setAttribute("id", item.id);

      li.innerHTML = `
       <div class="btns">
            <button class="add-note" data-id="${item.id}">&#9999;</button>
            <button class="delete" data-id="${item.id}">&#10006;</button>
          </div>
          <strong class="note" id="note-${item.id}">${item.note}</strong>
          <div class="time">
            <strong>${item.date}/${item.month}/${item.year}-${item.hour}:${item.minute}:${item.second}</strong>
          </div>
      `;

      ul.append(li);
    })

  }

  showTimes();

  // Add a note function
  const addNoteBtn = document.querySelectorAll(".add-note");
  
  addNoteBtn.forEach((item) => {
    item.addEventListener("click", function (event) {
      const id = Number(event.target.getAttribute("data-id"));
      const note = prompt("Add a note");
      document.getElementById(`note-${id}`).innerText = note;
      store.addNote(id, note);
    })
  })


  // Delete function
  const deleteBtn = document.querySelectorAll(".delete");

  deleteBtn.forEach((item) => {
    item.addEventListener("click", function (event) {
      const id = Number(event.target.getAttribute("data-id"));
      document.getElementById(id).remove();
      store.deleteTime(id);
    })
  })

})