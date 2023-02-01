const { TableClient, AzureSASCredential } = require("@azure/data-tables");

const accName = "devgurukulstorage";
const acckey =
    "DCbw972fOatlWpJIUTtZOJUcTAwGb4nPscJ+wEACS1QPMoDHbdcPgbwWDZCAr3y8smWOw30WIb48+AStSYrh6Q==";
const tableName = "categories";
const sasToken =
    "sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-02-03T13:23:52Z&st=2023-01-27T05:23:52Z&spr=https,http&sig=%2BojbJ1dexlpLa8eMaIu00BA2laKJlTfPTCyxD%2F%2FDTBY%3D";

export const clientWithSAS = new TableClient(
    `https://${accName}.table.core.windows.net`,
    tableName,
    new AzureSASCredential(sasToken)
);
