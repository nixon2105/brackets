module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    }
    let i = 0;
    const brackets = bracketsConfig.length - 1;
    while (i <= brackets) {
        let point = bracketsConfig[i][0] + bracketsConfig[i][1];
        i++;
        let key = str.indexOf(point, 0);
        while (key >= 0) {
            str = str.slice(0, key) + str.slice(key + 2);
            key = str.indexOf(point, 0);
            i = 0;
        }
    }
    return str.length == 0 ? true : false;
};
