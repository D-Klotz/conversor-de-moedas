import { Directive, HostListener, ElementRef } from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


@Directive({
  selector: '[appNumero]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumeroDirective,
    multi: true
  }]
})
export class NumeroDirective implements ControlValueAccessor {

  onChange: any;
  onTouched: any;

  constructor(private el: ElementRef) { }

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let valor = $event.target.value;
    const posDescimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if (posDescimais > 0) {
      valor = valor.substr(0, posDescimais) + '.' +
        valor.substr(posDescimais);
    }

    $event.target.value = valor;
    this.onChange(valor);
  }

  /**
   * Registra a função a ser chamada para atualizar
   * valor  na model para o evento onChange
   * @param fn: any
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registra a função a ser chamada para atualizar
   * valor  na model para o evento onChange
   * @param fn: any
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Obtém o valor contido na value
   * @param value: any
   */
  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }

}
