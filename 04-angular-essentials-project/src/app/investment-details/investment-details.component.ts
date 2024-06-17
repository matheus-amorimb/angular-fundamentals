import {Component, EventEmitter, inject, input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CurrencyPipe, PercentPipe} from "@angular/common";
import {InvestmentCalculatorService} from "../investment-calculator.service";

@Component({
  selector: 'app-investment-details',
  standalone: true,
  templateUrl: './investment-details.component.html',
  imports: [
    FormsModule,
    CurrencyPipe,
    PercentPipe
  ],
  styleUrl: './investment-details.component.scss'
})
export class InvestmentDetailsComponent {

  initialInvestment!: number;
  additionalInvestment!: number;
  years!: number;
  expectedRate!: number;
  investmentService = inject(InvestmentCalculatorService);

  @Output() investmentCalculated = new EventEmitter<any[]>();

  onSubmit() {

    let investmentDetails = {
      initialInvestment: this.initialInvestment,
      additionalInvestment: this.additionalInvestment,
      years: this.years,
      expectedRate: this.expectedRate,
      investmentService: this.investmentService,
    };

    const investmentResults = this.investmentService.calculateInvestmentResults(investmentDetails);

    this.investmentCalculated.emit(investmentResults);

  }
}
