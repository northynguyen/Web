//Mỗi lần truy cập vào 1 đường link trong website của mình trước tiên nó sẽ chạy vào đây
import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();
let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/dang-ky', homeController.getSignup);
    router.post('/crud', homeController.getCRUD);
    router.get('/data-user', homeController.displayGetUsers);
    //creat read upload delete
    //rest api: lấy thông tin->get tạo thông tin->pop, xóa->delete, update->push
    return app.use("/", router);
}
module.exports = initWebRoutes;