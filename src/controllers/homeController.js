import db from '../models/index';
import CRUDService from '../services/CRUDService';
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }

}
let getAboutPage = (req, res) => {
    return res.render('about/about.ejs');
}
let getSignup = (req, res) => {
    return res.render('signup.ejs');
}

let getCRUD = async (req, res) => {
    let message = await CRUDService.creatNewUser(req.body);
    console.log(message);
    return res.send('Post crud successfull');
}
let displayGetUsers = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render('crud.ejs', {
        dataUser: data
    })
}
// object:{
//     key:'',
//     value:''
// }
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    getSignup: getSignup,
    displayGetUsers: displayGetUsers,
}
