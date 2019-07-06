// 現在問題卡在我只是在操作 DOM 把 script 塞進去，但實際上他根本沒有執行
var chart = document.createElement('DIV')
chart.setAttribute('id', 'container')
document.querySelector('body > div.container.mv4-l.mt3-l').append(chart)

var s1 = document.createElement('script')
var s2 = document.createElement('script')
var s3 = document.createElement('script')
var s4 = document.createElement('script')
var sHighcharts = document.createElement('script')
s1.src = 'https://code.highcharts.com/highcharts.js'
s2.src = 'https://code.highcharts.com/modules/series-label.js'
s3.src = 'https://code.highcharts.com/modules/exporting.js'
s4.src = 'https://code.highcharts.com/modules/export-data.js'

sHighcharts.innerHTML = `
  Highcharts.chart('container', {
  title: {
    text: 'Solar Employment Growth by Sector, 2010-2016'
  },

  subtitle: {
    text: 'Source: thesolarfoundation.com'
  },

  yAxis: {
    title: {
      text: 'Number of Employees'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },

  series: [
    {
      name: 'Installation',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    },
    {
      name: 'Manufacturing',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    },
    {
      name: 'Sales & Distribution',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    },
    {
      name: 'Project Development',
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    },
    {
      name: 'Other',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }
    ]
  }
})
`
document.querySelector('body > div.container.mv4-l.mt3-l').append(s1)
document.querySelector('body > div.container.mv4-l.mt3-l').append(s2)
document.querySelector('body > div.container.mv4-l.mt3-l').append(s3)
document.querySelector('body > div.container.mv4-l.mt3-l').append(s4)
document.querySelector('body > div.container.mv4-l.mt3-l').append(sHighcharts)
