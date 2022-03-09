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

  ngOnInit(): void {
    this._dossierData.getAlldossier().subscribe(
      res=>{
        this.dossiers = res;
      /*   console.log(this.dossiers); */
        
        
      },
      err=>{
     
        
      }
    );
  }

}
