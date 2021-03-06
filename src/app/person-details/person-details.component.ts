import { Component, OnInit, Input } from '@angular/core';

import { Person } from '../Entities/person';
@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  @Input() person: Person;

  constructor() { }

  ngOnInit() {
    this.person = new Person();
    this.person.firstName = 'ישראל';
  }

}
