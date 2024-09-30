import { MongoClient, type Db } from "mongodb";

export const serverUrl = "mongodb://localhost:27017/";
export const database = "dos-linguas-store";

let _connection: MongoClient | undefined = undefined;
let _db: Db | undefined = undefined;

const dbConnection = async () => {
    if (!_connection) {
        _connection = await MongoClient.connect(serverUrl);
        _db = _connection.db(database, { ignoreUndefined: true });
    }

    return _db;
};

const closeConnection = async () => {
    await _connection?.close();
};

export { dbConnection, closeConnection };
