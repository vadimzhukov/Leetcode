/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {

    const arr = s.split('');
    for (let i = 0; i < s.length; i++) {

        // I = 1 or 4 or 9
        if (arr[i] === 'I') {
            if (arr[i+1]) { 
                if (arr[i+1] === 'V') {
                arr[i] = 0;
                arr[i+1] = 4;
                } else if (arr[i+1] === 'X') {
                    arr[i] = 0;
                    arr[i+1] = 9;
                } else {
                    arr[i] = 1
                }
            } else {
                arr[i] = 1;
            }           
        }

        // X = 10 or 40 or 90
        if (arr[i] === 'X') {
            if (arr[i+1]) { 
                if (arr[i+1] === 'L') {
                arr[i] = 0;
                arr[i+1] = 40;
                } else if (arr[i+1] === 'C') {
                    arr[i] = 0;
                    arr[i+1] = 90;
                } else {
                    arr[i] = 10
                }
            }   else {
                arr[i] = 10;
            }         
        }

        // C = 100 or 400 or 900
        if (arr[i] === 'C') {
            if (arr[i+1]) { 
                if (arr[i+1] === 'D') {
                arr[i] = 0;
                arr[i+1] = 400;
                } else if (arr[i+1] === 'M') {
                    arr[i] = 0;
                    arr[i+1] = 900;
                } else {
                    arr[i] = 100
                }
            } else {
                arr[i] = 100;
            }            
        }

        // V = 5
        if (arr[i] === 'V') { arr[i] = 5}
        // L = 50
        if (arr[i] === 'L') { arr[i] = 50}
        // D = 500
        if (arr[i] === 'D') { arr[i] = 500}
        // M = 1000
        if (arr[i] === 'M') { arr[i] = 1000}
        
    }
    return arr.reduce((acc,i) => acc+i, 0)
            
};

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))
