// alert('check')

async function showCocktailModal(id) {
  console.log(id)
  // 1. per cocktail id, receive data from server
  // 여기로 백엔드 api 호출해서 가져오기
  const url = `http://localhost:3000/api/cocktail/${id}`
  const res = await fetch(url)
  const data = await res.json()
  // const data = {
  //   name: 'Test',
  //   photo: 'photo',
  //   doses: 'doses',
  //   ingredients: 'ingredients',
  // }
  fetch(url)
    .then(res => res.json())
    .then(console.log)

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
      <div class="w-100 p-2 d-flex justify-content-end">
        <button class="close-btn border-0 px-2">x</button>
      </div>
      ${JSON.stringify(data)}
    </div>
  `

  const closeBtn = modalDiv.getElementsByClassName('close-btn')[0]
  closeBtn.addEventListener('click', function () {
    document.body.removeChild(modalDiv);
  })

  document.body.append(modalDiv); //append to DOM - rendering
}

window.addEventListener('load', function() {
  //
})
