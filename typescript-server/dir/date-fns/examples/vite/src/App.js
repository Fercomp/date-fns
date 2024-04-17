"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const date_fns_1 = require("date-fns");
function App() {
    const today = new Date();
    const formattedDate = (0, date_fns_1.format)(today, "yyyy-MM-dd");
    return (<>
      <div className="App">
        <h1>React Typescript Template</h1>
        <p>{formattedDate}</p>
      </div>
    </>);
}
exports.default = App;
