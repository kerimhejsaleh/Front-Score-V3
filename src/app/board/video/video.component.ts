import { Component, OnInit } from '@angular/core';
import { UrlvideoService } from './services/urlvideo.service';
import { DoctorDataService } from '../doctor/services/doctor-data.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(  private _urlVideo: UrlvideoService,private _urlVideoo :DoctorDataService ,private _domsantitizer :DomSanitizer) { }
 video = {
  url :"",
  etat:false,
  title:"",
  desc:"",
  role: false,
   created_date:"Mon Jul 11 2022 09:56:11 GMT+0100"

}
tableVideo=[]
tableVideod=[]
testUrl ="jpv2tMJJuz0"
 apiLoaded = false;
testtable:any;
selectedtab = 1;
roleP ={
  role:true
}
  ngOnInit(): void {
    if(!this.apiLoaded) {
      const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
         this.apiLoaded = true;
       } 
       console.log(this._domsantitizer.bypassSecurityTrustHtml("https://www.youtube.com/watch?v=GYAB4Td62zI"))
    this._urlVideo.getAllVideo().subscribe((result)=>{
      console.log("resdddddddddddddddss",result)
     this.tableVideo=result.dataUrlP 
     this.tableVideod=result.dataUrlD

    })
   
  }
  addVideo(){
    console.log("https://www.youtube.com/watch?v".length,this.video.url.slice(0,31),"https://www.youtube.com/watch?v"==this.video.url.slice(0,31))
    if("https://www.youtube.com/watch?v"==this.video.url.slice(0,31)&&this.video.title.length>3&&this.video.desc.length >5)
{   this._urlVideo.createNewVideo(this.video).subscribe((result)=>{
      console.log("resdddddddddddddddss",result)
    }) 

  this.reloadPage() }
  }
  roleVideo(role:any){
    console.log(role)
    if(role==1){
      this.video.role=true
    }else{
      this.video.role=false
    }
    console.log(" this.video", this.video)
  }
  reloadPage(){
    if(!this.apiLoaded) {
      const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
         this.apiLoaded = true;
       } 
       console.log(this._domsantitizer.bypassSecurityTrustHtml("https://www.youtube.com/watch?v=GYAB4Td62zI"))
    this._urlVideo.getAllVideo().subscribe((result)=>{
      console.log("resdddddddddddddddss",result)
     this.tableVideo=result.dataUrlP 
     this.tableVideod=result.dataUrlD

    })
  }
  affectVideo(id,role){
    this.roleP.role=role
    this._urlVideo.affectVideo(id,this.roleP).subscribe((result)=>{
      console.log("affectVideo",result)
      if(result){
        this.ngOnInit()
      }
    }) 
  }
  deleteAffectVideo(id,role){
    this._urlVideo.deleteAffect(id,this.roleP).subscribe((result)=>{
      console.log("affectVideo",result)
      if(result){
        this.ngOnInit()
      }
    }) 
  }
  deleteVideo(id){
    this._urlVideo.deleteVideo(id,this.roleP).subscribe((result)=>{
      console.log("affectVideo",result)
      if(result){
        this.ngOnInit()
      }
    }) 
  }
}
