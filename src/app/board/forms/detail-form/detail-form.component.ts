import { AfterViewInit, Component, HostListener, Input, OnInit,ElementRef } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { EndpointService } from 'src/app/services/endpoint.service';
import { LayoutService } from '../../services/layout.service';
import { FormsDataService } from '../services/forms-data.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { FormGroup, FormControl , FormArray, FormBuilder, Validators} from '@angular/forms';
import { Options,LabelType,ChangeContext,PointerType   } from 'ng5-slider';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { DialogBodyComponent } from '../../../companent/dialog-body/dialog-body.component';
interface SliderDetails {
  value: number;
  floor: number;
  ceil: number;
  showTicks: boolean;
  index: number ;
  step: number ;
  i: number ;
  s: number ;
  
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
  selector: 'ngbd-modal-lock',
  styleUrls: ['./detail-form.component.css'],
  template: `
    <div class="modal-header">
      <h4 class="modal-title">verrouillage !</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" *ngIf="pass && pass.length > 0">
      <input type="password" [(ngModel)]="password" placeholder="code de verrouillage" [ngClass]="{'form-control' : true, 'm-2' : true ,'error': testPassword}">
      <p class="text-danger ml-2" *ngIf="testPassword" >Minimum 6 caractères</p>
      <p class="text-danger ml-2" *ngIf="incorrectPassword">Mot de pass incorrecte</p>
      <input type="password" [(ngModel)]="repeatPassword" placeholder="confirmer le code de verrouillage" [ngClass]="{'form-control' : true, 'm-2' : true ,'error': testRepeat}">
     
    </div>

    <div *ngIf="!pass || pass.length == 0"  class="modal-body">
      <input type="password" [(ngModel)]="password" placeholder="code de verrouillage" [ngClass]="{'form-control' : true, 'm-2' : true ,'error': testPassword}">
      <p class="text-danger ml-2" *ngIf="testPassword" >Minimum 6 caractères</p>
      <input type="password" [(ngModel)]="repeatPassword" placeholder="confirmer le code de verrouillage" [ngClass]="{'form-control' : true, 'm-2' : true ,'error': testRepeat}">
     
    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-danger" *ngIf="pass && pass.length > 0"  (click)="updatePass(); ">déverrouiller</button>
      <button type="button" class="btn btn-danger" *ngIf="!pass || pass.length == 0"  (click)="newPass();">verrouiller</button>
   
    </div>
  `
})
export class NgbdModalLock implements OnInit {
  @Input() id;
  @Input() pass;
  
  password = '';
  repeatPassword = '';

  testPassword = false;
  testRepeat = false;
  incorrectPassword = false;

  constructor(public activeModal: NgbActiveModal, private _formData: FormsDataService,
    private route : Router,
    ) {
    /*   console.log("formmm",this.pass) */

    }

 
    ngOnInit(): void {

    }
  public updatePass(){
    this.incorrectPassword = false;
    this.testPassword = false;
    this.testRepeat = false;
    if( this.password.length < 6 ){
      this.testPassword = true;
   }
     else if( this.password != this.repeatPassword){
     this.testRepeat = true;
    
   }else {
   
      this._formData.updatePassword(this.id , {password: this.password}).subscribe(
        res=>{
            window.location.reload();
        },
        err=>{
          this.incorrectPassword = true;
          
        }
      );
    }

}


public newPass(){
  this.testPassword = false;
  this.testRepeat = false;
  if( this.password.length < 6 ){
     this.testPassword = true;
  }
    else if( this.password != this.repeatPassword){
    this.testRepeat = true;
   
  }else {
    this._formData.newPassword(this.id , {password: this.password}).subscribe(
      res=>{
          window.location.reload();
      },
      err=>{
    
        
        
      }
    );
 
  }

}

}









@Component({
  selector: 'ngbd-modal-checklock',
  styleUrls: ['./detail-form.component.scss'],
  template: `
    <div class="modal-header">
      <h4 class="modal-title">verrouillage !</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" >
      <input type="password" [(ngModel)]="password" placeholder="code de verrouillage" [ngClass]="{'form-control' : true, 'm-2' : true ,'error': testPassword}">
      <p class="text-danger" *ngIf="incorrectPassword">Mot de pass incorrecte</p>
      <p class="text-danger ml-2" *ngIf="testPassword" >Minimum 6 caractères</p>
   
    </div>

 

    <div class="modal-footer">
      <button type="button" class="btn btn-danger"   (click)="permit(); "> Enregistrer</button>
    
    </div>
  `
})
export class NgbdModalCheckLock implements OnInit {
  @Input() id;
  @Input() form;
  
  password = '';
  

  testPassword = false;
  incorrectPassword = false;
  constructor(public activeModal: NgbActiveModal, private _formData: FormsDataService,
    private route : Router,
    private toastr: ToastrService,
    ) {
    

    }

    ngOnInit(): void {

    }

    permit(){
      this.testPassword = false;
      this.incorrectPassword = false;
      if(this.password.length > 5){
        this.form.password = this.password;
        this._formData.updateForm(this.id , this.form).subscribe(
          res=>{
            this.toastr.success('Formulaire mis à jour avec succès! ', 'succès!');
            window.location.reload();

          },
          err=>{
            this.incorrectPassword = true;
          /*   console.log(this.testPassword); */
            
          }
        );
      }else{
        this.testPassword = true;
      }

    }


}








@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent implements OnInit , AfterViewInit{
/*   @HostListener('input', ['$event.target'])
  onInput(textArea:HTMLTextAreaElement):void {
    this.adjust();
  } */
  constructor(private _formData: FormsDataService,
              public endpoint:EndpointService,
              private router: ActivatedRoute, 
              private toastr: ToastrService,
              private modalService: NgbModal,
              public layout: LayoutService ,
              public matDialog: MatDialog,
              public element:ElementRef,
              private _fb: FormBuilder) { 
                this.productForm = this._fb.group({  
                  name: '',  
                  quantities: this._fb.array([]) ,  
                });  
                this.getScreenSize();
              }
              public productForm: FormGroup;
              @HostListener('window:resize', ['$event'])
              getScreenSize(event?) {
                   
                    this.screenWidth = window.innerWidth;
            
              }
    scoreRange: number; 
  screenWidth: any; 
  id: any;
  scoreRnage: number =0;
  form:any;
  update:string;
  minValue: number = 10;
  maxValue: number = 90;
  sliders: SliderDetails[] = [
  
  
  ];
  dataRange : []
  GenerForm:[
    {
      name:"Homme",
    },
    {
      name:"Femme",
    },
    {
      name:"Indifférent",
    },
    {
      name:"Enfant",
    }
  ]
  sliderOptions(slider): Options {
    return {
      floor: 10,
      ceil: 100,
      step: 10,
      showTicks: true,
  /*     showTicksValues: true, */
 stepsArray:slider.dataRange,  
 translate: (value: number): string => {
  if(slider.dataRange!=undefined){
     if(slider.dataRange[0].nameRange!=undefined)

       return  value + slider.dataRange[0].nameRange;}
},
}
  }
options: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicks: true,
    translate: (value: number, label: LabelType): string => {
/*       switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> $' + value;
        case LabelType.High:
          return '<b>Max price:</b> $' + value;
        default:
          return '$' + value;
      } */
  
      if(value==20){
        return value+ '<b></b> %' + "douleurs peu intenses" ;
      }else{
        return  value+ '<b></b>% ' ;
      }
  },
  getPointerColor: (value: number): string => {
    if (value == 30) {
        return 'red';
    }
    if (value == 60) {
        return 'orange';
    }
    if (value == 90) {
        return 'yellow';
    }
    return '#333';
},



}

  formatLabel(value: number) {
    if (value >= 100) {
      return Math.round(value / 100) + 'kkskskkskksksksk';
    }

    return value;
  }
    options2: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicks: true,
    translate: (value2: number, label: LabelType): string => {
/*       switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> $' + value;
        case LabelType.High:
          return '<b>Max price:</b> $' + value;
        default:
          return '$' + value;
      } */
  
      if(value2==20){
        return value2+ '<b></b> %' + "douleurs peu intenses" ;
      }else{
        return  value2+ '<b></b>% ' ;
      }
  },
  getPointerColor: (value2: number): string => {
    if (value2 == 30) {
        return 'red';
    }
    if (value2 == 60) {
        return 'orange';
    }
    if (value2 == 90) {
        return 'yellow';
    }
    return '#333';
},


}
adjust(){
  const textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
/*   console.log("rrr",textArea) */
/*     textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + "px";
    textArea.style.maxHeight = '100px'; */
}   
openDialog(i,s) {
/*   console.log(",,,,",i,s)
       console.log("this.form.sections[s].questions[i].dataRange",this.form.sections[s].questions[i].dataRange) */
  if(this.form.sections[s].questions[i].dataRange==undefined){
    this.update="new"
  }else{

    this.update="update"
  }
  this.matDialog.open(DialogBodyComponent,{
   
    data: { dataRange: this.form.sections[s].questions[i].dataRange ,update:this.update,indexI:i,indexS:s,nameRange:"range"+i+s,rangeType:this.form.sections[s].questions[i].typRange}
  })
  .afterClosed()
  .subscribe(response => {
     if(response=="cancelrange"){
       if(this.form.sections[s].questions[i].dataRange){
        this.form.sections[s].questions[i].rangeBoolean=true;
       }else{
      this.form.sections[s].questions[i].rangeBoolean=false;
      this.form.sections[s].questions[i].option.ceil=0;}
     }else{

      this.form.sections[s].questions[i].rangeBoolean=true;
      this.form.sections[s].questions[i].typRange=response[0].nameRange
    this.form.sections[s].questions[i].option.ceil=response[response.length-1].value;
   this.form.sections[s].questions[i].dataRange=response;
 this.dataRange=response; 
setTimeout(() => {
  this.dataRange=undefined
}, 1000);   
}
  });
  
}
newRange(i:any,s:any){
/* console.log("gghqhhqhqg",this.sliders.length) */
  this.sliders.push({
    value: 0,
    floor: 0,
    ceil: 100,
    showTicks: true,
    index: 0 ,
    step: 10 ,
    i:i,
    s:s,
  })
/*   console.log('sliders',this.sliders)
  console.log('kksksk',this.sliders.length) */
}         
  drop(event: CdkDragDrop<any[]>, i:any) {
 /*    console.log(1) */
    moveItemInArray(this.form.sections[i].questions, event.previousIndex, event.currentIndex);
  }

  getIndex(obj) {
/* console.log("obj",obj) */
 return this.sliderOptions(obj)
  }
  setNewCeil(newCeil: number,i:any,s:any): void {
    if(newCeil >100){
 /*   console.log('ggg',i,s) */
    }else{
  /*     console.log('ggg',i,s) */
 /*      console.log("this.form.sections[s].questions[i].option.ceil",this.form.sections[s].questions[i].option) */
    // Due to change detection rules in Angular, we need to re-create the options object to apply the change
    const newOptions: Options = Object.assign({}, this.form.sections[s].questions[i].option);
    newOptions.ceil = newCeil;
/*     console.log('newOptions',i,s,newOptions) */
   this.scoreRange=newCeil;
    this.form.sections[s].questions[i].maxRange=newCeil
    this.form.sections[s].questions[i].option.ceil=newCeil;}
  }
  ngOnInit(): void {
   
  /* setTimeout(()=>{
     console.log(this.form) 
      console.log(this.form) 
    },5000) */
 /*    console.log("ggg",this.sliders)  */
    this.id = this.router.snapshot.paramMap.get('id');

    this._formData.getFormById(this.id).subscribe(
      res=>{
        let inc=0;
        this.form = res;
        
       // console.log("this.form",this.form)
      this.form.sections.map((res)=>{
   /*      console.log("kkk",res) */
         res.questions.map((res)=>{
        inc=  inc+1
        /*    this.sliders.push(  {
            value: 1,
            floor: 0,
            ceil: res.maxRange,
            showTicks: true,
            index: inc-1,
            step:10
          },) */
      //  console.log(this.sliders) 

  
      this.sliders.push({
        value: 0,
        floor: 0,
        ceil: 100,
        showTicks: true,
        index: 0 ,
        step: 10 ,
        i:0,
        s:0,
      })
         })
       })  
        
      },
      err=>{
     
        
      }
    );

  }


// Array of different segments in chart
lineChartData: ChartDataSets[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Product A' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Product B' }
];

//Labels shown on the x-axis
lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// Define chart options
lineChartOptions: ChartOptions = {
  responsive: true
};

// Define colors of chart segments
lineChartColors: Color[] = [

  { // dark grey
    backgroundColor: 'rgba(77,83,96,0.2)',
    borderColor: 'rgba(77,83,96,1)',
  },
  { // red
    backgroundColor: 'rgba(255,0,0,0.3)',
    borderColor: 'red',
  }
];

// Set true to show legends
lineChartLegend = true;

// Define type of chart
lineChartType = 'line';

lineChartPlugins = [];

// events
chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
/*   console.log(event, active); */
}

chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
/*   console.log(event, active); */
}
  ngAfterViewInit(){
  /*  console.log("ddd") */
  /*  this.adjust(); */
  }


  open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.id = this.id ;

        modalRef.dismissed.subscribe(value=>{
        //this.deleteForm();
      
      
    });
  }


  openLock() {
    const modalRef = this.modalService.open(NgbdModalLock);
    modalRef.componentInstance.id = this.id ;
    modalRef.componentInstance.pass = this.form.password;

    modalRef.dismissed.subscribe(value=>{
    //this.deleteForm();
  
});
}



countNumberOfQuestion(s,ind){

    
  let count = 0;
  for(let i = 0; i<s; i++){
    count += this.form.sections[i].questions.length;
  
    
  }
  count += ind;

  return count + 1;
}



createNewSection(){
  this.form.sections.push(
    {

      title:'',
      description: '',
      next: 0,
      questions: [
        {

          title:'',
          type:'Text court',
          image:'',
          hint:'',
          numberJourCmnt:'',
          score: 0,
          minRange:0,
          maxRange:100,
          option:{
            value: 1,
            floor: 0,
            ceil: 100,
            showTicks: true,
            step:10
          },
          dataRange:this.dataRange,
          rangeBoolean:true,
          typRange:"",
          obligatoire: false,
          switch: false,
          options: [
            {text: '' , score: 0 , image:'', hint: '' , next: '',textecourt:false }
          ],
          optionsSaint: [
            {text: '' , score: 0 , image:'', hint: '' , next: '',textecourt:false }
          ],
          optioncm: [
            {text: '' , score: 0 , image:'', hint: '' , next: '' }
          ],
          grille:{
            options:[{
              title:''
          }],
          textecourt:false,
            scoreS:[{
              title:'',
              score:0
            }]
          }
        }
      ],
   
   
  
    }
  );

  
}
handleChange(event){
  this.form.genre = event;
 /*  console.log(this.form.genre);  */
  
  
}
createNewQuestion(section: any){
  this.form.sections[section].questions.push(
    {

      title:'',
      type:'Text court',
      image:'',
      hint:'',
      numberJourCmnt:'',
      score: 0,
      minRange:0,
      maxRange:100,
      option:{
        value: 1,
        floor: 0,
        ceil: 100,
        showTicks: true,
        step:10
      },
      dataRange:this.dataRange,
        rangeBoolean:true,
        typRange:"",
        switch: false,
        obligatoire: false,
        options: [
          {text: '' , score: 0 , image:'', hint: '', next:'',textecourt:false }
        ],
        optioncm: [
          {text: '' , score: 0 , image:'', hint: '' , next: '',textecourt:false }
        ],
        optionsSaint: [
          {text: '' , score: 0 , image:'', hint: '' , next: '' }
        ],
        grille:{
          options:[{
            title:''
        }],
        textecourt:false,
          scoreS:[{
            title:'',
            score:0
          }]
        }
   
  
    }
  );

  
}
duplicateNewQuestion(section: any,index:any){
  /*    var suits = ["hearts", "clubs", "Brooks Brothers", "diamonds", "spades"]; */
 
     this.form.sections[section].questions.splice(index, 0,  {
 
       title:this.form.sections[section].questions[index].title,
       type:this.form.sections[section].questions[index].type,
       image:this.form.sections[section].questions[index].image,
       hint:this.form.sections[section].questions[index].hint,
       numberJourCmnt:this.form.sections[section].questions[index].numberJourCmnt,
       score: 0,
       minRange:0,
       maxRange:100,
       option:{
         value: 1,
         floor: 0,
         ceil: 100,
         showTicks: true,
         step:10
       },
       dataRange:this.form.sections[section].questions[index].dataRange,
       rangeBoolean:true,
       typRange:this.form.sections[section].questions[index].typRange,
       switch: false,
       obligatoire: false,
       options:this.form.sections[section].questions[index].options,
       optioncm: this.form.sections[section].questions[index].optioncm,
       optionsSaint:this.form.sections[section].questions[index].optionsSaint,
       grille:this.form.sections[section].questions[index].grille,
     });
     
   }


  switcher(s:any, q:any){
 
      for(let question of this.form.sections[s].questions){
        question.switch = false;
      }
/*   

if(this.form.sections[s].questions[q].switch==true){
  console.log("switch",this.form.sections[s].questions[q].switch)
  this.form.sections[s].questions[q].switch=false
}else{
  console.log("switch1",this.form.sections[s].questions[q].switch)
  this.form.sections[s].questions[q].switch=true
} */
   this.form.sections[s].questions[q].switch = !this.form.sections[s].questions[q].switch;
  }



  changeType(ind: any, type: any , s: any){
    
    this.form.sections[s].questions[ind].type = type;
  }


  removeOption(i: any, o: any, s: any){

    this.form.sections[s].questions[i].options.splice(o , 1);
  }
  removeOptionGrille(i: any, o: any, s: any){

    this.form.sections[s].questions[i].grille.options.splice(o , 1);
  }
  removeOptionGrille2(i: any, o: any, s: any){

    this.form.sections[s].questions[i].grille.scoreS.splice(o , 1);
  }
  removeOptionCm(i: any, o: any, s: any){

    this.form.sections[s].questions[i].optioncm.splice(o , 1);
  }
  changeFormTitle() {
    if (this.form.title.length !== 0) {
      this.testFormTitle = false;
    } else {
      this.testFormTitle = true;
    }
  }
     autoGrowTextZone(e) {
      e.target.style.height = "0px";
      e.target.style.height = (e.target.scrollHeight + 30)+"px";
    }
  countError = 0;
  testFormule = false;
  testFormTitle = false;
  testFormSections = false;
  testFormQuestions = false;
  testFormileScore=false;
  saveChange() {
    this.testFormule = false;
    this.testFormTitle = false;
    this.testFormSections = false;
    this.testFormQuestions = false;
    this.countError = 0;
    if(this.form.calculeFormule){
    this.form.calculeFormule.map((res)=>{
      if(res.formulCalcul.length<11){
        this.toastr.warning(
          `Le formule de calcule est obligatoire`
        );
     /*  console.log(res.formulCalcul.length<11) */}
    })}
    if (this.form.formule.length == 0) {
      this.testFormule = true;
      this.countError++;
    }
    if (this.form.title.length === 0) {
      this.testFormTitle = true;
      this.countError++;
      this.toastr.warning(
        `Le titre de formulaire est obligatoire`
      );
    }

    this.testFormSections = this.form.sections.some((section, idx) => {
    /*   if (section.title.length === 0) {
        this.toastr.warning(
          `Le titre de section N° ${idx + 1} est obligatoire`
        );
      } */
      this.testFormQuestions = Array.from(section.questions).some(
        (question: any, index) => {
          if (question.title.length === 0) {
            this.toastr.warning(
              `Le titre de question N° ${index + 1} de section N° ${
                idx + 1
              } est obligatoire`
            );
          }
          return question.title.length === 0;
        }
      );
 /*      return section.title.length === 0; */
    });

    if (this.testFormSections) {
      this.countError++;
    }
    if (this.testFormQuestions) {
      this.countError++;
    }
    if (this.countError == 0) {
      if (this.form.password.length > 0) {
        const modalRef = this.modalService.open(NgbdModalCheckLock);
        modalRef.componentInstance.id = this.id;
        modalRef.componentInstance.form = this.form;

        modalRef.dismissed.subscribe((value) => {
          //this.deleteForm();
        });
      } else {
        this._formData.updateForm(this.id, this.form).subscribe(
          (res) => {
          /*   console.log("jjdjjdjd",this.form) */
            this.toastr.success(
              'Formulaire mis à jour avec succès! ',
              'succès!'
            );
          },
          (err) => {
            this.toastr.error('Erreur ! ', 'Erreur!');
          }
        );
      }
    }
  }


  deleteMessage(m: any) {
    this.form.messages.splice(m, 1);
  }
  createNewMessage() {
    this.form.messages.push({
      score: '',
      message: '',
    });
  }

  deleteQuestion(i:any, s: any){
    
    this.form.sections[s].questions.splice(i,1);
  }
  removeSaint(i: any, o: any, s: any){
    this.form.sections[s].questions[i].optionsSaint.splice(o , 1);
  }


  deleteSection(s: any){
    
    this.form.sections.splice(s,1);
  }


  result:any;
  staticUrl = '';
  staticUrlQuestion = '';
  in = 0;
  j = 0;

  onAdd(event: any, s:any,type) {
/*     console.log("tyy.",type) */
    if(type=="CM"){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      let file = new FormData();
      file.append('image' , event.target.files[0]);
      reader.onload = (event: any) => {
        this.staticUrl = event.target.result;
        this._formData.uploadImage(file).subscribe(
          res=>{
            this.result = res;
            this.form.sections[s].questions[this.in].optioncm[this.j].image = this.result.image;
            this.result = null;
         
    
            
            this.staticUrl = '';
          },
          err=>{
      
            
          }
        )


       

        
      }
      reader.readAsDataURL(event.target.files[0]);
    }}
    if(type=="CC")
    {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        let file = new FormData();
        file.append('image' , event.target.files[0]);
        reader.onload = (event: any) => {
          this.staticUrl = event.target.result;
          this._formData.uploadImage(file).subscribe(
            res=>{
              this.result = res;
              this.form.sections[s].questions[this.in].options[this.j].image = this.result.image;
              this.result = null;
           
      
              
              this.staticUrl = '';
            },
            err=>{
        
              
            }
          )
  
  
         
  
          
        }
        reader.readAsDataURL(event.target.files[0]);
      }
    }
  }



  onChange(event,i,o,s,type){
    this.form.sections[s].questions[i].optionsSaint[o].hint=type;
/*    console.log("event", this.form.sections[s].questions[i].optionsSaint[o])
   console.log("evensssst",event.target.name,i,o,s)
   console.log("type",type) */
  }
 
  deleteImage(image:any, i:any, o:any, s: any){
    this._formData.deleteImage(image).subscribe(
      res=>{
        this.form.sections[s].questions[i].optioncm[o].image = '';
      
        
      },
      err=>{
    
        
      }
    )
  }

  deleteImageOption(image:any, i:any, o:any, s: any,type){
/*     console.log("tttt",type) */
    if(type=="CM"){
    this._formData.deleteImage(image).subscribe(
      res=>{
 
     /*      console.log("ttsstt",this.form.sections[s].questions[i].optioncm[o].image)   */
        this.form.sections[s].questions[i].optioncm[o].image = '';
     
        
      },
      err=>{
    
        
      }
    )}else{
      this._formData.deleteImage(image).subscribe(
        res=>{
   
         this.form.sections[s].questions[i].options[o].image = '';
          
        },
        err=>{
      
          
        }
      )
    }

  }

  
  onAddQuestion(event: any, s: any) {
    
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      let file = new FormData();
      file.append('image' , event.target.files[0]);
      reader.onload = (event: any) => {
        this.staticUrlQuestion = event.target.result;
        this._formData.uploadImage(file).subscribe(
          res=>{
            this.result = res;
            this.form.sections[s].questions[this.in].image = this.result.image;
            this.result = null;
         
            
            this.staticUrlQuestion = '';
          },
          err=>{
      
            
          }
        )


       

        
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  deleteFormCalule(m: any) {
    this.form.formMuti.splice(m, 1);
  }
  addQuantity(k) {  
    console.log("kkkk",k)
/*       this.quantities().push(this.newQuantity());  
    this.form.calculeFormule[k].val=this.productForm.value.quantities
     console.log(" console.log(,this.productForm.value.quantities)",this.productForm.value.quantities) */
     this.form.formMuti[k].val.push({
       value:0,
       descValue:""
     })
    /*  console.log(" console.log(,this.productForm.value.quantities)",this.form.formMuti[k].val) */
  }  
  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;
  public getNumber(v: string,k){
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;

      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;
      this.form.formMuti[k].formulCalcul === '0'? this.form.formMuti[k].formulCalcul = v: this.form.formMuti[k].formulCalcul += v;
    }
  }
  public clear(k){
    this.currentNumber = '0';
    this.form.formMuti[k].formulCalcul='0'
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
  createNewFormule(){
      this.form.formMuti.push({
        formulCalcul:"",
        val: [{value:null,
        descValue:""}]
      })
    /*   console.log(' this.form.calculeFormule', this.form.formMuti) */
    }
  removeQuantity(k:number,z:number) {  
         this.form.formMuti[k].val.splice(z, 1);
       }   
  deleteImageQuestion(image:any, i:any, s: any){
    this._formData.deleteImage(image).subscribe(
      res=>{
        this.form.sections[s].questions[i].image = '';
      
        
      },
      err=>{
    
        
      }
    )
  }

}
