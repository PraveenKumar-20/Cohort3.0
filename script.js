let ctr = 0;

function handleAddList() {
  const input1 = document.querySelector("input");
  const addEl = document.createElement("div");
  addEl.classList.add("todo-" + ctr);
  addEl.setAttribute(
    "style",
    "display:flex;gap:20px;height:20px;align-items: center;margin: 20px;"
  );
  const addE2 = document.createElement("h4");
  addE2.innerHTML = ctr + 1 + ". " + input1.value;
  const List = document.querySelector(".list");
  const OuterDiv = List.appendChild(addEl);
  OuterDiv.appendChild(addE2);
  const Button = document.createElement("button");
  Button.innerHTML = "Delete";
  addEl.appendChild(Button);
  const EditButton = document.createElement("button");
  EditButton.innerHTML = "Edit";
  addEl.appendChild(EditButton);
  const SaveButton = document.createElement("button");
  SaveButton.innerHTML = "Save";
  addEl.appendChild(SaveButton);
  SaveButton.classList.add("save-" + ctr);
  SaveButton.setAttribute("onclick", `handleSave(${ctr})`);
  EditButton.classList.add("edit-" + ctr);
  EditButton.setAttribute("onclick", `handleEdit(${ctr})`);
  Button.setAttribute("id", ctr);
  Button.setAttribute("onclick", `handleDelete(${ctr})`);
  input1.value = "";
  ctr += 1;
}

function handleDelete(index) {
  const DeleteElement = document.querySelector(`.todo-${index}`);
  const ParentElement = document.querySelector(".list");
  ParentElement.removeChild(DeleteElement);
}

function handleEdit(index) {
  const editing = document.querySelector(`.edit-${index}`).parentElement;
  const h4 = editing.childNodes[0];
  const h4Value = editing.childNodes[0].innerHTML;
  h4.remove();

  const inputEl = document.createElement("input");
  inputEl.value = h4Value;

  const divEl = document.querySelector(`.todo-` + index);
  divEl.insertBefore(inputEl, divEl.firstChild);
}

function handleSave(index) {
  const inputE2 = document.querySelector("input");
  const curVal = inputE2.value;
  inputE2.remove();

  const h4 = document.createElement("h4");
  h4.innerHTML = curVal;

  const divEl = document.querySelector(`.todo-` + index);
  divEl.insertBefore(h4, divEl.firstChild);
}
