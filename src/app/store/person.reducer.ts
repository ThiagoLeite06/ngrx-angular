import { state } from '@angular/animations';
import { of } from 'rxjs';
import { Person } from '../person';
import * as fromPersonActions from './person.actions';

export const initialState: Person[] = [];

export function reducer(
  state = initialState,
  action: fromPersonActions.PersonActions
) {
  switch (action.type) {
    case fromPersonActions.PersonActionTypes.PERSON_ALL:
      return state;

    case fromPersonActions.PersonActionTypes.PERSON_DELETE:
      return state.filter((p) => p._id !== action.payload.id);

    case fromPersonActions.PersonActionTypes.PERSON_NEW:
      return state.concat([action.payload.person]);

    case fromPersonActions.PersonActionTypes.PERSON_UPDATE:
      const people = state.slice();
      const i = people.findIndex((p) => p._id === action.payload.person._id);
      if (i > 0) {
        people[i] = action.payload.person;
      }
      return people;

    default:
      return state;
  }
}
