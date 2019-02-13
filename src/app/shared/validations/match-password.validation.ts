import { AbstractControl } from "@angular/forms";

export class MatchPasswordValidation {
    static MatchPassword(control: AbstractControl) {
        const formGroup = control.parent;
        if (formGroup) {
            const passwordControl = formGroup.get('password');
            const confirmPasswordControl = formGroup.get('confirmPassword');
            if (passwordControl && confirmPasswordControl) {
                const password = passwordControl.value;
                const confirmPassword = confirmPasswordControl.value;
                if (password != confirmPassword) {
                    return { matchPassword: true };
                } else {
                    return null
                }
            }
        }
        return null;
    }
}
