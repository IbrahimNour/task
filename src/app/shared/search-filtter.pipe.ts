import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/model/user.model';

@Pipe({
  name: 'searchFiltter'
})
export class SearchFiltterPipe implements PipeTransform {

  transform(users: User[], searchValue: string): User[] {
    if(!users || !searchValue) {
      return users;
    }
    return users.filter(user => user.first_name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
