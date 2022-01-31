export function romanToInteger(str) {
    let result = 0;

    var romans = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    var integers = Object.keys(romans);

    str = str.toUpperCase();

    for (var i = 0; i < str.length; ++i) {
        if (integers.indexOf(str[i]) < integers.indexOf(str[i + 1])) {
            result -= romans[str[i]];
        } else {
            result += romans[str[i]];
        }
    }
    return result;
}
