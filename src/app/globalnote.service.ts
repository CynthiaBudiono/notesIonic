import { Injectable } from '@angular/core';
import { Note } from '../app/note'

@Injectable({
  providedIn: 'root'
})
export class GlobalnoteService {

  // public arrayn: any[][] = [];
  public arrayn: Note[] = [];

  constructor() { }

  public getnotes(){
    return this.arrayn;
  }
  
  public tambahnotes(tn){
    this.arrayn.push(tn);
  }
}
