import ClipboardJS from "clipboard";
let target = null
export default function copy(msg, success, error) {
  if (!target) {
    target = document.createElement('button')
    target.id = 'super-coper-container'
    target.style = 'width:1px;height:1px;overflow:hidden;-webkit-appearance:none;font-size:0;padding:0;margin:0;border:0;background:transparent;position:fixed;top:0;left:0;'
    document.body.appendChild(target)
  }
  target.setAttribute('data-clipboard-text', msg)

  const clipboard = new ClipboardJS('#super-coper-container')
  clipboard.on('success', function(e) {
      e.clearSelection();
      success && success()
      clipboard.destroy()
  })

  clipboard.on('error', () => {
    error && error()
    clipboard.destroy()
  })
  target.click()
}
