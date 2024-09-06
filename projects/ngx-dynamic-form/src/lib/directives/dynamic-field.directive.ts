import { ComponentFactoryResolver, ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { IField } from '../interfaces/ifield';
import { FormGroup } from '@angular/forms';
import { IFieldConfig } from '../interfaces/ifield-config';

@Directive({
  selector: '[dynamicField]',
  standalone: true,
})
export class DynamicFieldDirective implements IField {
  @Input() config!: IFieldConfig;
  @Input() group!: FormGroup<any>;
  component!: ComponentRef<IField>;

  constructor(
    // TODO: Update deprecated methods.
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    const component = this.resolver.resolveComponentFactory<IField>(
      this.config.type
    );
    this.component = this.container.createComponent(component);
    this.config.component = this.component;
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
    this.component.changeDetectorRef.detectChanges();
  }
}
