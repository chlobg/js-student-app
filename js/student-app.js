const inputName = document.getElementById("student-name");
const addBtn = document.getElementById("add-btn");
const searchInput = document.getElementById("search-student");
const studentList = document.getElementById("student-list");

let students = [];

function displayStudents(filter = "") {
  studentList.innerHTML = "";

  const filtered = students.filter((name) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach((name, index) => {
    const li = document.createElement("li");
    li.classList.add("student__item");

    const span = document.createElement("span");
    span.textContent = name;
    li.appendChild(span);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("student__delete-btn");
    deleteBtn.addEventListener("click", () => {
      students.splice(index, 1);
      displayStudents(searchInput.value);
    });

    li.appendChild(deleteBtn);
    studentList.appendChild(li);
  });
}

function isValidName(name) {
  const pattern = /^[\p{L}\s\-']{1,50}$/u;
  return pattern.test(name);
}

addBtn.addEventListener("click", () => {
  const name = inputName.value.trim();
  if (name !== "" && isValidName(name)) {
    students.push(name);
    inputName.value = "";
    displayStudents(searchInput.value);
  } else {
    alert("Please enter only letters (max 50 characters).");
  }
});

searchInput.addEventListener("input", () => {
  displayStudents(searchInput.value);
});

const languageSelect = document.getElementById("language-select");
const studentDescription = document.getElementById("student-description");

const descriptions = {
  en: `This challenge 04's goal is to manipulate an array in JavaScript. To do this, you will find a list of students on the right. You can add names to it or remove them. Thanks to the search bar, you can also easily find a name.`,
  vi: `Mục tiêu của thử thách 04 là thao tác với mảng trong JavaScript. Ở bên phải, bạn có thể thêm hoặc xóa tên sinh viên, và sử dụng thanh tìm kiếm để dễ dàng tìm thấy một cái tên.`,
};

languageSelect.addEventListener("change", (e) => {
  const lang = e.target.value;
  studentDescription.textContent = descriptions[lang] || descriptions.en;
});
