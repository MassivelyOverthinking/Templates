// Find ALL instances of the underlying HTML elements ==> .lesson-item represents the HTML class attribute.
const lessonItems = document.querySelectorAll(".lesson-item");

// Utilise a forEach method to attach a simple event listener to each element.
lessonItems.forEach((lessonItem) => {

    // Define internal Event logic to happen upn click.
    lessonItem.addEventListener("click", () => {
        const studentsContainer = lessonItem.querySelector(".students-container");

        // Get the students array from the data-students attribute
        const students = JSON.parse(lessonItem.dataset.students);

        // If students are already visible, hide them again
        if (studentsContainer.hasChildNodes()) {
            studentsContainer.textContent = "";
            return;
        }

        const heading = document.createElement("h3");
        heading.textContent = "Students";

        const studentList = document.createElement("ul");

        students.forEach((student) => {
            const studentItem = document.createElement("li");
            studentItem.textContent = student;

            studentList.append(studentItem);
        });

        studentsContainer.append(heading, studentList);
    });
});