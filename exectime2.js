var result = 0;

console.time ('duration_sum');
//for (var i = 1; i <= 10000; i++) {
    //result += 1;
    //result = result + 1;
    //result++;
//}

while (result < 10000) {
    result +=1;
}
console.timeEnd('duration_sum');
console.log (' Sum frmo 1 to 1000: %d', result);