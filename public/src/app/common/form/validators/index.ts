import { ValidatorFn, FormControl } from '@angular/forms';

export function Emails(): ValidatorFn {
    return (control: FormControl): { [key: string]: any } | null => {
        const REGEXP = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

        const value: string = control.value || '';

        try {
            value.split(',').forEach(v => {
                if (v !== '' && !REGEXP.test(v.trim())) {
                    throw new Error('wrong emails');
                }
            });
        } catch (e) {
            return { emails: { value: control.value } };
        }

        return null;
    };
}

export function Siret(): ValidatorFn {
    return (control: FormControl): { [key: string]: any } | null => {
        const value: string = control.value || '';
        const withoutSpace = value.replace(' ', '');
        if (value === '' || /^[\d]{14}$/.test(withoutSpace)) {
            return null;
        } else {
            return { siret: { value: control.value } };
        }
    };
}
