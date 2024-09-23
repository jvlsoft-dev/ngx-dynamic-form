import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormInputComponent,
  FormSelectComponent,
  GenericAddComponent,
  IFieldService,
  ISelectConfig,
} from 'projects/ngx-dynamic-form/src/public-api';
import { DemoService } from '../../services/demo.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  template: `
  <div class="container d-flex justify-content-center">
    <ngx-dynamic-form class="w-100 mt-5"
      [title]="title"
      [canGoBack]="true"
      [config]="config"
      (save)="submit($event)"
    ></ngx-dynamic-form>
  </div>
  `,
})
export class AddComponent extends GenericAddComponent implements AfterViewInit {
  override service: IFieldService;
  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    cdr: ChangeDetectorRef,
    private _demoService: DemoService
  ) {
    super(router, activatedRoute, cdr);
    this.service = _demoService;
    this.title = 'Person';
    this.config = [
      {
        type: FormInputComponent,
        name: 'name',
        class: 'col-lg-4 col-md-6 col-sm-12',
        helperText: 'Insert the name',
        label: 'Name',
        placeholder: 'John Doe',
        validation: [Validators.required],
      },
      {
        type: FormInputComponent,
        name: 'age',
        class: 'col-lg-4 col-md-6 col-sm-12',
        helperText: 'Insert the age',
        label: 'Age',
        placeholder: 'XX',
        fieldType: 'number',
        validation: [Validators.required],
      },
      {
        type: FormSelectComponent,
        name: 'color',
        class: 'col-lg-4 col-md-6 col-sm-12',
        label: 'Color',
        helperText: 'Select a color',
        options: {
          items: [
            'black',
            'blue',
            'green',
            'red',
            'yellow',
            'purple',
            'orange',
            'pink',
            'brown',
            'gray',
            'cyan',
            'magenta',
          ],
          searchable: true,
        } as ISelectConfig,
      },
    ];
  }
}
