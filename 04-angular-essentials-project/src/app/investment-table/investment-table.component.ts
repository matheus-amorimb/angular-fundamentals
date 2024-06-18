import {Component, inject} from '@angular/core';
import {InvestmentCalculatorService} from "../investment-calculator.service";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-investment-table',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-table.component.html',
  styleUrl: './investment-table.component.scss'
})
export class InvestmentTableComponent {

  investmentService = inject(InvestmentCalculatorService);
  // @Input() investmentValues!: any;

  get investmentValues(){
    return this.investmentService.investmentValues;
  }

}
