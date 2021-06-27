var romanToInt = function (s) {
    let res = 0;
    const arr = s.split('');
    if (arr[0] === 'I'&&arr[1]!=='I') {
        res = -1;
        const newArr = arr.splice(1, 1);
        newArr.forEach(element => {
            switch (element) {
                case 'I':
                    res+=1;
                    break;
                case 'V':
                    res += 5;
                    break;
                case 'X':
                    res += 10;
                    break;
                case 'L':
                    res += 50;
                    break;
                case 'C':
                    res += 100;
                    break;
                case 'D':
                    res += 500;
                    break;
                case 'M':
                    res += 1000;
                    break;
                default:
                    break;
            }
        });
    }else{
            arr.forEach(element => {
            switch (element) {
                case 'I':
                    res+=1;
                    break;
                case 'V':
                    res += 5;
                    break;
                case 'X':
                    res += 10;
                    break;
                case 'L':
                    res += 50;
                    break;
                case 'C':
                    res += 100;
                    break;
                case 'D':
                    res += 500;
                    break;
                case 'M':
                    res += 1000;
                    break;
                default:
                    break;
            }
        });
    }
    console.log(res)
    return res;
}
romanToInt("MCMXCIV")

// const romanToInt = function (s) {
//     const romanNumerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//     return [...s]
//       .reverse()
//       .reduce(
//         (accumulator, currentValue, index, original) =>
//           !index ||
//           romanNumerals[currentValue] >= romanNumerals[original[index - 1]]
//             ? accumulator + romanNumerals[currentValue]
//             : accumulator - romanNumerals[currentValue],
//         0
//       );
//   };