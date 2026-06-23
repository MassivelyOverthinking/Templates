import { hash, genSalt, compare } from "bcrypt";

export async function hashPassword(password) {
    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    return hashedPassword;
}

export async function comparePassword(password, hashValue) {
    return await compare(password, hashValue);
}

export function validatePassword(pasword, repeat) {
    return pasword === repeat;
}