const response1 = {
  topCard: {
    subTitle: '零售存款',
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
  },
  list: [{
    title: '报表分析',
    showBar: true,
    barlist: [{
      name: '趋势',
      id: '001'
    }, {
      name: '构成',
      id: '002'
    }],
    dataList: [{
      showType: 'LineChartCard',
      echartType: 'line',
    }, {
      showType: 'LineChartCard',
      echartType: 'pie',
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
    }]
  }, {
    title: '机构排行榜',
    showBar: false,
    dataList: [{
      showType: 'TableCard',
      data: {
        header: [
          { name: '排名', sort: 0 },
          { name: '机构', sort: 1 },
          { name: '存款余额', unit: '(亿)', sort: 2 },
          { name: '比上日', unit: '(亿)', sort: 3 },
          { name: '比上月', unit: '(亿)', sort: 4 },
        ],
        details: [
          ['01', '南区', '120', '10', '10'],
          ['02', '北区', '110', '10', '10'],
          ['03', '东区', '98', '10', '20'],
          ['04', '西区', '66', '10', '19'],
          ['05', '北京', '56', '10', '11'],
          ['06', '上海', '55', '10', '10'],
          ['07', '天津', '41', '10', '4'],
          ['08', '广州', '34', '10', '2'],
          ['09', '深圳', '12', '10', '1']
        ]
      }
    }]
  }]
}

const response2 = {
  topCard: {
    subTitle: '零售贷款',
    updateTime: '2020-04-12',
    showType: 'SimpleCard',
    data: {
      title: {
        value: '170.75',
        unit: '亿'
      },
      details: [{
        desc: '比上日',
        value: '600',
        unit: '亿',
        type: 'up'
      }, {
        desc: '比上月',
        value: '4.48',
        unit: '亿',
        type: 'down'
      }, {
        desc: '比年初',
        value: '200',
        unit: '亿',
        type: 'up'
      }]
    }
  },
  list: [{
    title: '报表分析',
    showBar: true,
    barlist: [{
      name: '趋势',
      id: '001'
    }, {
      name: '构成',
      id: '002'
    }],
    dataList: [{
      showType: 'LineChartCard',
      echartType: 'line',
    }, {
      showType: 'LineChartCard',
      echartType: 'pie',
    }]
  }, {
    title: '机构排行榜',
    showBar: false,
    dataList: [{
      showType: 'TableCard',
      data: {
        header: [
          { name: '排名', sort: 0 },
          { name: '机构', sort: 1 },
          { name: '存款余额', unit: '(亿)', sort: 2 },
          { name: '比上日', unit: '(亿)', sort: 3 },
          { name: '比上月', unit: '(亿)', sort: 4 },
        ],
        details: [
          ['01', '南区', '120', '10', '10'],
          ['02', '北区', '110', '10', '10'],
          ['03', '东区', '98', '10', '20'],
          ['04', '西区', '66', '10', '19'],
          ['05', '北京', '56', '10', '11'],
          ['06', '上海', '55', '10', '10'],
          ['07', '天津', '41', '10', '4'],
          ['08', '广州', '34', '10', '2'],
          ['09', '深圳', '12', '10', '1']
        ]
      }
    }]
  }]
}

const res = {
  "001": {
    topCard: {
      subTitle: '零售存款',
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
    },
    list: [{
      title: '报表分析',
      showBar: true,
      barlist: [{
        name: '趋势',
        id: '001'
      }, {
        name: '构成',
        id: '002'
      }],
      dataList: [{
        showType: 'LineChartCard',
        echartType: 'line',
      }, {
        showType: 'LineChartCard',
        echartType: 'pie',
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
      }]
    }, {
      title: '机构排行榜',
      showBar: false,
      dataList: [{
        showType: 'TableCard',
        data: {
          header: [
            { name: '排名', sort: 0 },
            { name: '机构', sort: 1 },
            { name: '存款余额', unit: '(亿)', sort: 2 },
            { name: '比上日', unit: '(亿)', sort: 3 },
            { name: '比上月', unit: '(亿)', sort: 4 },
          ],
          details: [
            ['01', '北京', '1100', '10', '1'],
            ['02', '天津', '1000', '10', '10'],
            ['03', '上海', '900', '10', '50'],
            ['04', '广州', '800', '10', '100'],
            ['05', '深圳', '700', '10', '100'],
            ['06', '武汉', '600', '10', '100'],
            ['07', '南京', '500', '10', '100'],
            ['08', '成都', '400', '10', '100'],
            ['09', '长沙', '300', '10', '100'],
            ['10', '西安', '200', '10', '100'],
            ['11', '南宁', '110', '10', '100'],
          ]
        }
      }]
    }]
  },
  // 公司存款
  "002": {
    topCard: {
      subTitle: '对公存款',
      updateTime: '2020-04-12',
      showType: 'SimpleCard',
      data: {
        title: {
          value: '780.7',
          unit: '亿'
        },
        details: [{
          desc: '比上日',
          value: '10',
          unit: '亿',
          type: 'up'
        }, {
          desc: '比上月',
          value: '30.8',
          unit: '亿',
          type: 'up'
        }, {
          desc: '比年初',
          value: '100',
          unit: '亿',
          type: 'down'
        }]
      }
    },
    list: [{
      title: '报表分析',
      showBar: true,
      barlist: [{
        name: '趋势',
        id: '001'
      }, {
        name: '构成',
        id: '002'
      }],
      dataList: [{
        showType: 'LineChartCard',
        echartType: 'line',
      }, {
        showType: 'LineChartCard',
        echartType: 'pie',
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
      }]
    }, {
      title: '机构排行榜',
      showBar: false,
      dataList: [{
        showType: 'TableCard',
        data: {
          header: [
            { name: '排名', sort: 0 },
            { name: '机构', sort: 1 },
            { name: '存款余额', unit: '(亿)', sort: 2 },
            { name: '比上日', unit: '(亿)', sort: 3 },
            { name: '比上月', unit: '(亿)', sort: 4 },
          ],
          details: [
            ['01', '南区', '120', '10', '10'],
            ['02', '北区', '110', '10', '10'],
            ['03', '东区', '98', '10', '20'],
            ['04', '西区', '66', '10', '19'],
            ['05', '北京', '56', '10', '11'],
            ['06', '上海', '55', '10', '10'],
            ['07', '天津', '41', '10', '4'],
            ['08', '广州', '34', '10', '2'],
            ['09', '深圳', '12', '10', '1']
          ]
        }
      }]
    }]
  },
  // 对公
  "003" : {
    topCard: {
      subTitle: '对公存款',
      updateTime: '2020-04-12',
      showType: 'SimpleCard',
      data: {
        title: {
          value: '1500.75',
          unit: '亿'
        },
        details: [{
          desc: '比上日',
          value: '10',
          unit: '亿',
          type: 'down'
        }, {
          desc: '比上月',
          value: '30.48',
          unit: '亿',
          type: 'down'
        }, {
          desc: '比年初',
          value: '100',
          unit: '亿',
          type: 'up'
        }]
      }
    },
    list: [{
      title: '报表分析',
      showBar: true,
      barlist: [{
        name: '趋势',
        id: '001'
      }, {
        name: '构成',
        id: '002'
      }],
      dataList: [{
        showType: 'LineChartCard',
        echartType: 'line',
      }, {
        showType: 'LineChartCard',
        echartType: 'pie',
      }]
    }, {
      title: '机构排行榜',
      showBar: false,
      dataList: [{
        showType: 'TableCard',
        data: {
          header: [
            { name: '排名', sort: 0 },
            { name: '机构', sort: 1 },
            { name: '存款余额', unit: '(亿)', sort: 2 },
            { name: '比上日', unit: '(亿)', sort: 3 },
            { name: '比上月', unit: '(亿)', sort: 4 },
          ],
          details: [
            ['01', '中行', '100', '10', '100'],
            ['02', '建行', '100', '10', '100'],
            ['03', '农行', '100', '10', '100'],
            ['04', '交行', '100', '10', '100'],
            ['05', '城商行', '100', '10', '100'],
            ['06', '中信', '100', '10', '100'],
            ['07', '平安', '100', '10', '100'],
          ]
        }
      }]
    }]
  },
  // 北京
  "004" :{
    topCard: {
      subTitle: '深圳分行',
      updateTime: '2020-04-12',
      showType: 'SimpleCard',
      data: {
        title: {
          value: '100.75',
          unit: '亿'
        },
        details: [{
          desc: '比上日',
          value: '6',
          unit: '亿',
          type: 'up'
        }, {
          desc: '比上月',
          value: '2.48',
          unit: '亿',
          type: 'up'
        }, {
          desc: '比年初',
          value: '12',
          unit: '亿',
          type: 'down'
        }]
      }
    },
    list: [{
      title: '报表分析',
      showBar: true,
      barlist: [{
        name: '趋势',
        id: '001'
      }, {
        name: '构成',
        id: '002'
      }],
      dataList: [{
        showType: 'LineChartCard',
        echartType: 'line',
      }, {
        showType: 'LineChartCard',
        echartType: 'pie',
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
      }]
    }, {
      title: '机构排行榜',
      showBar: false,
      dataList: [{
        showType: 'TableCard',
        data: {
          header: [
            { name: '排名', sort: 0 },
            { name: '机构', sort: 1 },
            { name: '存款余额', unit: '(亿)', sort: 2 },
            { name: '比上日', unit: '(亿)', sort: 3 },
            { name: '比上月', unit: '(亿)', sort: 4 },
          ],
          details: [
            ['01', '南山', '140', '10', '100'],
            ['02', '福田', '120', '10', '100'],
            ['03', '龙华', '110', '10', '100'],
            ['04', '宝安', '90', '10', '100']
            ['04', '龙岗', '80', '10', '100']
          ]
        }
      }]
    }]
  },
  '005':{
    topCard: {
      subTitle: '北京分行',
      updateTime: '2020-04-12',
      showType: 'SimpleCard',
      data: {
        title: {
          value: '10.75',
          unit: '亿'
        },
        details: [{
          desc: '比上日',
          value: '5',
          unit: '亿',
          type: 'up'
        }, {
          desc: '比上月',
          value: '30.48',
          unit: '亿',
          type: 'up'
        }, {
          desc: '比年初',
          value: '10',
          unit: '亿',
          type: 'down'
        }]
      }
    },
    list: [{
      title: '报表分析',
      showBar: true,
      barlist: [{
        name: '趋势',
        id: '001'
      }, {
        name: '构成',
        id: '002'
      }],
      dataList: [{
        showType: 'LineChartCard',
        echartType: 'line',
      }, {
        showType: 'LineChartCard',
        echartType: 'pie',
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
      }]
    }, {
      title: '机构排行榜',
      showBar: false,
      dataList: [{
        showType: 'TableCard',
        data: {
          header: [
            { name: '排名', sort: 0 },
            { name: '机构', sort: 1 },
            { name: '存款余额', unit: '(亿)', sort: 2 },
            { name: '比上日', unit: '(亿)', sort: 3 },
            { name: '比上月', unit: '(亿)', sort: 4 },
          ],
          details: [
            ['01', '玄武', '100', '10', '100'],
            ['02', '东城', '100', '10', '100'],
            ['03', '海淀', '100', '10', '100'],
            ['04', '西京', '100', '10', '100']
          ]
        }
      }]
    }]
  }
}

export {
  response1,
  response2,
  res
}
