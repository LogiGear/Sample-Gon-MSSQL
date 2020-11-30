import { TestCase, TestModule, gondola, importData } from "gondolajs";
import sqlDemo from "../pages/gondola_test_site/sqlDemo";
import { sqlConnectionString }  from "../data/config";
TestModule("MSSQL demo");

var sql = require('mssql');

Before(async () => {
    await sqlDemo.connect(sql, sqlConnectionString);
    await gondola.navigate("http://localhost:5000/");

});

TestCase("MSSQL demo pass", async () => {
    const result = await sqlDemo.query(sql, `SELECT [CustomerID],[CustomerName],[DeliveryAddressLine1],[DeliveryAddressLine2] FROM [WideWorldImporters].[Sales].[Customers] WHERE [CustomerID] BETWEEN 1 AND 10`);
    await sqlDemo.checkDataTable("CustomerName", 1, result[0].CustomerName);
    await sqlDemo.checkDataTable("CustomerName", 2, result[1].CustomerName);
})

TestCase("MSSQL demo fail", async () => {
    const result = await sqlDemo.query(sql, `SELECT [CustomerID],[CustomerName],[DeliveryAddressLine1],[DeliveryAddressLine2] FROM [WideWorldImporters].[Sales].[Customers] WHERE [CustomerID] BETWEEN 1 AND 10`);
    await sqlDemo.checkDataTable("CustomerName", 1, result[0].CustomerName);
    await sqlDemo.checkDataTable("CustomerName", 2, result[0].CustomerName);
})

After(async () => {
    sqlDemo.disconnect(sql);
});