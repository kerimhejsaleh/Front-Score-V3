import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  id: any;
 token: any;
 
  constructor(private route: Router ,private router: ActivatedRoute , private auth: AuthService){
   
  }
 

  loginUserData = {

 
    password: '',
    confirm: ''

  };

  passwordAlert = false;

  ngOnInit(): void {

    this.id = this.router.snapshot.paramMap.get('id');
    this.token = this.router.snapshot.paramMap.get('token');
   
    
    let toreturn : any;
    this.auth.checkLink(this.id, this.token).subscribe(
      res=>{
        toreturn = true;
      },
      err=>{
        toreturn = false;
        this.route.navigate(['/forgotpassword']);
      }
    );
  }

  success = false;

  reset(){
    if(this.loginUserData.password !== this.loginUserData.confirm){

      this.passwordAlert = true;

    }else{
      this.passwordAlert = false;
      this.auth.resetPassword(this.id, this.token , this.loginUserData).subscribe(
        res=>{
          this.success = true;
          setTimeout(()=>{
            this.route.navigate(['/login']);
          } , 2000);
        },
        err=>{
          this.success = true;
          setTimeout(()=>{
            this.route.navigate(['/login']);
          } , 2000);
          
        }
      )

    }

  }

}
