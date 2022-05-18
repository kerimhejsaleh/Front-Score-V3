import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  forgot = {

    email: ''

  };

  emailAlert = false;

  showForm = true;

  ngOnInit(): void {
  }

  response:any;
  forgotPassword(){

    this._auth.forgotPassword(this.forgot).subscribe(

      res=>{
  
        this.response = res;
 console.log(res)
 localStorage.setItem('token',this.response.etat);
 console.log(localStorage.getItem('token'))
       if(this.response.etat === 'invalid'){
        this.emailAlert = true;
        setTimeout(() => {
          this.emailAlert = false;
        }, 3000);
       }else{
         this.showForm = false;
       }
      },
      err=>{

        
        
      }

    );

  }

}
