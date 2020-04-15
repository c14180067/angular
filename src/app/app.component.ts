import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Enrico';
  item = [{
    nama: 'Apel',
    harga: 5000
  }, {
    nama: 'Jeruk',
    harga: 10000
  }];
  
  arr = ["aa","bb","cc","dd","ee"];

  show: boolean = true;

}
