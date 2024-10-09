# ngx-dynamic-form

The `ngx-dynamic-form` is a library that works in Angular 16 with Bootstrap 5 and FontAwesome to generate forms in a simple and dynamic way.

## Table of Contents

- [Installation](#installation)
- [Building the Project](#building-the-project)
- [Running Tests](#running-tests)
- [Running the Project](#running-the-project)
- [Usage](#usage)
- [API](#api)

## Installation

To install the library, run:

```bash
yarn add @jvlsoft/ngx-dynamic-form
```

Then add the following styles:

```scss
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.css";
@import "~@ng-select/ng-select/themes/default.theme.css";
```

Note: **Make sure your project has routing, otherwise the library won't work**

## Building the Project

To build the project, run:

```bash
yarn run build ngx-dynamic-form
```

## Running Tests

To execute the unit tests via [Karma](https://karma-runner.github.io), run:

```bash
yarn run test ngx-dynamic-form
```

## Running the Project

To serve the project locally, run:

```bash
yarn run start demo-app
```

Then navigate to `http://localhost:4200/` in your browser.

## Usage

Here's a basic example of how to use the library in your Angular project:

```typescript
import { DynamicFormComponent, FormInputComponent } from '@jvlsoft/ngx-dynamic-form';

@NgModule({
  imports: [
    DynamicFormComponent,
    // other imports
  ],
})
export class AppModule { }
```

In your component:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  template: `<ngx-dynamic-form [config]="formConfig" [onlyFields]="false" title="User" [hasPrefix]="false"
        [saveButton]="false" [canGoBack]="false"></ngx-dynamic-form>`,
})
export class DynamicFormComponent {
  formConfig = [
    {
      type: FormInputComponent,
      name: 'username',
      class: 'col-lg-4 col-md-6 col-sm-12',
      helperText: 'Insert your username',
      label: 'Username',
      placeholder: 'John',
      validation: [Validators.required],
    },
    {
      type: FormInputComponent,
      name: 'email',
      class: 'col-lg-4 col-md-6 col-sm-12',
      helperText: 'Insert your company email',
      label: 'Email',
      placeholder: 'email@dominium',
      validation: [Validators.required],
    },
    // Other fields...
  ];
}
```
For:
![image](https://github.com/user-attachments/assets/f570023c-9bed-4df4-ae1e-8c52edd38b3d)


## API

### IFieldConfig

| Attribute       | Type                          | Description                                                                                   |
|-----------------|-------------------------------|-----------------------------------------------------------------------------------------------|
| type            | Type&lt;IField&gt;            | Type of HTML field.                                                                           |
| name            | string                        | Field name, this name will be the `FormControlName`. Example: 'name', 'email', etc.            |
| class           | string                        | Class to apply to the field. Example: `col-lg-4`.                                             |
| label           | string                        | Component label.                                                                              |
| helperText      | string                        | Text to display below the field.                                                              |
| fieldType       | string                        | HTML type attribute of the field. Example: 'text', 'password', 'email', 'submit', etc.        |
| placeholder     | string                        | Field placeholder.                                                                            |
| style           | object                        | Style to apply to the field. Example: `{ "background-color": "#fff" }`.           |
| order           | number                        | Fields order. Field with order 1 goes first that with order 2.                                 |
| disabled        | boolean                       | If the field will be disabled.                                                                |
| readonly        | boolean                       | If the field is readonly.                                                                     |
| value           | any                           | Default value.                                                                                |
| options         | IFieldOptions                 | Object with other options, this gives the possibility to add other functionalities.           |
| component       | ComponentRef&lt;any&gt;       | Represents a component created by a ComponentFactory. Provides access to the component instance and related objects, and provides the means of destroying the instance. |
| validation      | ValidatorFn[]                 | Array of ValidatorFn.                                                                         |
| asyncValidators | AsyncValidatorFn \| AsyncValidatorFn[] | It accepts an AsyncValidatorFn or AsyncValidatorFn[] for async validator in reactive forms.   |
| updateOn        | 'change' \| 'blur' \| 'submit'| The event name for control to update upon.                                                    |

### IInputConfig

| Attribute  | Type    | Description                          |
|------------|---------|--------------------------------------|
| staticText | string  | A text to display above the field.   |
| min        | number  | min attribute of html input tag.     |
| step       | number  | step attribute of html input tag.    |
| validStyle | boolean | If is true show the valid style.     |

### ICheckboxConfig

| Attribute      | Type    | Description                          |
|----------------|---------|--------------------------------------|
| firstLabel     | string  | Checkbox first label.                |
| lastLabel      | string  | Checkbox last label.                 |
| hasLabelMargin | boolean | Is true if the label has a left margin. |

### IRadioConfig

| Attribute | Type    | Description                          |
|-----------|---------|--------------------------------------|
| class     | string  | Class to apply to options.           |
| options   | any[]   | Radio options.                       |
| checked   | any     | The checked element.                 |

### ISelectConfig

| Attribute       | Type                                      | Description                                                                                   |
|-----------------|-------------------------------------------|-----------------------------------------------------------------------------------------------|
| itemService     | IFieldService                             | Service to get the items from the database.                                                   |
| dynamic         | boolean                                   | Used for scrolling, searching on the server, and handling complex functions. If the data is simple, set dynamic to false. |
| loading         | boolean                                   | Indicates if the component is in a loading state.                                             |
| autoLoadItems   | boolean                                   | If true, items will be automatically loaded.                                                  |
| multiple        | boolean                                   | If true, multiple items can be selected.                                                      |
| clearable       | boolean                                   | If true, the selected item can be cleared.                                                    |
| searchable      | boolean                                   | If true, the select component will be searchable.                                             |
| filter          | { [key: string]: string \| string[] \| number \| number[] \| boolean } | Filter to use on the service search query.                                                    |
| items           | [...[], ...any]                           | Items to be displayed in the select component.                                                |
| bindLabel       | string                                    | The property to bind as the label for each item.                                              |
| bindValue       | string                                    | The property to bind as the value for each item.                                              |
| groupBy         | string                                    | The property to group items by.                                                               |
| limit           | number                                    | The maximum number of items per query.                                                        |
| maxSelectedItems| number                                    | The maximum number of items that can be selected.                                             |
| method          | (query: any, skip: number, limit: number) => Observable\<IRows> | The method to fetch rows, returning an observable.                                            |
| onChange        | EventEmitter\<any>                         | Event emitter for change events.                                                              |
| transformData   | (data: any) => any[]                      | Function to transform the data before displaying it.                                          |

### ITextAreaConfig

| Attribute | Type   | Description              |
|-----------|--------|--------------------------|
| rows      | number | Textarea rows number.    |
