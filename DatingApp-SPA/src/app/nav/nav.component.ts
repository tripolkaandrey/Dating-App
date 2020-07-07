import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void{
  }

  login(): void {
    this.authService.login(this.model).subscribe(success => {
      this.alertify.success('logged in successfuly');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn(): boolean{
    const token: string = localStorage.getItem('token');
    return !!token;
  }

  logout(): void{
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }

}
