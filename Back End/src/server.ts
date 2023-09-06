import app from "./app";
import "dotenv/config";
import database from "./database";

const PORT: number = 3000;

app.listen(PORT, async () => {
    await database.connection();
    console.log(`App running on port ${PORT}`);
});
