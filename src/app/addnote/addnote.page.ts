import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalnoteService } from '../globalnote.service';
import { Note } from '../note';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.page.html',
  styleUrls: ['./addnote.page.scss'],
})
export class AddnotePage implements OnInit {
  

  constructor(private router: Router, public globalvar: GlobalnoteService, public http: HttpClient) { 
    // this.notes = this.globalvar.getnotes();
  }

  ngOnInit() {
  }

  index = 0;
  notes;
  txtjudul: String;
  txtisi: String;
  txtdate: Date = new Date();
  btnklik = false;
  name = "User";
  lnotes = 0;
  nomor = -1;
  // catatan:Note;

  notesfav: any[][] = [];

  save() {
    if (this.txtjudul == null || this.txtisi == null || this.txtdate == null) {
      alert("tidak boleh ada yang kosong");
    }
    else {

      // this.catatan.judul = this.txtjudul;
      this.globalvar.tambahnotes(new Note(this.txtjudul, this.txtisi, this.txtdate));
      // this.globalvar.tambahnotes(this.notes);

      // this.lnotes = this.notes.length;
      // this.notes[this.lnotes] = Array(4);
      // // alert(this.lnotes);
      // this.notes[this.lnotes][0] = this.txtjudul;
      // // alert(this.notes[this.lnotes][0]);
      // this.notes[this.lnotes][1] = this.txtisi;
      // this.notes[this.lnotes][2] = this.txtdate;
      // this.notes[this.lnotes][3] = 0;
      // this.globalvar.setnotes(this.notes);

      // this.http.post('http://192.168.1.6/ionic/dbnotes.php', {
      //   tipe: 'insert',
      //   judul: this.txtjudul,
      //   isi: this.txtisi,
      //   tanggal: this.txtdate 
      // }).subscribe((response) => {
      //   console.log(response);
      // });

      console.log("start kirim"); 
      this.http.post('http://192.168.1.2/ionic/dbnotes.php', {
        tipe: 'insert',
        judul: this.txtjudul,
        isi: this.txtisi,
        tanggal: this.txtdate 
      }).subscribe((response) => {
        console.log("selesai kirim"); 
        console.log(response);
      });

      this.router.navigate(["/listnotes/"]);
    }
  }

  cancel() {
    this.txtjudul = "";
    this.txtisi = "";
    this.txtdate=null;
    this.router.navigate(["/listnotes/"]);
  }
}
