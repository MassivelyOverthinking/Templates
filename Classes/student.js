
class Student {
    static id = 1;

    #id
    #firstName
    #lastName
    #age
    #lessons
    constructor(firstName, lastName, age, lessons = []) {
        if (typeof firstName !== "string") throw TypeError("First Name must be of Type: String");
        if (typeof lastName !== "string") throw TypeError("Last Name must be of Type: String");
        if (typeof age !== "number") throw TypeError("Age must be of Type: Number");
        if (!Array.isArray(lessons)) throw TypeError("Lessons must be of Type: Array");

        this.#id = Student.id++;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
        this.#lessons = lessons;
    }

    getId() {
        return this.#id;
    }

    getName() {
        return `${this.#firstName} ${this.#lastName}`
    }

    getAge() {
        return this.#age;
    }

    getLessons() {
        return this.#lessons;
    }

    numberOfLessons() {
        return this.#lessons.length;
    }

    addLesson(lesson) {
        if (typeof lesson !== "string") throw TypeError("Lesson must be of Type: String");

        this.#lessons.push(lesson);
    }
}