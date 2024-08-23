import { FormGroup } from "@angular/forms";
import { IFieldConfig } from "./ifield-config";

export interface IField {
  config: IFieldConfig;
  group: FormGroup;
}
