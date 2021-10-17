const timeData = [
  {
    name: "9am",
    hour: 09,
  },
  {
    name: "10am",
    hour: 10,
  },
  {
    name: "11am",
    hour: 11,
  },
  {
    name: "12pm",
    hour: 12,
  },
  {
    name: "1pm",
    hour: 13,
  },
  {
    name: "2pm",
    hour: 14,
  },
  {
    name: "3pm",
    hour: 15,
  },
  {
    name: "4pm",
    hour: 16,
  },
  {
    name: "5pm",
    hour: 17,
  },
];

const currentTime = moment().format("HH");
console.log(this);

// The date of the current day
const dateTitle = moment().format("dddd, MMMM Do");

// constructing the display of the current da
const constructDateTitle = function () {
  document.getElementById("currentDay").textContent = dateTitle;
};

const constructTimeBlock = function () {
  const callback = function (each) {
    const timeBlock = `
    <div class="time-block">
    <form class ="row">
    <div class="hour column">${each.name}</div>
    <div class="input column">
    <textarea class="text-input" placeholder="Please enter text..."></textarea>
     </div>
     <div class="save column">
     <button class="saveBtn">SAVE</button>
   </div>
    </form>
    </div>"`;
    $(".container").append(timeBlock);
    return timeBlock;
  };

  timeData.forEach(callback);
};

const verifyInput = function (event) {
  const target = event.target;
  const currentTarget = event.currentTarget;

  if (target.getAttribute("class") === "saveBtn") {
    saveInput();
  } else {
    console.log("NO!");
  }
};

const getFromLocalStorage = function (key, defaultValue) {
  const localStorageData = JSON.parse(localStorage.getItem(key));

  if (!localStorageData) {
    return defaultValue;
  } else {
    return localStorageData;
  }
};

const findTense = function (each) {
  const textInput = document.querySelector(".text-input");
  const listTime = timeData.hour;
  console.log(listTime);

  if (listTime < currentTime) {
    textInput.setAttribute("class", "past");
  } else if (listTime === currentTime) {
    textInput.setAttribute("class", "present");
  } else if (listTime > currentTime) {
    textInput.setAttribute("class", "future");
  } else {
    timeData++;
  }
  listTime.forEach(findTense);
};

const saveInput = function (event) {
  localStorage.setItem("name", JSON.stringify([]));
};

const initialiseLocalStorage = function () {
  const dataFromLS = JSON.parse(localStorage.getItem("name"));
  if (!dataFromLS) {
    localStorage.setItem("name", JSON.stringify([]));
  }
};

const onLoad = function () {
  constructDateTitle();
  constructTimeBlock();
  initialiseLocalStorage();
};

$(".container").click(verifyInput);
$(document).ready(onLoad);
