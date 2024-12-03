import { Routes } from "@angular/router";
import { TasksComponent } from "../tasks/tasks.component";
import { NewTaskComponent } from "../tasks/new-task/new-task.component";

export const routes: Routes = [
    {
        path: '', // <your-domain>/users/<uid>/tasks
        redirectTo: 'tasks',
        pathMatch: 'full'
    },
    {
        path: 'tasks', // <your-domain>/users/<uid>/tasks
        component: TasksComponent
    },
    {
        path: 'tasks/new', // <your-domain>/users/<uid>/tasks/new
        component: NewTaskComponent
    },

] 