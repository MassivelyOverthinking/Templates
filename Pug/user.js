
export default class User {
    static id = 1;

    #id
    #firstName
    #lastName
    #age
    constructor(firstName, lastName, age) {
        this.#id = User.id++;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
    }

    getId() {
        return this.#id;
    }

    getFirstName() {
        return this.#firstName;
    }

    getLastName() {
        return this.#lastName;
    }

    getAge() {
        return this.#age;
    }
}