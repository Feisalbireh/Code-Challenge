function speedDetector() {
  var speed = prompt("input speed in km/l");
  const speedLimit = 70;
  const speedRate = 5;
  if (speed < speedLimit) {
    return (document.body.innerHTML = `OK`);
  }

  const speedDifference = speed - speedLimit;

  let demeritPoints = 0;
  for (let i = 0; i < speedDifference; i += speedRate) {
    demeritPoints += 1;

    if (demeritPoints > 12) {
      // return 'License suspended'
      document.body.innerHTML = "License suspended";
    }
  }

  // return `Points: ${demeritPoints}`
  document.body.innerHTML = `Points: ${demeritPoints}`;

  // let speed = document.getElementById('fdf')
}

speedDetector();

// console.log(speedDetector(speed));
