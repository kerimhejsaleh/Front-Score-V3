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

  updateDoctor(id: any , doctor: any){

    return this.http.put<any>(this.urlDoctor  + id , doctor);

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

    return this.http.post(this.urlAffectation + 'addaffectation' , affectation);

  }


  disaffect(user: any , form: any){

    return this.http.delete(this.urlAffectation + 'deleteaffectation/' +user + '/' + form );

  }


  getAllDoctorAffectationForm(id: any){

    return this.http.get(this.urlAffect + 'getallformbydoctor/' + id);

  }

  updateDoctorPhoto(id:any, photo:any){
    return this.http.put(this.urlDoctor + 'updatephoto/' +id , photo);
  }

}
