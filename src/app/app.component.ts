import { AppState } from './store/index';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Person } from './person';
import { PersonNew } from './store/person.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  people$: Observable<Person[]>;

  constructor(private store: Store<AppState>) {}

  addNew() {
    const person: Person = {
      name: 'Sheik',
      age: 7,
      address: 'Primeiro de Maio',
      city: 'Guarulhos',
      country: 'Brasil',
      _id: '1',
    };
    this.store.dispatch(new PersonNew({ person }));
  }

  update(p: Person) {}

  delete(p: Person) {}
}
