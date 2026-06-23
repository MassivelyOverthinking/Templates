const data = [
  {
    id: 1,
    name: "Fruits",
    children: ["Apple", "Banana", "Orange"]
  },
  {
    id: 2,
    name: "Vegetables",
    children: ["Carrot", "Potato", "Broccoli"]
  },
  {
    id: 3,
    name: "Animals",
    children: ["Dog", "Cat", "Horse"]
  }
];

const app = document.getElementById("app");
const pageTitle = document.getElementById("page-title");

function showParents() {
  pageTitle.textContent = "Parent Elements";
  app.innerHTML = "";

  data.forEach(parent => {
    const container = document.createElement("div");

    const title = document.createElement("h2");
    title.textContent = parent.name;

    const button = document.createElement("button");
    button.textContent = `Show ${parent.name} children`;

    button.addEventListener("click", () => {
      showChildren(parent);
    });

    container.appendChild(title);
    container.appendChild(button);
    app.appendChild(container);
  });
}

function showChildren(parent) {
  pageTitle.textContent = `${parent.name} Children`;
  app.innerHTML = "";

  const list = document.createElement("ul");

  parent.children.forEach(child => {
    const listItem = document.createElement("li");
    listItem.textContent = child;
    list.appendChild(listItem);
  });

  const backButton = document.createElement("button");
  backButton.textContent = "Back to parents";

  backButton.addEventListener("click", () => {
    showParents();
  });

  app.appendChild(list);
  app.appendChild(backButton);
}

showParents();