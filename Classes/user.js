import { hash, genSalt } from "bcrypt";

class User {
    static id = 1;

    #id
    #username
    #firstName
    #lastName
    #password
    constructor(username, firstName, lastName, password, repeat) {
        if (typeof username !== "string") throw TypeError("Username must be of Type: String");
        if (typeof firstName !== "string") throw TypeError("First Name must be of Type: String");
        if (typeof lastName !== "string") throw TypeError("Last Name must be of Type: String");
        if (typeof password !== "string") throw TypeError("Password must be of Type: String");

        this.#id = User.id++;
        this.#username = username;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#password = this.hashPassword(password, repeat);
    }

    getId() {
        return this.#id;
    }

    getName() {
        return `${this.#firstName} ${this.#lastName}`
    }

    getUsername() {
        return this.#username;
    }

    getPassword() {
        return this.#password;
    }

    validatePassword(password, repeat) {
        return password === repeat;
    }

    hashPassword(password, repeat) {
        if (this.validatePassword(password, repeat)) {
            const salt = genSalt(10);
            const hashedPassword = hash(password, salt);
            return hashedPassword;
        } else {
            throw TypeError("Password do not match!")
        }
    }
}