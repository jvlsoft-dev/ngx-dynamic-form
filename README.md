# ngx-dynamic-form

Dynamic form component library for Angular application projects.

## Installation

To install the library, run:

```bash
yarn add ngx-dynamic-form
```

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
import { NgxDynamicFormModule } from 'ngx-dynamic-form';

@NgModule({
  imports: [
    NgxDynamicFormModule,
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
  template: `<ngx-dynamic-form [config]="formConfig"></ngx-dynamic-form>`,
})
export class DynamicFormComponent {
  formConfig = {
    // your form configuration here
  };
}
```
