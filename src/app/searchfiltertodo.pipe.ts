import { Pipe, PipeTransform } from '@angular/core';
import { TodoUser } from './models/todo.model';

@Pipe({
  name: 'searchfiltertodo'
})
export class SearchfiltertodoPipe implements PipeTransform {

  transform(TodosUser: TodoUser[], searchValue: string): TodoUser[] {
    
    if (!TodosUser || !searchValue){
      return TodosUser;
    }

    return TodosUser.filter( todo =>
      todo.completed?.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      todo.userId?.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
