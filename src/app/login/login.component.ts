import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'vishwa';
  password = '123';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  //dependcy injection
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.username==='vishwa' && this.password==='123'){
      //redirect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin=false;
    }else{
      this.invalidLogin=true;
    }
    
  }

}
