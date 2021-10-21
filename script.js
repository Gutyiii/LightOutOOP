$(function () {
  //a szülőelem és a sablonemen meghatározása
  //a sablonelem klonozása és a szülőelem csatolása
  //példányosítás
  const szuloElem = $("article");
  const sablon = $(".lampa");
  const meret = 25;
  const lampaTomb = [];
  for (let index = 0; index < meret; index++) {
    const ujElem = sablon.clone().appendTo(szuloElem);
    const lampa = new Lampa(ujElem, index);
    //a konkrét objektumokat beletesszük egy tömbe
    lampaTomb.push(lampa);
  }
  for (let i = 0; i <= 4; i++) {
    let randomSzam = Math.floor(Math.random() * 24 + 1);
    lampaTomb[randomSzam].setAllapot();
  }
  sablon.remove();

  //feliratkozás az eseményre

  $(window).on("Lapmafelkapcsol", (esemeny) => {
    let elemID = esemeny.detail;
    if (elemID % 5 !== 4) {
      lampaTomb[elemID + 1].setAllapot();
    }
    if (elemID % 5 !== 0) {
      lampaTomb[elemID - 1].setAllapot();
    }
    if (elemID <= 19) {
      lampaTomb[elemID + 5].setAllapot();
    }
    if (elemID >= 5) {
      lampaTomb[elemID - 5].setAllapot();
    }
  });
});
