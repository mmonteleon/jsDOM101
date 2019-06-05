console.log("Script Running");



const decVal = (event) => {
  flippityFlop(event)
  let decimal = document.getElementById("digit3").innerText*Math.pow(2,0)+document.getElementById("digit2").innerText*Math.pow(2,1)+document.getElementById("digit1").innerText*Math.pow(2,2)+document.getElementById("digit0").innerText*Math.pow(2,3);
  document.querySelector('#decimal').innerHTML=decimal;
  console.log(decimal);
};

const flippityFlop = (event) =>{
  if(event.target.innerHTML==='0'){
    event.target.innerHTML = '1';
  }
  else {
    event.target.innerHTML = '0';
  }
};
