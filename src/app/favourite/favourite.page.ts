import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalnoteService } from '../globalnote.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

  constructor(private router: Router, public globalvar : GlobalnoteService) { 
    for(var i = 0; i <  this.globalvar.arrayn.length; i++){
      if( this.globalvar.arrayn[i].getfav() == 1){
        this.notesf.push(this.globalvar.arrayn[i]);
        this.getindex.push(i);
        // alert(this.getindex);
      }
    }
  }

  nomor = -1;
  a=1;
  notesf: any[] =[];
  getindex: any = [];
  ngOnInit() {
  }

  godet(a) {
    this.nomor = a;
    this.router.navigate(["/detailnote/" + this.nomor]);
  }

  makefav(a) {
    // alert("aaaaa : "+a);
    this.notesf[a][3] = 0;
    this.globalvar.arrayn[a].setfav(0);
    this.notesf.splice(a,1);
    this.getindex.splice(a,1);
  }

}
