export interface IInputConfig {
  /**
   * If the input has a label.
   */
  showLabel?: boolean;
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
}
