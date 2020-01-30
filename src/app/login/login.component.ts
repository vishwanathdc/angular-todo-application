import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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
  constructor(private router: Router, 
    private hardcodedAuthenticationService : HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      //redirect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin=false;
    }else{
      this.invalidLogin=true;
    }
    
  }

}
