import { TestBed } from '@angular/core/testing';

import { User } from './user';
import { UserModel } from '../../../models/useer.model';
import { of } from 'rxjs';
import { UserList } from '../pages/user-list/user-list';

describe('User', () => {
  let service: User;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(User);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch users', ()=> {
      service.getUsers().subscribe(users => {
          expect(users.length).toBeGreaterThan(0)
      });
  })

  it('should add a user', ()=> {
      const userInformation: UserModel = {id: 0, name: 'Test', email: 'test@gmail.com'};
      service.addUser(userInformation).subscribe(user => {
         expect(user.name).toEqual('Test');
      });
  });

  it('should update a user', ()=> {
      const userToUpdate: UserModel = {id: 1, name: 'Julisy', email: 'updated@gmail.com'};
      service.updateUser(userToUpdate).subscribe(user => {
          expect(user.email).toEqual('updated@gmail.com');
      })
  });

  it('should delete a user', () => {
       const user: UserModel = {id: 2, name: 'Tomy', email: 'updated@gmail.com'};
      service.deleteUser(user.id).subscribe(response => {
         expect(response).toBe(true)
      })
  })

});
