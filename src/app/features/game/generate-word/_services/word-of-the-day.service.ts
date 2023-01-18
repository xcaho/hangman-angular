import {Injectable} from '@angular/core';
import {formatDate} from '@angular/common'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class WordOfTheDayService {
  private today = new Date();

  constructor(private http: HttpClient) {
  }

  formatedDate(date: Date){
    return formatDate(date, 'yyyy-MM-dd', 'en-EN')
  }

  getData(): Observable<any> {
    let url = ('https://api.wordnik.com/v4/words.json/wordOfTheDay?date=' + this.formatedDate(this.today) + '&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5');
    return this.http.get<any>(url);
  }
}
