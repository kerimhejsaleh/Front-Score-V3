import { Component, OnInit } from '@angular/core';
import { DossierService } from '../services/dossier.service';

@Component({
  selector: 'app-list-dossier',
  templateUrl: './list-dossier.component.html',
  styleUrls: ['./list-dossier.component.css']
})
export class ListDossierComponent implements OnInit {

  constructor(private _dossierData: DossierService) { }

  dossiers: any;
  page:number=1;
  totalLength:any;
  allDossier:any;
  ngOnInit(): void {
    this._dossierData.getAlldossier().subscribe(
      res=>{
        this.dossiers = res;
        this.totalLength=res.length;
        this.allDossier=  res
      /*   console.log(this.dossiers); */
        
        
      },
      err=>{
     
        
      }
    );
  }
  filterItem(value) {
    this.allDossier=  this.dossiers.filter(d => {
     //  console.log(d)
        return (
          d.name.toLowerCase().includes(value.toLowerCase()) 
        )
      })  
     // this.allFrormsNumber=this.allForms.length
     // console.log(this.allForms.length)
    }
}
