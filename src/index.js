import { config } from 'dotenv';
config();
import  express     from 'express';
import  index       from './routes/index.js';
import  products    from './routes/products.js';
import prov from './routes/proveedores.routes.js';
import  morgan      from 'morgan';
import {resolve,join} from 'path';
const app = express();
const __dirname = resolve()
//settings
app.set("port",process.env.PORT || 3000)
app.set("views",join(__dirname,"src/views"))
app.set("view engine",".ejs");
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}))

app.use(index);
app.use("/products",products);
app.use(prov)

app.use(express.static(join(__dirname,"src/public")))

app.listen(app.get("port"),()=>{
    console.log(`server running on port ${app.get("port")}`);
});