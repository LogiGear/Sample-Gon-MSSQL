"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
const sqlDemo_1 = __importDefault(require("../pages/gondola_test_site/sqlDemo"));
const config_1 = require("../data/config");
gondolajs_1.TestModule("MSSQL demo");
var sql = require('mssql');
Before(async () => {
    // const sqlConfig = {
    //     password: 'Password789',
    //     database: 'WideWorldImporters',
    //     stream: false,
    //     options: {
    //     enableArithAbort: true,
    //     encrypt: true
    //     },
    //     port: 1433,
    //     user: 'SA',
    //     server: '192.168.167.220',
    // };
    await sqlDemo_1.default.connect(sql, config_1.sqlConnectionString);
    await gondolajs_1.gondola.navigate("http://localhost:5000/");
});
gondolajs_1.TestCase("MSSQL demo pass", async () => {
    const result = await sqlDemo_1.default.query(sql, `SELECT [CustomerID],[CustomerName],[DeliveryAddressLine1],[DeliveryAddressLine2] FROM [WideWorldImporters].[Sales].[Customers] WHERE [CustomerID] BETWEEN 1 AND 10`);
    await sqlDemo_1.default.checkDataTable("CustomerName", 1, result[0].CustomerName);
    await sqlDemo_1.default.checkDataTable("CustomerName", 2, result[1].CustomerName);
});
gondolajs_1.TestCase("MSSQL demo fail", async () => {
    const result = await sqlDemo_1.default.query(sql, `SELECT [CustomerID],[CustomerName],[DeliveryAddressLine1],[DeliveryAddressLine2] FROM [WideWorldImporters].[Sales].[Customers] WHERE [CustomerID] BETWEEN 1 AND 10`);
    await sqlDemo_1.default.checkDataTable("CustomerName", 1, result[0].CustomerName);
    await sqlDemo_1.default.checkDataTable("CustomerName", 2, result[0].CustomerName);
});
After(async () => {
    sqlDemo_1.default.disconnect(sql);
});
//# sourceMappingURL=sample_test.js.map