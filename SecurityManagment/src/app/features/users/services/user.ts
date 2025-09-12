import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '../../../models/useer.model';

@Injectable({
  providedIn: 'root'
})
export class User {
   private _users: UserModel[] = [
       {id: 1, name: 'Julisy', email: 'myemailadres@gmail.com'},
       {id: 2, name: 'Tony', email: 'tony@gmail.com'}
   ];

   getUsers(): Observable<UserModel[]> {
      return of(this._users);
   }

   addUser(user: UserModel): Observable<UserModel> {
      user.id = Date.now();
      this._users.push(user);
      return of(user);
   }

   updateUser(user: UserModel): Observable<UserModel> {
      const index = this._users.findIndex(u=> u.id === user.id);
      this._users[index] = user;
      return of(user);
   }

   deleteUser(id: number): Observable<boolean> {
      this._users = this._users.filter(u=> u.id !== id)
      return of(true);
   }
}
