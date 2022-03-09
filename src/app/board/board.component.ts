import { Component, OnInit } from '@angular/core';
import { LayoutService } from './services/layout.service';
import { HostListener } from "@angular/core";
import { AuthService } from '../services/auth.service';
import { EndpointService } from '../services/endpoint.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {


  screenWidth: number;
  user: any;
 constructor(public layout: LayoutService , private _auth: AuthService , public path: EndpointService) {
      this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
       
        this.screenWidth = window.innerWidth;

        if(this.screenWidth < 950  ){

          this.layout.toggler = false;

        }

  }

ngOnInit(){
  this.user = this._auth.getUserData();
  this._auth.getAdminById(this.user._id).subscribe(
    res=>{
 /*      console.log("ress",res) */
      this.user = res;
    }
  );
}
}
