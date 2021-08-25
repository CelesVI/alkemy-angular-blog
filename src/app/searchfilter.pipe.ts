import { Pipe, PipeTransform } from '@angular/core';
import { PostUser } from './models/post.model';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(PostsUser: PostUser[], searchValue: string): PostUser[] {
    
    if (!PostsUser || !searchValue){
      return PostsUser;
    }

    return PostsUser.filter( post =>
      post.title?.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      post.id?.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
