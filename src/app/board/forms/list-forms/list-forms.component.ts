import { AfterViewInit, Component, OnInit,Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DossierService } from '../../dossier/services/dossier.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsDataService } from '../services/forms-data.service';
import { ActivatedRoute, Router } from '@angular/router';
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
      <p>Êtes-vous sûr de supprimer ce formulaire?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">non</button>
      <button type="button" class="btn btn-danger" (click)="deleteForm(); activeModal.close()">oui</button>
   
    </div>
  `
})
export class NgbdModalContent {
  @Input() id;

  constructor(public activeModal: NgbActiveModal, private _formData: FormsDataService,
    private route : Router,
    ) {
   /*    console.log("id",this.id) */
    }
    
 /*    public barChartLables :Label[] = ['2006','2007','2008','2009','2010','2011','2012'];
    public barChartType:ChartType ='bar';
    public barChartLegend = true;
    public barChartPlugins = [pluginDataLabels];
    public barChartData: ChartDataSets[] = [
      {
        data: [65, 59, 80, 81, 56, 55, 40],label: 'Series A'
      },
      {
        data: [28, 48, 40, 19, 86, 27, 90],label: 'Series B'
      }
    ] */
  public deleteForm(){

    this._formData.archiveForm(this.id).subscribe(
      res=>{
          this.route.navigate(['/admin/forms']);
      },
      err=>{
        this.route.navigate(['/admin/forms']);
        
      }
    );

}
public openTab(){
/*   console.log("ddd") */
}

}

@Component({
  selector: 'app-list-forms',
  templateUrl: './list-forms.component.html',
  styleUrls: ['./list-forms.component.css']
})
export class ListFormsComponent implements OnInit , AfterViewInit {

  constructor(
    private _formData: FormsDataService,
    private _dossier: DossierService,
    private modalService: NgbModal,
    private router : Router, 
    ) { }

  forms: any;
  dossier: any;
  listeDossier = [{_id:-1,
  name:"Aucune dossier",cheked:false}];
  selectedDossier = '';
  idDisaff ;
  formAffectations : any;
  totalLength:any;
  page:number=1;
  allForms:any;
  mesgEmpty: boolean=false;
  affEmpty: boolean=false;
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
    return this.listeDossier.push({_id:res._id,name:res.name,cheked:false})
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
      return (
        d.title.toLowerCase().includes(value.toLowerCase()) 
      )
    })  
    this.allFrormsNumber=this.allForms.length
  }
  testData(test,data){
 /*    console.log("form.nameAff",test,data) */
  /*   console.log("test",this.listeDossier)
    console.log("data",data) */
    this.listeDossier.map((res)=>{
      if(res.name==data[0].Aff1){
       /*  console.log("res._id",res._id) */
      this.idDisaff=res._id
      }
    })
    test.nameAff=this.listeDossier
    test.nameAff2.map((result)=>{
/*       console.log("test1",result) */
      test.nameAff.map((result2)=>{
        if(result.Aff1==result2.name){
 /*          console.log("result",result2) */
          result2.cheked=true
   /*        console.log("result24",result2) */
        }
      }) })
  }
  getData(data){
    this.listeDossier.map((res)=>{
      if(res.name==data[0].Aff1){
      this.idDisaff=res._id
      }
    })
  }
  disaffect(id,iddossier,form){
    form.nameAff.map((resultId)=>{
      if(resultId.cheked){
     /*    console.log(resultId) */
        if(form.nameAff2[0].Aff1=="Aucune dossier"){
          /*   form.nameAff[0].cheked=true */
        
          }else{
        
         this._dossier.disaffect(resultId._id,id).subscribe(
            res=>{
              
      
              this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
              this.router.navigate(['/admin/dossier/affect' , this.idDisaff]));
      
           
            },
            err=>{
              console.log("errerrerrerr",err)
              
            }
          ); }
      }
    })

  
  
  }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.id = "eeeeeee" ;

    modalRef.dismissed.subscribe(value=>{
    //this.deleteForm();
  
  
});
}
  affect(id,iddossier,item){
   this.affEmpty=false;
   this._formData.getFormById(id).subscribe((ress)=>{
    ress.nameAff2.map((matDialog)=>{
      if(matDialog.Aff1==item.name){
        this.affEmpty=true;
       // this.open()
      console.log(matDialog)}
    })
         this.listeDossier.map((res)=>{
      if(res._id==iddossier&&!this.affEmpty){
        ress.nameAff2.push({Aff1:res.name})
           if(ress.nameAff2[0].Aff1=="Aucune dossier"&&ress.nameAff2.length>1){
               ress.nameAff2.splice(0,1)} 
                let affectation = {
                  dossier: iddossier,
                  form: id,
                  nameDossier:ress.nameAff2,
                  }
                    this._dossier.affect(affectation).subscribe(
                    res=>{
                      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
                      this.router.navigate(['/admin/dossier/affect' , iddossier])); },
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


