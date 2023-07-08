//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const axios = require("axios");
const app = require('./src/app');
const { conn, Model } = require('./src/db');
const port = 3001;

conn.sync({ force: false }).then(() => {
    app.listen(port, async () => {
        const allModels = await Model.findAll();
        if (!allModels.length) {
            const apiModelsResponse = await axios.get('https://fakestoreapi.com/products');
            var apiModels = apiModelsResponse.data.map((e) => {
                return {
                    id: e.id,
                    title: e.title.common,
                    price: e.price,
                    description: e.description,
                    category: e.category,
                    image: e.image,
                }
            })
            await Model.bulkCreate(apiModels);
            console.log("Create successfully!")
        }
        console.log(`listening on port ${port}`);
    })
});