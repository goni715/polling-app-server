import app from "./app";
import config from "./app/config";
import dbConnect from "./app/utils/dbConnect";

const port = config.port || 5000;


app.listen(port, ()=> {
    console.log(`Server running at @${port}`);
})

let server: Server;


async function main() {
    try {
      await dbConnect();
      server = app.listen(config.port, () => {
        console.log(`Server running on port ${config.port}`);
      });

    } catch (error) {
      console.log(error);
    }
  }
  
  main();



  //asynchronous code error
  process.on('unhandledRejection', (err)=>{
    console.log(`❤❤ unahandledRejection is detected , shutting down ...`, err);
    if(server){
      server.close(()=>{
        process.exit(1);
      })
    }
    process.exit(1)
  })



  //synchronous code error--process immediately off
  process.on('uncaughtException', () => {
    console.log(`😛😛 uncaughtException is detected , shutting down ...`);
    process.exit(1);
  });
