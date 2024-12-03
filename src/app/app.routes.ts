import { Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';


export const routes: Routes = [
    {
        path: '', // <your-domain>/
        component: NoTaskComponent
    },
    {
        path: 'users/:userId', // <your-domain>/users/<uid>
        component: UserTasksComponent,
        children:[
            {
                path: 'tasts', // <your-domain>/users/<uid>/tasks
                component: TaskComponent
            },
            {
                path: 'tasts/new', // <your-domain>/users/<uid>/tasks/new
                component: NewTaskComponent
            },

        ] 
    }
]