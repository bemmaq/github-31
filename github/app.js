document.addEventListener("DOMContentLoaded", function () {
    const trafficLight = document.querySelector(".traffic-light");
    const lights = document.querySelectorAll(".light");
  
    function switchLight(index) {
      lights.forEach((light, i) => {
        light.classList.toggle("active", i === index);
      });
    }
  
    let currentLightIndex = 0;
  
    function changeLight() {
      switchLight(currentLightIndex);
      currentLightIndex = (currentLightIndex + 1) % lights.length;
    }
  
    setInterval(changeLight, 5000);
  });
  