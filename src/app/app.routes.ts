import { Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent, resloveUserName,  resolveTitle } from './users/user-tasks/user-tasks.component';
import { routes as userRoutes } from './users/users.routes'
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '', // <your-domain>/
        component: NoTaskComponent,
        title:'No task selected'
    },
    {
        path: 'users/:userId', // <your-domain>/users/<uid>
        component: UserTasksComponent,
        children: userRoutes,
        data: {
            message: 'Hello!'
        },
        resolve : {
            userName: resloveUserName
        },
        title: resolveTitle       
    },{
        path: '**',
        component: NotFoundComponent
    }
]