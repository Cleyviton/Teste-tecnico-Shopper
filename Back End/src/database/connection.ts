import client from "./config";

const connection = async (): Promise<void> => {
    await (await client).connect();
    console.log("Database started.");
};

export default connection;
