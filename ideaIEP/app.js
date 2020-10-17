document.getElementById('addChild').addEventListener('click', event => {
  event.preventDefault()

  document.getElementById('noChildren').className = 'd-none'

  let grade = document.getElementById('grade').value

  let birthYear = document.getElementById('birthYear').value

  let firstIEP = document.getElementById('firstIEP').value

  let disabilities = document.getElementById('disabilities').value

  let otherDA = document.getElementById('otherDA').value

  let additionalInfo = document.getElementById('additionalInfo').value

  let satisfaction = document.getElementById('satisfaction').value

  let childElem = document.createElement('div')
  childElem.className = 'card'
  childElem.innerHTML = `
  <div class="card-body">
    <h5 class="card-title">Grade: ${grade}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Born: ${birthYear}</h6>
    <h6 class="card-subtitle mb-2 text-muted">First IEP: ${firstIEP}</h6>
    <p class="card-text">Disability: ${disabilities}</p>
    <p class="card-text">Other Disability: ${otherDA}</p>
    <p class="card-text">Additional Info: ${additionalInfo}</p>
    <p class="card-text">Satisfaction with current IEP: ${satisfaction}</p>
  </div>
  `
  document.getElementById('children').prepend(childElem)

})

document.getElementById('other').addEventListener('click', event => {
  document.getElementById('newDA').innerHTML = `
  <label for="otherDA">Other disabilities (separate each one by a comma): </label>
    <input type = "text" class="form-control" id = "otherDA" placeholder = "mobility" >
    `
})