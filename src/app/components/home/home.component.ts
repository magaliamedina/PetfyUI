import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users:any;
  httpOptions:any; //headers:HttpHeaders

  //se ejecuta primero el constructor despues el onInit
  constructor(private http: HttpClient) {  
    this.httpOptions={
    headers : new HttpHeaders({
      Authorization: "Bearer " + JSON.parse(localStorage.getItem('user'))?.token
      //console.log(JSON.parse(localStorage.getItem('user'))?.token)
    })
  }
}

  ngOnInit(): void {
    this.getUsers();
    }

  getUsers(){
    //Request
    this.http.get('https://localhost:7102/api/users', this.httpOptions).subscribe({
      //next
    next: response => {this.users= response; console.log(response)},
    //error
    error: error => console.error(error),
    //complete si o si
    complete: () => console.info('complete')
    });
  }

}
