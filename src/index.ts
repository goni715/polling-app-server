import app from "./app";
import config from "./app/config";

const port = 5000;


app.listen(port, ()=> {
    console.log(`Server running at @${port}`);
    console.log(config.database_url);
})