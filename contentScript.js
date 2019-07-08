let tabURL = window.location.toString()
const projectURI = tabURL.substring(
  tabURL.lastIndexOf('/') + 1,
  tabURL.indexOf('?') !== -1 ? tabURL.indexOf('?') : 999
)

fetch(`https://www.zectrack.today/project/${projectURI}/widget`)
  .then(res => res.text())
  .then(resString => {
    if (resString.includes('看起來出了點問題')) {
      console.log('這個專案發起時，Zectrack 還沒出生呢！')
    } else {
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
        'height: 520px; width: 100%; position: relative; margin: 0px auto; display: inline-block;'
      )
      document.querySelector('body > div.container.mv4-l.mt3-l').append(iframe)
      document.querySelector('body > div.container.mv4-l.mt3-l').append(info)
    }
  })
