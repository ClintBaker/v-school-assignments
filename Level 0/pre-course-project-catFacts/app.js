const facts = [
  "Cats can jump up to six times their length.",
  "Cats are supposed to have 18 toes (five toes on each front paw; four toes on each back paw).",
  "Cats are nearsighted, but their peripheral vision and night vision are much better than that of humans.",
  "Cats are believed to be the only mammals who don’t taste sweetness.",
  "Cats have up to 100 different vocalizations — dogs only have 10.",
  "Some cats love the smell of chlorine.",
];

const cats = [
  {
    name: "Steve",
    img: "https://loremflickr.com/200/150",
    fact: 0,
  },
  {
    name: "Tony",
    img: "https://loremflickr.com/200/151",
    fact: 2,
  },
  {
    name: "Snowball",
    img: "https://loremflickr.com/200/149",
    fact: 3,
  },
];

const catOne = document.getElementById("cat1");
const catTwo = document.getElementById("cat2");
const catThree = document.getElementById("cat3");

catOne.innerHTML = `<h3>${cats[0].name}</h3><img src="${cats[0].img}"/>`;
catTwo.innerHTML = `<h3>${cats[1].name}</h3><img src="${cats[1].img}"/>`;
catThree.innerHTML = `<h3>${cats[2].name}</h3><img src="${cats[2].img}"/>`;

catOne.addEventListener("click", function () {
  catOne.className = "cat active";
  catTwo.className = "cat";
  catThree.className = "cat";
  document.getElementById("all-facts").className = "give-me-facts-btn";
  document.getElementById("fact").className = "fact";
  if (cats[0].fact === 0) {
    document.getElementById("fact").innerHTML = facts[0];
    cats[0].fact = 1;
  } else {
    document.getElementById("fact").innerHTML = facts[1];
    cats[0].fact = 0;
  }
});

catTwo.addEventListener("click", function () {
  catOne.className = "cat";
  catTwo.className = "cat active";
  catThree.className = "cat";
  document.getElementById("all-facts").className = "give-me-facts-btn";
  document.getElementById("fact").className = "fact";
  if (cats[1].fact === 2) {
    document.getElementById("fact").innerHTML = facts[2];
    cats[1].fact = 3;
  } else {
    document.getElementById("fact").innerHTML = facts[3];
    cats[1].fact = 2;
  }
});

catThree.addEventListener("click", function () {
  catOne.className = "cat";
  catTwo.className = "cat";
  catThree.className = "cat active";
  document.getElementById("all-facts").className = "give-me-facts-btn";
  document.getElementById("fact").className = "fact";
  if (cats[2].fact === 4) {
    document.getElementById("fact").innerHTML = facts[4];
    cats[2].fact = 5;
  } else {
    document.getElementById("fact").innerHTML = facts[5];
    cats[2].fact = 4;
  }
});

function getAllFacts() {
  document.getElementById("all-facts").className = "active give-me-facts-btn";
  document.getElementById("fact").className = "facts-list";
  document.getElementById("fact").innerHTML = "<ul>";
  catOne.className = "cat";
  catTwo.className = "cat";
  catThree.className = "cat";
  for (var i = 0; i < facts.length; i++) {
    document.getElementById("fact").innerHTML += `<li>${facts[i]}</li>`;
  }
  document.getElementById("fact").innerHTML += "</ul>";
}

document.getElementById("all-facts").addEventListener("click", getAllFacts);
