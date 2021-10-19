const timeData = [
  {
    name: "9am",
    hour: 9,
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

const initialiseLocalStorage = function () {
  const dataFromLS = JSON.parse(localStorage.getItem("events"));

  if (!dataFromLS) {
    localStorage.setItem("events", JSON.stringify({}));
  }
};

const getClassName = function (hour) {
  // return past present or future
  const currentHour = 14;

  if (hour === currentHour) {
    return "present";
  }

  if (hour > currentHour) {
    return "future";
  }

  return "past";
};

const getEventFromLS = function (hour) {
  // get data from LS
  const dataFromLS = getFromLocalStorage("events", {});

  // find if data for hour is present in LS object
  const event = dataFromLS[hour];

  return event;
};

// constructing the display of the current da
const renderDate = function () {
  // The date of the current day
  const date = moment().format("dddd, MMMM Do");

  $("#currentDay").text(date);
};

const renderTimeBlocks = function () {
  const constructTimeBlockAndAppend = function (each) {
    const timeBlock = `<div class="time-block ${getClassName(each.hour)}">
      <div class="hour column">${each.name}</div>
      <div class="input column">
        <textarea class="text-input" placeholder="Please enter text...">${
          getEventFromLS(each.hour) || ""
        }</textarea>
      </div>
      <div class="save column">
        <button class="saveBtn">SAVE</button>
      </div>
    </div>`;

    $(".container").append(timeBlock);
  };

  timeData.forEach(constructTimeBlockAndAppend);
};

const getFromLocalStorage = function (key, defaultValue) {
  const localStorageData = JSON.parse(localStorage.getItem(key));

  if (!localStorageData) {
    return defaultValue;
  } else {
    return localStorageData;
  }
};

const verifyInput = function (event) {
  const target = event.target;
  const currentTarget = event.currentTarget;

  const inpValue = document.querySelector(".text-input").textContent;
  const value = inpValue;

  if (target.getAttribute("class") === "saveBtn" && !value) {
    alert("Please input text");
  }
  if (target.getAttribute("class") === "saveBtn" && value) {
    console.log("text-input");
  }
};

const saveInput = function (event) {
  localStorage.setItem("name", JSON.stringify([]));
};

const onLoad = function () {
  renderDate();
  initialiseLocalStorage();
  renderTimeBlocks();
};

$(".container").click(verifyInput);

$(document).ready(onLoad);
