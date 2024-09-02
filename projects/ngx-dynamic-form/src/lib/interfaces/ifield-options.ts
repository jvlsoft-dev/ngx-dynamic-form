import { ICheckboxConfig } from "./icheckbox-config";
import { IInputConfig } from "./iinput-config";
import { IRadioConfig } from "./iradio-config";
import { ISelectConfig } from "./iselect-config";
import { ITextAreaConfig } from "./itext-area-config";

export interface IFieldOptions extends IInputConfig, ISelectConfig, IRadioConfig, ITextAreaConfig, ICheckboxConfig {
}
