import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Moeda, Conversao, ConversaoResponse } from '../models';
import {MoedaService, ConversorService } from '../services';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  private moedas: Moeda[];
  private conversao: Conversao;
  private possuiErro: boolean;
  private conversaoResponse: ConversaoResponse;

  @ViewChild('conversaoForm') conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService) { }

  ngOnInit() {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  /**
   * Efetua a chamada para conversao de moedas
   * @return: void
   */
  init(): void {
    this.conversao = new Conversao('EUR', 'BRL', null);
    this.possuiErro = false;
  }

  /**
   * Efetua a chamada para a conversao de moedas
   * @return: void
   */
  converter(): void {
    if (this.conversaoForm.valid) {
      this.conversorService
        .converter(this.conversao)
          .subscribe(
            response => this.conversaoResponse = response,
            error => this.possuiErro = true
          );
    }
  }
}
