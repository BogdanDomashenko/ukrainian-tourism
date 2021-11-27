import countryList from './countryList.json';

let arr = JSON.parse(JSON.stringify(countryList));

export const getCountryByKey = function(value) {
    return arr[value];
}

export const getKeyByName = function(value) {
    let arrKeys = Object.getOwnPropertyNames(arr);
    let arrIems = Object.values(arr);

    let currentIndex = arrIems.findIndex(item => item == value);

    return arrKeys[currentIndex];
}