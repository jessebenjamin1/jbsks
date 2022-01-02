export const createLoadObserver = handler => {
  let waiting = 0

  const onload = el => {
      waiting++
      el.addEventListener('load', () => {
          waiting--
          if (waiting === 0) {
              handler()
          }
      })
  }
  
  return onload
}