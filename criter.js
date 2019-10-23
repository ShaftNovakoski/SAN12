class criter {
  constructor() {
    this.numeroGerado;
    this.slots = [this.slot01,
    this.slot02,
    this.slot03,
    this.slot04,
    this.slot05];


  }
  geraNumero() {

    this.numeroGerado = Math.round(Math.random() * 50);
    var numeroGeradoCopy = this.numeroGerado;

    for (var i = 0; i < this.slots.length; i++) {
      var numeroSeparado = separador.separadores(numeroGeradoCopy);
      numeroGeradoCopy -= numeroSeparado;
      this.slots[i] = numeroSeparado;
    }
    console.log(`Numero Gerado: ${this.numeroGerado}
      Slot01: ${this.slots[0]}
      Slot02: ${this.slots[1]}
      Slot03: ${this.slots[2]}
      Slot04: ${this.slots[3]}
      Slot05: ${this.slots[4]}`);

  };

}
