<template>
  <div>
    <div class="container-fluid about_bg1"></div>
    <div class="container about_centent">
      <div class="row">
        <div class="col-md-3">
          <ul class="nav nav-pills nav-stacked about_nav" role="tablist">
            <li role="presentation" :class="{about: true,on: true,active: aboutNavs.about.render}"><a @click="toabout" href="javascript:void(0)">关于我们</a></li>
            <li role="presentation" :class="{join: true,on: true,active: aboutNavs.join.render}"><a @click="tojoin" href="javascript:void(0)">加入我们</a></li>
            <li role="presentation" :class="{contact: true,on: true,active: aboutNavs.contact.render}"><a @click="tocontact" href="javascript:void(0)">联系我们</a></li>
            <li role="presentation" :class="{agreement: true,on: true,active: aboutNavs.agreement.render}"><a @click="toagreement" href="javascript:void(0)">网络协议</a></li>
          </ul>
        </div>
        <div class="col-md-9">
          <div class="about_dke" v-show="aboutNavs.about.render">
            <p class="title">Dear Click--点客</p>
            <div class="content">
            <p>音译于国外，释义为依靠点击率盈利的人，在国内被称为网络营销方案策划师，帮助企业或者商品，做网络的品牌、客户的专业策划人员，拥有完整的网络营销策划方案。</p>
            <p>点客传媒团队,是第一批从事freewap行业的先驱者，自2004年始，一直专注于移动广告传媒的研究，并做过很多的业内案例，深得业界同仁的认可，致力最新的移动广告模式，为合作伙伴呈现最完美的效果。</p>
            </div>
          </div>
          <div class="join_dke" v-show="aboutNavs.join.render">
            <p class="title">加入点客</p>
            <div class="content">
              <p class="jointitle">前端开发工程师</p>
              <div class="joincontent">
              <span>工作职责：</span>
              <ul class="list-unstyled">
                <li>1、为移动互联网应用开发用户交互页面；</li>
                <li>2、开发广告投放平台的人机交互，研究改善广告平台的用户体验。</li>
              </ul>
              <span>任职要求：</span>
              <ul class="list-unstyled">
                <li>1、具有强烈的进取心，对web开发拥有浓厚的兴趣，能够积极主动跟进业界的步伐；</li>
                <li>2、熟悉HTML+CSS+javascript开发，能够手写javascript，html，css；</li>
                <li>3、熟悉jQuery等js开发框架，bootstrap、mui等css开发框架；</li>
                <li>4、有团队协作开发经验，懂得使用各种团队协作工具，比如svn，bug tracker，wiki等等；</li>
              </ul>
              <span>具备以下条件之一者优先：</span>
              <ul class="list-unstyled">
                <li>1、有使用bootstrap独立构建过网站；</li>
                <li>2、拥有个人技术博客，并持续维护一年以上；</li>
                <li>3、开发并实际应用过jQuery插件或者参与相关开源项目；</li>
                <li>4、有PHP等脚本语言开发经验。</li>
              </ul>
            </div>
            <p class="jointitle" style="padding-top:20px;">PHP开发工程师</p>
            <div class="joincontent">
              <span>工作职责：</span>
              <ul class="list-unstyled">
                <li>1、负责公司产品相关业务模块的分析与设计；</li>
                <li>2、负责线上产品的维护、BUG修复和二次开发；</li>
                <li>3、负责相关开发文档的整理与编写。</li>
              </ul>
              <span>任职要求：</span>
              <ul class="list-unstyled">
                <li>1、精通PHP语言，并了解开源PHP开发框架，熟练至少一种PHP框架的使用；</li>
                <li>2、熟悉各种web服务(Nginx, Apache, Lighttpd)工作原理以及在Linux下的配置；</li>
                <li>3、熟练使用 MySQL 及NoSQL 数据库，有丰富的数据库使用经验及设计能力；</li>
                <li>4、熟悉各种缓存方式，有实际缓存经验者优先；</li>
                <li>5、对html、css、javascript有一定的了解，可以熟练运用以上技术编写代码；</li>
                <li>6、有团队协作开发经验，懂得使用各种团队协作工具，比如svn，bug tracker，wiki等等；</li>
              </ul>
              <span>具备以下条件之一者优先：</span>
              <ul class="list-unstyled">
                <li>1、有高并发或高流量网站开发经验者优先。</li>
              </ul>
            </div>
              <p class="jointitle" style="padding-top:20px;">商务助理</p>
              <div class="joincontent">
                <span>工作职责：</span>
                <ul class="list-unstyled">
                  <li>1、跟进公司客户合作；</li>
                  <li>2、开发新的客户渠道。</li>
                </ul>
                <span>任职要求：</span>
                <ul class="list-unstyled">
                  <li>1、专科以上学历；</li>
                  <li>2、有较好的沟通表达能力及服务意识；</li>
                  <li>3、工作有条理，细致、认真、有责任心，办事严谨；</li>
                  <li>4、熟练电脑操作及Office办公软件，具备基本的网络知识；</li>
                </ul>
                <span>具备以下条件之一者优先：</span>
                <ul class="list-unstyled">
                  <li>1、熟悉计算机和互联网，具备基本商务信函写作能力；</li>
                  <li>2、具备较强的文字撰写能力和较强的沟通协调以及语言表达能力。</li>
                </ul>
                <span>工作时间：</span>
                <ul class="list-unstyled">
                  <li>1、双休，五天制，早9点至晚上6点，节假日遵循国家法定节假日</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="contact_dke" v-show="aboutNavs.contact.render">
            <p class="title">联系我们</p>
            <img class="img-responsive" src="http://www.dearclick.com/images/map.jpg" alt="">
            <p><span>公司地址：</span><span>北京市朝阳区红军营南路汇中广场三层西侧</span></p>
            <p><span>电话号码：</span><span>010-84921966</span></p>
            <p><span>合作邮箱：</span><span>hezuo@dke.cn</span></p>
            <p><span>广告投放：</span><span></span></p>
          </div>
          <div class="agreement" v-show="aboutNavs.agreement.render">
            <p class="title">网络协议</p>
            <div class="content">
              <p>使用本网站前，请您仔细阅读以下条款，访问、浏览或使用本网站，即承认您已阅读、理解并同意接受这些条款或提及的所有条款，并遵守相关法律法规。如果您不接受这些条款，请不要使用本网站。</p>
              <p class="jointitle">1.网站使用</p>
              <p>1.1 本网站的内容仅供您个人而非商业性使用，对于内容中所含的任何权利声明您应予以遵守。即使本网站的内容没有相关权利声明，也并不代表本公司对其不享有权利，您应尊重这些内容的合法权益并遵守相关法律规定。</p>
              <p>1.2 您不得以任何方式修改、复制、公布、出租、出售或以其他方式将本网站内容用于任何公开或商业目的，禁止以任何目的把本网站内容用于任何其他网站或媒体。</p>
              <p>1.3 本公司可以随时对您访问或使用本网站进行任何修改、限制、暂停或终止，而无须事先通知，同时，也不对因此带给您或第三方的任何影响负责。</p>
              <p>1.4 本网站的内容受到法律法规的保护，若您违反了本使用条款，您应承担由此造成的一切后果和法律责任。</p>
              <p class="jointitle">2.信息提交</p>
              <p>2.1 请您不要向本网站发送或提交任何机密的或私人的信息（或材料），您通过本网站发送或提交的任何信息（或材料）都将被认为是非保密和非专有的，本公司可以出于任何目的以任何方式无限制地免费使用或传播该信息（或材料），同时该发送或提交视为您已同意本公司可因任何目的通过复制、修改、透露、分发、合并、传输、显示、执行以及其他方式自由使用该信息（或材料）。</p>
              <p>2.2 您需要对通过本网站发送、提交、上载、张贴或以其他方式传输的所有内容承担全部责任。本公司可以单方随时修改、删除该内容，或可以单方无限时中止该内容的网上浏览，情节严重的，本公司将提交相关部门处理。您不得通过本网站发送、提交、上载、张贴或以其他方式传输以下内容：</p>
              <p>2.2.1 任何非法的、威胁性的、暴力性的、反动性的、侮辱诽谤的、淫秽色情的或其他违法性的内容；</p>
              <p>2.2.2 未经合法授权而披露的个人信息；</p>
              <p>2.2.3 侵犯他人合法的知识产权权益的内容；</p>
              <p>2.2.4 携带计算机病毒或包含有任何破坏计算机、网站功能的程序、代码、文件等；</p>
              <p>2.2.5 垃圾邮件、广告信息。</p>
              <p class="jointitle">3.网站信息</p>
              <p>3.1 本网站的信息按原样提供，不附加任何形式的明示或默示的保证。本公司已经采取谨慎措施确保登载的信息的准确性，但不保证本网站信息的绝对准确性和绝对完整性。对于与本网站所提供信息的准确性、安全性等相关的问题，本公司概不负责，并且使用此类信息所带来的结果和风险由您自行承担。</p>
              <p>3.2 本公司可以随时修改或更新本网站的信息而不另行通知，修改或更新后的内容一经登载在本网站上即发生效力，请您定期访问。</p>
              <p class="jointitle">4.网站链接</p>
              <p>您可能通过本网站访问任何其它的站点，本公司只是为了您的方便提供该等链接，同时本公司保留在任何时候中止任何链接的权利。链接的站点独立于本网站，本网站不能控制该站点上的内容，也不对该站点上的内容和信息承担任何责任。对于访问与本网站链接的任何其它站点，所带来的结果和风险全部由您自身承担。</p>
              <p class="jointitle">5.知识产权</p>
              <p>5.1 未经本公司的书面同意，不得对本网站的信息、文字、音乐、图片、商标、标识以及其他内容进行传播、修改、复制、发行、出租、出售或以其他方式使用，不得对本网站的任何软件进行下载、传播、修改、复制、出租、出售、反编译、反向工程等，不得删除或修改任何版权、商标权、专利权或其他所有权的声明。</p>
              <p>5.2 本公司没有以任何方式对您授予任何知识产权许可，请您遵守相关法律法规。</p>
              <p class="jointitle">6.责任限制</p>
              <p>6.1 本公司对于任何因本网站使用或链接所引起的任何直接的、间接的、惩罚性的、特殊的、偶然的损失概不负责，包括但不限于业务、收入、利润、信誉、数据或其他损失，不管它们是否有保证、合同、侵权行为或任何其它法律根据以及事前已得到这类损害可能发生的忠告。如果您由于使用本网站而导致需要对数据或设备进行维护、修理或纠正，由此产生的任何费用全部由您自身承担。</p>
              <p>6.2 本使用条款或有关使用本网站的任何行为受中华人民共和国法律管辖，因此发生争议的，双方协商解决。如协商不成时，您同意由本公司法定地址所在地的人民法院作出裁决。</p>
              <p>6.3 本使用条款的解释权以及有关本网站使用的解释权属于本公司所有。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'about',
    data (){
      return {
        aboutNavs: {
          about: {class:'about', name: '关于我们', render: true},
          join: {class:'join', name: '加入我们', render: false},
          contact: {class:'contact', name: '联系我们', render: false},
          agreement: {class:'agreement', name: '网络协议', render: false}
        }
      }
    },
    mounted (){
    },
    // beforeRouteLeave (to, from, next) {
    // },
    methods: {
      initrender (target){
        for(var item in this.aboutNavs){
          this.aboutNavs[item].render = false
        }
        this.aboutNavs[target].render = true;
      },
      toabout (){
        this.initrender('about');
      },
      tojoin (){
        this.initrender('join');
      },
      tocontact (){
        this.initrender('contact');
      },
      toagreement (){
        this.initrender('agreement');
      }
    }
  }
</script>
<style scoped>
  .about_bg1{
    padding: 0;
    height: 320px;
    background: url(http://www.dke.cn/theme/about_bg1.png) no-repeat center center #34495e;
  }
  .about_centent{
    padding: 50px;
  }
  .about_nav{
    padding-bottom: 30px;
  }
  .about_nav li{
    float: none;
    text-align: center;
  }
  .about_nav a{
    font-size: 20px;
  }
  .about_nav>li.on>a{
    background-position-x: 70px;
  }
  .baout_nav>li.on>a:hover{
    background-color: #eee;
  }
  .about_nav .about a{ 
    display: block;
    background: url(http://www.dke.cn/theme/about_blue.png) no-repeat 40px center;
  }
  .about_nav .join a{
    display: block;
    background: url(http://www.dke.cn/theme/join_blue.png) no-repeat 40px center;
  }
  .about_nav .contact a{ 
    display: block;
    background: url(http://www.dke.cn/theme/connact_blue.png) no-repeat 40px center;
  }
  .about_nav .agreement a{ 
    display: block;
    background: url(http://www.dke.cn/theme/help_blue.png) no-repeat 40px center;
  }
  .about_nav .about.active a{ 
    background-image: url(http://www.dke.cn/theme/about_white.png);
  }
  .about_nav .join.active a{
    background-image: url(http://www.dke.cn/theme/join_white.png);
  }
  .about_nav .contact.active a{ 
    background-image: url(http://www.dke.cn/theme/connact_white.png);
  }
  .about_nav .agreement.active a{ 
    background-image: url(http://www.dke.cn/theme/help_white.png);
  }
  .about_nav .active a{
    background-color: #428bca;
  }
  .about_dke{
    padding: 5px 30px;
  }
  .about_dke p{
    color: #333;
    font-size: 15px;
  }
  .about_dke p.title,.join_dke p.title,.contact_dke p.title,.agreement p.title{
    font-size: 24px;
    text-align: center;
    margin-bottom: 40px;
  }
  .about_dke .content{
    margin-top: 25px;
  }
  .join_dke{
    padding: 5px 15px;
  }
  .join_dke p{
    font-size: 15px;
  }
  .join_dke p.jointitle{
    color: #10a8d8;
  }
  .join_dke .joincontent ul{
    background-color: #f3f3f3;
  }
  .join_dke .joincontent span{
    font-weight: 700;
    padding-left: 15px;
  }
  .join_dke .joincontent .list-unstyled{
    padding-left: 10px;
  }
  .contact_dke{
    padding: 0 25px;
  }
  .agreement .content p.jointitle{
    font-size: 16px;
    margin-top: 20px;
    color: #10a8d8;
  }
  @media (min-width: 768px){
    .about_dke p.title,.join_dke p.title,.contact_dke p.title,.agreement p.title{
      text-align: left;
    }
    .about_centent .about_nav>li.on>a{
      background-position-x: 220px;
    }
  }
  @media (min-width: 992px ){
    .about_centent .about_nav>li.on>a{
      background-position-x: 20px;
    }
  }
  @media (min-width: 1170px ){
    .about_centent .about_nav>li.on>a{
      background-position-x: 40px;
    }
  }
</style>