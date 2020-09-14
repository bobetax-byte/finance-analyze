const cardList = [{
  title: '一般存款',
  showType: 'LineChartCard',
  data: {
    details: [{
      desc: '月日均',
      value: '100',
      unit: '亿',
    }, {
      desc: '比上月',
      value: '3.48',
      unit: '亿',
      type: 'up'
    }, {
      desc: '余额',
      value: '100',
      unit: '亿',
    }, {
      desc: '余额',
      value: '100',
      unit: '亿',
      type: 'up'
    }],
    chartData: []
  }
}, {
  title: '零售存款',
  updateTime: '2020-04-12',
  showType: 'SimpleCard',
  data: {
    title: {
      value: '150.75',
      unit: '亿'
    },
    details: [{
      desc: '比上日',
      value: '100',
      unit: '亿',
      type: 'up'
    }, {
      desc: '比上月',
      value: '3.48',
      unit: '亿',
      type: 'up'
    }, {
      desc: '比年初',
      value: '100',
      unit: '亿',
      type: 'down'
    }]
  }
}, {
  title: '公司存款',
  updateTime: '2020-04-12',
  showType: 'SimpleCard',
  data: {
    title: {
      value: '250.75',
      unit: '亿'
    },
    details: [{
      desc: '比上日',
      value: '101',
      unit: '亿',
      type: 'up'
    }, {
      desc: '比上月',
      value: '3.08',
      unit: '亿',
      type: 'up'
    }, {
      desc: '比年初',
      value: '105',
      unit: '亿',
      type: 'down'
    }]
  }
}]

export default cardList
