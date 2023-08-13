const formPerson = document.querySelector("#personal");
const personalList = document.querySelector("#personalList");

const userInfo=document.querySelector("#userInfo")
console.log(userInfo.dataset)
const people = [];

formPerson.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value;
  const img_url = this.img_url.value;
  const age = this.age.value;
  const salary = this.salary.value;

  console.log("name", name);
  console.log("age", age);
  console.log("salary", salary);

  const person = {
    name,
    age,
    salary,
    img_url,
  };

  people.push(person);

  console.log(people);

  const content = people
    .map(
      (personalObj, index) => `
    <div class="card" style="width: 16rem">
    <img src="${personalObj.img_url}" class="card-img-top" alt="${personalObj.name}" />
    <div class="card-body">

    <p class="card-title">
    ${personalObj.name}
     </p>
     
     <p class="card-text">
     ${personalObj.age}
      </p>
      <p class="card-text">
      ${personalObj.salary}
       </p>
    </div>
  </div>
  `
    )
    .join("");

  personalList.innerHTML = content;
});

console.log(formPerson);
