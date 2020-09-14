const lineOption = {
  backgroundColor: 'transparent',
  color: ['#37A2DA', '#67E0E3', '#9FE6B8'],
  tooltip: {
    show: true,
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: 'rgba(255,255,255,0.6)',
        type: 'dashed'
      },
    }
  },
  legend: {
    data: ['余额'],
    bottom: 10,
    left: 'center',
    color: '#fff',
    z: 100,
    icon: 'rect',
    itemWidth: 15,
    itemHeight:10,
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    containLabel: true,
    left:0,
    right:10,
    bottom:40,
    top:20
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    axisLine: {
      lineStyle: {
        color: '#353A50'
      }
    }
    // show: false
  },
  yAxis: {
    x: 'center',
    type: 'value',
    color: '#fff',
    axisLine: {
      show: false,
      lineStyle: {
        color: '#353A50'
      }
    },
    splitLine: {
      lineStyle: {
        type: 'line',
        color: '#353A50',
        type: 'solid'
      }
    }
  },
  axisLabel: {
    showMaxLabel: true,
    showMinLabel: true,
    verticalAlign: 'middle',
    color: '#fff'
  },
  series: [{
    name: '余额',
    type: 'line',
    smooth: true,
    data: [18, 36, 65, 30, 78, 40, 33],
    itemStyle : {
      opacity: 0,
    },
    emphasis:{
      itemStyle:{
        color : 'rgba(0,161,246,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth:4,
        opacity: 1
      }
    },
    tooltip: {
      formatter: '{b0}: {c0}<br />{b1}: {c1}'
    },
    lineStyle: {
      width:3,
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0, color: '#007DF0' // 0% 处的颜色
        }, {
          offset: 1, color: '#00C2FA' // 100% 处的颜色
        }],
        global: false // 缺省为 false
      }
    }
  }]
}

function getLineOption(showStyle, canvasId) {
  console.log('showStyle-->',showStyle)
  if (showStyle !== 0) {
    const defa = {
      color: '#fff',
      ScanvasId: canvasId,
      legend: {
        show: false
      },
      series: [{
        name: '余额',
        type: 'line',
        smooth: true,
        data: [18, 36, 65, 30, 78, 40, 33],
        lineStyle: {
          color: '#fff'
        }
      }]
    }
    const newC = Object.assign(lineOption, defa)
    return newC
  } else {
    return Object.assign(lineOption, {
      ScanvasId: canvasId,
    })
  }
}

export {getLineOption,lineOption}
