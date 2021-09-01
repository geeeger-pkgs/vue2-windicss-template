import D from "@geeeger/deferred";

export default function fetchBlob(src) {
  const d = D()
  var xhr = new XMLHttpRequest();
  xhr.open("get", src, true);
  xhr.responseType = "blob";
  xhr.onload = function() {
      if (this.status == 200) {
        d.resolve(window.URL.createObjectURL(this.response))
      } else {
        d.reject(new Error('请求图片错误'))
      }
  }
  xhr.onabort = function() {
    d.reject(new Error('请求图片取消'))
  }
  xhr.onerror = function() {
    d.reject(new Error('请求图片网络错误'))
  }
  xhr.send();

  return d.promise
}

