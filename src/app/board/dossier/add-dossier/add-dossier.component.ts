import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DossierService } from '../services/dossier.service';

@Component({
  selector: 'app-add-dossier',
  templateUrl: './add-dossier.component.html',
  styleUrls: ['./add-dossier.component.css']
})
export class AddDossierComponent implements OnInit {


  constructor(
    private _dossier: DossierService,
    private toastr: ToastrService,
    private router: Router) { }

  showSpinner = false;


  testName = false;


  dossier = {

    name: '',

    added_date: '',

    archived: false,


  }


  ngOnInit(): void {
  }



  createNewdossier() {



    this.testName = false;


    let countError = 0;

    if (this.dossier.name.length == 0) {
      this.testName = true;
      countError++;
    }


 


    if (countError === 0) {
   



      this.showSpinner = true;

      this._dossier.createNewdossier(this.dossier).subscribe(
        res => {

          this.dossier = {

            name: '',
           
            added_date: '',
          
            archived: false,


          };
          this.showSpinner = false;
          this.toastr.success('dossier créé avec succès! ', 'succès!');
          this.router.navigateByUrl('/admin/dossier')

        },
        err => {
          this.showSpinner = false;


          this.toastr.error('Erreur dans la création du dossier ', 'Erreur!');
        }
      );
    }



  }




}
