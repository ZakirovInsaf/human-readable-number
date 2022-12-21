module.exports = function toReadable(number) {
    let b = "";
    if (number >= 100) {
        b += number;
        if (+b[1] >= 2) {
            if (+b[2] >= 1) {
                return `${checkSmall(b[0])} hundred ${checkSecond(
                    b[1]
                )} ${checkSmall(b[2])}`;
            } else {
                return `${checkSmall(b[0])} hundred ${checkSecond(b[1])}`;
            }
        } else if (+b[1] >= 1) {
            return `${checkSmall(b[0])} hundred ${checkLast(b[2])}`;
        } else if (+b[2] >= 1) {
            return `${checkSmall(b[0])} hundred ${checkSmall(b[2])}`;
        } else {
            return `${checkSmall(b[0])} hundred`;
        }
    } else if (number >= 20) {
        b += number;
        if (b[1] >= 1) {
            return `${checkSecond(b[0])} ${checkSmall(b[1])}`;
        } else {
            return `${checkSecond(b[0])}`;
        }
    } else if (number >= 10) {
        b += number;
        return checkLast(b[1]);
    } else {
        b += number;
        return checkSmall(b);
    }
    function checkSmall(n) {
        for (let i of n) {
            switch (i) {
                case "0":
                    return "zero";
                case "1":
                    return "one";
                case "2":
                    return "two";
                case "3":
                    return "three";
                case "4":
                    return "four";
                case "5":
                    return "five";
                case "6":
                    return "six";
                case "7":
                    return "seven";
                case "8":
                    return "eight";
                case "9":
                    return "nine";
            }
        }
    }
    function checkLast(n) {
        for (let i of n) {
            switch (i) {
                case "0":
                    return "ten";
                case "1":
                    return "eleven";
                case "2":
                    return "twelve";
                case "3":
                    return "thirteen";
                case "4":
                    return "fourteen";
                case "5":
                    return "fifteen";
                case "6":
                    return "sixteen";
                case "7":
                    return "seventeen";
                case "8":
                    return "eighteen";
                case "9":
                    return "nineteen";
            }
        }
    }
    function checkSecond(n) {
        for (let i of n) {
            switch (i) {
                case "2":
                    return "twenty";
                case "3":
                    return "thirty";
                case "4":
                    return "forty";
                case "5":
                    return "fifty";
                case "6":
                    return "sixty";
                case "7":
                    return "seventy";
                case "8":
                    return "eighty";
                case "9":
                    return "ninety";
            }
        }
    }
};
