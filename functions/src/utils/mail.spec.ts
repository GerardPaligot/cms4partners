import { getFrom } from './mail';

describe('sendMail', () => {
    it('should set contact@gdglille.org as FROM', () => {
        expect(getFrom()).toEqual({
            From: {
                Email: 'contact@gdglille.org',
                Name: 'GDG Lille'
            }
        });
    });
});
