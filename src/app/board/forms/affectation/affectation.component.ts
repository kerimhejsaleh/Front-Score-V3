import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { EndpointService } from 'src/app/services/endpoint.service';
import { DoctorDataService } from '../../doctor/services/doctor-data.service';
import { FormsDataService } from '../services/forms-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';







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
  @Input() idUser;
  @Input() idForm;

  @Input() i;




  constructor(public activeModal: NgbActiveModal,
    private _doctor: DoctorDataService,
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
      user: this.idUser,
      form: id
      }
      
      
      this._doctor.affect(affectation).subscribe(
      res=>{
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['/admin/forms/affect' , this.idForm]));

     
      },
      err=>{
      
      }
      );
      
      
      }


      disaffect(f: any){

        this._doctor.disaffect(this.idUser, f).subscribe(
          res=>{
            
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
            this.router.navigate(['/admin/forms/affect' , this.idForm]));
    
         
          },
          err=>{
            
          }
        );
      
      
      }

}

















@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent implements OnInit, AfterViewInit {


  constructor(private _docor: DoctorDataService,

              private router: ActivatedRoute, 
              private _formData: FormsDataService,
              public path: EndpointService,
              private _auth: AuthService,
              private modalService: NgbModal, 
              private snackBar:MatSnackBar,

        ) { }


  allDoctors : any;


  id: any;

  form:any;

  affectedToast = false;
  affectedToastWithSuccess = false;


  selectedDoctor = 0;

  formAffectations : any;

  open(id:any , i: any) {
    if(this.form.formMuti[0].formulCalcul=='0'){
      this.snackBar.open(" Veuillez ajouter la formule calculée dans le formulaire "+this.form.title ,"×", {
        duration: 5000,
        // here specify the position
        verticalPosition: 'top'
      });
    }else{
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.idUser = id ;
    modalRef.componentInstance.idForm = this.id ;
  
    modalRef.componentInstance.i = i ;}
    
    }




  ngOnInit(): void {

    

  }

  ngAfterViewInit(){
    this.id = this.router.snapshot.paramMap.get('id');


    
    this._formData.getFormById(this.id).subscribe(
      res=>{
        this.form = res;
        console.log(this.form);
        this._docor.getAllDoctor().subscribe(
          res=>{
            this.allDoctors = res;
            this.getFormAffectation();
          },
          err=>{
            
          }
        );
      },
      err=>{
        
      }
    );


     
 




  }






  getFormAffectation(){
    this._formData.getFormAffectaion(this.id).subscribe(
      res=>{
        this.formAffectations = res;
     
        
      },
      err=>{
      
        
      }
    );
  }




  checkIfFormAffectedToDoctor(doctor: any){
     let toReturn = false;
      for(let i =0 ; i < this.formAffectations?.length; i++){

        if (this.formAffectations[i].user === doctor._id){
          toReturn = true;
          break;
        }

      }

      return toReturn;
  }






  response : any;
  affect(id: any){

    let affectation = {
      user: id,
      form: this.id
    }


    this._formData.affect(affectation).subscribe(
      res=>{
      this.ngOnInit();
      },
      err=>{
    
        
      }
    );


  }

  disaffect(user: any){

    this._formData.disaffect(user, this.id).subscribe(
      res=>{
  
        
        this.ngOnInit();
      },
      err=>{
   
        
      }
    );


  }



}
