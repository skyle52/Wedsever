"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventoryRoute = void 0;
const Inventory_1 = require("../postgre/Inventory");
function inventoryRoute(app) {
    app.get('/inventory', (req, res) => {
        Promise.all([(0, Inventory_1.getBestSellerProducts)(), (0, Inventory_1.getRunningOutOfStock)(), (0, Inventory_1.getLovesProductList)()]).then(result => {
            // [0] means best seller, [1] means running out
            res.render("inventory", {
                products: result[0].result,
                runningOutProds: result[1].result,
                loves: result[2].result
            });
        });
    });
}
exports.inventoryRoute = inventoryRoute;
