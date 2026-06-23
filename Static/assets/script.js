const userListElement = document.querySelector("#user-list");
const userFormElement = document.querySelector("#user-form");

function createUserElement(user) {
  const listItem = document.createElement("li");
  listItem.textContent = `${user.name}, ${user.age} years old, ${user.department}`;
  return listItem;
}

function renderUsers(users) {
  userListElement.innerHTML = "";

  users.forEach((user) => {
    const userElement = createUserElement(user);
    userListElement.appendChild(userElement);
  });
}

async function loadUsers() {
  const response = await fetch("/users/list");
  const data = await response.json();

  renderUsers(data.users);
}

userFormElement.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(userFormElement);

  const newUser = {
    name: formData.get("name"),
    age: Number(formData.get("age")),
    department: formData.get("department"),
  };

  const response = await fetch("/users/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  const data = await response.json();

  renderUsers(data.users);

  userFormElement.reset();
});

loadUsers();