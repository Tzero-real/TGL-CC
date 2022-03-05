// 本组件由TGL工作室提供
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    nowTime:'2022'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  },
  lifetimes: {
    attached: function() {
        this.setData({
          nowTime:new Date().getFullYear()
        })    
    }
  },

})
