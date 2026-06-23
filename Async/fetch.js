// GET-request
async function getUsers() {
  try {
    const response = await fetch("/api/users");

    // fetch does not throw automatically for 404 or 500 errors.
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    // Convert the JSON response body into JavaScript data.
    const data = await response.json();

    console.log(data);
    return data;
  } catch (error) {
    console.error("Could not fetch users:", error.message);
  }
}

getUsers();

// POST-request
async function createUser(user) {
  try {
    const response = await fetch("/api/users", {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      // JavaScript object must be converted to JSON text.
      body: JSON.stringify(user)
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const createdUser = await response.json();

    console.log("Created user:", createdUser);
    return createdUser;
  } catch (error) {
    console.error("Could not create user:", error.message);
  }
}

createUser({
  firstName: "Ada",
  lastName: "Lovelace",
  age: 36
});