import { Component, OnInit } from '@angular/core';
import { LayoutService } from './services/layout.service';
import { HostListener } from "@angular/core";
import { AuthService } from '../services/auth.service';
import { EndpointService } from '../services/endpoint.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PrixComponent } from '../companent/prix/prix.component';
import { PrixService } from '../services/prix.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {


  screenWidth: number;
  user: any;
 constructor(public layout: LayoutService , private _auth: AuthService , public path: EndpointService,private dialog: MatDialog,private _prix:PrixService) {
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
openDialog() {

  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
  };
  const dialogRef = this.dialog.open(PrixComponent, dialogConfig);

  dialogRef.afterClosed().subscribe(
      data => {console.log("Dialog output:", data)
    
    
     this._prix.addPrixForm(data).subscribe((res)=>{
      console.log("resss",res)
     })
    }
  );    
}
}
