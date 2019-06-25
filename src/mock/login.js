import Mock from 'mockjs'

Mock.mock('/api/login', (req, res) => {
    return {
        code: 200,
        message: undefined,
        data: {
            username: 'qiang',
            password: '123'
        }
    }
})
Mock.mock('/api/login', {
    code: 200,
    message: undefined,
    data: {
        username: 'qiang',
        password: '123'
    }
})