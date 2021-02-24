const getRandomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const game = function () {
    const name = prompt("Welkom! Wat is je naam?");
    alert("Hey " + name + "!");
    const min = prompt("Wat is het kleinste nummer dat je wilt raden?");
    const max = prompt("Wat is het grootste nummer dat je wilt raden?");
    const firstInput = prompt("Voer een nummer in van " + min + " tot " + max + " om te beginnen met raden...");
    const number = getRandomNumber(min, max);
    if (firstInput == number) {
        alert("Gefeliciteerd je hebt gewonnen!");
    }
    else {
        alert("Dat is niet correct.");
        for (attempt = 4; attempt >= 1; attempt--) {
            const againInput = prompt("Je hebt nog " + attempt + " pogingen over. Probeer het nummer opnieuw te raden...");
            if (againInput == number) {
                alert("Gefeliciteerd je hebt gewonnen!");
                break;
            }
            else {
                if (attempt > 1) {
                    alert("Dat is niet correct.");
                }
                else {
                    alert("Dat is niet correct. Je hebt 0 pogingen over. Helaas heb je het nummer niet geraden.");
                }
            }
        };
    };
    alert("Dag " + name + " . Tot de volgende keer!");
};