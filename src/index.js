const pronounceable = require("pronounceable");
const pressAnyKey = require("press-any-key");

const arr = ["warley"];

const check4anagrams = function (arr) {
  const anagrams = {};
  arr.forEach((str) => {
    const recurse = (ana, str) => {
      if (str === "") anagrams[ana] = 1;
      for (var i = 0; i < str.length; i++)
        recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    };
    recurse("", str);
  });
  return Object.keys(anagrams);
};

const result = check4anagrams(arr);

const pronounceables = [];

result.forEach((item) => {
  if (pronounceable.test(item)) pronounceables.push(item);
});

console.log(`Existem ${result.length} possibilidades.`);
console.log(`Apenas ${pronounceables.length} são pronunciáveis.`);

pressAnyKey("Pressione qualquer tecla para listar ou CTRL+C para sair...", {
  ctrlC: "reject",
})
  .then(() => {
    pronounceables.forEach((item) => {
      console.log(`=> ${item}`);
    });
  })
  .catch(() => {
    console.log("Saindo...");
  });
