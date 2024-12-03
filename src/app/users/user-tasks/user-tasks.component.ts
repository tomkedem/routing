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
  message = input.required<string>();
  // userId = input.required<string>();
  private userService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef)
  // userName = computed(
  //   () => this.userService.users.find(u => u.id === this.userId())?.name
  // );

  ngOnInit(): void {
  
    
    // console.log('activatedRoute',this.activatedRoute);
    // console.log('snapshot',this.activatedRoute.snapshot.paramMap.get('userId'));
    const subscrption = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        this.userName = this.userService.users.find(
          (u) => u.id === paramMap.get('userId')
        )?.name || '';
        console.log('Input Data1: ' + this.message());
      },       
    }); 
    
    this.destroyRef.onDestroy(() => subscrption.unsubscribe());
  }
}
