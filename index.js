function reverse_string(string){
    const my_string_array = string.split("");
    let reversed_array = my_string_array.reverse();
    return reversed_array.join("");
}

let reversed_string = reverse_string("Welcome");
console.log(reversed_string);