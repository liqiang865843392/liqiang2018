
//柱状图
export const bar_option = {
    legend: {
        orient: 'vertical',
        icon: 'circle',
        // y: 'center',
        right: '1%',
        itemWidth: 10,
        itemHeight: 10,
        data :  ['数据1','数据2','数据3'],
        textStyle:{    //图例文字的样式
            fontSize:12,
            color:'rgba(255,255,255,.7)'
        }
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        }
        // formatter: "{c}"
    },
    grid: {
        left: '5%',
        right: '15%',
        bottom: '5%',
        height:'90%',
        width:'83%',
        // containLabel: true
    },
    xAxis : {
        show:false,
        type : 'category',
        axisLine: {
            show:true,
            lineStyle:{
                color: '#fff',
                type:'solid',
                width:0
            }
        },
        axisTick:{
            show:false,
            lineStyle:{
                color:"#fff",
                type:'solid'
            }
        },
        splitLine: {
            show: false,
        },
        axisLabel :{
            show:true,
            color: '#666',
            fontSize: 12,
            rotate:0
        },
        data : ['0:00-2:00','2:00-4:00','4:00-6:00','6:00-8:00','8:00-10:00','10:00-12:00','12:00-14:00','14:00-16:00','16:00-18:00','18:00-20:00','20:00-22:00','22:00-24:00']

        // data :  ['老人','业主','访客','老人','业主','访客','老人','业主','访客','老人','业主','访客',],

    },
    yAxis : {
        type : 'value',
        name:'',
        max:null,
        min:null,
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#EEEEEE'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#eeeeee',
                type: 'solid'
            },
        }
    },
    series : [
        {
            name:'数据1',
            type:'bar',
            barGap: '0%', // Make series be overlap
            barCategoryGap: 1,
            itemStyle: {
            //         color: {
            //             type: 'linear',
            //             x: 0,
            //             y: 0,
            //             x2: 0,
            //             y2: 1,
            //             colorStops: [{
            //                 offset: 0.2,
            //                 color: '#FFEC44' // 0% 处的颜色
            //             }, {
            //                 offset: 0.9,
            //                 color: '#FFA920' // 100% 处的颜色
            //             }],
            //             globalCoord: false // 缺省为 false
            //         },
            },
            stack: '',
            data:[2800,3500,6300,2800,3500,6300,2800,3500,6300,2800,3500,6300],
            label: {
                show: true,
                position: 'top',
                formatter: '{c}%',
                color:'#fff'
            }
        },
        {
            name:'数据2',
            type:'bar',
            stack: '',
            itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#29FF00' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#00FFCF' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
            },
            label: {
                show: false,
                position: 'top',
                formatter: '{c}%'
            },
            data:[1700,2300,5200,1700,2300,5200,1700,2300,5200,1700,2300,5200]
        },
        {
            name:'数据3',
            type:'bar',
            stack: '',
            itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#57A5FF' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#0062FF' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
            },
            label: {
                show: false,
                position: 'top',
                formatter: '{c}%'
            },
            data:[1500,2200,1700,1700,2300,5200,1700,2300,5200,1700,2300,5200]
        },
    ]
};
//面积图
export const area_option = {
    grid: {
        left: '10%',
        right: '18%',
        bottom: '3%',
        height:'90%',
        width:'72%',
        // containLabel: true
    },
    legend: {
        orient: 'vertical',
        icon: 'circle',
        y: 'center',
        right: '3%',
        itemWidth: 10,
        itemHeight: 10,
        data :  ['数据1','数据2'],
        textStyle:{    //图例文字的样式
            fontSize:12,
            color:'rgba(255,255,255,.7)'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        }
    },
    calculable : true,
    xAxis :
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {
                show:false,
                lineStyle:{
                    color: '#fff',
                    type:'solid',
                    width:0
                }
            },
            axisTick: {
                show:false,
                lineStyle:{
                    color:"#fff",
                    type:'solid'
                }
            },
            axisLabel: {
                show:true,
                color: '#666',
                fontSize: 12,
                rotate:0
            },
            splitLine: {
                show: false,
            },
            data : ['0:00-2:00','2:00-4:00','4:00-6:00','6:00-8:00','8:00-10:00','10:00-12:00','12:00-14:00','14:00-16:00','16:00-18:00','18:00-20:00','20:00-22:00','22:00-24:00']
        },
    yAxis : {
        type : 'value',
        max:null,
        min:null,
        axisLabel: {
            show: false,
            interval: '0',
            color: '',
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#EEEEEE'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#eeeeee',
                type: 'solid'
            },
        }
    }
    ,
    series : [
        {
            name:'数据1',
            type:'line',
            showSymbol:false,
            areaStyle: {
                normal: {
                    type: 'default',
                    color: '#7ED321'
                }
            },
            lineStyle: {
                width: 1,
                color:'rgba(126,211,33,.5)'
            },
            itemStyle: {
                normal: {
                    color: '#7ED321',
                    label: {
                        show: false,
                        position: 'top',
                        formatter: '{c}%'
                    }
                }
            },
            smooth:true,
            data:[0,375,380,449,114,267,142,318,357,193,150,0]
        },
        {
            name:'数据2',
            type:'line',
            showSymbol:false,
            areaStyle: {
                normal: {type: 'default',
                    color: '#436EFF'
                }
            },
            lineStyle: {
                width: 1,
                color:'rgba(255,255,255,.2)'
            },
            itemStyle: {
                normal: {
                    color: '#436EFF',
                    label: {
                        show: false,
                        position: 'top',
                        formatter: '{c}%'
                    }
                }
            },
            smooth:true,
            data:[0, 120, 221,654, 910, 630, 310, 521, 354, 560, 200, 0]
        }
    ]
};
//横向柱状图
export const bar_option_1 = {
    backgroundColor: '#000',
    grid: [{
        left: '10',
        bottom: '20',
        top: 3,
        right: 30
    }],
    xAxis: {
        show: false
    },
    yAxis: {
        data: ['违规外联', '拒绝服务', '漏洞利用', '随便吧啥', '随便吧啥1'],
        show: true,
        axisLabel: {
            inside: true,
            verticalAlign: 'middle',
            lineHeight: 1500,
            color: '#fff',
            fontSize: 20
        },
        axisLine: {
            show: true
        }
    },
    series: [
        { // 背景图
            name: '',
            type: 'pictorialBar',
            symbol: 'image://data:image/svg+xml;base64,PHN2ZyBpZD0n5aSW6YOo5Zyw55CDLeiDjOaZr+adoScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzYwJyBoZWlnaHQ9JzY4Jz4KICA8bWV0YWRhdGE+PD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLycgeDp4bXB0az0nQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAnPgogICA8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJy8+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0ndyc/PjwvbWV0YWRhdGE+CjxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICMxYjI4MzY7CiAgICAgICAgb3BhY2l0eTogMC4zOwogICAgICB9CgogICAgICAuY2xzLTEsIC5jbHMtMywgLmNscy00IHsKICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7CiAgICAgIH0KCiAgICAgIC5jbHMtMiwgLmNscy0zIHsKICAgICAgICBmaWxsOiAjMjU1MzgyOwogICAgICB9CgogICAgICAuY2xzLTQgewogICAgICAgIGZpbGw6ICM3NmViZmM7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIGlkPSdfMycgZGF0YS1uYW1lPSczJz4KICAgIDxwYXRoIGlkPSfnn6nlvaJfMicgZGF0YS1uYW1lPSfnn6nlvaIgMicgY2xhc3M9J2Nscy0xJyBkPSdNNTU1LjIzNywyMzRsMTAuMDQxLS4wMDlMNTQ1LjExOCwyODBINTM1WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV8xNCcgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMTQnIGNsYXNzPSdjbHMtMScgZD0nTTU0My4xLDIzNGgxMC4xMThMNTM1LDI3NVYyNDlaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzE1JyBkYXRhLW5hbWU9J+efqeW9oiAyIOaLt+i0nSAxNScgY2xhc3M9J2Nscy0xJyBkPSdNNTM0Ljk4OSwyMzMuOTkxTDU0MS4wNzEsMjM0LDUzNSwyNDVaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdJyBkYXRhLW5hbWU9J+efqeW9oiAyIOaLt+i0nScgY2xhc3M9J2Nscy0xJyBkPSdNNTY3LjM3OCwyMzRsMTAuMjIxLS4wMDlMNTU3LjI2LDI4MEg1NDcuMTQyWicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV8yJyBkYXRhLW5hbWU9J+efqeW9oiAyIOaLt+i0nSAyJyBjbGFzcz0nY2xzLTEnIGQ9J001NzkuNjc2LDIzMy45OTFMNTkwLjY1MSwyMzQsNTY5LjQsMjgwSDU1OS4yODRaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzMnIGRhdGEtbmFtZT0n55+p5b2iIDIg5ou36LSdIDMnIGNsYXNzPSdjbHMtMScgZD0nTTU5Mi42NzQsMjM0aDEwLjExOWwtMjEuMjQ5LDQ2SDU3MS40MjZaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzQnIGRhdGEtbmFtZT0n55+p5b2iIDIg5ou36LSdIDQnIGNsYXNzPSdjbHMtMScgZD0nTTYwNC44MTYsMjM0aDEwLjExOWwtMjEuMjQ5LDQ2SDU4My41NjhaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzUnIGRhdGEtbmFtZT0n55+p5b2iIDIg5ou36LSdIDUnIGNsYXNzPSdjbHMtMScgZD0nTTYxNi45NTgsMjM0aDEwLjExOWwtMjEuMjQ5LDQ2SDU5NS43MVonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MjYgLTIyMyknLz4KICAgIDxwYXRoIGlkPSfnn6nlvaJfMl/mi7fotJ1fNicgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gNicgY2xhc3M9J2Nscy0xJyBkPSdNNjI5LjEsMjM0aDEwLjExOUw2MTcuOTcsMjgwSDYwNy44NTJaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzYtMicgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gNicgY2xhc3M9J2Nscy0xJyBkPSdNNjQxLjI4MiwyMzMuOTkxTDY1MS4zNjEsMjM0bC0yMC4yMzcsNDZoLTExLjEzWicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV83JyBkYXRhLW5hbWU9J+efqeW9oiAyIOaLt+i0nSA3JyBjbGFzcz0nY2xzLTEnIGQ9J002NTMuMzg0LDIzNEg2NjMuNWwtMjAuMjM3LDQ2SDYzMy4xNDhaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzctMicgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gNycgY2xhc3M9J2Nscy0xJyBkPSdNNjY1LjUyNiwyMzRoMTAuMTE5bC0yMC4yMzcsNDZINjQ1LjI5WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV84JyBkYXRhLW5hbWU9J+efqeW9oiAyIOaLt+i0nSA4JyBjbGFzcz0nY2xzLTEnIGQ9J002NzcuNjY4LDIzNGgxMC4xMTlMNjY3LjU1LDI4MEg2NTcuNDMyWicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV84LTInIGRhdGEtbmFtZT0n55+p5b2iIDIg5ou36LSdIDgnIGNsYXNzPSdjbHMtMScgZD0nTTY4OS44MSwyMzRoMTAuMTE5TDY4MC43LDI4MGgtMTEuMTNaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzknIGRhdGEtbmFtZT0n55+p5b2iIDIg5ou36LSdIDknIGNsYXNzPSdjbHMtMScgZD0nTTcwMS45NTMsMjM0aDEwLjExOGwtMjAuMjM3LDQ2aC05LjEwNlonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MjYgLTIyMyknLz4KICAgIDxwYXRoIGlkPSfnn6nlvaJfMl/mi7fotJ1fOS0yJyBkYXRhLW5hbWU9J+efqeW9oiAyIOaLt+i0nSA5JyBjbGFzcz0nY2xzLTEnIGQ9J003MTQuMSwyMzRoMTAuMTE4bC0xOS4yMjUsNDZINjk0Ljg3WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV8xMCcgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMTAnIGNsYXNzPSdjbHMtMScgZD0nTTcyNi4yMzcsMjM0aDEwLjExOEw3MTcuMTMsMjgwSDcwNy4wMTJaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzEwLTInIGRhdGEtbmFtZT0n55+p5b2iIDIg5ou36LSdIDEwJyBjbGFzcz0nY2xzLTEnIGQ9J003MzguMzc5LDIzNEg3NDguNWwtMTguMjEzLDQ2aC0xMS4xM1onIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MjYgLTIyMyknLz4KICAgIDxwYXRoIGlkPSfnn6nlvaJfMl/mi7fotJ1fMTAtMycgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMTAnIGNsYXNzPSdjbHMtMScgZD0nTTc1MC41MjEsMjM0aDExLjEzbC0xOS4yMjUsNDZINzMyLjMwOFonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MjYgLTIyMyknLz4KICAgIDxwYXRoIGlkPSfnn6nlvaJfMl/mi7fotJ1fMTAtNCcgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMTAnIGNsYXNzPSdjbHMtMScgZD0nTTc2My42NzQsMjM0aDEwLjExOWwtMTkuMjI1LDQ2SDc0NC40NVonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MjYgLTIyMyknLz4KICAgIDxwYXRoIGlkPSfnn6nlvaJfMl/mi7fotJ1fMTAtNScgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMTAnIGNsYXNzPSdjbHMtMScgZD0nTTc3NS44MTYsMjM0aDEwLjExOUw3NjYuNzEsMjgwSDc1Ni41OTJaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzEwLTYnIGRhdGEtbmFtZT0n55+p5b2iIDIg5ou36LSdIDEwJyBjbGFzcz0nY2xzLTEnIGQ9J003ODcuOTU4LDIzNGgxMC4xMTlsLTE5LjIyNSw0Nkg3NjguNzM0WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV8xMScgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMTEnIGNsYXNzPSdjbHMtMScgZD0nTTgwMC4xLDIzNGgxMC4xMTlsLTE5LjIyNSw0Nkg3ODAuODc2WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV8xNicgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMTYnIGNsYXNzPSdjbHMtMScgZD0nTTg3MS45NDEsMjM0bDUuMDI2LS4wMDlMODc3LDI0NmwtMTMuMTU0LDM0aC0xMS4xM1onIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MjYgLTIyMyknLz4KICAgIDxwYXRoIGlkPSfnn6nlvaJfMl/mi7fotJ1fMTYtMicgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMTYnIGNsYXNzPSdjbHMtMScgZD0nTTg3NywyNTB2MzBIODY1Ljg3WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV8yNicgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMjYnIGNsYXNzPSdjbHMtMScgZD0nTTgxMi4yNDIsMjM0aDEwLjExOWwtMTkuMjI1LDQ2SDc5My4wMThaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzI3JyBkYXRhLW5hbWU9J+efqeW9oiAyIOaLt+i0nSAyNycgY2xhc3M9J2Nscy0xJyBkPSdNODI0LjM4NSwyMzRoOS4xMDZsLTE5LjIyNSw0Nkg4MDUuMTZaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzI4JyBkYXRhLW5hbWU9J+efqeW9oiAyIOaLt+i0nSAyOCcgY2xhc3M9J2Nscy0xJyBkPSdNODM1LjUxNSwyMzRoMTAuMTE4bC0xOS4yMjUsNDZIODE2LjI5WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV8zMicgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMzInIGNsYXNzPSdjbHMtMScgZD0nTTg0Ny42NTcsMjM0aDEwLjExOEw4MzguNTUsMjgwSDgyOC40MzJaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzMyLTInIGRhdGEtbmFtZT0n55+p5b2iIDIg5ou36LSdIDMyJyBjbGFzcz0nY2xzLTEnIGQ9J004NTkuOCwyMzRoMTAuMTE4bC0xOS4yMjUsNDZIODQwLjU3NFonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MjYgLTIyMyknLz4KICAgIDxyZWN0IGlkPSfnn6nlvaJfMycgZGF0YS1uYW1lPSfnn6nlvaIgMycgY2xhc3M9J2Nscy0yJyB4PSc5JyB5PSc1JyB3aWR0aD0nMzQyJyBoZWlnaHQ9JzEnLz4KICAgIDxyZWN0IGlkPSfnn6nlvaJfM1/mi7fotJ0nIGRhdGEtbmFtZT0n55+p5b2iIDMg5ou36LSdJyBjbGFzcz0nY2xzLTInIHg9JzknIHk9JzYyJyB3aWR0aD0nMzQyJyBoZWlnaHQ9JzEnLz4KICA8L2c+CiAgPGcgaWQ9J18yJyBkYXRhLW5hbWU9JzInPgogICAgPHBhdGggaWQ9J+S4iuaLrOWPt1/mi7fotJ1fMicgZGF0YS1uYW1lPSfkuIrmi6zlj7cg5ou36LSdIDInIGNsYXNzPSdjbHMtMycgZD0nTTg3NywyMjloNWwyLDIsMS0xLTItMmgtNnYxWicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+S4iuaLrOWPtycgY2xhc3M9J2Nscy0zJyBkPSdNODc3LDI4Nmg2bDItMi0xLTEtMiwyaC01djFaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n5b2i54q2XzInIGRhdGEtbmFtZT0n5b2i54q2IDInIGNsYXNzPSdjbHMtNCcgZD0nTTg3NywyMjd2Mmg0bDMsMiwyLTEtNC0zaC01WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+W9oueKtl8yLTInIGRhdGEtbmFtZT0n5b2i54q2IDInIGNsYXNzPSdjbHMtNCcgZD0nTTg3NywyODd2LTJoNGwzLTIsMiwxLTQsM2gtNVonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MjYgLTIyMyknLz4KICA8L2c+CiAgPGcgaWQ9J18xJyBkYXRhLW5hbWU9JzEnPgogICAgPHBhdGggaWQ9J+S4iuaLrOWPty0yJyBkYXRhLW5hbWU9J+S4iuaLrOWPtycgY2xhc3M9J2Nscy0zJyBkPSdNNTM1LDIyOWgtNWwtMiwyLTEtMSwyLTJoNnYxWicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+S4iuaLrOWPt1/mi7fotJ0nIGRhdGEtbmFtZT0n5LiK5ous5Y+3IOaLt+i0nScgY2xhc3M9J2Nscy0zJyBkPSdNNTM1LDI4NmgtNmwtMi0yLDEtMSwyLDJoNXYxWicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+W9oueKtl8yLTMnIGRhdGEtbmFtZT0n5b2i54q2IDInIGNsYXNzPSdjbHMtNCcgZD0nTTUzNSwyMjd2MmgtNGwtMywyLTItMSw0LTNoNVonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MjYgLTIyMyknLz4KICAgIDxwYXRoIGlkPSflvaLnirZfMi00JyBkYXRhLW5hbWU9J+W9oueKtiAyJyBjbGFzcz0nY2xzLTQnIGQ9J001MzUsMjg3di0yaC00bC0zLTItMiwxLDQsM2g1WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogIDwvZz4KPC9zdmc+Cg==',
            barWidth: 100,
            data: [150, 150, 150, 150, 150],
            barGap: '-100%',
            z: -100,
            symbolOffset: [0, '-50%'],
            barCategoryGap: 0,
            // animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30;
            }
        },
        { // 蓝柱下面方块
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            barWidth: '3%',
            symbolOffset: [120, -20],
            itemStyle: {
                normal: {
                    color: '#1F4683'
                }
            },
            z: -11,
            symbolRepeat: true,
            symbolSize: 20,
            data: [125, 125, 125, 125, 125],
            barGap: 50,
            barCategoryGap: 0,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30;
            }
        },
        { // 红柱下面方块
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            barWidth: '3%',
            symbolOffset: [120, 20],
            itemStyle: {
                normal: {
                    color: '#1F4683'
                }
            },
            z: -11,
            // barWidth: 10,
            symbolRepeat: true,
            symbolSize: 20,
            data:  [125, 125, 125, 125, 125],
            // barGap: 50,
            barCategoryGap: 100,
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30;
            }
        },
        { // 蓝柱
            name: '', // blue bar
            type: 'pictorialBar',
            symbol: 'rect',
            barWidth: '3%',
            symbolOffset: [120, -20],
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#6DE8FA'
                }
            },
            symbolRepeat: true,
            symbolSize: 20,
            // symbolClip: true,
            data: [0,80, 77, 48, 21],
            label: {
                normal: {
                    show: true,
                    formatter: function(value, index) {
                        console.log(arguments)
                        return `${value.value}`
                    },
                    position: 'right',
                    offset: [5, -20],
                    // offset: [0, 4],
                    color: '#6DE8FA',
                    fontSize: 20
                }
            },
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30 * 1.1
            }
        },
        { // 红柱
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolRepeat: true,
            symbolClip: true,
            symbolOffset: [120, 22],
            // symbolSize: ['80%', '80%'],
            symbolBoundingData: [-60, 40],
            // name: '', // red bar
            // type: 'pictorialBar',
            // symbol: 'rect',
            // barWidth: '3%',
            // symbolOffset: [120, 20],
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#ed3e6d'
                }
            },
            // symbolRepeat: true,
            // // "symbolRepeat": "fixed",
            symbolSize: 20,
            // symbolClip: true,
            data: [0,80, 77, 48, 21], // barData,
            label: {
                normal: {
                    show: true,
                    formatter: function(value, index) {
                        console.log(arguments)
                        return `${value.value}`
                    },
                    position: 'right',
                    offset: [5, 22],
                    color: '#ed3e6d',
                    fontSize: 20
                }
            },
            animationEasing: 'elasticOut',
            animationDelay: function(dataIndex, params) {
                return params.index * 30 * 1.1
            }
        }
    ],
    animation: true
}
//饼状图
function deepCopy(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }
    var newobj = {};
    for (var attr in obj) {
        newobj[attr] = obj[attr];
    }
    return newobj;
}
var xData = [],
    yData = [];

var data = [
    {
        "name": "第一种",
        "value": 1895457
    },
    {
        "name": "第二种",
        "value": 722232
    },
    {
        "name": "第三种",
        "value": 1723130
    },
    {
        "name": "第四种",
        "value": 854920
    },
    {
        "name": "第五种",
        "value": 854920
    }
    ]
data.map((a, b) => {
    xData.push(a.name);
    yData.push(a.value);
});
var color = ['#FAFF00', '#FFCD20', '#6AC859', '#329587','#1A66FF','#0096FF'];
var borderStartColor = ['#05acff', '#ee36ff', '#05fcfb', '#ffa597'];
var borderEndColor = ['#09c1ff', '#8171ff', '#05ffff', '#ff6584'];
var RealData = [];
var borderData = [];
data.map((item, index) => {
    var newobj = deepCopy(item);
    var newobj1 = deepCopy(item);
    RealData.push(newobj);
    borderData.push(newobj1);
});
RealData.map((item, index) => {
    item.itemStyle = {
        normal: {
            color: color[index]
        }
    }
});
borderData.map((item, index) => {
    item.itemStyle = {
        normal: {
            color:color[index]
        }
    }
});
export const pie_option = {
    // backgroundColor:"rgb(3,39,34)",
    legend: {
        // top: "2%",
        // left: 10,
        icon: 'circle',
        // y: 'center',
        right: '5%',
        itemWidth: 10,
        itemHeight: 10,
        orient: 'vertical',
        textStyle: {
            color: 'rgba(255,255,255,.7)',
            fontSize: 12,

        },
        data: ['第一种','第二种','第三种','第四种','第五种'],
    },
    grid: {

    },
    tooltip: {
        formatter: "{a}：<br/>{b}: {c}人"
    },
    xAxis: {
        show:false,
        axisLine: {
            lineStyle: {
                color:'#fff'
            },
        },
        splitLine:{
            show:false
        },
        axisLabel: {
            show:false
        },
        axisTick: {
            show:false
        },
    },
    yAxis: {
        show:false,
        axisLine: {
            lineStyle: {
                // color:'rgba(255,255,255,.2)'
            },
        },
        splitLine: {
            show:false
        },
        axisLabel: {
            show:false
        },
        axisTick: {
            show:false
        },
        scale: true
    },
    series: [
        // 主要展示层的
        {
            radius: ['33%', '60%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            name: "数据",
            data: RealData,

        },

    ]
};

//折线图
export const line_option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        icon: 'rect',
        itemWidth: 10,
        itemHeight: 6,
        itemGap: 13,
        data: ['接口响应时间'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#999999'
        }
    },
    // grid: {
    //     left: '2%',
    //     right: '4%',
    //     top: '300',
    //     bottom: '200',
    // },
    xAxis: {
        type: 'category',
        show:false,
        axisLine: {
            show:true,
            lineStyle:{
                color: '#fff',
                type:'solid',
                width:0
            }
        },
        axisTick:{
            show:true,
            lineStyle:{
                color:"#fff",
                type:'solid'
            }
        },
        axisLabel: {
            show:true,
            color: '#666',
            fontSize: 12,
            rotate:0
        },
        splitLine:{
            show:false
        },
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5', '6', '7', '8','9','10','11','12','13','14','15']
    },
    yAxis: {
        name: '单位:ms',
        max:null,
        min:null,
        show:false,
        nameTextStyle: {
            color: '#777',
            fontSize: 12
        },
        axisLine: {
            show:false,
            lineStyle: {
                color: '#EEEEEE'
            }
        },
        type: 'value',
        axisLabel: {
            show: true,
            interval: '0',
            color: '#666',
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#eeeeee',
                type: 'solid'
            },
        },
    },
    series: [
        {
            name: '接口响应时间',
            color: ['red'],
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 3, //折线宽度
                    },
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: '#fbfa96' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#f72806' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    opacity: 0.4
                }
            },
            data: [646, 256, 86, 1165, 563, 423, 236, 3165, 1532, 369,456,166,1235, 656, 415]
        }

    ]
};

//散点图
let scatter_data = [
    [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
    [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
];
export const scatter_option = {
    title: {
        text: ''
    },
    grid:{
        left:'20%',
        right: '10%',
        bottom:20
    },
    legend: {
        right: 10,
        data: ['数据1', '数据2'],
        textStyle:{    //图例文字的样式
            fontSize:12,
            color:'rgba(255,255,255,.7)'
        }
    },
    xAxis: {
        show:false,
        axisLine: {
            lineStyle: {
                color:'#fff'
            },
        },
        splitLine:{
            show:false
        },
        axisLabel: {
            show:false
        },
        axisTick: {
            show:false
        },
    },
    yAxis: {
        show:false,
        axisLine: {
            lineStyle: {
                // color:'rgba(255,255,255,.2)'
            },
        },
        splitLine: {
            show:false
        },
        axisLabel: {
            show:false
        },
        axisTick: {
            show:false
        },
        scale: true
    },
    series: [{
        name: '数据1',
        data: scatter_data[0],
        type: 'scatter',
        symbolSize: function (scatter_data) {
            return Math.sqrt(scatter_data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            color: '#FFCD20',
        }
    }, {
        name: '数据2',
        data: scatter_data[1],
        type: 'scatter',
        symbolSize: function (scatter_data) {
            return Math.sqrt(scatter_data[2]) / 5e2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            color: '#6AC859',
        }
    }]
};

//雷达图
let Data = [
    {text: '数据1', max: 100},
    {text: '数据2', max: 100},
    {text: '数据3', max: 100},
    {text: '数据4', max: 100},
    {text: '数据5', max: 100},
    {text: '数据6', max: 100},
    {text: '数据7', max: 100},
];
export const radar_option = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        top:'20%',
        height: '80%',
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:[],
        textStyle: {
            color: '#fff'
        }
    },
    xAxis : {
        show:false,
        type : 'category',
        axisLine: {
            show:true,
            lineStyle:{
                color: '#fff',
                type:'solid',
                width:0
            }
        },
        axisTick:{
            show:false,
            lineStyle:{
                color:"#fff",
                type:'solid'
            }
        },
        splitLine: {
            show: false,
        },
        axisLabel :{
            show:true,
            color: '#666',
            fontSize: 12,
            rotate:0
        },
        data : []
    },
    yAxis : {
        type : 'value',
        name:'',
        max:null,
        min:null,
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#EEEEEE'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#eeeeee',
                type: 'solid'
            },
        }
    },
    radar: [
        {
            indicator: Data,
            center: ['50%','55%'],
            radius: '70%',
            name: {
                textStyle: {
                    color: 'rgba(255,255,255,.7)',
                    fontSize: 12,
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#0b5263',
                    opacity: 0.5,
                    width:3
                },
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: '#0b5263',
                    opacity: 0.2
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#189cbb',
                    type:"dashed",
                }
            }
        },
    ],
    series: [
        {
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            data: [
                {
                    value: [60,73,85,40,50,40,30],
                    name: '数据'
                }
            ],
            symbolSize: 10,
            itemStyle: {
                normal: {
                    borderColor: '#ffc72b',
                    borderWidth: 3,
                }
            },
            lineStyle:{
                normal:{
                    color:"#ffc72b",
                    width:3
                }
            },
            areaStyle: {
                normal: {
                    color: '#ffc72b',
                    opacity: 0.5
                }
            }
        },
    ]
};

//仪表盘
export const gauge_option  = {
        grid: {

        },
    legend: {
        orient: 'vertical',
        icon: 'circle',
        y: 'center',
        right: '3%',
        itemWidth: 10,
        itemHeight: 10,
        data :  [],
        textStyle:{    //图例文字的样式
            fontSize:12,
            color:'rgba(255,255,255,.7)'
        }
    },
    xAxis : {
            type : 'category',
            boundaryGap : false,
            axisLine: {
                show:false,
                lineStyle:{
                    color: '#fff',
                    type:'solid',
                    width:1
                }
            },
            axisTick: {
                show:false,
                lineStyle:{
                    color:"#fff",
                    type:'solid'
                }
            },
            axisLabel: {
                show:true,
                color: '#666',
                fontSize: 12,
                rotate:0
            },
            splitLine: {
                show: false,
            },
            data : []
        },
    yAxis : {
        type : 'value',
        max:null,
        min:null,
        axisLabel: {
            show: false,
            interval: '0',
            color: '',
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#EEEEEE'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#eeeeee',
                type: 'solid'
            },
        }
    },
    series: [
            {
            name: '刻度',
            type: 'gauge',
            radius: '80%',
            center: ['50%', '60%'],
            min:0,//最小刻度
            max:16,//最大刻度
            splitNumber: 8, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 1,
                    color: [[1,'rgba(0,0,0,0)']]
                }
            },//仪表盘轴线
            axisLabel: {
                show: true,
                color:'#4d5bd1',
                distance:22,
                fontSize: 12,
                formatter:function(v){
                    switch (v + '') {
                        case '0' : return '0';
                        case '2' : return '2W';
                        case '4' : return '4W';
                        case '6' : return '6W';
                        case '8' : return '8W';
                        case '10' : return '10W';
                        case '12' : return '12W';
                        case '14' : return '14W';
                        case '16' : return '16W';
                    }
                }
            },//刻度标签。
            axisTick: {
                show: true,
                splitNumber: 7,
                lineStyle: {
                    // color: '#fff',
                    width: 1,
                },
                length: -8
            },//刻度样式
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: '#fff'
                }
            },//分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
            {
                type: 'gauge',
                radius: '60%',
                center: ['50%', '60%'],
                splitNumber: 0, //刻度数量
                startAngle: 225,
                endAngle: -45,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 15,
                        color:[
                            [1,{
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: '#5c53de' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#18c8ff' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }]
                        ]
                    },
                },

                //分隔线样式。
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                pointer: {
                    show: false
                },
                title: {
                    show: true,
                    offsetCenter: [0, '-26%'], // x, y，单位px
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    }
                },
                //仪表盘详情，用于显示数据。
                detail: {
                    show: true,
                    offsetCenter: [0, '16%'],
                    color: 'rgba(255,255,255,.8)',
                    formatter: function(params) {
                        return params
                    },
                    textStyle: {
                        fontSize: 35
                    }
                },
                data: [{
                    name: "当前数据",
                    value: 90.61
                }]
            }
        ]
    };
//漏斗图
export const funnel_option= {
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8","#FFDB5C",],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    grid: {

    },
    legend: {
        width: '90%',
        // right:'0%',
        // align: 'right',
        icon: 'circle',
        itemWidth: 10,
        itemHeight: 10,
        textStyle:{    //图例文字的样式
            fontSize:12,
            color:'rgba(255,255,255,.7)'
        },
        data: ['数据1','数据2','数据3','数据4','数据5']
    },
    xAxis: {
        show:false,
        axisLine: {
            lineStyle: {
                color:'#fff'
            },
        },
        splitLine:{
            show:false
        },
        axisLabel: {
            show:false
        },
        axisTick: {
            show:false
        },
    },
    yAxis: {
        show:false,
        axisLine: {
            lineStyle: {
                // color:'rgba(255,255,255,.2)'
            },
        },
        splitLine: {
            show:false
        },
        axisLabel: {
            show:false
        },
        axisTick: {
            show:false
        },
        scale: true
    },
    series: [
        {
            top:'15%',
            name: '',
            type: 'funnel',
            left: '5%',
            right: '5%',
            bottom: 1,
            width: '90%',
            minSize: '0%',
            maxSize: '100%',
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            emphasis: {
                label:{
                    show:false
                }
            },
            itemStyle: {
                normal: {
                    color: 'red',
                    borderWidth:0,
                    borderColor: '#ddd',
                }
            },
            data: [
                {
                    value: 100,
                    name: '数据1',
                    itemStyle: {
                        normal: {
                            color: 'rgba(106, 200, 89, 1)'
                        }
                    },
                },
                {
                    value: 80,
                    name: '数据2',
                    itemStyle: {
                        normal: {
                            color: 'rgba(255, 205, 32, 1)'
                        }
                    }
                },
                {
                    value: 60,
                    name: '数据3',
                    itemStyle: {
                        normal: {
                            color: 'rgba(50, 149, 135, 1)'
                        }
                    }
                },
                {
                    value: 40,
                    name: '数据4',
                    itemStyle: {
                        normal: {
                            color: 'rgba(26, 102, 255, 1)'
                        }
                    }
                },
                {
                    value: 20,
                    name: '数据5',
                    itemStyle: {
                        normal: {
                            color: 'rgba(0, 150, 255, 1)'
                        }
                    }
                }
            ]
        },
    ]
};

//地图
import 'echarts/map/js/china.js';
let map_data =[
    {name: '海门', value: 9},
    {name: '鄂尔多斯', value: 12},
    {name: '招远', value: 12},
    {name: '舟山', value: 12},
    {name: '齐齐哈尔', value: 14},
    {name: '盐城', value: 15},
    {name: '赤峰', value: 16},
    {name: '青岛', value: 18},
    {name: '乳山', value: 18},
    {name: '金昌', value: 19},
    {name: '泉州', value: 21},
    {name: '莱西', value: 21},
    {name: '日照', value: 21},
    {name: '胶南', value: 22},
    {name: '南通', value: 23},
    {name: '拉萨', value: 24},
    {name: '云浮', value: 24},
    {name: '梅州', value: 25},
    {name: '文登', value: 25},
    {name: '上海', value: 25},
    {name: '攀枝花', value: 25},
    {name: '威海', value: 25},
    {name: '承德', value: 25},
    {name: '厦门', value: 26},
    {name: '汕尾', value: 26},
    {name: '潮州', value: 26},
    {name: '丹东', value: 27},
    {name: '太仓', value: 27},
    {name: '曲靖', value: 27},
    {name: '烟台', value: 28},
    {name: '福州', value: 29},
    {name: '瓦房店', value: 30},
    {name: '即墨', value: 30},
    {name: '抚顺', value: 31},
    {name: '玉溪', value: 31},
    {name: '张家口', value: 31},
    {name: '阳泉', value: 31},
    {name: '莱州', value: 32},
    {name: '湖州', value: 32},
    {name: '汕头', value: 32},
    {name: '昆山', value: 33},
    {name: '宁波', value: 33},
    {name: '湛江', value: 33},
    {name: '揭阳', value: 34},
    {name: '荣成', value: 34},
    {name: '连云港', value: 35},
    {name: '葫芦岛', value: 35},
    {name: '常熟', value: 36},
    {name: '东莞', value: 36},
    {name: '河源', value: 36},
    {name: '淮安', value: 36},
    {name: '泰州', value: 36},
    {name: '南宁', value: 37},
    {name: '营口', value: 37},
    {name: '惠州', value: 37},
    {name: '江阴', value: 37},
    {name: '蓬莱', value: 37},
    {name: '韶关', value: 38},
    {name: '嘉峪关', value: 38},
    {name: '广州', value: 38},
    {name: '延安', value: 38},
    {name: '太原', value: 39},
    {name: '清远', value: 39},
    {name: '中山', value: 39},
    {name: '昆明', value: 39},
    {name: '寿光', value: 40},
    {name: '盘锦', value: 40},
    {name: '长治', value: 41},
    {name: '深圳', value: 41},
    {name: '珠海', value: 42},
    {name: '宿迁', value: 43},
    {name: '咸阳', value: 43},
    {name: '铜川', value: 44},
    {name: '平度', value: 44},
    {name: '佛山', value: 44},
    {name: '海口', value: 44},
    {name: '江门', value: 45},
    {name: '章丘', value: 45},
    {name: '肇庆', value: 46},
    {name: '大连', value: 47},
    {name: '临汾', value: 47},
    {name: '吴江', value: 47},
    {name: '石嘴山', value: 49},
    {name: '沈阳', value: 50},
    {name: '苏州', value: 50},
    {name: '茂名', value: 50},
    {name: '嘉兴', value: 51},
    {name: '长春', value: 51},
    {name: '胶州', value: 52},
    {name: '银川', value: 52},
    {name: '张家港', value: 52},
    {name: '三门峡', value: 53},
    {name: '锦州', value: 54},
    {name: '南昌', value: 54},
    {name: '柳州', value: 54},
    {name: '三亚', value: 54},
    {name: '自贡', value: 56},
    {name: '吉林', value: 56},
    {name: '阳江', value: 57},
    {name: '泸州', value: 57},
    {name: '西宁', value: 57},
    {name: '宜宾', value: 58},
    {name: '呼和浩特', value: 58},
    {name: '成都', value: 58},
    {name: '大同', value: 58},
    {name: '镇江', value: 59},
    {name: '桂林', value: 59},
    {name: '张家界', value: 59},
    {name: '宜兴', value: 59},
    {name: '北海', value: 60},
    {name: '西安', value: 61},
    {name: '金坛', value: 62},
    {name: '东营', value: 62},
    {name: '牡丹江', value: 63},
    {name: '遵义', value: 63},
    {name: '绍兴', value: 63},
    {name: '扬州', value: 64},
    {name: '常州', value: 64},
    {name: '潍坊', value: 65},
    {name: '重庆', value: 66},
    {name: '台州', value: 67},
    {name: '南京', value: 67},
    {name: '滨州', value: 70},
    {name: '贵阳', value: 71},
    {name: '无锡', value: 71},
    {name: '本溪', value: 71},
    {name: '克拉玛依', value: 72},
    {name: '渭南', value: 72},
    {name: '马鞍山', value: 72},
    {name: '宝鸡', value: 72},
    {name: '焦作', value: 75},
    {name: '句容', value: 75},
    {name: '北京', value: 79},
    {name: '徐州', value: 79},
    {name: '衡水', value: 80},
    {name: '包头', value: 80},
    {name: '绵阳', value: 80},
    {name: '乌鲁木齐', value: 84},
    {name: '枣庄', value: 84},
    {name: '杭州', value: 84},
    {name: '淄博', value: 85},
    {name: '鞍山', value: 86},
    {name: '溧阳', value: 86},
    {name: '库尔勒', value: 86},
    {name: '安阳', value: 90},
    {name: '开封', value: 90},
    {name: '济南', value: 92},
    {name: '德阳', value: 93},
    {name: '温州', value: 95},
    {name: '九江', value: 96},
    {name: '邯郸', value: 98},
    {name: '临安', value: 99},
    {name: '兰州', value: 99},
    {name: '沧州', value: 100},
    {name: '临沂', value: 103},
    {name: '南充', value: 104},
    {name: '天津', value: 105},
    {name: '富阳', value: 106},
    {name: '泰安', value: 112},
    {name: '诸暨', value: 112},
    {name: '郑州', value: 113},
    {name: '哈尔滨', value: 114},
    {name: '聊城', value: 116},
    {name: '芜湖', value: 117},
    {name: '唐山', value: 119},
    {name: '平顶山', value: 119},
    {name: '邢台', value: 119},
    {name: '德州', value: 120},
    {name: '济宁', value: 120},
    {name: '荆州', value: 127},
    {name: '宜昌', value: 130},
    {name: '义乌', value: 132},
    {name: '丽水', value: 133},
    {name: '洛阳', value: 134},
    {name: '秦皇岛', value: 136},
    {name: '株洲', value: 143},
    {name: '石家庄', value: 147},
    {name: '莱芜', value: 148},
    {name: '常德', value: 152},
    {name: '保定', value: 153},
    {name: '湘潭', value: 154},
    {name: '金华', value: 157},
    {name: '岳阳', value: 169},
    {name: '长沙', value: 175},
    {name: '衢州', value: 177},
    {name: '廊坊', value: 193},
    {name: '菏泽', value: 194},
    {name: '合肥', value: 229},
    {name: '武汉', value: 273},
    {name: '大庆', value: 279}
];
let geoCoordMap = {
    '海门':[121.15,31.89],
    '鄂尔多斯':[109.781327,39.608266],
    '招远':[120.38,37.35],
    '舟山':[122.207216,29.985295],
    '齐齐哈尔':[123.97,47.33],
    '盐城':[120.13,33.38],
    '赤峰':[118.87,42.28],
    '青岛':[120.33,36.07],
    '乳山':[121.52,36.89],
    '金昌':[102.188043,38.520089],
    '泉州':[118.58,24.93],
    '莱西':[120.53,36.86],
    '日照':[119.46,35.42],
    '胶南':[119.97,35.88],
    '南通':[121.05,32.08],
    '拉萨':[91.11,29.97],
    '云浮':[112.02,22.93],
    '梅州':[116.1,24.55],
    '文登':[122.05,37.2],
    '上海':[121.48,31.22],
    '攀枝花':[101.718637,26.582347],
    '威海':[122.1,37.5],
    '承德':[117.93,40.97],
    '厦门':[118.1,24.46],
    '汕尾':[115.375279,22.786211],
    '潮州':[116.63,23.68],
    '丹东':[124.37,40.13],
    '太仓':[121.1,31.45],
    '曲靖':[103.79,25.51],
    '烟台':[121.39,37.52],
    '福州':[119.3,26.08],
    '瓦房店':[121.979603,39.627114],
    '即墨':[120.45,36.38],
    '抚顺':[123.97,41.97],
    '玉溪':[102.52,24.35],
    '张家口':[114.87,40.82],
    '阳泉':[113.57,37.85],
    '莱州':[119.942327,37.177017],
    '湖州':[120.1,30.86],
    '汕头':[116.69,23.39],
    '昆山':[120.95,31.39],
    '宁波':[121.56,29.86],
    '湛江':[110.359377,21.270708],
    '揭阳':[116.35,23.55],
    '荣成':[122.41,37.16],
    '连云港':[119.16,34.59],
    '葫芦岛':[120.836932,40.711052],
    '常熟':[120.74,31.64],
    '东莞':[113.75,23.04],
    '河源':[114.68,23.73],
    '淮安':[119.15,33.5],
    '泰州':[119.9,32.49],
    '南宁':[108.33,22.84],
    '营口':[122.18,40.65],
    '惠州':[114.4,23.09],
    '江阴':[120.26,31.91],
    '蓬莱':[120.75,37.8],
    '韶关':[113.62,24.84],
    '嘉峪关':[98.289152,39.77313],
    '广州':[113.23,23.16],
    '延安':[109.47,36.6],
    '太原':[112.53,37.87],
    '清远':[113.01,23.7],
    '中山':[113.38,22.52],
    '昆明':[102.73,25.04],
    '寿光':[118.73,36.86],
    '盘锦':[122.070714,41.119997],
    '长治':[113.08,36.18],
    '深圳':[114.07,22.62],
    '珠海':[113.52,22.3],
    '宿迁':[118.3,33.96],
    '咸阳':[108.72,34.36],
    '铜川':[109.11,35.09],
    '平度':[119.97,36.77],
    '佛山':[113.11,23.05],
    '海口':[110.35,20.02],
    '江门':[113.06,22.61],
    '章丘':[117.53,36.72],
    '肇庆':[112.44,23.05],
    '大连':[121.62,38.92],
    '临汾':[111.5,36.08],
    '吴江':[120.63,31.16],
    '石嘴山':[106.39,39.04],
    '沈阳':[123.38,41.8],
    '苏州':[120.62,31.32],
    '茂名':[110.88,21.68],
    '嘉兴':[120.76,30.77],
    '长春':[125.35,43.88],
    '胶州':[120.03336,36.264622],
    '银川':[106.27,38.47],
    '张家港':[120.555821,31.875428],
    '三门峡':[111.19,34.76],
    '锦州':[121.15,41.13],
    '南昌':[115.89,28.68],
    '柳州':[109.4,24.33],
    '三亚':[109.511909,18.252847],
    '自贡':[104.778442,29.33903],
    '吉林':[126.57,43.87],
    '阳江':[111.95,21.85],
    '泸州':[105.39,28.91],
    '西宁':[101.74,36.56],
    '宜宾':[104.56,29.77],
    '呼和浩特':[111.65,40.82],
    '成都':[104.06,30.67],
    '大同':[113.3,40.12],
    '镇江':[119.44,32.2],
    '桂林':[110.28,25.29],
    '张家界':[110.479191,29.117096],
    '宜兴':[119.82,31.36],
    '北海':[109.12,21.49],
    '西安':[108.95,34.27],
    '金坛':[119.56,31.74],
    '东营':[118.49,37.46],
    '牡丹江':[129.58,44.6],
    '遵义':[106.9,27.7],
    '绍兴':[120.58,30.01],
    '扬州':[119.42,32.39],
    '常州':[119.95,31.79],
    '潍坊':[119.1,36.62],
    '重庆':[106.54,29.59],
    '台州':[121.420757,28.656386],
    '南京':[118.78,32.04],
    '滨州':[118.03,37.36],
    '贵阳':[106.71,26.57],
    '无锡':[120.29,31.59],
    '本溪':[123.73,41.3],
    '克拉玛依':[84.77,45.59],
    '渭南':[109.5,34.52],
    '马鞍山':[118.48,31.56],
    '宝鸡':[107.15,34.38],
    '焦作':[113.21,35.24],
    '句容':[119.16,31.95],
    '北京':[116.46,39.92],
    '徐州':[117.2,34.26],
    '衡水':[115.72,37.72],
    '包头':[110,40.58],
    '绵阳':[104.73,31.48],
    '乌鲁木齐':[87.68,43.77],
    '枣庄':[117.57,34.86],
    '杭州':[120.19,30.26],
    '淄博':[118.05,36.78],
    '鞍山':[122.85,41.12],
    '溧阳':[119.48,31.43],
    '库尔勒':[86.06,41.68],
    '安阳':[114.35,36.1],
    '开封':[114.35,34.79],
    '济南':[117,36.65],
    '德阳':[104.37,31.13],
    '温州':[120.65,28.01],
    '九江':[115.97,29.71],
    '邯郸':[114.47,36.6],
    '临安':[119.72,30.23],
    '兰州':[103.73,36.03],
    '沧州':[116.83,38.33],
    '临沂':[118.35,35.05],
    '南充':[106.110698,30.837793],
    '天津':[117.2,39.13],
    '富阳':[119.95,30.07],
    '泰安':[117.13,36.18],
    '诸暨':[120.23,29.71],
    '郑州':[113.65,34.76],
    '哈尔滨':[126.63,45.75],
    '聊城':[115.97,36.45],
    '芜湖':[118.38,31.33],
    '唐山':[118.02,39.63],
    '平顶山':[113.29,33.75],
    '邢台':[114.48,37.05],
    '德州':[116.29,37.45],
    '济宁':[116.59,35.38],
    '荆州':[112.239741,30.335165],
    '宜昌':[111.3,30.7],
    '义乌':[120.06,29.32],
    '丽水':[119.92,28.45],
    '洛阳':[112.44,34.7],
    '秦皇岛':[119.57,39.95],
    '株洲':[113.16,27.83],
    '石家庄':[114.48,38.03],
    '莱芜':[117.67,36.19],
    '常德':[111.69,29.05],
    '保定':[115.48,38.85],
    '湘潭':[112.91,27.87],
    '金华':[119.64,29.12],
    '岳阳':[113.09,29.37],
    '长沙':[113,28.21],
    '衢州':[118.88,28.97],
    '廊坊':[116.7,39.53],
    '菏泽':[115.480656,35.23375],
    '合肥':[117.27,31.86],
    '武汉':[114.31,30.52],
    '大庆':[125.03,46.58]
};
let convertData = function(data){ //该方法用于地图类echarts
    let res = [];
    for (let i = 0; i < data.length; i++) {
        let geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
export const map_option = {
    // backgroundColor: '#404a59',
    title: {
        text: '',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter:function(params){
            return params.name+'<br/>'+
                params.seriesName+": "+params.value[2]
        }
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:[],
        textStyle: {
            color: '#fff'
        }
    },
    xAxis :{
        type : 'category',
        boundaryGap : false,
        axisLine: {
            show:false,
            lineStyle:{
                color: '#fff',
                type:'solid',
                width:1
            }
        },
        axisTick: {
            show:false,
            lineStyle:{
                color:"#fff",
                type:'solid'
            }
        },
        axisLabel: {
            show:true,
            color: '#666',
            fontSize: 12,
            rotate:0
        },
        splitLine: {
            show: false,
        },
        data : []
    },
    yAxis : {
        type : 'value',
        max:null,
        min:null,
        axisLabel: {
            show: false,
            interval: '0',
            color: '',
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#EEEEEE'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#eeeeee',
                type: 'solid'
            },
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#2a4834',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: 'rgba(255, 205, 32, .5)'
            }
        }
    },
    series : [
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(map_data),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#ddb926'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(map_data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 3)),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'fill'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
}
