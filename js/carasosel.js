function _class(name){
    return document.getElementsByClassName(name);
  }
  navigation_class();


function navigation_class(){
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
}


	// const outputElement = document.getElementById("info");
	
	const smallDevice = window.matchMedia("(max-width: 576px)");
  const largeDevice = window.matchMedia("(min-width: 576px)");
	
	smallDevice.addListener(handleDeviceChange);
  largeDevice.addListener(handlelargeDeviceChange);
	
	function handleDeviceChange(e) {
	
	if(e.matches){
		document.getElementById("tab-indicator-menu").style.display = "none";
		const myNode = document.getElementById("tab-menu");
		myNode.innerHTML = ""
		const mySecondNode = document.getElementById("sm-tab-menu");
		htmlcode = 
            '<div id="tab-header" class="tab-header" style="z-index: 10; margin: 5%; position: absolute; display: inline-flex; overflow: scroll;"> '+
            '<div class="active">'+
            '<i class="tab-selector fa fa-code test"></i> Code'+
            '</div>'+
            '<div>'+
            '<i class=" tab-selector fa fa-pencil-square test" ></i> About'+
            '</div>'+
            '<div>'+
            '<i class=" tab-selector fa fa-bar-chart test" ></i> Services'+
            '</div>'+
            '<div>'+
            '<i class=" tab-selector fa fa-envelope test"></i> Contact'+
            '</div>'+
            '<div>'+
            '<i class=" tab-selector fa fa-envelope test"></i> Contact'+
            '</div>'+
            '<div>'+
            '<i class=" tab-selector fa fa-envelope test"></i> Contact'+
            '</div>'+
            '</div>'
	
		mySecondNode.innerHTML = htmlcode 
		document.getElementById("tab-contents").style.padding = 0;
    document.getElementById("footer-copyright").style.display = "none";
    navigation_class();  
	    }
 }
	

function handlelargeDeviceChange(e) {
  if(e.matches){
    document.getElementById("tab-indicator-menu").style.display = "";
    document.getElementById("tab-indicator-menu").style.background = "pink";
    const myfourthNode = document.getElementById("sm-tab-menu");
    myfourthNode.innerHTML = "";
    const mythirdNode = document.getElementById("tab-menu");
    Reverthtmlcode = 
            '<div id="tab-header" class="tab-header"> '+
            '<div class="active">'+
            '<i class="tab-selector fa fa-code test"></i> Code'+
            '</div>'+
            '<div>'+
            '<i class=" tab-selector fa fa-pencil-square test" ></i> About'+
            '</div>'+
            '<div>'+
            ' <i class=" tab-selector fa fa-bar-chart test" ></i> Services'+
            '</div>'+
            '<div>'+
            '<i class=" tab-selector fa fa-envelope test"></i> Contact'+
            '</div>'+
            '<div>'+
            '<i class=" tab-selector fa fa-envelope test"></i> Contact'+
            '</div>'+
            '<div>'+
            '<i class=" tab-selector fa fa-envelope test"></i> Contact'+
            '</div>'+
            '</div>'
  mythirdNode.innerHTML = Reverthtmlcode
  document.getElementById("tab-contents").style.padding = "40px 20px"
  navigation_class();
  document.getElementById("footer-copyright").style.display = "";
  
}

  }
  
 	// Run it initially
   handleDeviceChange(smallDevice);
   handlelargeDeviceChange(largeDevice);
  