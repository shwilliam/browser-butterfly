export const spawnButterfly = (dimensions = [70, 70]) => {
  const {availWidth, availHeight} = window.screen

  const imageEl = document.createElement('img')
  imageEl.setAttribute(
    'src',
    'https://user-images.githubusercontent.com/38357771/82930042-93cf2580-9f39-11ea-9d54-0387b0e8c2df.gif',
  )
  imageEl.setAttribute('width', '100%')

  const win = window.open(
    '',
    '',
    `width=${dimensions[0]},height=${dimensions[1]}`,
  )
  let i = 1
  setInterval(() => {
    const progress = i / 100
    win.moveTo(
      availWidth * (1 - progress),
      availHeight / 2 +
        (Math.sin(progress * Math.PI * 2) * (availHeight - 400)) / 2,
    )
    i = (i + 1) % 100
  }, 175)

  win.document.body.append(imageEl)
  win.document.title = '🦋'
}
