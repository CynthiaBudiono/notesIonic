import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalnoteService } from '../globalnote.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, public globalvar: GlobalnoteService) {}

  gonotes(){
    this.router.navigate(["/listnotes/"]);
  }
  gofav() {
    this.router.navigate(["/favourite/"]);
  }
  tambah() {
    this.router.navigate(["/addnote/"]);
  }
}
