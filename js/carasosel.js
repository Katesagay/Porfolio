function _class(name){
    return document.getElementsByClassName(name);
  }
  
  let tabPanes = _class("tab-header")[0].getElementsByTagName("div");
  
  for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click",function(){
      _class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
      tabPanes[i].classList.add("active");
      
      _class("tab-indicator")[0].style.top = `calc(80px + ${i*50}px)`;
      
      _class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
      _class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
      
    });
  }

  const outputElement = document.getElementById("info");

  const smallDevice = window.matchMedia("(min-width: 576px)");
  
  smallDevice.addListener(handleDeviceChange);
  
  function handleDeviceChange(e) {
    // if (e.matches) outputElement.textContent = "Bigger Than Mobile";
    // else outputElement.textContent = "Mobile";
    if(e.matches){
    alert("Hello! I am an alert box!!");
}
    
  }
  
  // Run it initially
  handleDeviceChange(smallDevice);