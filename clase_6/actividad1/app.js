
window.addEventListener('load',function() {
  console.log('hello loader')
})

function hello() {
  document.getElementById('header').innerHTML = ' Hello'

  document.getElementById('header').style.color = 'cyan'


  const span = document.createElement('span')
  span.innerHTML = ' hello word '
  document.getElementById('new_node').appendChild(span)
}
