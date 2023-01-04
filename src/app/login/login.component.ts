import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

const acceptablePassword: string = 'hamatake';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  username: FormControl = new FormControl('');
  password: FormControl = new FormControl('');
  public validPassword: boolean = false;

  public validatePassword(): void {
    this.validPassword = this.password.value === acceptablePassword;
  }

  ngOnInit() {}
}
