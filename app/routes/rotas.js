import app from "../../app.js"
import path from "path"
import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

class Routes {

    constructor(){
        this.init()
    }


    init () {

        app.get('/', (_, res) => {
            res.sendFile(path.join(__dirname, '../views/templates', 'index.html'))
        });

    }

} 


export default new Routes