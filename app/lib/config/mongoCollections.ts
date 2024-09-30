import { dbConnection } from "@/app/lib/config/mongoConnection";
import { type Collection } from "mongodb";

const getCollectionFn = (collection: string) => {
    let _col: Collection | undefined = undefined;

    return async () => {
        if (!_col) {
            const db = await dbConnection();
            _col = await db?.collection(collection);
        }

        return _col;
    };
};

export const users = getCollectionFn("users");
