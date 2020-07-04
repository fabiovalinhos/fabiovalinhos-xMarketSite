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
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(response => (this.products = response.data));
  },
});
