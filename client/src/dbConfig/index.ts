import { BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob';

const blobSasUrl = "https://devgurukulstorage.blob.core.windows.net/?sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-03-06T11:23:49Z&st=2023-02-06T03:23:49Z&spr=https,http&sig=1rHz3PHMMb3Lwd8gTB7gcZQBGKrU57u%2FlB2uBqh3zPc%3D";
const blobServiceClient = new BlobServiceClient(blobSasUrl);
const containerName = 'knowledebase';

export const blobService = blobServiceClient.getContainerClient(containerName);
