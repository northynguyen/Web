import express from "express";
//Quy định ảnh trên sever chỉ được lấy trong thư mục public
let configViewEngine = (app) => {
    app.use(express.static("./scr/public"))
    app.set("view engine", "ejs");//ejs tương đương jsp của java và blade của php. (dùng để gõ logic trong html)
    app.set("views", "./src/views")
}
module.exports = configViewEngine;