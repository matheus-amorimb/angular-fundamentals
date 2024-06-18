import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {InvestmentDetailsComponent} from "./investment-details/investment-details.component";
import {InvestmentTableComponent} from "./investment-table/investment-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, InvestmentDetailsComponent, InvestmentTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '04-angular-essentials-project';
}
