const { TableClient, AzureSASCredential } = require("@azure/data-tables");
const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");

const accName = "devgurukulstorage";
const acckey = "DCbw972fOatlWpJIUTtZOJUcTAwGb4nPscJ+wEACS1QPMoDHbdcPgbwWDZCAr3y8smWOw30WIb48+AStSYrh6Q==";
const tableName = "categories";
const sasToken = "sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-03-06T11:23:49Z&st=2023-02-06T03:23:49Z&spr=https,http&sig=1rHz3PHMMb3Lwd8gTB7gcZQBGKrU57u%2FlB2uBqh3zPc%3D";

export const clientWithSAS = (tableName: string) => {
    return new TableClient(
        `https://${accName}.table.core.windows.net`,
        tableName,
        new AzureSASCredential(sasToken)
    );
}
