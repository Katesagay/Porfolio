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
function header_active(){
  $(".nav .nav-link").on("click", function(){
    $(".nav").find(".active2").removeClass("active2");
    $(this).addClass("active2");
 });
 $(".nav .nav-link").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).addClass("active");
 });
}


	const outputElement = document.getElementById("info");
	
	const smallDevice = window.matchMedia("(max-width: 677px)");
  const largeDevice = window.matchMedia("(min-width: 677px)");
	
  smallDevice.addListener(handleDeviceChange);
  largeDevice.addListener(handlelargeDeviceChange);
	
	function handleDeviceChange(e) {
   
	if(e.matches){
    document.getElementById("sm-tab-0").style.display = "inline-flex";
    document.getElementById("sm-tab-1").style.display = "initial";
    document.getElementById("sm-tab-2").style.display = "initial";
    document.getElementById("sm-tab-3").style.display = "initial";
		document.getElementById("tab-indicator-menu").style.display = "none";
    const navNode = document.getElementById("sm-nav-header");
    navNode.innerHTML = ""
    navHtmlCode = 
    '<div style="padding-right: 0% !important; padding-left: 0% !important;" class="col nav-sm ">'+
    '<a style="color: white;" class="flex-sm-fill text-sm-center nav-link active2" aria-current="page" href="index.html" >Resume</a>'+
    '<a id="skills-link" style="color: white;" class="flex-sm-fill text-sm-center nav-link"  href="#">Skills</a>'+
    '</div>'+
    '<div style="padding-right: 0% !important; padding-left: 0% !important;" class="col nav-sm ">'+
    '<a id="projects-link" style="color: white;" class="flex-sm-fill text-sm-center nav-link" href="#">Projects</a>'+
    '<a id="contact-link" style="color: white;" class="flex-sm-fill text-sm-center nav-link" href="#">Contact</a>'+
    '</div>'
    navNode.innerHTML =  navHtmlCode
    const socialNode = document.getElementById("sm-nav-social");
    socialNode.innerHTML = ""
    socialHtmlCode = 
    '<div style="padding-right: 0% !important; padding-left: 0% !important;" class="col nav-sm ">'+
    '<a  style="padding: 4%;" href="https://github.com/Katesagay">' +
		'<img class="socialmedia-img" src="img/iconmonstr-github-3.svg">'+
	'</a>'+
    '</div>'+
    '<div style="padding-right: 0% !important; padding-left: 0% !important;" class="col nav-sm ">'+
    '<a  style="padding: 4%;" href="https://www.linkedin.com/in/kate-kunbi-sagay/">'+
		'<img class="socialmedia-img" src="img/iconmonstr-linkedin-3.svg">'+
	'</a>'+
    '</div>'
    socialNode.innerHTML =  socialHtmlCode

		const myNode = document.getElementById("tab-menu");
		myNode.innerHTML = ""
		const mySecondNode = document.getElementById("sm-tab-menu");
		htmlcode =  //style="color: #87C6BE;" add actiive color
            '<div  class="tab-header" style="width: 100%; display: flow-root; overflow: unset; color: #B6646F; -webkit-text-stroke: 0.5px black; -webkit-font-smoothing: antialiased; font-size: x-large;"> '+
            '<div style="margin: 1%;" >'+
            '<a class="stroke-text"  style="color: #87C6BE;" href="#aboutMe-nav">ABOUT ME</a>' +
            '</div>'+
            '<div style="margin: 1%;">'+
            '<a class="stroke-text"  style="color: #87C6BE;" href="#experiences-nav"> EXPERIENCE </a> '+
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
    seventhHtmlcode = '<div id="aboutme-nav" class="tabs sm-aboutme" style="border-radius: 0.25rem;'+
    'background: #B6646F;'+
    'box-shadow:  5px 5px 4px #49282c,-5px -5px 4px #ffa0b2; text-align: -webkit-center; margin-top: 625px;">'+
    '<div id="tab-contents">' +
    '<h1 style="font-size: 1.5rem" >👋</h1>' +
		'<h1 style="color:#87C6BE; font-size: 3rem">Hello</h1>'+
		"<h2 class= 'stroke-text' style='font-size: 2.1rem; color:#f7b538' > Hello! I'm Kate Kunbi Sagay, a Software Engineer based in Kent</h2>"+
		'<h2 class= "stroke-text" style="font-size: 2.1rem; color:#f7b538"> I enjoy building cloud native applications </h2>'+  
  '</div>'+
   ' </div>'
    myseventhNode.innerHTML = seventhHtmlcode
    const myfirthNode = document.getElementById("sm-tab-1");
		firthHtmlcode = '<div id="experiences-nav" class="tabs" style="border-radius: 0.25rem;'+
    'background: #B6646F;'+
    'box-shadow:  5px 5px 4px #49282c,-5px -5px 4px #ffa0b2;">'+
    '<div id="tab-contents">' +
    "<h2 class= 'stroke-text' style='color: #87C6BE;'>EXPERIENCE</h2>"+
    "<div style='margin-bottom: 15% !important; margin-top: 5% !important; position: absolute; height: min-content;' class='row' >"+
         '<div class="column-custom" style=" padding: 3px;background-color:#f7b538; width: 25%;">'+
         '<ul style="font-size: 1rem;list-style: none; display: contents;float: left;">'+
          '<li>Site Reliability Engineer</li>'+
         '<li>Deloitte Consulting</li>'+
         '<li>London, United Kingdom</li>'+
         '<li>April 2019 - Present</li>'+
         '</ul>'+
       "</div>"+
  '<div class="column-custom" style="padding: 5px; font-size: 1rem;background-color:#87C6BE; width: 75%;">'+
  
 " <ul style='list-style: none; padding: 0;' >"+
 "<li> Subject matter expert and lead representative for product in operations</li>"+
 "<li> Activity monitoring system that daily traffic periodically peaked at 1 million + users</li>"+
 "<li> Creating tactical python scripts to fill in gaps and resolve incidences </li>"+
  "<li> Developed monitoring system templates for product teams.</li>"+
  "<li> Escalated and triaged with product teams on technical issues and trends.</li>"+
  "<li> Automated alert response processes through slack integration and aws for alert response  - leading to better real-time collaborative response from on-call responders.</li>"+
   " <li> Capture and analyze major metrics such as throttling, percentage errors and develop new metrics and KPIs as necessary</li>"+
   " <li> Query cloudwatch log insights to troubleshoot and investigate incidences.</li>"+
      "<li> Update runbooks, tools and documentation to facilitate and prepare on-call teams for future incidents.</li>"+
         " <li> Reviewing Pull Requests and peer programming.</li>"+
               " <li> Created Lambda function and layers with python on AWS to transform data and feed into MySQL - ETL.</li>"+
                    " <li> Mentoring Junior Developers and Communication Lead of Engineering guild.</li>"+
                          "<li> International Business Travel.</li>"+
                           " <li> Technologies used: Terraform, Python, Bash, Amazon Web Services, Azure, PagerDuty, Slack</li>"+
"</ul>"+



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

        "<div style='margin-top: 5% !important; position: absolute; height: min-content; margin-bottom: 15% !important; ' class='row' >"+
        '<div class="column-custom" style=" padding: 3px;background-color:#f7b538; width: 25%;">'+
        '<ul style="font-size: 1rem;list-style: none; display: contents;float: left;">'+
        '<li>  Belfast Metropolitan College </li>'+
        '<li>  Northern Ireland, UK </li>'+
        '<li>  January 2019 – March 2019</li>'+
        '</ul>'+
        "</div>"+
        '<div class="column-custom" style="padding: 5px; font-size: 1rem;background-color:#87C6BE; width: 75%;">'+
        '<p>' +
        "Deloitte Northern Ireland Technology Academy. "+
        "Core modules: Java, SQL, Databases, HTML, CSS," +
        "JavaScript, API, REST, Amazon Web Services, OOP" +
        "with Java, Fresh, Linus Essentials, Introduction in" +
        "Cybersecurity, Presentation skills and Business Consultancy 101. " +
        "Gained: AWS Cloud Practitioner Certification" +
        "</p>" +
        "</div>"+
        "</div>"+
        

         
      "<div style='margin-top: 70% !important; position: absolute; height: min-content; margin-bottom: 15% !important; ' class='row' >"+
      '<div class="column-custom  extra-sm-margin-edu-1" style=" padding: 3px;background-color:#f7b538; width: 25%;">'+
      '<ul style="font-size: 1rem;list-style: none; display: contents;float: left;">'+
      '<li>Imperial College Business School </li>'+
      '<li>London, UK</li>'+
      '<li>October 2017 – September 2017</li>'+
      '</ul>'+
      "</div>"+
      '<div class="column-custom  extra-sm-margin-edu-1" style=" list-style: none; padding: 5px; font-size: 1rem; background-color: #87C6BE; width: 75%;">'+
      '<p >'+
      "MSc International Health Management. " +
      "Core modules: Entrepreneurship, Business Plan Competition, " +
      "Health Informatics, Managing Change and Innovation in Healthcare, " +
      "Health Economics, Business Strategy for Global Healthcare " +
      "and Global Healthcare Marketing" +
      "</p>" +
      "</div>"+
      '</div>'+
      


         '<div style="margin-top: 135% !important; position: absolute; height: min-content; " class="row sm-resume-row extra-sm-margin-edu-2">' +
         '<div class="column-custom  extra-sm-margin-edu-2 " style=" padding: 3px;background-color:#f7b538; width: 25%;">'+
         '<ul style="font-size: 1rem;list-style: none; display: contents;float: left;">'+
         '<li> Univeristy of East London </li>'+
         '<li> London, UK </li>'+
         '<li> September 2013 – June 2017</li>'+
         '</ul>'+
       "</div>"+
       '<div class="column-custom  extra-sm-margin-edu-2" style="padding: 5px; font-size: 1rem;background-color:#87C6BE; width: 75%;">'+
       '<p >BSc Hons Biomedicial Science - 1st Class. Core modules: Clinical Biochemistry, '+
       "Clinical Biochemistry, Medical Microbiology, Cellular Pathology, "+
       "Clinical Immunology, Clinical Genetics, "+
       "Human Disease and Clinical Practice, Molecular Biology & Genetics, "+
       "Infection & Immunity, Cellular Biochemistry, Haematology and Transfusion Science, "+
       "Essential Chemistry, Cell Biology, Introduction to Biochemistry and Molecular Biology, "+
       "Fundamentals in Human Anatomy and Physiology, Fundamentals in Microbiology </p>" +
     "</div>"+
       '</div>'+
        ' </div>'+ 
        ' </div>' 
    mysixthNode.innerHTML = sixthHtmlcode
    const ProfessionalCertNode = document.getElementById("sm-tab-3");
    ProfessionalCertHTML = '<div id="certifications-nav" class="tabs" style="border-radius: 0.25rem;'+
    'background: #B6646F;'+
    'box-shadow:  5px 5px 4px #49282c,-5px -5px 4px #ffa0b2; padding: 15px 10px; top: 50%; height: min-content !important;">'+
    '<div id="tab-contents">' +
    "<h2 class= 'stroke-text' style='text-align: right;  color: #87C6BE;'>Professional Certifications</h2>"+
    "<div style= 'margin-bottom: 15% !important;' class='row' >"+
    '<div class="column-custom" style=" padding: 3px;background-color:#f7b538; width: 25%;">'+
    '<p> 2019</p>'+
    "</div>"+
    '<div class="column-custom" style=" padding: 3px;background-color:#87C6BE; width: 75%;">'+
    "<p>AWS Certified Cloud Practitioner</p>"+
    "</div>"+
    "</div>"+
    "<div style='margin-bottom: 15% !important;' class='row' >"+
    '<div class="column-custom" style=" padding: 3px;background-color:#f7b538; width: 25%;">'+
    '<p> 2020</p>'+
    '<li> 2021</li>'+
    '</div>'+
    '<div class="column-custom" style=" padding: 3px;background-color:#87C6BE; width: 75%;">'+
    "<p>AWS Certified Developer - Associate</p>"+
    "<li>HashiCorp - Terraform Associate</li>"+
    "</div>"+
    "</div>"+
    "<h2 class= 'stroke-text' style='text-align: right; color: #87C6BE;'>Professional Association Memberships</h2>"+
    "<div style=' margin-bottom: 15% !important;' class='row' >"+
		"<div class='column-custom' style='padding: 3px; background-color:#f7b538; width: 25%;'>"+
		"<ul style='font-size: 1rem;list-style: none; display: contents;float: left;'>"+
		"<li>2019</li>"+
		"</ul>"+
		"</div>"+
		"<div class='column-custom' style=' float: right; font-size: 1rem;background-color:#87C6BE; width: 75%;'>"+
		"<ul style=' text-align: right; margin-bottom: 50px; padding-inline-start:1%; list-style: none; display: contents;'>"+
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
    header_active();
    
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
            '<i class=" tab-selector fa fa-pencil-square test" ></i> EXPERIENCE'+
            '</div>'+
            '<div>'+
            ' <i class=" tab-selector fa fa-bar-chart test" ></i> EDUCATION'+
            '</div>'+
            '<div>'+
            ' <i style= "font-size: 1 rem !important" class=" tab-selector fa fa-bar-chart test" ></i>CERTIFICATIONS'+
            '</div>'+
            '</div>'
  mythirdNode.innerHTML = Reverthtmlcode
  const navNode = document.getElementById("sm-nav-header");
    navNode.innerHTML = ""
    navHtmlCode = 
    '<a style="color: white;" class="flex-sm-fill text-sm-center nav-link active2" aria-current="page" href="index.html" >Resume</a>'+
    '<a id="skills-link" style="color: white;" class="flex-sm-fill text-sm-center nav-link"  href="#">Skills</a>'+
    '<a id="projects-link" style="color: white;" class="flex-sm-fill text-sm-center nav-link" href="#">Projects</a>'+
    '<a id="contact-link" style="color: white;" class="flex-sm-fill text-sm-center nav-link" href="#">Contact</a>'
    navNode.innerHTML =  navHtmlCode
    const socialNode = document.getElementById("sm-nav-social");
    socialNode.innerHTML = ""
    socialHtmlCode = 
    '<a  style="padding: 4%;" href="https://github.com/Katesagay">' +
		'<img class="socialmedia-img" src="img/iconmonstr-github-3.svg">'+
	'</a>'+
    '<a  style="padding: 4%;" href="https://www.linkedin.com/in/kate-kunbi-sagay/">'+
		'<img class="socialmedia-img" src="img/iconmonstr-linkedin-3.svg">'+
	'</a>'
    socialNode.innerHTML =  socialHtmlCode

  document.getElementById("tab-contents").style.padding = "40px 20px"
  navigation_class();
  header_active();
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