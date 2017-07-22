/**
 * Created by 22 on 2017/7/22.
 */
export default class Context {
  static JSONP(url, callbackName, callback) {
    let script = document.createElement('script')
    script.setAttribute('src', url)
    document.getElementsByTagName('head')[0].appendChild(script)
    window[callbackName] = callback
  }
}
