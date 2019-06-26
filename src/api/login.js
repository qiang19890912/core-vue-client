import request from '@/utils/request'

export function login(username, password) {
    return request({
      // url: '/account/login?username='+123+'&password='+456,
      url:'/account/login',
      method: 'post',
      data: {
        username,
        password
        // 'username':username,
        // 'password':password
      }
    })
  }
  