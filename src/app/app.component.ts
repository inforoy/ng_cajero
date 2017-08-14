import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  toggle: boolean;
  person;
  personList;
  constructor(
    private http: Http
  ) {
  }
  acountStateList;
  acountStateFilteredList;
  onChangeYear (year) {
    this.acountStateFilteredList = this.acountStateList.filter(item => item.year == year);
  }
  toggleSidebar (event) {
    event.preventDefault();
    this.toggle = !this.toggle;
  }
  search(numDoc) {
    console.log(numDoc);
    this.person = this.personList.find(item => item.numDoc === numDoc);
  }
  ngOnInit(): void {
    this.toggle = false;
    this.person = null;
    this.acountStateList = [
      {year: 2017, month: {shorName: 'ENE'}, state: 1},
      {year: 2017, month: {shorName: 'FEB'}, state: 1},
      {year: 2017, month: {shorName: 'MAR'}, state: 1},
      {year: 2017, month: {shorName: 'ABR'}, state: 1},
      {year: 2017, month: {shorName: 'MAY'}, state: 1},
      {year: 2017, month: {shorName: 'JUN'}, state: 2},
      {year: 2017, month: {shorName: 'JUL'}, state: 2},
      {year: 2017, month: {shorName: 'AGO'}, state: 3},
      {year: 2017, month: {shorName: 'SET'}, state: 3},
      {year: 2017, month: {shorName: 'OCT'}, state: 3},
      {year: 2017, month: {shorName: 'NOV'}, state: 3},
      {year: 2017, month: {shorName: 'DIC'}, state: 3},
      {year: 2016, month: {shorName: 'ENE'}, state: 2},
      {year: 2016, month: {shorName: 'FEB'}, state: 2},
      {year: 2016, month: {shorName: 'MAR'}, state: 1},
      {year: 2016, month: {shorName: 'ABR'}, state: 1},
      {year: 2016, month: {shorName: 'MAY'}, state: 1},
      {year: 2016, month: {shorName: 'JUN'}, state: 2},
      {year: 2016, month: {shorName: 'JUL'}, state: 2},
      {year: 2016, month: {shorName: 'AGO'}, state: 3},
      {year: 2016, month: {shorName: 'SET'}, state: 1},
      {year: 2016, month: {shorName: 'OCT'}, state: 1},
      {year: 2016, month: {shorName: 'NOV'}, state: 3},
      {year: 2016, month: {shorName: 'DIC'}, state: 3},
    ];

    this.personList = [
      {
        numDoc: '11111111',
        fullName: 'Cristian Quispe Ramirez',
        accountNumber: '2515487-544-5154',
        amount: '200.00',
        moneyType: 2
      },
      {
        numDoc: '22222222',
        fullName: 'Roy Apellidos',
        accountNumber: '2515-544-5154',
        amount: '1800.00',
        moneyType: 1
      }
    ];
    this.onChangeYear(2017);

    this.http.get('')
      .map(res => res.json)
      .subscribe(res => {

      });
  }
}
