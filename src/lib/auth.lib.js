import jwt from 'jsonwebtoken'
const auth = {}


auth.activo = (req,res,next)=>{
    if(!req.cookies.session){
        return res.redirect("/ingresar")
    }
    next()
}

auth.inactivo = (req,res,next) => {
    if(req.cookies.session) {
        return res.redirect("/user")
    }
    next()
}

auth.existsUser = (req) => {
    try {
        const token = req.cookies.session
        if(token) {
            const user = jwt.verify(token,"secret")
            if(user){
                return [user]
            } else {
                return {}
            }
        }
    } catch(err) {
        console.error(err)
    }
}





export default auth;