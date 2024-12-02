import { Routes } from '@angular/router';
import { TaskComponent } from './tasks/task/task.component';


export const routes: Routes = [
    {
        path: 'task', // <your-domain>/tasks
        component: TaskComponent
    }
]