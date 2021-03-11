import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalnoteService } from '../globalnote.service';

@Component({
  selector: 'app-detailnote',
  templateUrl: './detailnote.page.html',
  styleUrls: ['./detailnote.page.scss'],
})
export class DetailnotePage implements OnInit {

  constructor(private router: Router, public globalvar : GlobalnoteService, private route: ActivatedRoute) { }

  catatan;
  isicatatan;
  detailjudul;
  tglcreate;

  ngOnInit() {
    var nomor = this.route.snapshot.paramMap.get("nomor");
    this.detailjudul = this.globalvar.arrayn[nomor].getjudul()
    this.isicatatan = this.globalvar.arrayn[nomor].gettgl()
    this.tglcreate = this.globalvar.arrayn[nomor].getisi()  
    // this.detailjudul = this.globalvar.getnotes()[nomor][0]
    // this.isicatatan = this.globalvar.getnotes()[nomor][1]
    // this.tglcreate = this.globalvar.getnotes()[nomor][2]  
  }

  // goback(){
  //   this.router.navigate(["/listnotes/"]);
  // }
}
