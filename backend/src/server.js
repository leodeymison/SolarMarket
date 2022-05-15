const app = require("./app")
const { exec } = require("child_process")
const log = require("./logs")

function Start(){
    exec(`lsof -i TCP:${process.env.PORT} | grep LISTEN`, (error, stdout) => {
        if (error) {
            app.listen(process.env.PORT, () => {
                log.info(`server started on port ${process.env.PORT}`)

            })
        }
        else{
            const numberSerie = stdout.slice(7, 13)
            exec(`kill -9 ${numberSerie}`, (error2,stdout2) => {
                if (error2) {console.log(`error: ${error2.message}`);return}
                    if(stdout2.length == 0){
                        Start()
                    }
                });
            }
        });
}
Start()
