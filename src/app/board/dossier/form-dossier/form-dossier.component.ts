import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DossierService } from '../services/dossier.service';

@Component({
  selector: 'app-form-dossier',
  templateUrl: './form-dossier.component.html',
  styleUrls: ['./form-dossier.component.css']
})
export class FormDossierComponent implements OnInit {


  constructor(private _dossier : DossierService,
    private router: ActivatedRoute,
    private modalService: NgbModal, 
  

) { }


allForms : any;


id: any;

dossier:any;

affectedToast = false;
affectedToastWithSuccess = false;
formAffectations : any;

selecteddossier = 0;

 ngOnInit() : void {


}

ngAfterViewInit(){
  this.id = this.router.snapshot.paramMap.get('id');

this._dossier.getdossierById(this.id).subscribe(
res=>{
this.dossier = res;

},
err=>{

}
);


 this._dossier.getMyForm(this.id).subscribe(
    res=>{
/* console.log("cc",this.id) */

this.allForms = res;

/* console.log("this.allForms",this.allForms) */
},
err=>{

}
);

}

response : any;

open(id:any , i: any) {
  const modalRef = this.modalService.open(NgbdModalContent);
  modalRef.componentInstance.iddossier = this.id ;
  modalRef.componentInstance.idForm = id ;

  modalRef.componentInstance.i = i ;
  
  }









}






@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Confirmation !</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Tu es sure d'effectuer cette action  ?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">non</button>
      <button  type="button" class="btn btn-danger" (click)="action(); activeModal.close()">oui</button>


    </div>
  `
})
export class NgbdModalContent {
  @Input() iddossier;
  @Input() idForm;

  @Input() i;




  constructor(public activeModal: NgbActiveModal,
    private _dossier: DossierService,
    private toastr: ToastrService,
    private router : Router, 
    

    ) {}


    action(){
      if(this.i == 1){
          this.affect(this.idForm);
      }else{
        this.disaffect(this.idForm);
      }
    }


    affect(id: any){

      let affectation = {
      dossier: this.iddossier,
      form: id
      }
      
      
      this._dossier.affect(affectation).subscribe(
      res=>{
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['/admin/dossier/detail' , this.iddossier]));

     
      },
      err=>{
      
      }
      );
      
      
      }


      disaffect(f: any){
        

        this._dossier.disaffect(this.iddossier, f).subscribe(
          res=>{
            
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
            this.router.navigate(['/admin/dossier/detail' , this.iddossier]));
    
         
          },
          err=>{
            
          }
        );
      
      
      }

    }
