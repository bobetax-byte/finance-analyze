// 首页
const home = [
  {
    // 路由
    route: 'pages/index',
    // 路径
    path: 'pages/index',
    // 配置
    config: {
      navigationBarTitleText: 'CPASS',
      navigationBarBackgroundColor: '#7E73FF',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true
    },
    // 设置分包
    subPackage: true,
    root: 'pages/index'
  }
]
module.exports = home
