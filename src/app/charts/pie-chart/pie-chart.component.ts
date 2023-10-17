import { Component, Input } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent {
  @Input() pieChartLabels: string[] = [];

  @Input() pieChartDatasets: { data: number[] }[] = [];

  // Pie
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  pieChartLegend = true;
  pieChartPlugins = [];

  constructor() {}
}
