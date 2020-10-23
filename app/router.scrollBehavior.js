export default function (to, from, savedPosition) {
  let position = { x: 0, y: 0 }
  if (savedPosition) {
    position = savedPosition
  } else if (to.hash) {
    position = { selector: to.hash }
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(position)
    }, 500)
  })
}
