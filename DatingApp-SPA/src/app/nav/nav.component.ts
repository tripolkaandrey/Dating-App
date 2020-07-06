import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit(): void{
  }

  login(): void {
    this.authService.login(this.model).subscribe(success => {
      console.log('Logged in successfuly');
    }, error => {
      console.log('Failed to login');
    });
  }

  loggedIn(): boolean{
    const token: string = localStorage.getItem('token');
    return !!token;
  }

  logout(): void{
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
