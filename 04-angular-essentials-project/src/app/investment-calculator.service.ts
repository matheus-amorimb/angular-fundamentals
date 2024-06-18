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
    const {years, initialInvestment, additionalInvestment, expectedRate} = investmentDetails;

    const investmentValues = [];
    let totalInvested = initialInvestment;
    let totalInterest = 0;

    for (let year = 1; year <= years; year++) {
      const interestEarned = totalInvested * expectedRate/100;
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
