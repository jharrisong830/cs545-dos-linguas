import { users } from "@/app/lib/config/mongoCollections";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";

const SALT = 8;

/** type declarations for users */

export type User = {
    _id?: ObjectId;
    username: string;
    displayName?: string;
    password: string; // plaintext when submitted from form, hashed when in database
};

const usernameInvalidCharPattern = /[^\w-]/g;
const displayNameInvalidCharPattern = /[^\w- ]/g;
const passwordInvalidCharPattern = /[^\w\*\?\$&%#@!-]/g;
const passwordSpecialChars = /[_\*\?\$&%#@!-]/g;

export const isUser = (obj: any): obj is User => {
    if (obj._id && !(obj._id instanceof ObjectId)) return false;
    if (obj.displayName && typeof obj.displayName !== "string") return false;
    if (obj.username === undefined || typeof obj.username !== "string")
        return false;
    if (obj.password === undefined || typeof obj.password !== "string")
        return false;

    return true;
};

export const isValidUser = (user: User): boolean => {
    if (!isUser(user)) return false;
    if (
        user.username.length < 5 ||
        user.username.length > 25 ||
        user.username.match(usernameInvalidCharPattern) !== null
    )
        return false;
    if (
        user.displayName &&
        (user.displayName.length < 5 ||
            user.displayName.length > 25 ||
            user.displayName.match(displayNameInvalidCharPattern) !== null)
    )
        return false;
    if (
        user.password.length < 8 ||
        user.password.length > 50 ||
        user.password.match(passwordSpecialChars) === null || // at least 1 special char
        user.password.match(/[A-Z]/g) === null || // at least one capital letter
        user.password.match(/[a-z]/g) === null || // at least one lowercase letter
        user.password.match(/\d/g) === null || // at least one number
        user.password.match(passwordInvalidCharPattern) !== null // no invalid patterns
    )
        return false;

    return true;
};

/** database funcs for users */

export const createUser = async (user: User): Promise<User> => {
    if (!isValidUser(user))
        throw {
            msg: `ERROR: provided user does not conform to type User`,
            code: 400
        };

    if (user._id) delete user._id; // cannot provide id on creation
    user.password = await bcrypt.hash(user.password, SALT);

    const userCol = await users();
    const insertedInfo = await userCol?.insertOne(user);
    if (!insertedInfo?.acknowledged)
        throw { msg: `ERROR: unable to insert user into database`, code: 400 };

    return await getUser(insertedInfo.insertedId);
};

export const getUser = async (id: string | ObjectId): Promise<User> => {
    if (typeof id === "string") id = new ObjectId(id);

    const userCol = await users();
    const result = await userCol?.findOne({ _id: id });

    if (!result)
        throw { msg: `ERROR: could not fetch user with id ${id}`, code: 400 };
    return result as User;
};

export const authenticateUser = async (
    id: string | ObjectId,
    passwordCandidate: string
): Promise<boolean> => {
    const user = await getUser(id);
    return await bcrypt.compare(passwordCandidate, user.password);
};
