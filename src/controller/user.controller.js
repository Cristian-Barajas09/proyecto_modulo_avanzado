export const user = {}


user.index = (req,res)=>{
    // const user = auth.existsUser(req)
    res.render("user/index")
}

user.logout = (req,res)=>{
    res.clearCookie('session');
    res.redirect("/");
}