import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  ChartData,
  ChartOptions,
  ChartConfiguration,
  ChartType,
} from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  @Input() pieChartData!: ChartData<'pie', number[], string | string[]>;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      datalabels: {
        formatter: (value: any, ctx: any) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    },
  };

  pieChartType: ChartType = 'pie';
  pieChartPlugins = [DatalabelsPlugin];

  constructor() {}

  ngOnInit(): void {}
}
