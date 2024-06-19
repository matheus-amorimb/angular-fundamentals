import {Routes} from '@angular/router';
import {TasksComponent} from "./tasks/tasks.component";
import {NoTaskComponent} from "./no-task/no-task.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'tasks/:userId',
        component: TasksComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
