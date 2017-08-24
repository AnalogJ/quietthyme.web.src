export class StoragePrepareBookModel {
    storage_id: string = 'quietthyme'; //by default we upload to the QuietThyme storage, no where else.
    book_id: string = 'NEW';

    storage_size: number; // storage size in bytes
    storage_filename: string; // nice filename for UI.=
    storage_format: string; // file extension
}
