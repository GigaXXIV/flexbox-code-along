(() => {
  const flexContainer = document.querySelector('.flex-container')
  const btnContainer = document.querySelector('.btn-container')

  const addCard = () => {
    const numCards = flexContainer.children.length
    if (numCards > 25) return
    const card = document.createElement('div')
    card.classList.add('card')
    card.textContent = String.fromCharCode(65 + numCards)
    flexContainer.appendChild(card)
  }

  const removeCard = () => {
    flexContainer.removeChild(flexContainer.lastElementChild)
  }

  flexContainer.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) return
    e.target.classList.toggle('selected')
  })

  btnContainer.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) return
    const action = e.target.className.toLowerCase()
    action === 'plus' ? addCard() : removeCard()
  })
})()
