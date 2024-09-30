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

export const isUser = (obj: any): obj is User => {
    if (obj._id && !(obj._id instanceof ObjectId)) return false;
    if (obj.displayName && typeof obj.displayName !== "string") return false;
    if (obj.username === undefined || typeof obj.username !== "string")
        return false;
    if (obj.password === undefined || typeof obj.password !== "string")
        return false;

    // TODO: character validation
    if (obj.username.length < 5 || obj.username.length > 25) return false;
    if (
        obj.displayName &&
        (obj.displayName.length < 5 || obj.displayName.length > 25)
    )
        return false;
    if (obj.password.length < 8 || obj.password.length > 50) return false;

    return true;
};

/** database funcs for users */

export const createUser = async (user: User): Promise<User> => {
    if (!isUser(user))
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
