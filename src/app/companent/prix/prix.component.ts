import { Component, OnInit,Injectable,Inject,VERSION } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { FormGroup, FormControl , FormArray, FormBuilder, Validators, NgForm} from '@angular/forms';
import { PrixService } from '../../../app/services/prix.service';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';
@Component({
  selector: 'app-prix',
  templateUrl: './prix.component.html',
  styleUrls: ['./prix.component.css']
})
export class PrixComponent implements OnInit {
  form: FormGroup;
  form2: FormGroup;
  description:string;
  desc:string;
  title:string;
  prix:string;
  currency:string;
  desc2:string;
  title2:string;
  prix2:string;
  currency2:string;
  fileToUpload:any;
  validData:boolean=false;
  validData2:boolean=false;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PrixComponent>,
    private http :HttpClient,
    private _prix: PrixService,
    @Inject(MAT_DIALOG_DATA) data) {

    this.description = data.description;
}

  ngOnInit(): void {
    this.form = this.fb.group({
      desc: [this.desc, []],
      title: [this.title, []],
     prix: [this.prix, []],
     currency: [this.currency, []],
  });
  this.form2 = this.fb.group({
    desc2: [this.desc2, []],
    title2: [this.title2, []],
   prix2: [this.prix2, []],
   currency2: [this.currency2, []],
});
  this._prix.getPrixForm().subscribe((result)=>{
  /*   console.log("result",result[0].prix) */
    this.desc=result[0].desc;
    this.title=result[0].title;
    this.prix=result[0].prix;
    this.currency=result[0].currency
    this.form = this.fb.group({
      desc: [this.desc, []],
      title: [this.title, []],
     prix: [this.prix, []],
     currency: [this.currency, []],
  });
 
  })
  this._prix.getPrixForman().subscribe((result)=>{
    /*   console.log("result",result[0].prix) */
      this.desc2=result[0].desc;
      this.title2=result[0].title;
      this.prix2=result[0].prix;
      this.currency2=result[0].currency
      this.form2 = this.fb.group({
        desc2: [this.desc2, []],
        title2: [this.title2, []],
       prix2: [this.prix2, []],
       currency2: [this.currency2, []],
    });
   
    })
  }
  save() {
    if(this.form.value.desc.length>0&&this.form.value.title.length>0&&this.form.value.prix.length>0&&this.form.value.currency.length>0){
      this.validData=false
    this.dialogRef.close(this.form.value);
  }else{
    this.validData=true
    setTimeout(() => {
      this.validData=false
    }, 3000);

  }
}
saveAn() {
  if(this.form2.value.desc2.length>0&&this.form2.value.title2.length>0&&this.form2.value.prix2.length>0&&this.form2.value.currency2.length>0){
    this.validData2=false
  this.dialogRef.close(this.form2.value);
}else{
  this.validData2=true
  setTimeout(() => {
    this.validData2=false
  }, 3000);

}
}
close(){
  this.dialogRef.close(false);
}
}
