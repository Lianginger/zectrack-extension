// 可以把 iframe 送進去，然後顯示外部網站的資訊
let tabURL = window.location.toString()
const projectURI = tabURL.substring(tabURL.lastIndexOf('/') + 1)
console.log(`https://www.zectrack.today/project/${projectURI}/widget`)
fetch(`https://www.zectrack.today/project/${projectURI}/widget`).then(res => {
  console.log(res.text().includes('看起來出了點問題'))
})

const info = document.createElement('SMALL')
info.innerHTML =
  '*Zectrack 每五分鐘同步一次專案數據，因此數據會與實際金額、人數有些許落差。'
info.setAttribute('class', 'text-secondary')

var iframe = document.createElement('IFRAME')
iframe.setAttribute(
  'src',
  `https://www.zectrack.today/project/${projectURI}/widget`
)
iframe.setAttribute('scrolling', 'no')
iframe.setAttribute('frameborder', '0')
iframe.setAttribute(
  'style',
  'height: 500px; width: 100%; position: relative; margin: 0px auto; display: inline-block;'
)
document.querySelector('body > div.container.mv4-l.mt3-l').append(iframe)
document.querySelector('body > div.container.mv4-l.mt3-l').append(info)
