import { Pipe, PipeTransform } from '@angular/core';
import { Role } from '../enums/role.enums';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {
    transform(value: number): any {
        return Role[value];
    }
}