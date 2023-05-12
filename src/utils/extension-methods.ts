interface String {
    clearSpecialCharacteres(): string;
}

interface Number {
    multi10(): string;
}

String.prototype.clearSpecialCharacteres = function () {
    return this.replace(/\W/g, '');
};

Number.prototype.multi10 = function () {
    return (Number(this) * 10).toString();
};
