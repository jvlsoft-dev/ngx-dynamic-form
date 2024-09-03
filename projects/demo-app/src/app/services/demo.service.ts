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
      { id: '1', name: 'John Doe', age: 28, color: 'black' },
      { id: '2', name: 'Jane Smith', age: 34, color: 'blue' },
      { id: '3', name: 'Alice Johnson', age: 23, color: 'green' },
      { id: '4', name: 'Robert Brown', age: 45, color: 'red' },
      { id: '5', name: 'Emily Davis', age: 30, color: 'yellow' },
      { id: '6', name: 'Michael Wilson', age: 50, color: 'purple' },
      { id: '7', name: 'Sarah Miller', age: 27, color: 'orange' },
      { id: '8', name: 'David Anderson', age: 38, color: 'pink' },
      { id: '9', name: 'Laura Thomas', age: 22, color: 'brown' },
      { id: '10', name: 'Daniel Jackson', age: 40, color: 'gray' },
      { id: '11', name: 'Sophia White', age: 29, color: 'cyan' },
      { id: '12', name: 'James Harris', age: 33, color: 'magenta' },
    ];

    const skipCount = skip ?? 0;
    const limitCount = limit ?? 10;
    const rows = {
      rows: [
        ...data
          .filter((e, i) =>
            query?.search
              ? e.name.toLowerCase().includes(query.search.toLowerCase())
              : true
          )
          .slice(skipCount, skipCount + limitCount),
      ],
    };

    return of(rows);
  }
}
