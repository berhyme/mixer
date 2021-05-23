// alert('check')

function showCocktailModal(id) {
  console.log(id)
  // 1. per cocktail id, receive data from server
  const data = {
    name: 'Test',
    photo: 'photo',
    doses: 'doses',
    ingredients: 'ingredients',
  }
  // 2. with the data, create modal and bind
  const modalDiv = document.createElement('div')
  modalDiv.style.width = '100vw'
  modalDiv.style.height = '100vh'
  // modalDiv.style.backgroundColor = 'black'
  // modalDiv.style.opacity = '0.3'
  modalDiv.style.background = 'rgba(0,0,0,0.3)'
  modalDiv.style.position = 'absolute'
  modalDiv.style.left = 0
  modalDiv.style.top = 0
  modalDiv.style.display = 'flex'
  modalDiv.style.justifyContent = 'center'
  modalDiv.style.alignItems = 'center'

  modalDiv.innerHTML = `
    <div style="width: 400px; height: 300px; background-color: white;">
      <div style="">x</div>
      ${JSON.stringify(data)}
    </div>
  `

  modalDiv.addEventListener('click', function () {
    document.body.removeChild(modalDiv);
  })

  document.body.append(modalDiv); //append to DOM - rendering
}

window.addEventListener('load', function() {
  //
})
