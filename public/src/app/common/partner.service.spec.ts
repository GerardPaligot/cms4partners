import { PartnerService } from './partner.service';

describe('PartnerService', () => {
    it('should be created', () => {
        const service = new PartnerService({
            collection() {
                return [];
            }
        } as any);
        expect(service).toBeDefined();
    });

    it('should add a company', () => {
        const add = jest.fn();
        const service = new PartnerService({
            collection() {
                return {
                    add
                };
            }
        } as any);

        service.add({ name: 'gdg', email: [] } as any);
        expect(add).toHaveBeenCalledWith({ name: 'gdg', email: [] });
    });
});
