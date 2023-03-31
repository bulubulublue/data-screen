const wordcloudData = [
  {
    word: '北京',
    count: 7526,
    user: 6533
  },
  {
    word: '上海',
    count: 1100,
    user: 233
  },
  {
    word: '广州',
    count: 9635,
    user: 3333
  },
  {
    word: '深圳',
    count: 39,
    user: 16
  },
  {
    word: '南京',
    count: 7690,
    user: 1255
  },
  {
    word: '杭州',
    count: 6837,
    user: 116
  },
  {
    word: '美食',
    count: 9189,
    user: 5989
  },
  {
    word: '水果',
    count: 9214,
    user: 8099
  },
  {
    word: '跑腿',
    count: 3408,
    user: 1012
  },
  {
    word: '面条',
    count: 6371,
    user: 4689
  },
  {
    word: '牛肉',
    count: 471,
    user: 380
  },
  {
    word: '鸡腿',
    count: 7400,
    user: 1196
  },
  {
    word: '麦乐鸡',
    count: 489,
    user: 354
  },
  {
    word: '冒菜',
    count: 572,
    user: 375
  }
]

const chartData = {
  salesToday: 30390345,
  salesGrowthLastDay: '1.30',
  salesGrowthLastMonth: '30.99',
  salesLastDay: 30000000,
  orderLastDay:2000000,
  orderToday:2511715,
  orderTrend: [620,432,220,534,790,430,220,320,532,320,834,690,530,220,620],
  orderUser:315305,
  orderUserTrend:[410,82,200,334,380,330,220,150,85,280,230,134,400,90],
  orderUserTrendAxis:["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00"],
  returnRate:5.25,
  userToday:1412471,
  userGrowthLastDay:41.92,
  userGrowthLastMonth:77.42,
  userLastMonth:1412471,
  orderFullYear:[410,82,200,334,390,330,220,150,82,200,350,276,123],
  orderFullYearAxis:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  orderRank:[
    {
      money:323234,
      name:'肯德基',
      no:1
    },
    {
      money:299132,
      name:'麦当劳',
      no:2
    },
    {
      money:283998,
      name:'必胜客',
      no:3
    },
    {
      money:274356,
      name:'西贝莜面村',
      no:4
    },
    {
      money:269308,
      name:'真功夫',
      no:5
    },
    {
      money:180612,
      name:'汉堡王',
      no:6
    },
    {
      money:172995,
      name:'海底捞',
      no:7
    },
  ],
  userFullYear:[100,234,456,124,678,245,120,98,569,200,350,276,123],
  userFullYearAxis:['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  userRank:[
    {
      money:211355,
      name:'麦当劳',
      no:1
    },
    {
      money:210597,
      name:'肯德基',
      no:2
    },
    {
      money:200998,
      name:'必胜客',
      no:3
    },
    {
      money:199220,
      name:'海底捞',
      no:4
    },
    {
      money:195444,
      name:'西贝莜面村',
      no:5
    },
    {
      money:180112,
      name:'汉堡王',
      no:6
    },
    {
      money:172995,
      name:'真功夫',
      no:7
    },
  ],
  category:{
    category:{
      axisX:['粉面粥店','简餐便当','汉堡披萨','香锅冒菜','小吃炸串','地方菜系','轻食简餐'],
      data1:[19,54,93,93,67,72,38],
      data2:[]
    },
    product:{
      axisX:['草莓','甘蔗','榴莲','菠萝','香蕉','梨','樱桃'],
      data1:[26,45,52,15,37,42,38],
      data2:[]
    }
  }
}


const scatterData = {
  data:[
    { name: '海门', value: 9 },
    { name: '鄂尔多斯', value: 12 },
    { name: '招远', value: 12 },
    { name: '舟山', value: 12 },
    { name: '齐齐哈尔', value: 14 },
    { name: '盐城', value: 15 },
    { name: '赤峰', value: 16 },
    { name: '青岛', value: 18 },
    { name: '乳山', value: 18 },
    { name: '金昌', value: 19 },
    { name: '泉州', value: 21 },
    { name: '莱西', value: 21 },
    { name: '日照', value: 21 },
    { name: '胶南', value: 22 },
    { name: '南通', value: 23 },
    { name: '拉萨', value: 24 },
    { name: '云浮', value: 24 },
    { name: '梅州', value: 25 },
    { name: '文登', value: 25 },
    { name: '上海', value: 25 },
    { name: '攀枝花', value: 25 },
    { name: '威海', value: 25 },
    { name: '承德', value: 25 },
    { name: '淄博', value: 85 },
    { name: '鞍山', value: 86 },
    { name: '溧阳', value: 86 },
    { name: '库尔勒', value: 86 },
    { name: '聊城', value: 116 },
    { name: '芜湖', value: 117 },
    { name: '唐山', value: 119 },
    { name: '平顶山', value: 119 },
    { name: '菏泽', value: 194 },
    { name: '合肥', value: 229 },
    { name: '武汉', value: 273 },
    { name: '大庆', value: 279 }
  ],
}


export default [
  {
    url: '/mock/api/wordcloud',
    method: 'get',
    response: () => wordcloudData
  },
  {
    url: '/mock/api/scatter',
    method: 'get',
    response: () => scatterData
  },
  {
    url: '/mock/api/chart',
    method: 'get',
    response: () => chartData
  },
]