import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { IFieldService } from './ifield-service';

export interface IFieldOptions
  extends ICheckboxConfig,
    IInputConfig,
    IRadioConfig,
    ISelectConfig,
    ITextAreaConfig {}

export interface ICheckboxConfig {
  /**
   * Checkbox first label.
   */
  firstLabel?: string;
  /**
   * Checkbox last label.
   */
  lastLabel?: string;
  /**
   * Is true if the label has a left margin.
   */
  hasLabelMargin?: boolean;
}

export interface IInputConfig {
  /**
   * A text to display above the field.
   */
  staticText?: string;
  /**
   * min attribute of html input tag.
   */
  min?: number;
  /**
   * step attribute of html input tag.
   */
  step?: number;
  /**
   * If is true show the valid style.
   */
  validStyle?: boolean;
}

export interface IRadioConfig {
  /**
   * Class to apply to options.
   */
  class?: string;
  /**
   * Radio options.
   */
  options?: any[];
  /**
   * The checked element.
   */
  checked?: any;
}

export interface IRows {
  rows: any[];
}

export interface ISelectConfig {
  /**
   * Service to get the items from the database.
   */
  itemService?: IFieldService;
  /**
   * Used for scrolling, searching on the server, and handling complex functions.
   * If the data is simple, set dynamic to false.
   */
  dynamic?: boolean;
  /**
   * Indicates if the component is in a loading state.
   */
  loading?: boolean;
  /**
   * If true, items will be automatically loaded.
   */
  autoLoadItems?: boolean;
  /**
   * If true, multiple items can be selected.
   */
  multiple?: boolean;
  /**
   * If true, the selected item can be cleared.
   */
  clearable?: boolean;
  /**
   * If true, the select component will be searchable.
   */
  searchable?: boolean;
  /**
   * Filter to use on the service search query.
   */
  filter?: { [key: string]: string | string[] | number | number[] | boolean };
  /**
   * Items to be displayed in the select component.
   */
  items?: [...[], ...any];
  /**
   * The property to bind as the label for each item.
   */
  bindLabel?: string;
  /**
   * The property to bind as the value for each item.
   */
  bindValue?: string;
  /**
   * The property to group items by.
   */
  groupBy?: string;
  /**
   * The maximum number of items per query.
   */
  limit?: number;
  /**
   * The maximum number of items that can be selected.
   */
  maxSelectedItems?: number;
  /**
   * The method to fetch rows, returning an observable.
   */
  method?: (query: any, skip: number, limit: number) => Observable<IRows>;
  /**
   * Event emitter for change events.
   */
  onChange?: EventEmitter<any>;

  /**
   * Function to transform the data before displaying it.
   * @param data The data to be transformed.
   * @returns The transformed data.
   */
  transformData?(data: any): any[];
}

export interface ITextAreaConfig {
  /**
   * Textarea rows number
   */
  rows?: number;
}
