export default class SocketService {
  /*
单例模式
  */
  static instance = null
  static get Instance() {
    if (!this.instance) {
      this.instance = new SocketService()
    }

    return this.instance
  }

  ws = null

  callbackMapping = {}

  // 标识是否连接成功
  connected = false
  sendRetryCount = 0
  connectRetryCount = 0

  //连接服务器方法
  connect() {
    if (!window.WebSocket) {
      return alert('浏览器不支持websocket')
    }

    // 连接的建立是个异步过程
    this.ws = new WebSocket('ws://127.0.0.1:8080')

    //事件监听
    this.ws.onopen = () => {
      console.log('连接成功')
      this.connected = true
      this.connectRetryCount = 0
    }

    // 1. 连接服务端失败
    // 2. 连接成功后，服务器关闭的情况
    this.ws.onclose = () => {
      console.log('连接关闭')
      this.connected = false
      this.connectRetryCount++
      // 尝试重连
      setTimeout(() => {
        this.connect()
      }, this.connectRetryCount * 500)
    }

    //接收信息
    this.ws.onmessage = (msg) => {
      const payload = JSON.parse(msg.data)
      const functionName = payload.functionName
      this.callbackMapping[functionName].call(this, payload.data)
    }
  }

  registerCallback(funtionName, callback) {
    this.callbackMapping[funtionName] = callback
  }

  unregisterCallback(funtionName) {
    this.callbackMapping[funtionName] = null
  }

  //发送数据
  send(data) {
    // 先判断是否连接成功
    if (this.connected) {
      this.sendRetryCount = 0
      this.ws.send(JSON.stringify(data))
    } else {
      this.sendRetryCount++
      //延迟重新发送数据
      setTimeout(() => {
        this.send(data)
      }, this.sendRetryCount * 500)
    }
  }
}
