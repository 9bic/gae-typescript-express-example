"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const routes_1 = require("./routes");
const App = Express();
App.use(routes_1.default);
if (module === require.main) {
    const server = App.listen(process.env.PORT || 8080, () => {
        const port = server.address().port;
        console.log(`App listening on port ${port}`);
    });
}
module.exports = App;
//# sourceMappingURL=index.js.map