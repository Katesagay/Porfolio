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
  const largeDevice = window.matchMedia("(min-width: 576px)");
	
  smallDevice.addListener(handleDeviceChange);
  largeDevice.addListener(handlelargeDeviceChange);
	
	function handleDeviceChange(e) {
   
	if(e.matches){
    document.getElementById("sm-tab-0").style.display = "initial";
    document.getElementById("sm-tab-1").style.display = "initial";
    document.getElementById("sm-tab-2").style.display = "initial";
    document.getElementById("sm-tab-3").style.display = "initial";
		document.getElementById("tab-indicator-menu").style.display = "none";
		const myNode = document.getElementById("tab-menu");
		myNode.innerHTML = ""
		const mySecondNode = document.getElementById("sm-tab-menu");
		htmlcode =  //style="color: #87C6BE;" add actiive color
            '<div  class="tab-header" style=" width: 100%; display: flow-root; overflow: unset; color: #B6646F; -webkit-text-stroke: 0.5px black; -webkit-font-smoothing: antialiased; font-size: x-large;"> '+
            '<div style="margin: 1%;" >'+
            '<a class="stroke-text"  style="color: #87C6BE;" href="#aboutMe-nav">ABOUT ME</a>' +
            '</div>'+
            '<div style="margin: 1%;">'+
            '<a class="stroke-text"  style="color: #87C6BE;" href="#experiences-nav"> EXPERIENCES </a> '+
            '</div>'+
            '<div style="margin: 1%;">'+
            '<a class="stroke-text"  style="color: #87C6BE;" href="#education-nav">EDUCATION</a>'+
            '</div>'+
            '<div style="margin: 1%;">'+
            '<a class="stroke-text" style="color: #87C6BE;" href="#certifications-nav">PROFESSIONAL CERTIFICATIONS</a>'+
            '</div>'+
            '</div>'
    
		mySecondNode.innerHTML = htmlcode 
    // location.reload();
    document.getElementById("large-tab-content").style.display = "none";
    const myseventhNode = document.getElementById("sm-tab-0");
    seventhHtmlcode = '<div id="aboutme-nav" class="tabs" style="border-radius: 0.25rem;'+
    'background: #B6646F;'+
    'box-shadow:  5px 5px 4px #49282c,-5px -5px 4px #ffa0b2; text-align: -webkit-center;">'+
    '<div id="tab-contents">' +
    '<h1 style="font-size: 1.5rem" >👋</h1>' +
		'<h1 style="color:#87C6BE; font-size: 3rem">Hello</h1>'+
		"<h2 class= 'stroke-text' style='font-size: 2.1rem; color:#f7b538' > Hello! I'm Kate Kunbi Sagay, a Software Engineer based in Kent</h2>"+
		'<h2 class= "stroke-text" style="font-size: 2.1rem; color:#f7b538"> I enjoy creating Python applications and how to videos on youtube.</h2>'+  
  '</div>'+
   ' </div>'
    myseventhNode.innerHTML = seventhHtmlcode
    const myfirthNode = document.getElementById("sm-tab-1");
		firthHtmlcode = '<div id="experiences-nav" class="tabs" style="border-radius: 0.25rem;'+
    'background: #B6646F;'+
    'box-shadow:  5px 5px 4px #49282c,-5px -5px 4px #ffa0b2;">'+
    '<div id="tab-contents">' +
    "<h2 class= 'stroke-text' style='color: #87C6BE;'>EXPERIENCES</h2>"+
    "<div style='margin-top: 5% !important; position: absolute; height: min-content;' class='row'>"+
         '<div class="column-custom" style=" padding: 3px;background-color:#f7b538; width: 25%;">'+
         '<ul style="font-size: 1rem;list-style: none; display: contents;float: left;">'+
         '<li>2019 - Present</li>'+
         '<li>Deloitte Consulting</li>'+
         '<li>London, United Kingdom</li>'+
         '</ul>'+
       "</div>"+
  '<div class="column-custom" style="padding: 5px; font-size: 1rem;background-color:#87C6BE; width: 75%;>'+
  '<p style="list-style: none;">Developed monitoring system templates for product teams'+
  "Escalated and triaged with product teams on technical issues and trends"+
  "Automated alert response processes through slack integration and aws for alert response  - leading to better real-time collaborative response from on-call responders"+
  "Capture and analyze major metrics such as throttling, percentage errors and and develop new metrics and KPIs as necessary - add these metrics to monitoring dashboards"+
  "Update runbooks, tools and documentation to facilitate and prepare on-call teams for future incidents"+
  "Developed complex and dynamic Tableau dashboards "+
  "Reviewing Pull Requests." +
	"Peer programming."+
  "Mentoring Junior Developers." +
	"Communication Lead of Engineering guild."+
	"International Business Travel."+
  "Built web connector to feed open-sourced data into Tableau and created diagrams to provide insight "+
  "Created Lambda function with python on AWS to transform data and feed into MySQL - ETL"+
  "Custom-built Lambda Layers on Linux platform provided on an Amazon EC2 Instance" +
  "Query log insights to troubleshoot and investigate incidences. Technologies used: Terraform, Python, Bash, Amazon Web Services, Azure, PagerDuty, Slack</p>"
"</div>"+
"</div>"+
  '</div>'+
   ' </div>'
    myfirthNode.innerHTML = firthHtmlcode
    const mysixthNode = document.getElementById("sm-tab-2");
		sixthHtmlcode =    '<div id="education-nav" class="tabs" style="border-radius: 0.25rem;'+
         'background: #B6646F;'+
         'box-shadow:  5px 5px 4px #49282c,-5px -5px 4px #ffa0b2; padding: 15px 10px;">'+
         '<div id="tab-contents">' +
         "<h2 class= 'stroke-text' style='color: #87C6BE;'>EDUCATION</h2>" +

        "<div style='margin-top: 5% !important; position: absolute; height: min-content; ' class='row'>"+
        '<div class="column-custom" style=" padding: 3px;background-color:#f7b538; width: 25%;">'+
        '<ul style="font-size: 1rem;list-style: none; display: contents;float: left;">'+
        '<li>  Belfast Metropolitan College </li>'+
        '<li>  Northern Ireland, UK </li>'+
        '<li>  January 2019 – March 2019</li>'+
        '</ul>'+
        "</div>"+
        '<div class="column-custom" style="padding: 5px; font-size: 1rem;background-color:#87C6BE; width: 75%;>'+
        '<p style=" list-style: none;">' +
        " Deloitte Northern Ireland Technology Academy"+
        "Core modules: Java, SQL, Databases, HTML, CSS," +
        "JavaScript, API, REST, Amazon Web Services, OOP" +
        "with Java, Fresh, Linus Essentials, Introduction in" +
        "Cybersecurity, Presentation skills and Business Consultancy 101" +
        "Gained: AWS Cloud Practitioner Certification" +
        "</p>" +
        "</div>"+
        "</div>"+
        

         
      "<div style='margin-top: 70% !important; position: absolute; height: min-content; ' class='row'>"+
      '<div class="column-custom" style=" padding: 3px;background-color:#f7b538; width: 25%;">'+
      '<ul style="font-size: 1rem;list-style: none; display: contents;float: left;">'+
      '<li>Imperial College Business School </li>'+
      '<li>London, UK</li>'+
      '<li>October 2017 – September 2017</li>'+
      '</ul>'+
      "</div>"+
      '<div class="column-custom" style=" list-style: none; padding: 5px; font-size: 1rem; background-color: #87C6BE; width: 75%;">'+
      '<p> MSc International Health Management' +
      "Core modules: Entrepreneurship, Business Plan Competition, " +
      "Health Informatics, Managing Change and Innovation in Healthcare," +
      "Health Economics, Business Strategy for Global Healthcare " +
      "and Global Healthcare Marketing " +
      "</p>" +
      "</div>"+
      '</div>'+
      


         '<div style="margin-top: 135% !important; position: absolute; height: min-content; " class="row">' +
         '<div class="column-custom" style=" padding: 3px;background-color:#f7b538; width: 25%;">'+
         '<ul style="font-size: 1rem;list-style: none; display: contents;float: left;">'+
         '<li> Univeristy of East London </li>'+
         '<li> London, UK </li>'+
         '<li> September 2013 – June 2017</li>'+
         '</ul>'+
       "</div>"+
       '<div class="column-custom" style="padding: 5px; font-size: 1rem;background-color:#87C6BE; width: 75%;">'+
       '<ul style=" list-style: none; margin-bottom: 50px;">' +
       '<li style=" list-style: none;"> Biomedicial Science - 1st class </li>' +
     "</ul>"+
     
     "</div>"+
       '</div>'+
        ' </div>'+
        ' </div>' 
    mysixthNode.innerHTML = sixthHtmlcode
    const ProfessionalCertNode = document.getElementById("sm-tab-3");
    ProfessionalCertHTML = '<div id="certifications-nav" class="tabs" style="border-radius: 0.25rem;'+
    'background: #B6646F;'+
    'box-shadow:  5px 5px 4px #49282c,-5px -5px 4px #ffa0b2; padding: 15px 10px; top: 32%; height: min-content !important;">'+
    '<div id="tab-contents">' +
    "<h2 class= 'stroke-text' style='text-align: right;  color: #87C6BE;'>Professional Certifications</h2>"+
    "<div class='row'>"+
    '<div class="column-custom" style=" padding: 3px;background-color:#f7b538; width: 25%;">'+
    '<ul style="font-size: 1rem;list-style: none; display: contents;float: left;">'+
    '<li> 2019</li>'+
    '<li> 2020</li>'+
    '<li> 2021</li>'+
    '</ul>'+
    '</div>'+
    '<div class="column-custom" style=" padding: 3px;background-color:#87C6BE; width: 75%;">'+
    
    "<ul style='list-style: none;'>"+
    "<li>AWS Certified Cloud Practitioner</li>"+
    "<li>AWS Certified Developer - Associate</li>"+
    "<li>HashiCorp - Terraform Associate</li>"+
    "</ul>"+
    "</div>"+
    "<h2 class= 'stroke-text' style='text-align: right; color: #87C6BE;'>Professional Association Memberships</h2>"+
    "<div class='row'>"+
		"<div class='column-custom' style= 'padding: 3px;background-color:#f7b538; width: 25%;'>"+
		"<ul style='font-size: 1rem;list-style: none; display: contents;float: left;'>"+
		"<li>2019</li>"+
		"</ul>"+
		"</div>"+
		"<div class='column-custom' style=' float: right; font-size: 1rem;background-color:#87C6BE; width: 75%;'>"+
		"<ul style='margin-bottom: 50px; padding-inline-start:1%; list-style: none; display: contents;'>"+
		"<li>Professional Registration for IT Technicians (RITTech)</li>"+
		"</ul>"+
		"</div>"+
	
"</div>"+


    ' </div>'+
    ' </div>' 
    ProfessionalCertNode.innerHTML = ProfessionalCertHTML
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
            '<i class="tab-selector fa fa-code test"></i> ABOUT ME'+
            '</div>'+
            '<div>'+
            '<i class=" tab-selector fa fa-pencil-square test" ></i> EXPERIENCES'+
            '</div>'+
            '<div>'+
            ' <i class=" tab-selector fa fa-bar-chart test" ></i> EDUCATION'+
            '</div>'+
            '<div>'+
            ' <i style= "font-size: 1 rem !important" class=" tab-selector fa fa-bar-chart test" ></i>CERTIFICATIONS'+
            '</div>'+
            '</div>'
  mythirdNode.innerHTML = Reverthtmlcode
  document.getElementById("tab-contents").style.padding = "40px 20px"
  navigation_class();
  document.getElementById("footer-copyright").style.display = "";
  document.getElementById("large-tab-content").style.display = "initial";
  document.getElementById("sm-tab-0").style.display = "none";
  document.getElementById("sm-tab-1").style.display = "none";
  document.getElementById("sm-tab-2").style.display = "none";
  document.getElementById("sm-tab-3").style.display = "none";
  
}

  }
  
 	// Run it initially
  handleDeviceChange(smallDevice);
  handlelargeDeviceChange(largeDevice);