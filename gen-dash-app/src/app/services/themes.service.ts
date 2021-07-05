import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  
  private storageSub= new Subject<string>();

  constructor() { }

  watchStorage(): Observable<any> {
    console.log(this.storageSub.asObservable());
    return this.storageSub.asObservable();
  }

  setTheme(theme: string){
    localStorage.setItem("theme",theme);
    if(theme=='dark'){
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('unicorn-dark-theme');
    }else{
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('unicorn-dark-theme');
    }
    this.storageSub.next('added');
  }

  getTheme(){
    return localStorage.getItem("theme");
    this.storageSub.next('removed');
  }
}
