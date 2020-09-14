const pieOption = {
  backgroundColor: 'transparent',
  title: {
    top: 60,
    left: 68,
    subtext: '当日余额',
    subtextStyle: {
      color: '#7981A0'
    },
    textStyle: {
      color: '#fff',
      formatter: [
        '{a|95}',
        '{b|亿元}'
      ].join('\n'),
      rich: {
        a: {
          fontSize: 20
        },
        b: {
          fontSize: 18
        }
      }
    }
  },
  color: ['#0DCD87', '#AA25C9', '#119CFD'],
  tooltip: {
    trigger: 'item',
    formatter: '{b}:({d}%)',
    position: function (pos, params, dom, rect, size) {
      // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
      var obj = {top: 0};
      obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
      return obj;
    }
  },
  label: {
    position: 'outside'
  },
  legend: {
    orient: 'vertical',
    right: 10,
    top: 30,
    icon:'circle',
    data: ['活期存款', '定期存款', '理财存款'],
    textStyle: {
      color: '#fff'
    }
  },
  series: [
    {
        name: '访问来源',
        type: 'pie',
        radius: ['30%', '50%'],
        center :['40%','30%'],
        avoidLabelOverlap: false,
        width: 240,
        height:240,
        label: {
            show: false,
            position: 'outside'
        },
        emphasis: {
          label: {
            show: false,
            fontSize: '30',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          {value: 335, name: '活期存款'},
          {value: 310, name: '定期存款'},
          {value: 234, name: '理财存款'}
        ]
    }
  ]
}

export default pieOption
