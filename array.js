const hobbies = ["desenhar","dormir","cozinhar"];
    console.log(hobbies);
    console.log(hobbies[0]);
    console.log(hobbies[1]);
    console.log(hobbies[2]);

hobbies[0] = "ler livros";
    console.log(hobbies);
    console.log(hobbies.length);

hobbies.push("desenhar");
    console.log(hobbies);

hobbies.pop([3]);
    console.log(hobbies);

hobbies.splice(0,1);
    console.log(hobbies);


const hobbiesAmigo = ["dormir", "cozinhar", "dançar"];

const todosHobbies = hobbies.concat(hobbiesAmigo);
    console.log(todosHobbies);

const hobbiesMusicais = ['cantar', 'tocar guitarra', 'escutar música'];
const hobbiesEsportivos = ['correr', 'jogar futebol', 'nadar'];
const hobbiesCriativos = ['desenhar','escrever histórias', 'fazer esculturas'];

const categoriaHobbies =[hobbiesMusicais, hobbiesEsportivos, hobbiesCriativos];
    console.log(categoriaHobbies[0]);
    console.log(categoriaHobbies[0][0]);
    console.log(categoriaHobbies[0][2]);