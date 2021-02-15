import routes from "./routes";

export const localsMiddleware = (req,res,next)=>{
    res.locals.siteName = "WeTube21";
    res.locals.routes = routes;
    next();
}