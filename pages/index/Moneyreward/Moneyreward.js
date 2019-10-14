// pages/adviser/adviserhome/adviserhome.js
let windowWidth = 0;
let itemWidth = 0;
// 视频
import * as video from '../../../utils/video';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频页面
    //首页下的视频
    videos: [
      {
        index: 0,
        attr: {
          src: 'https://1256993030.vod2.myqcloud.com/d520582dvodtransgzp1256993030/7732bd367447398157015849771/v.f40.mp4',
          cover: '//vodplayerinfo-10005041.file.myqcloud.com/3035579109/vod_paster_pause/paster_pause1469013308.jpg'
        }
      },
      {
        index: 1,
        attr: {
          src: 'http://1256993030.vod2.myqcloud.com/d520582dvodtransgzp1256993030/7732bd367447398157015849771/v.f30.mp4',
          cover: '//vodplayerinfo-10005041.file.myqcloud.com/3035579109/vod_paster_pause/paster_pause1469013308.jpg'
        }
      },
      {
        index: 2,
        attr: {
          src: 'http://1256993030.vod2.myqcloud.com/d520582dvodtransgzp1256993030/7732bd367447398157015849771/v.f30.mp4',
          cover: '//vodplayerinfo-10005041.file.myqcloud.com/3035579109/vod_paster_pause/paster_pause1469013308.jpg'
        }
      },
      {
        index: 3,
        attr: {
          src: 'http://1256993030.vod2.myqcloud.com/d520582dvodtransgzp1256993030/7732bd367447398157015849771/v.f30.mp4',
          cover: '//vodplayerinfo-10005041.file.myqcloud.com/3035579109/vod_paster_pause/paster_pause1469013308.jpg'
        }
      },
      {
        index: 4,
        attr: {
          src: 'http://1256993030.vod2.myqcloud.com/d520582dvodtransgzp1256993030/7732bd367447398157015849771/v.f30.mp4',
          cover: '//vodplayerinfo-10005041.file.myqcloud.com/3035579109/vod_paster_pause/paster_pause1469013308.jpg'
        }
      },
      {
        index: 5,
        attr: {
          src: 'http://1256993030.vod2.myqcloud.com/d520582dvodtransgzp1256993030/7732bd367447398157015849771/v.f30.mp4',
          cover: '//vodplayerinfo-10005041.file.myqcloud.com/3035579109/vod_paster_pause/paster_pause1469013308.jpg'
        }
      },
      {
        index: 6,
        attr: {
          src: 'http://1256993030.vod2.myqcloud.com/d520582dvodtransgzp1256993030/7732bd367447398157015849771/v.f30.mp4',
          cover: '//vodplayerinfo-10005041.file.myqcloud.com/3035579109/vod_paster_pause/paster_pause1469013308.jpg'
        }
      },
      {
        index: 7,
        attr: {
          src: 'http://1256993030.vod2.myqcloud.com/d520582dvodtransgzp1256993030/7732bd367447398157015849771/v.f30.mp4',
          cover: '//vodplayerinfo-10005041.file.myqcloud.com/3035579109/vod_paster_pause/paster_pause1469013308.jpg'
        }
      },
      {
        index: 8,
        attr: {
          src: 'http://1256993030.vod2.myqcloud.com/d520582dvodtransgzp1256993030/7732bd367447398157015849771/v.f30.mp4',
          cover: '//vodplayerinfo-10005041.file.myqcloud.com/3035579109/vod_paster_pause/paster_pause1469013308.jpg'
        }
      },
      {
        index: 9,
        attr: {
          src: 'http://1256993030.vod2.myqcloud.com/d520582dvodtransgzp1256993030/7732bd367447398157015849771/v.f30.mp4',
          cover: '//vodplayerinfo-10005041.file.myqcloud.com/3035579109/vod_paster_pause/paster_pause1469013308.jpg'
        }
      }
    ],
    // swiper
    sliderOffset: 0,
    sliderOffsets: [],
    sliderLeft: 0,
    tabs: ["图片", "视频", "文章"],
    tab1Index: 0,
    //图片
    list: [
      {
        url: '/images/Renovation_1.jpg',
        name: '天马001',

      },
      {
        url: '/images/Renovation_4.jpg',
        name: '天马001',

      },
      {
        url: '/images/Renovation_3.jpg',
        name: '天马001',

      },
      {
        url: '/images/Renovation_7.jpg',
        name: '天马001',

      },
      {
        url: '/images/Renovation_6.jpg',
        name: '天马001',

      },
      {
        url: '/images/Renovation_8.jpg',
        name: '天马001',

      },
      {
        url: '/images/Renovation_9.jpg',
        name: '天马001',

      },
      {
        url: '/images/Renovation_1.jpg',
        name: '天马001',

      },
      {
        url: '/images/Renovation_4.jpg',
        name: '天马001',

      },
      {
        url: '/images/Renovation_2.jpg',
        name: '天马005',
      },

    ],
    leftHeight: 0,
    rightHeight: 0,
    length: 10,
    pageNo: 1,
    descHeight: 40, //图片文字描述的高度
    pageStatus: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.clueOffset();
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    })
  },
  /**
    * 计算偏移量
    */
  clueOffset() {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        itemWidth = Math.ceil(res.windowWidth / that.data.tabs.length);
        let tempArr = [];
        for (let i in that.data.tabs) {
          console.log(i)
          tempArr.push(itemWidth * i);
        }
        // tab 样式初始化
        windowWidth = res.windowWidth;
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - 50) / 2.5,
          sliderOffsets: tempArr,
          sliderOffset: 0
        });
      }
    });
  },

  /**
   * tabItme点击
   */
  onTab1Click(event) {
    let index = event.currentTarget.dataset.index;
    this.setData({
      sliderOffset: this.data.sliderOffsets[index],
      tab1Index: index,
    })
  },

  /**
   * swiper-item 的位置发生改变
   */
  swiperTran(event) {

    let dx = event.detail.dx;
    let index = event.currentTarget.dataset.index;
    if (dx > 0) { //----->
      if (index < this.data.tabs.length - 1) {   //最后一页不能---->
        let ratio = dx / windowWidth;   /*滑动比例*/
        let newOffset = ratio * itemWidth + this.data.sliderOffsets[index];
        // console.log(newOffset,",index:",index);
        this.setData({
          sliderOffset: newOffset,
        })
      }
    } else {  //<-----------
      if (index > 0) {    //最后一页不能<----
        let ratio = dx / windowWidth;   /*滑动比例*/
        let newOffset = ratio * itemWidth + this.data.sliderOffsets[index];
        console.log(newOffset, ",index:", index);
        this.setData({
          sliderOffset: newOffset,
        })
      }
    }

  },

  /**
   * current 改变时会触发 change 事件
   */
  swiperChange(event) {
    // this.setData({
    //   sliderOffset: this.data.sliderOffsets[event.detail.current],
    //   tab1Index: event.detail.current,
    // })
  },
  /**
   * 动画结束时会触发 animationfinish 事件
   */
  animationfinish(event) {
    this.setData({
      sliderOffset: this.data.sliderOffsets[event.detail.current],
      tab1Index: event.detail.current,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      list2: this.data.list
    });
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 加载图片瀑布流
   */
  loadImage: function (e) {
    var vm = this;
    var listlength = vm.data.list.length;

    vm.setData({
      length: listlength
    })
    var windowWidth = wx.getSystemInfoSync().windowWidth;
    var index = e.currentTarget.dataset.index;
    vm.data.list[index].height = windowWidth / 2 / e.detail.width * e.detail.height;
    var count = 0;
    for (var i = (vm.data.pageNo - 1) * vm.data.length; i < vm.data.list.length; i++) {
      if (vm.data.list[i].height) {
        count++;
      }
    }
    if (count == vm.data.length) {
      for (var i = (vm.data.pageNo - 1) * vm.data.length; i < vm.data.list.length; i++) {
        if (vm.data.leftHeight <= vm.data.rightHeight) {
          vm.data.list[i].top = vm.data.leftHeight;
          vm.data.list[i].left = windowWidth * 0.005;
          vm.setData({
            leftHeight: vm.data.leftHeight + vm.data.list[i].height + vm.data.descHeight
          });
        } else {
          vm.data.list[i].top = vm.data.rightHeight;
          vm.data.list[i].left = windowWidth / 2 - windowWidth * 0.005;
          vm.setData({
            rightHeight: vm.data.rightHeight + vm.data.list[i].height + vm.data.descHeight
          });
        }
      }
      vm.setData({
        list: vm.data.list
      });
    }
  },
  //首页下的视频
  //主题封面点击-播放视频
  bindplay(e) {
    video.bindplay(this, e)
  },
  //监听视频播放
  bindplay_video(e) {
    video.bindplay_video(this, e)
  },
  //跳转到全屏播放页面
  startOnPlay(ev) {
    wx.navigateTo({
      url: '/pages/index/video/videoFull/videoFull?src=' + ev.currentTarget.dataset.src,
    })
  }
})