function get_bar_chart(el_id, x, y, colors, title=null, subtitle=null) {
    
    let options = {
        chart: {
            height: 380,
            type: 'bar'
        },
        plotOptions: {
            bar: {
                barHeight: '100%',
                distributed: true,
                horizontal: true,
                dataLabels: {
                    position: 'bottom'
                },
            }
        },
        colors: colors,
        dataLabels: {
            enabled: true,
            textAnchor: 'start',
            style: {
                colors: ['#fff']
            },
            formatter: function(val, opt) {
                return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
            },
            offsetX: 0,
            dropShadow: {
            enabled: true
            }
        },
        series: [{
            data: x
        }],
        stroke: {
            width: 1,
        colors: ['#fff']
        },
        xaxis: {
            categories: y
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        title: {
            text: title,
            align: 'center',
            floating: true
        },
        subtitle: {
            text: subtitle,
            align: 'center',
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function() {
                        return ''
                    }
                }
            }
        }
    }

    let chart = new ApexCharts(
        document.querySelector(el_id),
        options
    )
    return chart

}