// console.log('hi')


const secondHand = document.querySelector('.secs-hand');
const minHand = document.querySelector('.mins-hand');
const hourHand = document.querySelector('.hours-hand');


function setDate() {

  // this stores the present time into the currentTime
  const currentTime = new Date();

  // this will fetch you the seconds but you need to transform the degree of it.
  const seconds = currentTime.getSeconds();

  // 90 there is the 90degrees that it is used because it should start at 12. the 360 is the total number of degrees 
  const secondsDegree = ((seconds / 60) * 360) + 90;

  //  then we transforming the style evalauating the expression from that we get the degrees
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const mins = currentTime.getMinutes();
  const minsDegree = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDegree}deg)`;

  const hours = currentTime.getHours();
  const hoursDegree = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;

}

setInterval(setDate, 1000);
setDate();