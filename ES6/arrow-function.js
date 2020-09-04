// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

// const square = (x) => x * x;

// console.log(square(3));

const event = {
  name: "birthday party",
  guestList: ["karan", "Bunty", "kunal"],
  printGuestList: function () {
    console.log("gUEST LIST FOR " + this.name); // haven't use this keyword with arrow function

    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};

event.printGuestList();
