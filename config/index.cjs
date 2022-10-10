/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxfdf60b1cb5ba3648',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'e2903afab0bbb3f310217008251f5b51',

  PROVINCE: '重庆',
  CITY: '重庆',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oAOGK6FeLXnr2_O7ImxtEFwWGQKA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'wcydDybQREI1UwpqGZ-uJNvpuVtddrEoTrX5jVP2wRE',
      festivals: [       
         {
          type: '生日', name: '小宝', year: '2004', date: '06-22',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '09-09',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'PvsgvK_AHPwsCBTtssaTvfOMFTTG9LEoYFZ2ktX2r3c',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oAOGK6E312dUinzjFG05f5dI8R4c',
    }
  ],

}

module.exports = USER_CONFIG

