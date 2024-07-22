document
  .getElementById("add-item-button")
  .addEventListener("click", function () {
    const newItemText = document.getElementById("new-item").value;
    if (newItemText === "") return;

    const li = document.createElement("li");
    li.textContent = newItemText;
    li.className =
      "font-mono bg-fuchsia-900 p-2 rounded-xl cursor-pointer hover:bg-fuchsia-950 text-sky-50";
    document.getElementById("items-list").appendChild(li);

    document.getElementById("new-item").value = "";

    li.addEventListener("click", function () {
      li.remove();
    });
  });
