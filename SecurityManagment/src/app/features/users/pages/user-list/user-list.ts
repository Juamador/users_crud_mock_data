import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../services/user';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList implements OnInit {
  servicio = inject(User)
  ngOnInit(): void {
       this.servicio.getUsers().subscribe((user: any) => {
        console.log(user[0].name)
      })
  }
}
