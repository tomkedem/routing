import { Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TasksComponent } from './tasks/tasks.component';

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
                path: 'tasks', // <your-domain>/users/<uid>/tasks
                component: TasksComponent
            },
            {
                path: 'tasks/new', // <your-domain>/users/<uid>/tasks/new
                component: NewTaskComponent
            },

        ] 
    }
]