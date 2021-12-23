let dataBase = [
 "Anya! Eltévedt a Jézuska. Rossz ajtón vitte be az ajándékod és még ott is hagyta. Ráadásul a kulcsot is eldugta előled. Azt hiszem a lámpád mögött láttam valamit...",
 "Nagyon ügyes! Keresni és számolni is tud, igazi főnyeremény! Na de van gyengesége is... Mosogatni pélául nagyon ritkán szokott. Lehet hogy most mégis körbe kéne ott nézni!",
 "Sikerült megtalálni? Pedig rég jártál arra.. Büszke vagyok Anya! Na de most merre tovább? Azt hiszem Katinéni kihallgatta a Jézuskát, hátha tud segíteni.",
 "Kicsit félt tőla a Jézuska, hogy nem mersz segítséget kérni tőle, de most nagyon büszke Rád! Annyira, hogy enged pihenni egy kicsit. Pláne hogy ilyen szép kanapé került a házba!",
 "Ügyibügyi vagy! Járt a spájzodban anya! Nagyon szereti ő is a kolbászt...",
 "Legközelebb rakjál ki neki olyat is ami ehető, lehet akkor nem piszkál majd téged alvás közben. Ha nincs a párna alatt az a sok koszos zsepi és nem ijeszti el, lehetett volna nagyobb baj is.",
 "Nagyon belejöttél Anya! A Jézuska viszont nem. Amikor a mosogatónál kotorászott, leöntötte magát. Vajon talált magának száraz ruhát a vizes helyett?",
 "Hát nem talált. A nagy hideg miatt úgy érezte magát mint a szegény növényed, amikor kint hagytad hidegben.",
 "Annyira fázott, hogy a kulcsot majdnem magával vitte. Az utolsó pillanatban jutott eszébe amikor már kiment a kapun.",
 "Anya! Megnézted te rendesen azt a lámpát?"
]

let currentId = 0

let loadText = (Id) => {
    $('p.currentText').text(dataBase[Id])
}

loadText(currentId)

$(".button").click(() => {
    if        ($("#text1").val() == 2 && $("#text2").val() == 4 && $("#text3").val() == 6 && $("#text4").val() == 3 && $("#text5").val() == 3 && $("#text6").val() == 1 && $("#text7").val() == 2 && $("#text8").val() == 1) {
        currentId = 8
        loadText(currentId)
        $(".mikulas").css("visibility", "visible")
        $(".mikulas2").css("visibility", "visible")
    } else if ($("#text1").val() == 2 && $("#text2").val() == 4 && $("#text3").val() == 6 && $("#text4").val() == 3 && $("#text5").val() == 3 && $("#text6").val() == 1 && $("#text7").val() == 2) {
        currentId = 7
        loadText(currentId)
    } else if ($("#text1").val() == 2 && $("#text2").val() == 4 && $("#text3").val() == 6 && $("#text4").val() == 3 && $("#text5").val() == 3 && $("#text6").val() == 1) {
        currentId = 6
        loadText(currentId)
    } else if ($("#text1").val() == 2 && $("#text2").val() == 4 && $("#text3").val() == 6 && $("#text4").val() == 3 && $("#text5").val() == 3) {
        currentId = 5
        loadText(currentId)
    } else if ($("#text1").val() == 2 && $("#text2").val() == 4 && $("#text3").val() == 6 && $("#text4").val() == 3) {
        currentId = 4
        loadText(currentId) 
    } else if ($("#text1").val() == 2 && $("#text2").val() == 4 && $("#text3").val() == 6) {
        currentId = 3
        loadText(currentId)
    } else if ($("#text1").val() == 2 && $("#text2").val() == 4) {
        currentId = 2
        loadText(currentId)
    } else if ($("#text1").val() == 2) {
        currentId = 1
        loadText(currentId)
    } else if ($("#text").val() != 2) {
        currentId = 9
        loadText(currentId)
    } 
}) 


