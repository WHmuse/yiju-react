let express = require('express')
let bodyParser = require('body-parser');
let Mock = require('mockjs');
let {v4} = require('uuid')


let app = express();
app.use(bodyParser.urlencoded({extended:false}));

// 1. 轮播图接口
app.get('/banners',(req,res)=>{
    res.send({
        msg:'请求成功',
        code:1,
        list:[{
            id:1,
            url:'http://iwenwiki.com/api/livable/banner/banner1.png'
        },{
            id:2,
            url:'http://iwenwiki.com/api/livable/banner/banner2.png'
        },{
            id:3,
            url:'http://iwenwiki.com/api/livable/banner/banner3.png'
        }]
    })
})

// 新品推荐
app.get('/newsTj',(req,res)=>{
    // 需要一个参数，城市信息
    let city = req.query.city;
    res.send({
        msg:'success',
        code:1,
        list:[{
            id:1,
            title:city + '桌子',
            img:'http://iwenwiki.com/api/livable/homehot/img_aijiaodeng.png'
        },{
            id:2,
            title:city + '抱枕',
            img:'http://iwenwiki.com/api/livable/homehot/img_baozhen.png'
        },{
            id:3,
            title:city + '储物柜',
            img:'http://iwenwiki.com/api/livable/homehot/img_chuwugui.png'
        },{
            id:4,
            title:city + '镜子',
            img:'http://iwenwiki.com/api/livable/homehot/img_jingzi.png'
        }]
    })
})


// 热门推荐
app.get('/hotTj',(req,res)=>{
    // 需要一个参数，城市信息
    let city = req.query.city;
    res.send({
        msg:'success',
        code:1,
        list:[{
            id:11,
            title:city + '灯',
            img:'http://iwenwiki.com/api/livable/homehot/img_luodideng.png'
        },{
            id:12,
            title:city + '毛巾',
            img:'http://iwenwiki.com/api/livable/homehot/img_maojin.png'
        },{
            id:13,
            title:city + '吊灯',
            img:'http://iwenwiki.com/api/livable/homehot/img_zhaoming.png'
        },{
            id:14,
            title:city + '置物架',
            img:'http://iwenwiki.com/api/livable/homehot/img_zhiwujia.png'
        }]
    })
});


// 热门城市
// app.get('/hotcity',(req,res)=>{
//     res.send({
//         msg:'success',
//         list:[{id:1,city:'北京'},
//         {id:2,city:'上海'},
//         {id:3,city:'深圳'}
//         ,{id:4,city:'苏州'},
//         {id:5,city:'杭州'},
//         {id:6,city:'广州'},
//         {id:7,city:'天津'},
//         {id:8,city:'西安'}
//         ,{id:9,city:'重庆'},
//         {id:10,city:'武汉'},
//         {id:11,city:'成都'}
//     ]
//     })
// })
app.get('/hotcity',(req,res)=>{
    res.send(Mock.mock({
        msg:'success',
        'list|12':[{
            'id|+1':1,
            'city|+1':['北京','上海','深圳','苏州','杭州','广州','天津','西安','重庆','武汉','成都','南京']
        }]
    }))
})


// 搜索列表接口
app.get('/searchlist',(req,res)=>{
    let city = req.query.city;
    let keyword = req.query.keyword;
    let page = req.query.page;
    res.send(Mock.mock({
        msg:'success',
        code:1,
        curpage:page,
        'list|10':[{
            id:function(){
                return v4();
            },    
            temptitle:'@cword(4,8)',
            title:function(){
                return city+keyword+this.temptitle
            },
            'cztype|1':['整租','合租'],
            'curFloor|1-32':0,
            'zongFloor':'@natural(6,32)',
            floorStr:function(){
                return this.zongFloor >= this.curFloor ? this.curFloor+'/'+this.zongFloor : this.zongFloor+'/'+this.curFloor;
            },
            'huxing|1':['一室一厅','两室一厅','三室两厅'],
            'area|50-130.2':0,
            'tempprice|500-5000':0,
            price:function(){
                return '<h3>'+this.tempprice+'/月</h3>'
            },
            'img|1':['http://iwenwiki.com/api/livable/search/1.jpg',
            'http://iwenwiki.com/api/livable/search/2.JPG',
            'http://iwenwiki.com/api/livable/search/3.jpg',
            'http://iwenwiki.com/api/livable/search/4.JPG',
            'http://iwenwiki.com/api/livable/search/5.jpg',
            'http://iwenwiki.com/api/livable/search/6.jpg']
        }]
    }))
});


// 详情页轮播图
app.get('/detailsBanners',(req,res)=>{
    let id = req.query.id;
    res.send({
        code:1,
        msg:'success',
        id,
        list:['http://iwenwiki.com/api/livable/details/1.jpg',
        'http://iwenwiki.com/api/livable/details/2.jpg',
        'http://iwenwiki.com/api/livable/details/3.jpg',
        'http://iwenwiki.com/api/livable/details/4.jpg',
        'http://iwenwiki.com/api/livable/details/5.jpg',
        'http://iwenwiki.com/api/livable/details/6.jpg',
        'http://iwenwiki.com/api/livable/details/7.jpg',
        'http://iwenwiki.com/api/livable/details/8.jpg',
        'http://iwenwiki.com/api/livable/details/9.jpg',
        'http://iwenwiki.com/api/livable/details/10.jpg',
        'http://iwenwiki.com/api/livable/details/11.jpg',
        'http://iwenwiki.com/api/livable/details/12.jpg',
        'http://iwenwiki.com/api/livable/details/13.jpg',
    ]
    })
})


// 房屋信息
app.get('/house',(req,res)=>{
    let id = req.query.id;
    res.send(Mock.mock({
        code:1,
        msg:'success',
        title:'@cword(5,10)',
        'price|500-5000':9,
        'huxing|1':['一室一厅','两室一厅','三室两厅'],
        'area|50-130.2':0,
        'curFloor|1-32':0,
        'zongFloor':'@natural(6,32)',
        floorStr:function(){
            return this.zongFloor >= this.curFloor ? this.curFloor+'/'+this.zongFloor : this.zongFloor+'/'+this.curFloor;
        },
        'year|1980-2020':0,
        'chaoxiang|1':['朝南','朝北','朝东','朝西'],
        "zhuangxiu|1":['精装','简装','毛坯']
    }))
})

// 评论信息
app.get('/comment',(req,res)=>{
    let id = req.query.id;
    let page = req.query.page;
    res.send(Mock.mock({
        code:1,
        msg:'success',
        'list|5':[
            {
                'id':function(){
                    return v4()
                },
                'tel':/1\d{10}/,
                'content':'@cparagraph',
                'star|1-5':0
            }
        ]
    }))
})


// 购物车列表
app.get('/shopcarlist',(req,res)=>{
    let user = req.query.user;
    res.send(Mock.mock({
        code:1,
        msg:'success',
        'list|6':[
            {
                'id':function(){
                    return v4();
                },
                'img|1':['http://iwenwiki.com/api/livable/shop/z1.jpg',
                'http://iwenwiki.com/api/livable/shop/z2.jpg',
                'http://iwenwiki.com/api/livable/shop/z3.jpg',
                'http://iwenwiki.com/api/livable/shop/z4.jpg',
                'http://iwenwiki.com/api/livable/shop/z5.jpg',
                'http://iwenwiki.com/api/livable/shop/z6.jpg'
                ],
                title:'@cword(5,10)',
                'price|500-5000':9,
                'huxing|1':['一室一厅','两室一厅','三室两厅'],
                'area|50-130.2':0,
                'iscomment|1':true
            }
        ]
    }))
})

app.listen('6000',()=>{
    console.log('6000')
})