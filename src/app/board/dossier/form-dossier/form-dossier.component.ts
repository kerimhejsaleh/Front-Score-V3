import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DossierService } from '../services/dossier.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MyDialogComponent } from 'src/app/my-dialog/my-dialog.component';
@Component({
  selector: 'app-form-dossier',
  templateUrl: './form-dossier.component.html',
  styleUrls: ['./form-dossier.component.css']
})
export class FormDossierComponent implements OnInit {


  constructor(private _dossier : DossierService,
    private router: ActivatedRoute,
    private modalService: NgbModal, 
    public dialog: MatDialog,
    public dialogAff: MatDialog
  

) { }


allForms : any;


id: any;

dossier:any;

affectedToast = false;
affectedToastWithSuccess = false;
formAffectations : any;

selecteddossier = 0;
ListeDossier=[
]
ListeDossier2=[
]
dossier1 = {

  name: '',

  added_date: '',

  archived: false,
  status:true,
  idDossier:''

}
public async VerfierForm(data,id){
 /*  console.log("dataa1",id) */
let j=0;
data.map((res)=>{

  if(id==res.id){
    console.log(j,j+1,j-1)
    data.splice(j-1,1)
    console.log("dataa1",id)
    console.log("dataa",data)
   /*  console.log(j=j+1)
     */
  }
})
return data
}
public deletedossier(id){
/* console.log(id)
let i=0; */
/* console.log(this.allForms ) */
this.allForms.map((result)=>{
  this.VerfierForm(result.dossierAff,id._id).then((test)=>{
  /*   console.log(test) */
  })
/*   result.dossierAff.map((res)=>{
    console.log(i=i+1)
  }) */
})
/* this.id = this.router.snapshot.paramMap.get('id');

   this._dossier.archivedossierSousDossier(id).subscribe(
    res=>{
      this._dossier.getMyForm(this.id).subscribe(
        res=>{

      },
      err=>{
      
      }
      );
    },
    err=>{
      
    }
  );  */

}
 ngOnInit() : void {
  this._dossier.getAlldossier().subscribe(
    res=>{
     res.map((result)=>{
      if(result.status&&result.idDossier==this.id){
    this.ListeDossier2.push(result)}
     })    
    },
    err=>{
   
      
    }
  );

}
getdata(data,i){
/*   console.log(data,this.allForms ) */
  const dialogConfig = new MatDialogConfig();
dialogConfig.disableClose = true;
dialogConfig.autoFocus = true;
dialogConfig.data = {
id: data._id,
title: data.name,
forms:this.allForms ,
formId:data,
index:i
};
dialogConfig.backdropClass='backdropBackground';
dialogConfig.panelClass='dialog-container-custom' ;
dialogConfig.hasBackdrop=false;
dialogConfig.backdropClass="cdk-overlay-backdrop";
dialogConfig.autoFocus = true;
dialogConfig.width="100%";
const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);
dialogRef.afterClosed().subscribe(result => {
if(result){
  this.id = this.router.snapshot.paramMap.get('id');
    this._dossier.getMyForm(this.id).subscribe(
      res=>{
       this.allForms = res;
  },
  err=>{
  
  }
  );
}
});
}
updateInput(){
  if(this.dossier1.name!=''){
    this.dossier1.idDossier=this.id
/*     this.ListeDossier2.push({name:this.dossier1.name}); */
this.ListeDossier2=[]
    this._dossier.createNewdossier(this.dossier1).subscribe(
      res => {
       /*  console.log("res",this.id) */
        this.dossier = {

          name: '',
         
          added_date: '',
        
          archived: false,


        };
        this._dossier.getAlldossier().subscribe(
          res=>{
           res.map((result)=>{
            if(result.status&&result.idDossier==this.id){
          this.ListeDossier2.push(result)}
           })    
          },
          err=>{
         
            
          }
        );
      },
      err => {
      }
    );
  }
 
  setTimeout(() => {
    this.dossier1.name=''
  }, 100);
 

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
        

        this._dossier.disaffect(this.iddossier, f,"test").subscribe(
          res=>{
            
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
            this.router.navigate(['/admin/dossier/detail' , this.iddossier]));
    
         
          },
          err=>{
            
          }
        );
      
      
      }

    }
