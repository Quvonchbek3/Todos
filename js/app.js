const formCreate = document.getElementById("form-create");
const formEdit = document.getElementById("form-edit");
const ul = document.getElementById("list-group-todo");
const addBtn = document.getElementById("addBtn");
const formControl = document.querySelector(".form-control");
const li = document.createElement("li");
const edit = document.querySelector(".edit");
const delet = document.querySelector(".delete");
const messcre = document.querySelector("#message-create");

class MessageCreate {
  constructor() {
    ul.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete")) {
        this.remove(e);
      } else if (e.target.classList.contains("edit")) {
        this.edits(e);
      }
    });
  }
  showTodos() {
    if (formControl.value.trim().length > 0) {
      ul.innerHTML += `
          <li class="list-group-item d-flex justify-content-between">${formControl.value}
          <div class="todo-icons">
          <img src="../img/edit.svg" onclick="edits()" alt="Edit" class="edit" width="25px" height="25px">
          <img src="../img/delete.svg" onclick="remove()" alt="delete" class="delete" width="25px" height="25px">
          </div>
          </li>`;
      ul.appendChild(li);
      formControl.value = " ";
    } else {
      let texts = "Iltimos ma'lumot kiriting...";
      messcre.innerHTML = `${texts}`;
      setTimeout(() => {
        messcre.innerHTML = " ";
      }, 2000);
    }
  }
  remove(e) {
    e.target.closest("li").remove();
  }
  edits(e) {
    this.currentEditItem = e.target.closest("li");
    const liText = this.currentEditItem.textContent.replace(/Editdelete/, "").trim();
    formControl.value = liText;
    formControl.focus();
  }

}
const messageCreate = new MessageCreate();
addBtn.addEventListener("click", () => {
  messageCreate.showTodos();
});

const addBtn1 = document.getElementById("addBtn1")
addBtn1.addEventListener("click", () => {
  if (messageCreate.currentEditItem && formControl.value.trim() !== '') {
    messageCreate.currentEditItem.innerHTML = `
      ${formControl.value}
      <div class="todo-icons">
        <img src="../img/edit.svg" alt="Edit" class="edit" width="25px" height="25px">
        <img src="../img/delete.svg" alt="delete" class="delete" width="25px" height="25px">
      </div>`;
    formControl.value = "";
  }
});
