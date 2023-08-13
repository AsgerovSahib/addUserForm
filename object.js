//? object

const car = {
  name: "A-class",
  isNew: false,
  marka: "Mercedes",
  speed: 0,

  start: function () {
    this.speed += 10;
  },

  monitor: function () {
    const info = `${car.marka}|${car.name}-${car.speed}`;
    console.log(info);
    console.log(this)
  },
  break: function () {
    this.speed -= 5;
  },
  stop: function () {
    this.speed = 0;
  },
  getRandomSpeed: function () {
    const randomS = Math.ceil(Math.random() * 40);
    console.log(randomS);
    this.speed += randomS;
  },
};


car.start();
car.start();
car.monitor();

