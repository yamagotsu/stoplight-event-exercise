(function() {
  let stopButton = document.getElementById("stopButton");
  let slowButton =  document.getElementById("slowButton");
  let goButton = document.getElementById("goButton");
  let stopLight = document.getElementById('stopLight');
  let slowLight = document.getElementById('slowLight');
  let goLight = document.getElementById('goLight');
  let stopLightOn =  false;
  let slowLightOn =  false;
  let goLightOn = false;
  
  
  
  
  stopButton.addEventListener("click",function() {
    stopLight.classList.toggle("stop");
    stopLightOn === false ? stopLightOn = true : stopLightOn = false
    if(stopLightOn === true) {
      console.log("Stop Light bulb is on")
    } else {
      console.log("Stop Light bulb is off")
    }
  });
  slowButton.addEventListener("click",function() {
    slowLight.classList.toggle("slow");
    slowLightOn === false ? slowLightOn = true : slowLightOn = false
    if(slowLightOn === true) {
      console.log("Slow Light bulb is on")
    } else {
      console.log("Slow Light bulb is off")
    }
  });
  goButton.addEventListener("click",function() {
    goLight.classList.toggle("go");
    goLightOn === false ? goLightOn = true : goLightOn = false
    if(goLightOn === true) {
      console.log("Go Light bulb is on")
    } else {
      console.log("Go Light bulb is off")
    }
  });
    
  stopButton.addEventListener('mouseenter', function() {
    console.log(`Entered ${stopButton.innerHTML} Button`);
  });
  slowButton.addEventListener('mouseenter', function() {
    console.log(`Entered ${slowButton.innerHTML} Button`);
  });
  goButton.addEventListener('mouseenter', function() {
    console.log(`Entered ${goButton.innerHTML} Button"`);
  });
  stopButton.addEventListener('mouseleave', function() {
    console.log(`Left ${stopButton.innerHTML} Button`);
  });
  slowButton.addEventListener('mouseleave', function() {
    console.log(`Left ${slowButton.innerHTML} Button`);
  });
  goButton.addEventListener('mouseleave', function() {
    console.log(`Left ${goButton.innerHTML} Button`);
  });
  })();
