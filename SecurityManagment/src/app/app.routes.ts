import { Routes } from '@angular/router';


export const routes: Routes = [
      {
        path: 'security',
        children: [
            {
                path: 'users',
                loadComponent: ()=> import('./features/users/pages/user-list/user-list').then(c=> c.UserList)
            },
            {
                path: 'users/:id',
                loadComponent: ()=> import('./features/users/pages/user-detail/user-detail').then(c=> c.UserDetail)
            },
            {
                path: 'users/create',
                loadComponent: ()=> import('./features/users/pages/user-form/user-form').then(c=> c.UserForm)
            }
        ]
    },
    {
        path: '',
        loadComponent: ()=> import('./home/home').then(c=> c.Home)
    },
    {
        path: '**',
        loadComponent: ()=> import('./home/home').then(c=> c.Home),
        pathMatch: 'full'
    }
];
