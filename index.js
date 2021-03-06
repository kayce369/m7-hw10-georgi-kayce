// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
nameCookie = document.cookie
noteContent = localStorage.getItem('Note Content')
// Then apply them to elements on the page
if (nameCookie) {
  nameSpan.textContent = nameCookie.split('=')[1]
}

if (noteContent) {
  textarea.value = noteContent
}
// YOUR CODE HERE

formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  document.cookie = 'username=' + nameSpan.textContent
  // save textarea's content to localstorage
  localStorage.setItem('Note Content', textarea.value)
  console.log(localStorage)
  // YOUR CODE HERE

  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  textarea.value = ""
  // Clear localstorage's content
  localStorage.clear()
  // YOUR CODE HERE

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp