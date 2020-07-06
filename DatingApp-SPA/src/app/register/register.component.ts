import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.authService.register(this.model).subscribe(success => {
      console.log('Successfuly registered');
    }, error => {
      console.log(error);
    });
  }

  cancel(): void {
    this.cancelRegister.emit(false);
    console.log('Cancelled');
  }
}
