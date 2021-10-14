const timeData = [
  {
    name: "9am",
    number: 9,
  },
  {
    name: "10am",
    number: 10,
  },
  {
    name: "11am",
    number: 11,
  },
  {
    name: "12pm",
    number: 12,
  },
  {
    name: "1pm",
    number: 1,
  },
  {
    name: "2pm",
    number: 2,
  },
  {
    name: "3pm",
    number: 3,
  },
  {
    name: "4pm",
    number: 4,
  },
  {
    name: "5pm",
    number: 5,
  },
];
const currentTime = moment().format("LTS");
const dateTitle = moment().format("LLLL");

const constructDateTitle = function () {
  document.getElementById("currentDay").textContent = dateTitle;
};

const getCurrent = function () {
  // check current time and compare with timeBlock
  // jQuery each loop
  // if else function
  // set class of future, past and present
};

const constructTimeBlock = function () {
  const callback = function (each) {
    const timeBlockHour = `<div class="time-block">
    <div class="hour">${each.name}</div>
    <div class="input">
      <textarea placeholder="Please enter text..."></textarea>
    </div>
    <div class="save">
      <button class="saveBtn">SAVE</button>
    </div>
    </div>`;

    $(".container").append(timeBlockHour);
    return timeBlockHour;
  };

  timeData.forEach(callback);
};

const initialiseLocalStorage = function () {
  // steal code!
};

const saveInput = function (event) {
  // target where user has clicked
  // only runs when clicked on button (event.target)
  // check local storage (get from)
  // retrieve user input
  // what hour in timeblock
  // hour:input
  // add to local storage
  // restore
};

const onLoad = function () {
  constructDateTitle();
  constructTimeBlock();
  initialiseLocalStorage();
};

$(document).ready(onLoad);
$(".container").click(saveInput);
