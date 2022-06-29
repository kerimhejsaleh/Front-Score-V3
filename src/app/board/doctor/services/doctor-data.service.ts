import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointService } from 'src/app/services/endpoint.service';
@Injectable({
  providedIn: 'root'
})
export class DoctorDataService {

  constructor(private http: HttpClient , public path: EndpointService) { }

  private url = this.path.url + 'user/';

  private urlDoctor = this.path.url + 'doctor/';
  private urlPatient = this.path.url + 'patient/';



  private urlForms = this.path.url + 'forms/';
  private urlAffectation = this.path.url + 'affectation/';
  private urlAffect = this.path.url + 'affect/'

  createNewDoctor(user: any){
console.log(this.urlDoctor,user)
    return this.http.post<any>(this.urlDoctor  , user);
  }



  getAllDoctor(){

    return this.http.get<any>(this.urlDoctor );
    
  }

  getGenreDoctor(g){

    return this.http.get<any>(this.urlDoctor + 'getbygender/' + g);
    
  }


  getDoctorFromArchive(){

    return this.http.get<any>(this.urlDoctor + 'archive/getdoctorfromarchive');
    
  }


  getMyForm(id: any){

    return this.http.get<any>(this.urlAffectation + 'getmyform/' + id);

  }

  restorerDoctor(id: any){

    return this.http.get<any>(this.urlDoctor + 'restorer/' + id);
    
  }

  restorerPatient(id: any){

    return this.http.get<any>(this.urlPatient + 'restorer/' + id);
    
  }
  deletePatient(id: any){

    return this.http.delete<any>(this.urlPatient  + id);

  }


  getDoctorById(id: any){

    return this.http.get<any>(this.urlDoctor  + id);

  }

  deleteDoctor(id: any){

    return this.http.delete<any>(this.urlDoctor  + id);

  }

  archiveDoctor(id: any){
    return this.http.get<any>(this.urlDoctor + 'archived/' + id);
  }


  lockunlock(user: any, lock: any){

   
    
    return this.http.put(this.urlDoctor + 'lockunlock/' + user , lock);

  }

  updateDoctor(id: any , doctor: any,dataDosier,type){
    console.log(doctor)
/*     console.log(id,doctor,dataDosier,type) */
/*      */
 /*    console.log(id)
    console.log(doctor) */
/*     console.log(type)

    console.log(id) */
/*     console.log(dataDosier) */
  let dossierData=[]
  dataDosier.map((res)=>{
    dossierData.push({id:res._id,status:false,lengthTab:0,dataForms:[],valLenght:false,checkedone:false})
  })
/*   console.log(dossierData) */
    let affectation = {
      account_state: doctor.account_state,
      added_date:  doctor.added_date,
      adeli:doctor.adeli,
      adresse:doctor.adresse,
      archived:doctor.archived,
      birthday: doctor.birthday,
      email: doctor.email,
      fax: doctor.fax,
      gender: doctor.gender,
      job: doctor.job,
      lastname: doctor.lastname,
      name: doctor.name,
      password: doctor.password,
      photo: doctor.photo,
      rpps: doctor.rpps,
      tel: doctor.tel,
      _id: doctor._id,
      account_state_dossier_affectation:false,
      liste_dossier:dossierData
      }
/*       console.log("affectation",affectation) */
if(type=="update"){
  console.log(1)
  return this.http.put<any>(this.urlDoctor  + id , affectation);}
  else{
  
    doctor.password=undefined
    console.log(12,doctor)
return this.http.put<any>(this.urlDoctor  + id , doctor);
}
  }




  getAllForm(){
    return this.http.get<any>(this.urlForms + 'getforms');
  }

  getGenderForm(g){
    return this.http.get<any>(this.urlForms + 'getformbygender/'+ g);
  }

  getDoctorAffectaion(user: any){
    return this.http.get(this.urlAffectation + 'getdoctoraffectation/' + user);
  }

  
  affect(affectation: any){
       console.log("affectatioddddddddn",affectation) 
  return this.http.post(this.urlAffectation + 'addaffectation' , affectation);

  }
  multAffect(affectation: any){
    
    console.log("affectation.length",affectation.length) 

    for (let i=0;i<affectation.length;i++){
    /*   console.log("iiiiiiii",i) 
      console.log("affectation[i]",affectation[i])  */
      return this.http.post(this.urlAffectation + 'addaffectation' , affectation[i]);
    }
}
  affectAllForms(affectation: any){
 /*     console.log("affectation",affectation)   */

  return this.http.post(this.urlAffectation + 'addaffectationallforms' , affectation);

}
  disaffect(user: any , form: any){
   /*   console.log("user",user,form) */
    return this.http.delete(this.urlAffectation + 'deleteaffectation/' +user + '/' + form );

  }
  disaffectallForms(user: any , form: any){
/*     console.log("user",user,form) */
    return this.http.delete(this.urlAffectation + 'deleteaffectationallForm/' +user + '/' + form );

  }
  testGetText(){
    /*     console.log("user",user,form) */
        return this.http.get(this.urlAffectation + 'testget/');
    
      }
  getAllDoctorAffectationForm(id: any){

    return this.http.get(this.urlAffect + 'getallformbydoctor/' + id);

  }

  updateDoctorPhoto(id:any, photo:any){
    return this.http.put(this.urlDoctor + 'updatephoto/' +id , photo);
  }

}
