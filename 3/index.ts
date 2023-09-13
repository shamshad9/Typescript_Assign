let name1 = "shamshad";
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());


function toTitleCase(str:string){
    return str.toLowerCase().split('').map(function(word){
         return(word.charAt(0).toUpperCase() + word.slice(1));
    }).join('');
}
console.log(toTitleCase(name1));