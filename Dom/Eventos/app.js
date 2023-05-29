new Vue({
  el: "#desafio",
  data: {
    valor: "",
  },
  methods: {
    alert() {
      alert("Voce Clicou no botao");
    },
    armazenarValor(event) {
      console.log(valor);
      this.valor = event.target.value;
    },
  },
});
