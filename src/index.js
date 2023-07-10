//  modules
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session      from 'express-session';
import flash        from 'connect-flash'
import { resolve, join } from 'path';

// endpoints
import index from './routes/index.routes.js';
import products from './routes/products.routes.js';
import prov from './routes/proveedores.routes.js';
import auth from './routes/auth.routes.js';
import user from './routes/user.routes.js';
import admin from './routes/admin.routes.js';
//lib
import validate from './lib/auth.lib.js';
import categorias from './routes/categorias.routes.js';



const app = express();
const __dirname = resolve()
//settings
app.set("port", process.env.PORT)
app.set("views", join(__dirname, "src/views"))
app.set("view engine", ".ejs");





// middlewares


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())


app.use(flash())

app.use(session({
    secret: "secret",
    saveUninitialized: false,
    resave: false
}))

//global variables
app.use((req, res, next) => {

    if(req.cookies.session){

        app.locals.user = validate.existsUser(req)
    }  else {
        app.locals.user = [];
        console.log(app.locals.user.length > 0)
    }


    app.locals.error = req.flash("error");
    app.locals.message = req.flash("message");
    next();
})

//paths

app.use(index);
app.use(products);
app.use(prov)
app.use(auth)
app.use(user)
app.use(admin)
app.use(categorias)
app.use(express.static(join(__dirname, "src/public")))

app.use((req, res) => res.render("errors/404.ejs", { user: {} }))

app.listen(app.get("port"), () => {
    console.log(`server running on port ${app.get("port")}`);
});