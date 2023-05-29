new Vue({
  el: "#desafio",
  data: {
    Nome: "Julio",
    Idade: "26",
    numeroRamdomico: null,
    imgsrc: "./img/avatar.jpg",
  },
  methods: {
    Exibirnumero() {
      this.numeroRamdomico = Math.random(3);
    },
  },
});
