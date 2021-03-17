import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalnoteService } from '../globalnote.service';
import { Note } from '../note';

@Component({
  selector: 'app-listnotes',
  templateUrl: './listnotes.page.html',
  styleUrls: ['./listnotes.page.scss'],
})
export class ListnotesPage implements OnInit {

  constructor(private router: Router, public globalvar: GlobalnoteService, public http: HttpClient) { 
    // this.notes = this.globalvar.getnotes();

    // this.http.post('http://192.168.1.2/ionic/dbnotes.php', {
    //     tipe: 'getdata'
    //   }).subscribe((response) => {
    //     console.log("selesai kirim"); 
    //     console.log(response);
    //   });

  }

  notes;
  nomor = -1;
  notess:Note;
  ngOnInit() {
  }

  goback(){
    this.router.navigate(["/home/"]);
  }

  godet(a) {
    this.nomor = a;
    this.router.navigate(["/detailnote/" + this.nomor]);
  }

  makefav(a) {
  // alert("aaaaa : "+a);
    if (this.globalvar.arrayn[a].getfav() == 0) {

      this.globalvar.arrayn[a].setfav(1);
      // this.notes[a][3] = 1;
      // this.globalvar.arrayn[a][3] = 1;
    } else {
      this.globalvar.arrayn[a].setfav(0);
      // this.notes[a][3] = 0;
      // this.globalvar.arrayn[a][3] = 0;
    }
  }

}
