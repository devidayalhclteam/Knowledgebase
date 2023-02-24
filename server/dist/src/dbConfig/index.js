"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientWithSAS = void 0;
const { TableClient, AzureSASCredential } = require("@azure/data-tables");
const { BlobServiceClient } = require("@azure/storage-blob");
const accName = "devgurukulstorage";
const acckey = "DCbw972fOatlWpJIUTtZOJUcTAwGb4nPscJ+wEACS1QPMoDHbdcPgbwWDZCAr3y8smWOw30WIb48+AStSYrh6Q==";
const tableName = "categories";
const sasToken =
  "sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-03-06T11:23:49Z&st=2023-02-06T03:23:49Z&spr=https,http&sig=1rHz3PHMMb3Lwd8gTB7gcZQBGKrU57u%2FlB2uBqh3zPc%3D";
exports.clientWithSAS = new TableClient(
  `https://${accName}.table.core.windows.net`,
  tableName,
  new AzureSASCredential(sasToken)
);
// export const clientWithSAS = (tableName: string) => {
//     return new TableClient(
//         `https://${accName}.table.core.windows.net`,
//         tableName,
//         new AzureSASCredential(sasToken)
//     );
// }
///////blob service
// const blobServiceClient = new BlobServiceClient(
//     `BlobEndpoint=https://devgurukulstorage.blob.core.windows.net/;QueueEndpoint=https://devgurukulstorage.queue.core.windows.net/;FileEndpoint=https://devgurukulstorage.file.core.windows.net/;TableEndpoint=https://devgurukulstorage.table.core.windows.net/;SharedAccessSignature=sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-03-06T11:23:49Z&st=2023-02-06T03:23:49Z&spr=https,http&sig=1rHz3PHMMb3Lwd8gTB7gcZQBGKrU57u%2FlB2uBqh3zPc%3D`
// );
// const containerClient = blobServiceClient.getContainerClient("knowledebase");
// const blockBlobClient = containerClient.getContainerClient("productImage");
