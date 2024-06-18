import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvestmentCalculatorService {
  investmentValues: any[] = [];

  get investmentResults() {
    return this.investmentValues;
  }

  calculateInvestmentResults(investmentDetails: any): any[] {
    const years = investmentDetails.years;
    const initialInvestment = investmentDetails.initialInvestment;
    const additionalInvestment = investmentDetails.additionalInvestment;
    const expectedRate = investmentDetails.expectedRate / 100; // Convert percentage to decimal

    const investmentValues = [];
    let totalInvested = initialInvestment;
    let totalInterest = 0;

    for (let year = 1; year <= years; year++) {
      const interestEarned = totalInvested * expectedRate;
      totalInterest += interestEarned;
      totalInvested += additionalInvestment;
      totalInvested += interestEarned;

      investmentValues.push({
        year,
        valueEndOfYear: totalInvested,
        interest: interestEarned,
        totalInterest,
        totalAmountInvested: totalInvested + additionalInvestment * year
      });
    }

    this.investmentValues = [...investmentValues];

    return investmentValues;
  }
}
