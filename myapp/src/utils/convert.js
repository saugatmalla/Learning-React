export default function convert(fromUnit, toUnit, fromValue) {
    let result = 0

    //Weight

    if (fromUnit === 'kg' && toUnit === 'gm') {
        result = fromValue * 1000
    } else if (fromUnit === 'gm' && toUnit === 'kg') {
        result = fromValue / 1000
    } else if (fromUnit === 'kg' && toUnit === 'lbs') {
        result = fromValue * 2.20462262185
    } else if (fromUnit === 'lbs' && toUnit === 'kg') {
        result = fromValue / 2.20462262185
    } else if (fromUnit === 'gm' && toUnit === 'lbs') {
        result = fromValue * 0.00220462262185
    } else if (fromUnit === 'lbs' && toUnit === 'gm') {
        result = fromValue / 0.00220462262185
    }

    //Length 
    else if (fromUnit === 'km' && toUnit === 'm') {
        result = fromValue * 1000
    } else if (fromUnit === 'm' && toUnit === 'km') {
        result = fromValue / 1000
    } else if (fromUnit === 'km' && toUnit === 'miles') {
        result = fromValue * 0.62137119
    } else if (fromUnit === 'miles' && toUnit === 'km') {
        result = fromValue / 0.62137119
    } else if (fromUnit === 'm' && toUnit === 'miles') {
        result = fromValue * 0.00062137119
    } else if (fromUnit === 'miles' && toUnit === 'm') {
        result = fromValue / 0.00062137119
    }
    //same value 
    else if (fromUnit === toUnit) {
        result = fromValue
    }

    if (result % 1 !== 0) {
        result = result.toFixed(3)
    }
    return result
}