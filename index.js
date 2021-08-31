colors = ['Red','Blue','Orange','Pink','Purple']
let text_color = document.getElementById('color')
$('#button').click(function()
{
    console.log('working')
rand = random()
console.log(rand)
document.body.style.backgroundColor = colors[rand]

text_color.innerText = colors[rand]
})
transA()
function random()
{
    return Math.floor( Math.random() * colors.length)
}
function transA()
{
    $('#button').animate({width:'150px' },1000)
    transB()
} 
function transB()
{
    $('#button').animate({width:'115px' },1000)
    transA()
} 
    
   