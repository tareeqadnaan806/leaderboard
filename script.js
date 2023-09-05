const root = document.getElementById("root");

const addPlayer = document.getElementById("addPlayer");

addPlayer.addEventListener("click", () => {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const country = document.getElementById("country").value;
  const runs = document.getElementById("runs").value;

  const container = document.createElement("div");
  container.classList.add("container");
  container.innerHTML = `
    <p>${fname}</p>
    <p>${lname}</p>
    <p>${country}</p>
    <p>${runs}</p>
    <p class="delete">&#x1f5d1</p>
  `;
  root.appendChild(container);

  sortBoard();
  deleteElement();
});

const sortBoard = () => {
  const scoreboard = document.querySelectorAll(".container");
  const arr = [];
  scoreboard.forEach((ele) => arr.push(ele));
  const sortedRuns = arr
    .map((ele) => {
      return ele;
    })
    .sort((a, b) => {
      let manOne = parseInt(a.children[3].textContent);
      let mantwo = parseInt(b.children[3].textContent);
      if (manOne > mantwo) return -1;
      if (manOne < mantwo) return 1;
    });
  sortedRuns.forEach((ele) => {
    root.appendChild(ele);
  });
};

const deleteElement = () => {
  const deleteIcon = document.querySelectorAll(".delete");
  deleteIcon.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      return e.target.parentElement.remove();
    });
  });
};
