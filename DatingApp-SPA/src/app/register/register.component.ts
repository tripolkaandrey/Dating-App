import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.authService.register(this.model).subscribe(success => {
      this.alertify.success('Successfuly registered');
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel(): void {
    this.cancelRegister.emit(false);
  }
}
