// 可以把 iframe 送進去，然後顯示外部網站的資訊
const div = document.createElement('DIV')
div.setAttribute('style', 'border: 2px solid #D5CC5A; overflow: hidden;')

var iframe = document.createElement('IFRAME')
iframe.setAttribute('src', 'https://www.zectrack.today/project/rolls')
iframe.setAttribute('scrolling', 'no')
iframe.setAttribute('frameborder', '0')
iframe.setAttribute(
  'style',
  'height: 1200px; width: 100%; position: relative; margin: 0px auto; display: inline-block;margin-top: -900px'
)

div.append(iframe)
document.querySelector('body > div.container.mv4-l.mt3-l').append(div)
