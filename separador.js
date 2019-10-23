class separador{
  constructor() {
    throw new Error("Esta classe não pode ser instanciada")
  }
   static separadores(max){
     var separado = Math.floor(Math.random() * (max - 0 + 1) ) + 0;
     return separado;
};
};
