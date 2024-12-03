import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports:[RouterOutlet,RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit  {
  userName =''
  // userId = input.required<string>();
  private userService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef)
  // userName = computed(
  //   () => this.userService.users.find(u => u.id === this.userId())?.name
  // );

  ngOnInit(): void {
    console.log(this.activatedRoute);
    const subscrption = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userName = this.userService.users.find(
          (u) => u.id === paramMap.get('userId')
        )?.name || '';
      },       
    }); 
    
    this.destroyRef.onDestroy(() => subscrption.unsubscribe());
  }
}
