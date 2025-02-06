import app from "./app";
import config from "./app/config";

const port = config.port || 5000;


app.listen(port, ()=> {
    console.log(`Server running at @${port}`);
})