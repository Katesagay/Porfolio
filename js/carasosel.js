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


	const outputElement = document.getElementById("info");
	
	const smallDevice = window.matchMedia("(max-width: 576px)");
	
	smallDevice.addListener(handleDeviceChange);
	
	function handleDeviceChange(e) {
	
	if(e.matches){
		document.getElementById("tab-indicator-menu").style.display = "none";
		const myNode = document.getElementById("tab-menu");
		myNode.innerHTML = ""
		const mySecondNode = document.getElementById("sm-tab-menu");
		htmlcode = 
		'<div id="tab-header" class="tab-header" style="z-index: 10; margin: 5%; position: absolute; display: inline-flex; overflow: scroll;"> '+
				'<div class="active">'+
				 ' <i class="tab-selector fa fa-code test"></i> Code'+
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
									' </div>'
	
		mySecondNode.innerHTML = htmlcode 
		document.getElementById("tab-contents").style.padding = 0;
    var el = document.getElementById('footer-built');
    el.remove()
    navigation_class();  
	}
	  
	}
	
	// Run it initially
	handleDeviceChange(smallDevice);
	

 
  /* .tab-header{ for media query
    z-index: 10;
    overflow: scroll;
    margin: 5%;
    position: absolute;
    display: inline-flex;
  } */
  /* ul > li { */
    /* display: inline-block; */
    /* You can also add some margins here to make it look prettier */
    /* zoom:1;
    *display:inline; */
    /* this fix is needed for IE7- */
    /* add a margin 2% for the div in the tab header */
    /* .tabs .tab-content > div {
        position: absolute;
        text-align: center;
        /* padding: 40px 20px; */
        /* top: -200%;
        transition: all 500ms ease-in-out; */
/* .tab-indicator{ 
        display: none;
    } */
    /* } */ 
/* } */