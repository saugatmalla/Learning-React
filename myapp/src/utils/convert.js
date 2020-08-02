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
    }

    if (result % 1 !== 0) {
        result = result.toFixed(3)
    }
    return result
}