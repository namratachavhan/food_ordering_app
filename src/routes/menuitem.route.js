const menuitemController = require("../controllers").menuitem;
module.exports = (app) => {
    //to create new menuitem
    app.post("/api/v1/addnewmenuitem", menuitemController.addNewMenuitem);
    //to fetch all menuitems
    app.get("/api/v1/getmenuitems", menuitemController.getMenuitems)
}