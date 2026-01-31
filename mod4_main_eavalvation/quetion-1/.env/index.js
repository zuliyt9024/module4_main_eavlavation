


const express =require("express");
const logger =require("./config")
const notFound =require("./routes/middleware");
const app =express();
app.use(express.json());
app.use(logger);
app.use("/modules",modules("/config/subase"));
app.use("/trips",require("/routes/trip.routes"));


app.use(notFound);
module.exports =app;
const app= require("./app");
app.listen(3000,()=>console.log("serverrunning"));
