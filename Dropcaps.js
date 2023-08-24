/*
DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

*should work also on Leading and Trailing Spaces and caps.

"apple"            => "Apple"
"apple of banana"  => "Apple of Banana"
"one   space"      => "One   Space"
"   space WALK   " => "   Space Walk   " 

*/
// Testing for "RV e": expected 'rv e' to equal 'RV e'


function dropCaps(str){
    let words = str.toLowerCase().split(' ')
    let result = words.map((word)=>{
        return word.length > 2 ? word.charAt(0).toUpperCase() + word.slice(1): word
    })
    return result.join(' ')
}

console.log(dropCaps('one  SPACE'))

// console.log(dropCaps("ALL CAPS CRAZINESS"))