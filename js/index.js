// Ano do footer
var data = new Date();
var dataYear = data.getFullYear();
document.getElementById("dataAno").innerHTML = dataYear;

//////

var produtos = [
  {
    id: 1,
    description: "Description 1",
  },
  {
    id: 2,
    description: "Description 2",
  },
  {
    id: 3,
    description: "Description 3",
  },
  {
    id: 4,
    description: "Description 4",
  },
  {
    id: 5,
    description: "Description 5",
  },
  {
    id: 6,
    description: "Description 6",
  },
];

///////

//// Vue
var app = new Vue({
  el: "#app",
  data() {
    return {
      products: null,
      errored: false,
      produto: {
        nome: '',
        localizacao: '',
      },
    };
  },
  mounted() {
    axios
      .get("https://xsupermaket.firebaseio.com/products.json")
      .then((response) => {
        this.products = Object.values(response.data);

      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
  },
  methods: {
    salvar(){
     axios
       .post("https://xsupermaket.firebaseio.com/products.json", {
         localdonome: this.produto.nome,
         localdalocalizacao: this.produto.localizacao,
       })
       .then(() => {
         alert("salvo com sucesso");
       })
       .catch((error) => {
         alert("erro pois não tem API :(");
         console.log(error);
       }); 
    }
  },
});
