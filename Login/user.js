import { hashPassword } from "./utility.js";

export class User {
    static id = 1;

    #id
    #username
    #password
    #firstName
    #lastName
    constructor(username, password, firstName, lastName) {
        if (typeof username !== "string") throw new TypeError("Username must be of Type: String");
        if (typeof password !== "string") throw new TypeError("Password must be of Type: String");
        if (typeof firstName !== "string") throw new TypeError("First Name must be of Type: String");
        if (typeof lastName !== "string") throw new TypeError("Last Name must be of Type: String");

        this.#id = User.id++;
        this.#username = username;
        this.#password = password;
        this.firstName = firstName;
        this.#lastName = lastName;
    }

    static async create(username, password, firstName, lastName) {
        const hashedPassword = await hashPassword(password);

        return new User(username, hashedPassword, firstName, lastName);
    }

    getId() {
        return this.#id;
    }

    getName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    getUsername() {
        return this.#username;
    }

    getPassword() {
        return this.#password;
    }
}