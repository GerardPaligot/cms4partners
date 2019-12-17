import { storeFile, generateAndStoreProformaInvoiceAndConvention, generateAndStoreInvoice } from './files';

const getSignedUrl = jest.fn();
const upload = jest.fn();

const update = jest.fn();
const firestore = {
    doc() {
        return {
            update: update.mockImplementation(() => new Promise(resolve => resolve()))
        };
    }
};
jest.mock('../generator/lib/generator', () => {
    return {
        generateConvention: jest.fn().mockImplementation(() => Promise.resolve('convention')),
        generateProformaInvoice: jest.fn().mockImplementation(() => Promise.resolve('proforma')),
        generateInvoice: jest.fn().mockImplementation(() => Promise.resolve('invoice'))
    };
});
jest.mock('firebase-admin', () => {
    return {
        storage: () => {
            return {
                bucket() {
                    return {
                        file: () => {
                            return {
                                getSignedUrl: getSignedUrl.mockImplementation(() => {
                                    return new Promise(resolve => resolve('filePath'));
                                })
                            };
                        },
                        upload: upload.mockImplementation(() => new Promise(resolve => resolve('fileUploadPath')))
                    };
                }
            };
        }
    };
});
describe('files', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    describe('storeFile', () => {
        it('should upload a file', async () => {
            const cloudStorageDest = 'dest/';
            const tempFile = '/tmp/file';

            await storeFile(cloudStorageDest, tempFile);

            expect(upload).toHaveBeenCalled();

            expect(getSignedUrl).toHaveBeenCalledWith({
                action: 'read',
                expires: '03-17-2025'
            });
        });
    });

    describe('generateAndStoreProformaInvoiceAndConvention', () => {
        it('should update the company with the deviceUrl and conventionUrl', async () => {
            await generateAndStoreProformaInvoiceAndConvention(firestore as any, {}, '0', {});

            expect(upload).toHaveBeenCalled();
            expect(upload).toHaveBeenCalled();

            expect(update).toHaveBeenCalledWith({ conventionUrl: 'filePath', devisUrl: 'filePath' });
        });
    });

    describe('generateAndStoreInvoice', () => {
        it('should update the company with the invoiceUrl', async () => {
            await generateAndStoreInvoice(firestore as any, {}, '0', {});

            expect(upload).toHaveBeenCalled();

            expect(update).toHaveBeenCalledWith({ invoiceUrl: 'filePath' });
        });
    });
});
