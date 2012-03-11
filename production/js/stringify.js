function stringifyFilters(arrayFilters) {
    var result = ""
    for (var i = 0; i < arrayFilters.length; ++i) {
        result = result + stringifyFilter(arrayFilters[i]);
        if (i != arrayFilters.length - 1) {
            result = result + "&&";
        }
    }
    return result;
}


function stringifyFilter(nameSizeMatrixDivider) {
    var name = nameSizeMatrixDivider[0];
    var size = nameSizeMatrixDivider[1];
    var matrix = nameSizeMatrixDivider[2];
    var divider = nameSizeMatrixDivider[3];
    var result = name + "$";
    result = result + size + "$";
    for (var i = 0; i < size * size; ++i) {
        result = result + matrix[i]  + "$"
    }
    result = result + divider + "$";
    return result;
}

function filtersFromString(string) {
    if (string === "") {
        return []
    }
    var cutString = string.split(/&&/);
    var result = [];
    for (var i = 0; i < cutString.length; ++i) {
        result[i] = filterFromString(cutString[i])
    }
    return result;
}

function filterFromString(string) {
    var cutString = string.split(/\$/);
    var name = cutString[0];
    var size = parseInt(cutString[1]);
    var matrix = []                            ;
    for (var i = 0; i < size * size; ++i) {
        matrix[i] = parseInt(cutString[i + 2]);
    }
    var divider = cutString[2 + size * size];
    return [name, size, matrix, divider];
}