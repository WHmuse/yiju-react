# 技术栈
    react全家桶(react,react-router-dom,redux)
    express
    mockjs (还没讲)
    插件
    hook

# 环境搭建
    1. 安装基础环境 npx create-react-app projectname
    2. 安装路由 npm i react-router-dom
    3. 安装express,mockjs ， npm  i express mockjs -S
    4. 安装redux, npm i redux react-redux 
    5. 配置less、rem
        1. 配置less, 
            安装 less 和 less-loader
            运行eject,修改webpack.config.js配置文件
        2. 配置rem
            在html中添加一段js
    6. css初始化
        common.css / reset.css
        在index.js中添加 reset.css
    7. 字体图标
        下载字体图标
        在index.js中添加 iconfont.css       

# 编写路由
    1. 总共的页面：首页，商城，生活服务，我的，城市选择，搜索列表，详情页，购物车，登录
    2. 按需加载页面 React.lazy(()=>import('path'))
    3. 导航
        只做 首页，商城，生活服务，我的 这四个的底部导航

# 轮播图
    1. 使用插件
        react-swipeable-views
        swiper
    2. 做成一个公共组件

# 热门推荐
    
# mockjs
1. 安装：npm i mockjs -S
2. 数据模板定义规范
    1. 数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值
        'name|rule': value
    2. 生成规则 有 7 种格式：
        'name|min-max': value
        'name|count': value
        'name|min-max.dmin-dmax': value
        'name|min-max.dcount': value
        'name|count.dmin-dmax': value
        'name|count.dcount': value
        'name|+step': value
    3. 字符串使用数据模板时
        'name|min-max': string
        'name|count': string
    4. 数字类型使用数据模板时
        7种都可以使用
3. 数据占位符规范
    1. 格式：@占位符 /  @占位符(参数 [, 参数])
    2. 占位符全部都在 Mock.Random 下
        Basic ： 
        Date ：日期相关
        Image ：生成一张图片(base64)

4. 拦截ajax
    Mock.mock(url,type,{key:value})

# 热门城市选择
    1. 首页点击"城市"跳转到 "城市选择" 页面
    2. 热门城市页面
    3. 选择 "城市" 后，多个页面种都能访问到这个城市信息，刷新页面不能变


# 搜索功能
    1. 提取公共组件 搜索框
    2. 渲染列表
    3. 再次搜索
    4. 显示搜索的历史

# 列表页
    1. 加载更多功能
        1. 在列表下放一个容器，判断什么时候能被看到，被看到了说明该加载更多了
        2. 多个地方需要使用，提取成公共组件
    2. 跳转到详情页

# 详情页
    1. 封装tabs标签页
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
            </TabPane>
        </Tabs>

        

        <div>
            <div>
                <div>Tab 1</div>
                <div>Tab 2</div>
            </div>
            <div>
                <div>Content of Tab Pane 1</div>
                <div>Content of Tab Pane 2</div>
            </div>
        </div> 
    2. 收藏功能
        1. 需要判断是否登录了
        2. 有收藏记录
            1. 初始状态 
                本地存储模式数据库存储：
                    数据格式：{ key : value}
                        key : 可以把id作为key
                        value : true


# 购物车页面
    1. 在首页点击购物车，判断用户是否登录，如果登录了才能进，否则进入登录页面
    2. 显示用户名和城市
    3. 显示列表
    4. 评论功能
