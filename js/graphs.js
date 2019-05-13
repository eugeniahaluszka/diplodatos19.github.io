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



function obj2pair(_obj) {
    let result = []
    for (const key in _obj) {
        if (_obj.hasOwnProperty(key)) {
            const element = _obj[key];
            const r = {y: key, x: element}
            result.push(r)
            
        }
    }
    return result
}

function normalize_heatmap(_obj){
    let result = []
    for (const key in _obj) {
        if (_obj.hasOwnProperty(key)) {
            const r = {name: key,
                       data: obj2pair(_obj[key])}
            result.push(r)
        }
    }
    return result
}


function get_heatmap_chart(el_id, series, colors, title) {
    let options = {
        chart: {
            height: 350,
            type: 'heatmap',
        },
        dataLabels: {
            enabled: false
        },
        colors: colors,
        series: series,
        title: {
            text: title
        },

    }

    var chart = new ApexCharts(
        document.querySelector(el_id),
        options
    );

    return chart

}