import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface ILogin {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: ILogin = {
    username: '',
    password: '',
  };

  router = inject(Router);

  onLogin() {
    if (
      this.loginObj.username == 'admin' &&
      this.loginObj.password == '112233'
    ) {
      this.router.navigateByUrl('dashboard');
    } else {
      alert('Something wrong');
    }
  }
}
