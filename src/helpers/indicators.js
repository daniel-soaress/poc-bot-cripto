function indicatorRSI(clandles) {
    var gains = 0;
    var losses = 0;
    for (var i = clandles.length - 14; i < clandles.length; i++) {
        var diff = clandles[i] - clandles[i - 1];
        if (diff >= 0) {
            gains += diff;
        }
        else {
            losses -= diff;
        }
    }
    var rs = gains / losses;
    return 100 - (100 / (1 + rs));
}
module.exports = {
    indicatorRSI: indicatorRSI
};
