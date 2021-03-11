export class Note {
    judul: string;
    isi: string;
    date: Date;
    fav:Number;

    constructor(judul, isi, date){
        this.judul = judul;
        this.isi = isi;
        this.date = date;
        this.fav = 0;
    }

    public cetak(){
        console.log(this.judul);
    }

    public getjudul(){
        return this.judul;
    }

    public getisi(){
        return this.isi;
    }

    public gettgl(){
        return this.date;
    }

    public getfav(){
        return this.fav;
    }

    public setfav(i){
        this.fav = i;
    }
}
