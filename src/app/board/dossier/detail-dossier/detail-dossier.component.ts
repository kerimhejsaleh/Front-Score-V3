import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { EndpointService } from 'src/app/services/endpoint.service';
import { DossierService } from '../services/dossier.service';

@Component({
  selector: 'app-detail-dossier',
  templateUrl: './detail-dossier.component.html',
  styleUrls: ['./detail-dossier.component.css']
})
export class DetailDossierComponent implements OnInit {


  constructor(private route: ActivatedRoute, 
    private _dossier: DossierService,
    private modalService: NgbModal,
    public path: EndpointService) { }

id: any;
dossier: any;
showSpinner = false;
updateToggle = false;
updateTogglePhoto = false;
open(i: any) {
const modalRef = this.modalService.open(NgbdModalContent);
modalRef.componentInstance.id = this.id ;
modalRef.componentInstance.i = i ;
modalRef.componentInstance.dossier = this.dossier ;




}









ngOnInit(): void {

  this.id = this.route.snapshot.paramMap.get('id');

  this.showSpinner = true;
  
  this._dossier.getdossierById(this.id).subscribe(
  res=>{

  this.dossier = res;
/*   console.log("this.dossier",res) */
  this.showSpinner = false;
  },
  err=>{
  
  
  }
  );
  
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
  @Input() id;
  @Input() dossier;
  @Input() i;




  constructor(public activeModal: NgbActiveModal,private _dossier: DossierService,
    private toastr: ToastrService,
    private router : Router, 

    ) {}


action(){
  if(this.i===1){
    this.deletedossier();
  }else{
    this.updatedossier();
  }
}



  public deletedossier(){

    this._dossier.archivedossier(this.id).subscribe(
      res=>{
          this.router.navigate(['/admin/dossier']);
      },
      err=>{
        
      }
    );

}


updatedossier(){
  console.log(this.dossier)
  this._dossier.updatedossier(this.id ,  this.dossier).subscribe(
  res=>{
  this.toastr.success('dossier mis à jour avec succès! ', 'succès!');
  
  },
  err=>{
    console.log(err);
    
  this.toastr.error('Erreur dans la modification du dossier ', 'Erreur!');
  }
  );
  }



  

}