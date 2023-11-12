import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart,registerables  } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-bottom-graphs-cards',
  templateUrl: './bottom-graphs-cards.component.html',
  styleUrls: ['./bottom-graphs-cards.component.css']
})
export class BottomGraphsCardsComponent implements OnInit {
  public chart: any;
  public chartline: any;
public chartdoughnut: any;

  ngOnInit(): void {
    this.createChart();
  }
  constructor() {
    Chart.register(...registerables);
}
  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: "Sales",
            data: [50, 70, 90, 120, 150, 180, 200],
            backgroundColor: '#506de2',
            barThickness: 10,
            borderRadius: 10, 
          },
          {
            label: "Profit",
            data: [80, 100, 130, 160, 190, 210, 230],
            backgroundColor: '#e0bbed',
            barThickness: 10,
            borderRadius: 10, 
          }
        ]
      },
      options: {
        // aspectRatio: 2.5,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            beginAtZero: true,
            suggestedMin: 0, // Use suggestedMin instead of min
            max: 250,        // Maximum value on the Y-axis
            ticks: {
              stepSize: 10, // Set the step size for Y-axis ticks to 10
              callback: function(value, index, values) {
                return value; // Customize Y-axis labels as needed
              },
            },
          },
        },
      },
    });
           
    // Line chart
    this.chartline = new Chart("MyChartline", {
      type: 'line',
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          {
            label: "Sales",
            data: [10, 20, 30, 40, 60, 80, 90,100], // Update with your data
            borderColor: '#506de2', // Set the line color
            fill: false, // Prevent filling the area under the line
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          x: {
            display: true,
          },
          y: {
            beginAtZero: false, // Start the Y-axis from $10
            min: 10, // Minimum value on the Y-axis
            max: 200, // Maximum value on the Y-axis
            ticks: {
              stepSize: 20, // Step size for Y-axis labels
            }          }
        }
      }
    });
     //doughnut
  //   this.chartdoughnut = new Chart("chartdoughnut", {
  //     type: 'doughnut', 
  //     data: {
  //       labels: ['Electronics', 'Woman','Men' ],
	//        datasets: [{
  //   label: 'Popular Items',
  //   data: [240, 100,50],
  //   backgroundColor: [
  //     '#4e6ce2',
  //     '#90a6fc','#3d5bcf'
      	
  //   ],
  //   hoverOffset: 4
  // }],
  //     },
  //     options: {
  //       aspectRatio:1
        
  //     }

  //   });
  this.chartdoughnut = new Chart("chartdoughnut", {
    type: 'doughnut',
    data: {
      labels: ['Electronics', 'Woman', 'Men'],
      datasets: [
        {
          label: 'Popular Items',
          data: [240, 100, 50],
          backgroundColor: ['#4e6ce2', '#90a6fc', '#3d5bcf'],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      aspectRatio: 1,
      plugins: {
        datalabels: {
          // color: '#000',
          color: 'white',
          formatter: (value: number, context: any) => {
            if (context.dataIndex ==0) { // Change to the center data index
              return ' \t 50% \n popular \n items';
            }
            return '';
                    },
          font: {
            weight: 'bold',
            size: 16          },
        },
      },
    },
    plugins: [ChartDataLabels], // Register the plugin
  });
  
}
}
