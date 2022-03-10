import { AfterViewInit, Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DossierService } from '../../dossier/services/dossier.service';
import { FormsDataService } from '../services/forms-data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list-forms',
  templateUrl: './list-forms.component.html',
  styleUrls: ['./list-forms.component.css']
})
export class ListFormsComponent implements OnInit , AfterViewInit {

  constructor(
    private _formData: FormsDataService,
    private _dossier: DossierService,

    private router : Router, 
    ) { }

  forms: any;
  dossier: any;
  listeDossier = [{_id:-1,
  name:"Aucune dossier"}];
  selectedDossier = '';
  idDisaff ;
  formAffectations : any;
  totalLength:any;
  page:number=1;
  allForms:any;
  mesgEmpty: boolean=false;
  nameDossier: string;
  allFrormsNumber;
  ngOnInit(): void {
  
  }
  public options2 = [
    {"id": 1, "name": "a"},
    {"id": 2, "name": "b"},
    {"id": 3, "name": "c"}
  ]
  public selected2 = this.options2[1].id;
  ngAfterViewInit(){

    this._dossier.getAlldossier().subscribe(
      res=>{
        this.dossier = res;
  //  this.listeDossier.push(res) 
    res.map((res)=>{
    return this.listeDossier.push({_id:res._id,name:res.name})
    })
      }
    );

    this._formData.getAllForm().subscribe(
      res=>{
        this.forms = res;
        this.allForms=res;
        this.totalLength=res.length;
 /*        console.log('forms',this.forms) */
      },
      err=>{
     
        
      }
    );
  }

  filterItem(value) {
  this.allForms=  this.forms.filter(d => {
     // console.log(d)
      return (
        d.title.toLowerCase().includes(value.toLowerCase()) 
      )
    })  
    this.allFrormsNumber=this.allForms.length
   // console.log(this.allForms.length)
  }
  getData(data){
/*     console.log("data",data)  */
    this.listeDossier.map((res)=>{
      if(res.name==data[0].Aff1){
     /*   console.log(res._id)  */
      this.idDisaff=res._id
      }
    })
   // console.log("dataa0",data)
  }
  disaffect(id,iddossier){
 /* console.log("dataa0",id,iddossier,this.idDisaff) */
   this._dossier.disaffect(this.idDisaff,id).subscribe(
      res=>{
        
        
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['/admin/dossier/affect' , this.idDisaff]));

     
      },
      err=>{
        
        
      }
    ); 
  
  
  }
  affect(id,iddossier){
   this._formData.getFormById(id).subscribe((ress)=>{
/*     console.log("resbyid", ress.nameAff2[0].Aff1)  */
    

         this.listeDossier.map((res)=>{
           
      if(res._id==iddossier){
        ress.nameAff2.push({Aff1:res.name})
 if(ress.nameAff2[0].Aff1=="Aucune dossier"&&ress.nameAff2.length>1){
   ress.nameAff2.splice(0,1)} 
  
 /*  console.log("ress.nameAff",ress.nameAff2) */
        let affectation = {
          dossier: iddossier,
          form: id,
          nameDossier:ress.nameAff2,
          }
          
       /*    console.log("affectation",affectation) */
          this._dossier.affect(affectation).subscribe(
          res=>{
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
            this.router.navigate(['/admin/dossier/affect' , iddossier]));
    
         
          },
          err=>{
        
          console.log(err);
          
          }
          );
      }
    })
   })
   // console.log("item",id,iddossier)


      
      
      }
  onChange(data: any){
    this.mesgEmpty=false;
    if(data.length == 0){
      this._formData.getAllForm().subscribe(
        res=>{
          this.forms = res;
          this.allForms=res;
         /*  console.log("datatad",res) */
        },
        err=>{
       
        }
      );
    }else{
      this._dossier.getMyForm(data).subscribe(
        res=>{
          this.forms = res;
          this.allForms =res;
          if(res.length==0){
            this.mesgEmpty=true
            this.listeDossier.map((res)=>{
              if(res._id==data){
                this.nameDossier=res.name
              }
            })
           /*  console.log("this.mesgEmpty",data) */
          }
        
        }
      );
    }
    
  }



}


