// local reviews data
const reviews = [
  {
    id: 1,
    name: "john doe",
    job: "graphic designer",
    img: "https://randomuser.me/api/portraits/men/1.jpg", // Valid image URL
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna vitae turpis iaculis feugiat. Aenean euismod augue a elit interdum, sit amet volutpat eros dictum.",
  },
  {
    id: 2,
    name: "maria wilson",
    job: "marketing manager",
    img: "https://randomuser.me/api/portraits/women/2.jpg", // Valid image URL
    text: "Curabitur vel tincidunt neque, ac tincidunt justo. Sed suscipit lacus sit amet urna gravida, eu posuere purus vehicula. Sed efficitur justo ut suscipit ultricies.",
  },
  {
    id: 3,
    name: "james brown",
    job: "product manager",
    img: "https://randomuser.me/api/portraits/men/3.jpg", // Valid image URL
    text: "Pellentesque ac bibendum ligula. Suspendisse at nulla gravida, iaculis turpis ut, varius justo. Maecenas sit amet justo ac dolor dignissim mollis at nec ante.",
  },
  {
    id: 4,
    name: "emily davis",
    job: "software engineer",
    img: "https://randomuser.me/api/portraits/women/4.jpg", // Valid image URL
    text: "Duis pretium, nunc eget viverra maximus, nisl orci tincidunt ligula, nec fermentum neque mi ac purus. Integer at auctor magna. Curabitur sagittis ut libero eget elementum.",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

// show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// show random person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
