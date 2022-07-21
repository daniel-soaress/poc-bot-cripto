function indicatorRSI(clandles: Array<number>): number {
    let gains = 0;
    let losses = 0;

    for(let i = clandles.length - 14; i < clandles.length; i++) {
        const diff = clandles[i] - clandles[i - 1];
        if(diff >= 0) {
            gains += diff;
        } else {
            losses -= diff;
        }
    }

    const rs = gains / losses;
    return 100 - (100 / (1 + rs));
}

module.exports = {
    indicatorRSI
}