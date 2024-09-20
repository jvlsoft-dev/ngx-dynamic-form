import { Injectable } from '@angular/core';
import { IFieldService } from 'projects/ngx-dynamic-form/src/public-api';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService implements IFieldService {
  data = [
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

  constructor() {
    const storedData = localStorage.getItem('example-data');
    if (storedData) {
      this.data = JSON.parse(storedData);
    } else {
      this.saveData();
    }
  }

  all(query?: any, skip?: number, limit?: number) {
    const skipCount = skip ?? 0;
    const limitCount = limit ?? 10;
    const rows = {
      rows: [
        ...this.data
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

  get(id: number | string, search?: any) {
    const instance = this.data.find((e) => e.id == id);
    return of(instance);
  }

  save(item: any, toastBool?: boolean, args?: any) {
    alert(`${item.id ? 'Updated':'Created'} ${item.name}`)
    if (item.id) {
      this.data = this.data.map((e) => {
        if (e.id == item.id) {
          e = item;
        }
        return e
      });
    } else {
      item.id = this.data[this.data.length - 1].id + 1;
      this.data.push(item);
    }
    this.saveData();
    return of(item);
  }

  /**
   * Set the example data in the local host
   */
  saveData() {
    localStorage.setItem('example-data', JSON.stringify(this.data));
  }
}
