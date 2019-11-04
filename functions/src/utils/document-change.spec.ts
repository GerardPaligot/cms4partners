import { onDocumentChange } from './document-change';

describe('onDocumentChange', () => {
    it('should set the status sign to pending', () => {
        const before = { status: {} };
        const after = { status: { validated: 'done' } };
        const output = onDocumentChange(before, after);
        expect(output).toEqual({
            conventionUrl: 'https://google.fr',
            devisUrl: 'https://google.fr',
            status: {
                sign: 'pending',
                validated: 'done'
            }
        });
    });

    it('should set the status paid to pending', () => {
        const before = { status: {} };
        const after = { status: { sign: 'done' } };
        const output = onDocumentChange(before, after);
        expect(output).toEqual({
            status: {
                paid: 'pending',
                sign: 'done'
            }
        });
    });

    it('should set the status received to pending', () => {
        const before = { status: {} };
        const after = { status: { paid: 'done' } };
        const output = onDocumentChange(before, after);
        expect(output).toEqual({
            invoiceUrl: 'https://google.fr',
            status: {
                received: 'pending',
                paid: 'done'
            }
        });
    });

    it('should set the status received to pending', () => {
        const before = { status: {} };
        const after = { facebook: 'f', twitter: 't', linkedin: 'l', status: { received: 'pending' } };
        const output = onDocumentChange(before, after);
        expect(output).toEqual({
            status: {
                received: 'done',
                communicated: 'pending'
            }
        });
    });
});
