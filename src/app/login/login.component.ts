import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

const acceptablePassword: string = 'hamatake';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor() {}
  username: FormControl = new FormControl('');
  password: FormControl = new FormControl('');
  public authenticated: boolean = false;

  public validatePassword(): void {
    this.authenticated = this.password.value === acceptablePassword;
  }
}
