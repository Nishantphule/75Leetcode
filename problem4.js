var canPlaceFlowers = function (flowerbed, n) {
    if (flowerbed.length === 1 && n >= 1) {
        return !flowerbed[0]
    }
    else {
        for (var i = 0; i < flowerbed.length; i++) {
            if (n !== 0) {
                if (i === 0) {
                    if (flowerbed[i + 1] === 0 && flowerbed[i] !== 1) {
                        flowerbed[i] = 1
                        n--;
                    }
                }
                else if (i === flowerbed.length - 1) {
                    if (flowerbed[i - 1] === 0 && flowerbed[i] !== 1) {
                        flowerbed[i] = 1
                        n--;
                    }
                }
                else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0 && flowerbed[i] !== 1) {
                    flowerbed[i] = 1
                    n--;
                }
            }
        }
        if (n === 0) {
            return true;
        }
        else {
            return false
        }
    }

};