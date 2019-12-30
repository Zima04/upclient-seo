import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'client-keyses-form',
  templateUrl: './keyses-form.component.html',
  styleUrls: ['./keyses-form.component.scss']
})
export class KeysesFormComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  public postEmail(name: string, email: string, message: string): any {

    let headers = {
      headers:
        new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        })
    };

    // let options = new OptionsType({headers: headers});

    const url: string = 'https://formspree.io/zima04zima@gmail.com';

    // RIGHT
    const _data: string = `name=${name}&email=${email}&message=${message}`;

    return this.httpClient.post(url,
      {
        name: 'test',
        _replyto: 'test@test.com',
        message: 'testMessage'
      }, headers)
      .subscribe(response => {
        debugger;
        console.log('email sent', response);
        return response;
      });
  }

}
