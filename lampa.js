class Lampa {
  constructor(elem, index) {
    this.elem = elem;
    this.index = index;
    this.allapot = false;
    this.setSzin();
    this.elem.on("click", () => {
      //a nyíl az objektumra mutat
      this.setAllapot();
      this.KattintasTrigger(); //ezzel váltjuk ki az eseményt
    });
    
  }

  setAllapot() {
    //állapot ellenkezőjre állítása
    this.allapot = !this.allapot;
    this.setSzin();
  }

  setSzin() {
    if (this.allapot) {
      this.elem.css("background-color", "pink");
    } else {
      this.elem.css("background-color", "red");
    }
  }

  KattintasTrigger() {
    let esemeny = new CustomEvent("Lapmafelkapcsol", { detail: this.index });
    window.dispatchEvent(esemeny);
  }
}
