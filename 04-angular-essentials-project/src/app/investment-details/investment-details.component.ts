import {Component, EventEmitter, inject, input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CurrencyPipe, PercentPipe} from "@angular/common";
import {InvestmentCalculatorService} from "../investment-calculator.service";

@Component({
  selector: 'app-investment-details',
  standalone: true,
  templateUrl: './investment-details.component.html',
  imports: [
    FormsModule,
    CurrencyPipe,
    PercentPipe,
    ReactiveFormsModule
  ],
  styleUrl: './investment-details.component.scss'
})
export class InvestmentDetailsComponent {
  investmentService = inject(InvestmentCalculatorService);

  investmentForm!: FormGroup;

  constructor() {
    this.investmentForm = new FormGroup({
      initialInvestment:
        new FormControl('', [Validators.required]),
      additionalInvestment:
        new FormControl('', [Validators.required]),
      years:
        new FormControl('', [Validators.required]),
      expectedRate:
        new FormControl('', [Validators.required]),
    })
  }

  get initialInvestment() {
    return this.investmentForm.get('initialInvestment');
  }

  get additionalInvestment() {
    return this.investmentForm.get('additionalInvestment');
  }

  get years() {
    return this.investmentForm.get('years');
  }

  get expectedRate() {
    return this.investmentForm.get('expectedRate');
  }

  onSubmit() {

    if (this.investmentForm.invalid) {
      return;
    }

    let investmentDetails = {
      initialInvestment: this.initialInvestment?.value,
      additionalInvestment: this.additionalInvestment?.value,
      years: this.years?.value,
      expectedRate: this.expectedRate?.value,
    };

    const investmentResults = this.investmentService.calculateInvestmentResults(investmentDetails);
  }
}
