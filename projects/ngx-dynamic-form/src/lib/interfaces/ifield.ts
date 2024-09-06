import { FormGroup } from "@angular/forms";
import { IFieldConfig } from "./ifield-config";

export interface IField {
  /**
   * Field config.
   */
  config: IFieldConfig;
  /**
   * FormGroup that the field belongs.
   */
  group: FormGroup;
}
