import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  acountStateList;
  acountStateFilteredList;
  onChangeYear (year) {
    console.log(year);
    this.acountStateFilteredList = this.acountStateList.filter(item => item.year == year);
  }
  ngOnInit(): void {
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
    this.onChangeYear(2017);
  }
}
