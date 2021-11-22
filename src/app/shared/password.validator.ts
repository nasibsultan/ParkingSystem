import { AbstractControl } from "@angular/forms";

export function passwordValidator(control: AbstractControl): {[key: string]: any} | null {
    const matched = /admin/.test(control.value);
    return !matched ? {'passwordError': {value: control.value}} : null;
}