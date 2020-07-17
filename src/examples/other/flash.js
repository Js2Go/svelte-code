export default function flash(ele) {
  requestAnimationFrame(() => {
    ele.style.transition = 'none'
    ele.style.color = 'rgba(255,62,0,1)'
    ele.style.backgroundColor = 'rgba(255,62,0,0.2)'

    setTimeout(() => {
      ele.style.transition = 'color 1s, background 1s'
      ele.style.color = ''
      ele.style.backgroundColor = ''
    })
  })
}