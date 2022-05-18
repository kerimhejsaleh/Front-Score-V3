import { Component, OnInit,  Inject ,AfterViewInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { DossierService } from '../../../app/board/dossier/services/dossier.service';
import { Observable } from 'rxjs';
import { DoctorDataService } from 'src/app/board/doctor/services/doctor-data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-my-dialog-affect-list',
  templateUrl: './my-dialog-affect-list.component.html',
  styleUrls: ['./my-dialog-affect-list.component.css']
})
export class MyDialogAffectListComponent implements OnInit, AfterViewInit  {

  modalTitle: string;
  allDoctors: any;
  allForm: any;
  idDossier:any;
  getTotalFormAff:[];
  getTableauVrai:[];
  spinerLoading:boolean=false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,    private _doctor: DoctorDataService,    private router: ActivatedRoute,    private _dossier: DossierService, ) {
  this.modalTitle = data.title;
  this.idDossier=data.dossier;
  this.allForm=data.idAffection

  }

  ngOnInit(): void {
    this.spinerLoading=true
    setTimeout(() => {
      this.spinerLoading=false
    }, 5500);
  }
  ngAfterViewInit(){
  
    this._doctor.getAllDoctor().subscribe(
      res => {
   
        this.allDoctors = res;
       /*  this.modalTitle = res[0].name; */
     
 /*     console.log("  this.allDoctors",  this.modalTitle) */
       /*  console.log("this.totalLength",this.totalLength);  */
        
      },
      err => { }
    );
    
  }
   removeItem(array, item) {
    for(let i = 0; i<array.length; i++){
      console.log(array)
  /*     if(array[i] == item) {
        array.splice(array.indexOf(item), 1);
      } */
    }
  }
getData(data,type){
  this.spinerLoading=true;
/*   console.log(data,this.idDossier) */
  if(type==2){
 /*    console.log("hiiiiiii",data) */
  let newDataDossier=[];
  let newDataAllFormTrue=[];
  let newDataAllFormFalse=[];
  let tableDataForms = [];

  let i = 0;
 this.allForm.map((res)=>{
  newDataAllFormTrue.push({idForm:res._id,idDossier:this.idDossier._id,status:true});
  newDataAllFormFalse.push({idForm:res._id,idDossier:this.idDossier._id,status:false});
 })
 let m =0;
 let tableDataForms2 = [];
 let tableDataForms23 = [];
 data.liste_dossier.map((result)=>{
  console.log("result.id!=this.idDossier 1",result.id) ;

   if(this.idDossier._id==result.id){
/*  console.log("tableau 0 ",this.idDossier.name,result.lengthTab) */
/*  console.log("tableDataForms 0 ",tableDataForms,tableDataForms2) */
     i= i +1 ;
    newDataDossier.push({id:result.id,dataForms:newDataAllFormTrue,status:true,cheked:true,lengthTab:result.lengthTab,name:result.name,checkedone:true});
   }else{
    m=m+1;
/*     console.log("tableau 11 ",this.idDossier.name,result.lengthTab) */
 /*     console.log("tableau 1",m,this.idDossier.name,) */
    newDataDossier.push({id:result.id,dataForms:newDataAllFormFalse,status:true,cheked:result.cheked,lengthTab:result.lengthTab,name:result.name,checkedone:result.checkedone});
   }
   setTimeout(() => {
    this._dossier.getMyForm(result.id).subscribe(
      res=>{
        console.log("result.id!=this.idDossier 1xxxxxxxxxx",result.id,res) 
        tableDataForms23.push(res)
     
    
    },
    err=>{
    
    }
    );
  }, 200);

   if(result.id!=this.idDossier._id){
   this._dossier.getMyForm(result.id).subscribe(
    res=>{
       /* console.log(res[0])  */
       if( res[0]!=undefined){
    res[0].key3=result.id
    tableDataForms2.push(res)}
 
},
err=>{

}
);}

 })
 setTimeout(() => {
  console.log(tableDataForms2) 
  this._dossier.getMyForm(this.idDossier._id).subscribe(
    res=>{
 res[0].key3=this.idDossier._id
 tableDataForms2.unshift(res)

},
err=>{

}
);
 }, 2000);
setTimeout(() => {

  let pp=0;
/*   console.log("tableDataForms23",tableDataForms23)
  console.log("tableDataForms2",tableDataForms2)
  console.log("newDataDossier",newDataDossier) */
  tableDataForms23.map((result)=>{
    pp=pp+1
    console.log("result",result)
    result.map((resulttow)=>{
/*       console.log("resulttow",resulttow) */
      tableDataForms2[0].map((resutthree)=>{
        if(newDataDossier[pp-1]==this.idDossier._id){
          newDataDossier[pp-1].lengthTab=newDataDossier[pp-1].dataForms.length
        }
        if(resulttow._id==resutthree._id){
          newDataDossier[pp-1].lengthTab=newDataDossier[pp-1].lengthTab+1
        } 
      })
    })
  })

}, 4000);

  if(this.allForm.length==0){
   console.log(1)
 }else{
  setTimeout(() => {
    data.liste_dossier=newDataDossier
    this._doctor.updateDoctor(data._id ,  data,newDataDossier,"autre").subscribe(
     res=>{
       /* console.log("resultresultresult",this.getTableauVrai,) */
       res.updateddoctor.liste_dossier.map((result)=>{
         if(result.id==this.idDossier._id){
/*            console.log(result) */
           this.getTableauVrai=result
         }
       })
     
     },
     err=>{
/*        console.log(12) */
     }
     );
     let affectation2= []
    this.allForm.map((result)=>{
     let affectatione = {
       user: data._id,
       form: result._id
       }
       affectation2.push({
         user: data._id,
         form:   result._id
         })  
 
    })
    this._doctor.affectAllForms(affectation2).subscribe(
     res=>{
     },
     err=>{
     
     }
     );
  affectation2.map((result)=>{
 
  })
  }, 5000);
  setTimeout(() => {
    this.spinerLoading=false
  }, 5500);
 }  }else{
   let newDataDossier=[]
   let newDataAllFormFalse=[]
   let i = 0;
  this.allForm.map((res)=>{
  
   newDataAllFormFalse.push({idForm:res._id,idDossier:this.idDossier._id,status:false})
  })
  let m =0;
  
   data.liste_dossier.map((result)=>{
     
    if(this.idDossier._id==result.id){
    /*   console.log("result",result) */
      newDataDossier.push({id:result.id,dataForms:newDataAllFormFalse,status:false,lengthTab:0,cheked:false,checkedone:false})}
      else {
       m=m+1;
     /*   console.log("resultss",result.lengthTab) */
     newDataDossier.push({id:result.id,dataForms:newDataAllFormFalse,status:result.status,lengthTab:result.lengthTab-m<0?0:result.lengthTab-m,cheked:result.cheked,checkedone:false})}
   })
   let tableDataForms2 = []
   let tableDataForms23 = []
   let newDataDossierd=[]
   data.liste_dossier.map((result)=>{
     if(this.idDossier._id==result.id){
/*    console.log("tableau 0 ",this.idDossier.name,result.lengthTab) */
  /*  console.log("tableDataForms 0 ",tableDataForms,tableDataForms2) */
       i= i +1 ;
       newDataDossierd.push({id:result.id,dataForms:newDataAllFormFalse,status:true,cheked:true,lengthTab:result.lengthTab,checkedone:false})
     }else{
      m=m+1;
     /*  console.log("tableau 11 ",this.idDossier.name,result.lengthTab) */
   /*     console.log("tableau 1",m,this.idDossier.name,) */
   newDataDossierd.push({id:result.id,dataForms:newDataAllFormFalse,status:true,cheked:result.cheked,lengthTab:result.lengthTab,checkedone:false})
     }
     console.log(result.id)
  /*    console.log("result.id!=this.idDossier 1",result.id!=this.idDossier,result.id,this.idDossier) */
  this._dossier.getMyForm(result.id).subscribe(
    res=>{
      tableDataForms23.push(res)
   
 
},
err=>{

}
);
     if(result.id!=this.idDossier._id){
     this._dossier.getMyForm(result.id).subscribe(
      res=>{
        if( res[0]!=undefined){
          res[0].key3=result.id
          tableDataForms2.push(res)
        }
   
  },
  err=>{
  
  }
  );}
   })

    setTimeout(() => {
    this._dossier.getMyForm(this.idDossier._id).subscribe(
      res=>{
   res[0].key3=this.idDossier._id
   tableDataForms2.unshift(res)
  
  },
  err=>{
  
  }
  );
   }, 2500); 
   setTimeout(() => { 
    let pp= 0;
    tableDataForms23.map((result)=>{
      pp=pp+1
    
      result.map((resulttow)=>{
  
        tableDataForms2[0].map((resutthree)=>{
          if(newDataDossierd[pp-1].id==this.idDossier._id){
            console.log("hhh", newDataDossierd[pp-1])
            newDataDossierd[pp-1].lengthTab=0
          }
          if(resulttow._id==resutthree._id){
            console.log("hhvvvvh", newDataDossierd[pp-1])
           if( newDataDossierd[pp-1].lengthTab==0){
            newDataDossierd[pp-1].lengthTab=0
           }else{
            console.log("hdddddddddhh", newDataDossierd[pp-1])
            newDataDossierd[pp-1].lengthTab=newDataDossierd[pp-1].lengthTab-1
           }
          }
        })
      })
    })


  }, 4000);
   /* data.liste_dossier=newDataDossier */
setTimeout(() => {
  data.liste_dossier=newDataDossierd
    /* console.log("newDataDossier[b3222",data,newDataDossierd)  */
  this._doctor.updateDoctor(data._id ,  data,newDataDossierd,"autre").subscribe(
    res=>{
    
    },
    err=>{
    }
    );
}, 5000);
setTimeout(() => {
  this.spinerLoading=false
}, 5500);
    for( let i=0;i<this.allForm.length ; i++){
      let affectation = {
        user: data._id,
        form:   this.allForm[i]._id
        }
        console.log(affectation)
        this._doctor.disaffect(affectation.user, affectation.form).subscribe(
         res=>{
           
         },
         err=>{
           
         }
       ); 
    }

 }
 
}
affect(id: any){
/* 
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
  ); */
  
  
  }
  affectAll(id: any,form:any){
    
      let affectation = {
      user: id,
      form: form
      }
      
      
      this._doctor.affect(affectation).subscribe(
      res=>{
     /*    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['/admin/forms/affect' , this.idForm])); */
    
     
      },
      err=>{
      
      }
      ); 
      
      
      }
  checkIfFormAffectedToDoctor(form: any){
    /*  console.log("this.getTotalFormAff",this.getTotalFormAff)  */
   let toReturn = false;
   
   for(let i =0 ; i < form.liste_dossier?.length; i++){
    if (form.liste_dossier[i].id==this.idDossier._id&&form.liste_dossier[i].lengthTab==this.allForm.length||form.liste_dossier[i].id==this.idDossier._id&&form.liste_dossier[i].lengthTab>this.allForm.length){
/*      console.log("form.liste_dossier[i].lengthTab",form.liste_dossier[i].lengthTab)
     console.log("this.allForm.length",this.allForm.length) */
      toReturn = true;
      break;
    }
  } 
  
  return toReturn; 
  
  
  }
  getNumberAffecter(j){
         let k = 0 ;

  for(let i =0 ; i < this.allDoctors[j].liste_dossier?.length; i++){
 
    if(this.allDoctors[j].liste_dossier[i].id==this.idDossier._id){
     k=i
    
    }
   }
   if(this.allDoctors[j].liste_dossier[k].lengthTab<0 )
   return 0   +  ' / ' +this.allForm.length 
   else  if(this.allDoctors[j].liste_dossier[k].lengthTab>this.allForm.length )
   return this.allForm.length   +  ' / ' +this.allForm.length 
   else
   return this.allDoctors[j].liste_dossier[k].lengthTab   +  ' / ' +this.allForm.length 

 
}
  disaffect(f: any){

/*     this._doctor.disaffect(this.idUser, f).subscribe(
      res=>{
        
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['/admin/forms/affect' , this.idForm]));

     
      },
      err=>{
        
      }
    ); */
  
  
  }
}
