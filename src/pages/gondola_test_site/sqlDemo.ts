import { action, gondola, locator, page } from "gondolajs";

@page
export class sqlDemo {

    @action("check data table", "Check data table")
    public async checkDataTable(columnName:string, row:number, value:string) {
        const cell_locator = `//tr[` + row + `]//td[count(//thead//th[contains(.,"` + columnName + `")]/preceding-sibling::th) + 1]`;
        await gondola.checkText(cell_locator, value);
    }

    public async connect(sql:any, connection:any) {
        try {
            // make sure that any items are correctly URL encoded in the connection string
            await sql.connect(connection);
            return sql
        } catch (err) {
            console.log(err);
        }
    }

    public async disconnect(sql:any) {
        try {
            // make sure that any items are correctly URL encoded in the connection string
            await sql.close();
        } catch (err) {
            console.log(err);
        }
    }

    public async query(sql:any, query:string) {
        try {
            const result = await sql.query(query);
            return result.recordset;
        } catch (err) {
            console.log(err);
        }
    }
}
export default new sqlDemo();
