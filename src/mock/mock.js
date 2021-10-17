const Mock = require('mockjs')
const Random = Mock.Random

// data in Home page
Mock.mock('/getUser', {
  'data|3': [{
    'username': Random.cname(),
    'age': Random.natural(22, 40),
    'date': Random.date('yyyy-MM-dd'),
    'address': Random.county(true)
  }]
})

// data for login
Mock.mock('/login', function (options) {
  let flag = Math.random() > 0.5
  if (flag) {
    return {
      'error_code': 0,
      'status': 200,
      'data': [{
        'id': '1',
        'username': 'admin',
        'password': '123456',
        'token': '123123123'
      },
      {
        'id': '2',
        'username': 'tom',
        'password': '654321',
        'token': '123123123'
      }
      ]
    }
  } else {
    return {
      'status': 401,
      'msg': 'Username or password error!'
    }
  }
})
