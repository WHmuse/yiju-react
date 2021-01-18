// 1. 数据模板规范
// 字符串类型
import Mock from 'mockjs';
/* 
Mock.mock(url,type,{key:value})
 */
console.log(Mock.mock({
    'username|1-3':'ha',
    'str|3':'a',
    'num1|1-3':5,
    'num2|9-29.1':1,
    'num3|2-5.1-2':8,
    'arr|3':[{
        'id|+1':1001
    }],
    'arr1|4':[
        {
            'name|+1':['宋亚杰','祁望','王圆锋']
        }
    ],
    'shuiguo|3':[{
        'tempPrice|9-29':1,
        'name|+1':['苹果','香蕉','梨'],
        'price':function(){
            return this.tempPrice + 0.9
        }
    }],
    'info|1-3':{
        name:'我就一条',
        age:12,
        sex:'男',
        tel:110
    },
    'zhongjiang|1-99':true,
    'name1':/[A-Z][a-z]{3,7}(\s+)[A-Z][a-z]{2,}/,
    'zhongjiang2':Mock.Random.boolean(3,97,true),
    'zhongjiang3':'@boolean(1,1,true)',
    'name2':'@cname(true)'
}))


// Mock拦截ajax请求

Mock.mock('http://localhost:1234/list','get',{
  'list|3-5':[{
      'id|+5':2,
      name:'@cname()',
      title:'@ctitle(8,20)',
      desc:'@cparagraph(30)'
  }]  
})