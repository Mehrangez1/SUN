let arrR = [-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1, 2, 3, 4,5, 6, 7, 8, 9, 10]
let s = arrR.map(a=>{
    if(a % 2 == 0 ){  
        return a*-1

    }else{
        return a
    }
})
console.log(s)
//24. Написать метод, который у четных чисел меняет знак, а нечетные числа оставляет без изменения. С его помощью обработать ряд чисел от 1 до 10