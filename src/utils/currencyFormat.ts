import BigNumber from "bignumber.js";

const applyCurrencyFormat = (value: string) => {
    const valueFormatted = BigNumber(value);
    if (valueFormatted.isNaN()) {
        return null;
    }
    return `RD$ ${valueFormatted.toFormat(0)}`;
};

export { applyCurrencyFormat }