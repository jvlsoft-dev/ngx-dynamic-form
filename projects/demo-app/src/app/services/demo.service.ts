import { Injectable } from '@angular/core';
import { IFieldService } from 'projects/ngx-dynamic-form/src/public-api';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService implements IFieldService {
  constructor() {}

  all(query?: any, skip?: number, limit?: number) {
    const data = [
      {id: '1', name: 'A'},
      {id: '2', name: 'B'},
      {id: '3', name: 'C'},
      {id: '4', name: 'D'},
      {id: '5', name: 'E'},
      {id: '6', name: 'F'},
      {id: '7', name: 'G'},
      {id: '8', name: 'H'},
      {id: '9', name: 'I'},
      {id: '10', name: 'J'},
      {id: '11', name: 'K'},
      {id: '12', name: 'L'},
    ];
    let count = 0;
    const rows = {
      rows: [
        ...data.filter(
          (e, i) =>
            (!!query?.search ? e.name == query.search : true) &&
            (!!skip ? skip <= i : true) &&
            (!!limit ? ++count <= limit : ++count <= 10)
        ),
      ],
    };
    return of(rows);
  }
}
