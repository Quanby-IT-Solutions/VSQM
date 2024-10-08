import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-authlayout',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './authlayout.component.html',
  styleUrl: './authlayout.component.css'
})
export class AuthlayoutComponent {

}
