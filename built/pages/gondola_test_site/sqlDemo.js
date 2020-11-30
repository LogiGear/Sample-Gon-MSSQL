"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlDemo = void 0;
const gondolajs_1 = require("gondolajs");
let sqlDemo = class sqlDemo {
    async checkDataTable(columnName, row, value) {
        const cell_locator = `//tr[` + row + `]//td[count(//thead//th[contains(.,"` + columnName + `")]/preceding-sibling::th) + 1]`;
        await gondolajs_1.gondola.checkText(cell_locator, value);
    }
    async connect(sql, connection) {
        try {
            // make sure that any items are correctly URL encoded in the connection string
            await sql.connect(connection);
            return sql;
        }
        catch (err) {
            console.log(err);
        }
    }
    async disconnect(sql) {
        try {
            // make sure that any items are correctly URL encoded in the connection string
            await sql.close();
        }
        catch (err) {
            console.log(err);
        }
    }
    async query(sql, query) {
        try {
            const result = await sql.query(query);
            return result.recordset;
        }
        catch (err) {
            console.log(err);
        }
    }
};
__decorate([
    gondolajs_1.action("check data table", "Check data table")
], sqlDemo.prototype, "checkDataTable", null);
sqlDemo = __decorate([
    gondolajs_1.page
], sqlDemo);
exports.sqlDemo = sqlDemo;
exports.default = new sqlDemo();
//# sourceMappingURL=sqlDemo.js.map