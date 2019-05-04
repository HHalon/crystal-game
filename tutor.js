var name = 'Halon Hamilton';
var age = 25;
var likeJs = true;

var arr = []
var dataItems =['Halon', 7, false, 'rocket', 23];
console.log(dataItems[3])

for( var i = dataItems.length -1; i > -1; i--){
    console.log(dataItems[i]);
    if(dataItems[i] === 'rocket') {
        alert('racoon');
    }
}
console.log(dataItems[5])
function addition(num1,num2){
    return num1 + num2;
} 
console.log(addition (7,5));








function makeDiv(nameOfMovie){
    return `
<div class = "movie">
${arr}
</div>
`;
}

var arr = ['movie1','movie2','movie3'];

arr.map(makeDiv)
//put it on the page
$('cssSelector').html(arr.map(makeDiv));