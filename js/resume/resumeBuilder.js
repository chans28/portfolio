/*
This is empty on purpose! Your code to build the resume will go here.
 */

//Biography Object
var bio = {
	"name" : "Chandan Patil",
	"role" : "Web Developer",
	"contacts" : {
		"mob" : "+91-555-555-5555",
		"email" : "chandan28288@gmail.com",
		"twitter" : "@Chandan28288",
		"github" : "chans28",
		"location" : "Navi Mumbai, Maharashtra"
	},
	"biopic" : "images/resume/fry.jpg",
	"welcome" : "Greetings",
	"skills" : ["Languages : HTML5, CSS3, JavaScript, Python, Java" ,
				"Frameworks/Libraries : Bootstrap, Jquery, AngularJS, Backbone.js" ,
				"Additional Softwares : Adobe Photoshop, Adobe Premiere Pro" ,
				"Business Expertise : PEST Analysis, SWOT Analysis, Negotiations, Digital Marketing"
				]
};

//Work Experience Object
var work ={
	"jobs" : [
		{
			"employer" : "BIG Strategic Management Consultants",
			"title" : "Strategy Analyst (Business)",
			"dates" : "March 2014 - September 2015",
			"location" : "Vikhroli,Mumbai,Maharasthra",
			"description" : ["Assessing the market size",
							"Analyzing Research and Development Trends",
							"Laying out the marketing strategies" ,
							"Setting the Vision,Mission, and Goals",
							"Market Feasibility Studies",
							"Location Strategies",
							"Competitive Strategies",
							"Pitch Presentations",
							"Sucession Planning",
							"Growth Planning",
							"Research on sectors : Hospitality, Restaurants, Processed Food, Microfinance Institutions, Small and Medium Industries"],
			"url" : "http://www.big-consultants.com"
		},
		{
			"employer" : "M. M. Cryo Gases",
			"title" :  "On - Site Supervisor",
			"dates" : "January 2012 - November 2012",
			"location" : "Palghar, Maharashta, India",
			"description" : ["Supply of Liquid Nitrogen to various agencies, manufacturing companies", "Ensure safe supply of the Liquid Nitrogen", "Sales Promotion", "Transport and logistics maintenance", "Assistance in Design of tankers of safe transport"]
		}
	]
};

//Projects Object
var project = {
	"projects" : [
		{
			"title" : "Building a Responsive Website",
			"dates" : "Oct 1, 2015 - Oct 5, 2015",
			"description" : "Building a responsive website, using HTML5 and CSS3. The site is built keeping in mind 12 column grid structure, used media queries and optimised images.",
			"url": "index.html",
			"images" : ["images/resume/prj1-desk-view.jpg","images/resume/prj1-tab-view-prt1.jpg","images/resume/prj1-tab-view-prt2.jpg","images/resume/prj1-mob-view-prt1.jpg","images/resume/prj1-mob-view-prt2.jpg","images/resume/prj1-mob-view-prt3.jpg"]
		},
		{
			"title" : "Interactive Resume",
			"dates" : "Oct 6, 2015 - Present",
			"description" : "This project involved using JavaScript, JSON, and Jquery Library.",
			"images" : [],
			"url" : "online_resume.html"
		},
		{
			"title": "Classic Arcade Game Clone",
			"dates": "October 26, 2015 - Present",
			"description": "yet to come",
			"url": "index.html",
			"images": []
		},
		{
			"title": "Website Optimization",
			"dates": "Will Start soon",
			"description": "Coming Soon",
			"url": "index.html",
			"images": []
		},
		{
			"title": "Neighborhood Map",
			"dates": "Will start soon",
			"description": "Would be writing after completion of the project",
			"url": "index.html",
			"images": ["images/neighborhood-map.jpg"]
		},
		{
			"title": "Health Tracker",
			"dates": "Will Start soon",
			"description": "Yet to complete",
			"url": "index.html",
			"images": []
		},
		{
			"title": "Feed Reeder Testing",
			"dates": "Will Start soon",
			"description": "Will Start soon",
			"url": "index.html",
			"images": []
		}
	]
};

//Education Object
var education = {
	"schools" : [
		{
			"name": "University Of Mumbai",
			"location": "Kharghar,Navi Mumbai, Maharasthra",
			"degree": "Bachelors of Engineering (BE)",
			"dates" : "2006 - 2014",
			"major" : "Mechanical",
			"webAddr" : "http://mu.ac.in/portal/"
		}
	],
	"onlineCourses" : [
		{
			"name" : "An Intoduction to Corporate Finance",
			"school" : "University of Pennsylvania on Coursera",
			"dates" : "October 2013 - December 2013",
			"url" : "https://www.coursera.org/course/whartonfinance"
		},
		{
			"name" : "Creative, Serious and Playful Science of Android Apps",
			"school" : "Coursera",
			"dates" : "December 2013 - February 2014",
			"url" : "https://www.coursera.org/course/androidapps101"
		},
		{
			"name" : "Developing Innovative Ideas for New Companies: The First step in Entrepreneurship",
			"school" : "Coursera",
			"dates" : "January 2014 - February 2014",
			"url" : "https://www.coursera.org/course/innovativeideas"
		},
		{
			"name" : "Programming For Everybody (Python)",
			"school" : "Coursera",
			"dates" : "July 2014 - September 2014",
			"url" : "https://www.coursera.org/learn/python"
		},
		{
			"name" : "An Introduction to Interactive Programming In Python - Part - I",
			"school" : "Rice University offered by Coursera",
			"dates" : "April 2015 - May 2015",
			"url" : "https://www.coursera.org/course/interactivepython1"
		},
		{
			"name": "Front Web Developer NanoDegree",
			"school" : "Udacity",
			"dates" : "September 2015 - Present",
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

//Encapsulation of Display Property of Bio Object
bio.display = function() {

	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role))
	.prepend(HTMLheaderName.replace("%data%", bio.name))
	.append(HTMLbioPic.replace("%data%", bio.biopic));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mob))
	.append(HTMLemail.replace("%data%", bio.contacts.email))
	.append(HTMLtwitter.replace("%data%", bio.contacts.twitter))
	.append(HTMLgithub.replace("%data%", bio.contacts.github))
	.append(HTMLlocation.replace("%data%", bio.contacts.location));

	//Conditional Execution alongwith For Loop
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var skillLen = 0; skillLen < bio.skills.length; skillLen = skillLen + 1) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[skillLen]));
		}
	}
};

//Encapsulation of Display property of Work Object
work.display = function() {
	for (var job in work.jobs) {
		//create new divs for each array

		$("#workExperience").append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);

		$(".work-entry:last").append(formattedEmployerTitle)
		.append(formattedWorkDates)
		.append(formattedLocation);

		for (var items in work.jobs[job].description) {
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description[items]);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

//Encapsulation of Display Property of Project Object
project.display = function() {
	for (var prj in project.projects) {
		//create divs for project
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",project.projects[prj].title);
		var formattedDates = HTMLprojectDates.replace("%data%", project.projects[prj].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[prj].description);
		formattedTitle = formattedTitle.replace("#",project.projects[prj].url);

		$(".project-entry:last").append(formattedTitle)
		.append(formattedDates)
		.append(formattedDescription);

		//Images display
		if (project.projects[prj].images.length > 0) {
			for (var image in project.projects[prj].images) {
				var formattedImage = HTMLprojectImage.replace(/%data%/g, project.projects[prj].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

//Encapsulation of Display Property of Education Object
education.display = function() {
	for (var sch in education.schools) {

		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[sch].name);
		formattedName = formattedName.replace("#", education.schools[sch].webAddr);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[sch].location);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[sch].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[sch].dates);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[sch].major);
		formattedNameDeg = formattedName + formattedDegree;

		$(".education-entry:last").append(formattedNameDeg)
		.append(formattedLocation)
		.append(formattedDates)
		.append(formattedMajor);
	}

	$("#education").append(HTMLonlineClasses);

	for (var crs in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[crs].name);
		var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[crs].school);
		var formattedEduDates = HTMLonlineDates.replace("%data%",education.onlineCourses[crs].dates);
		var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[crs].url);
		formattedTitleSch = formattedTitle + formattedSchool;

		$(".education-entry:last").append(formattedTitleSch)
		.append(formattedEduDates)
		.append(formattedUrl);
	}
};


//Calling the display property of Objects

bio.display();
project.display();
work.display();
education.display();


//Appending map

$("#mapDiv").append(googleMap);


/*
//Function for international name Standard
function inName(name) {
	name = name.trim().split(' ');
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	console.log(name[0] + " " + name[1]);
	return (name[0] + " " + name[1]);
}

//Adding a Button
$("#main").append(internationalizeButton);
*/


/*var awesomeThoughts = "I am Chans and I am awesome";
console.log (awesomeThoughts);	//Printing out to the console

var email = "cameron@udacity.com";	//Using replace method
var newEmail = email.replace("udacity", "gmail");
console.log(newEmail);
var funThoughts = awesomeThoughts.replace('awesome','fun');	//Using Replace method
$("#main").append(funThoughts);*/
//name = "Chandan Patil";
//role = "Web Developer";
//$("#header").prepend(HTMLheaderRole.replace("%data%", role));
//$("#header").prepend(HTMLheaderName.replace("%data%", name));
//var skills = ["awesomeness", "Programming", "teaching", "JS"];
//$("#main").append(skills);
//$("#main").append(skills[0]);
//$("#main").append(skills.length);

/*var bio = {
	"name" : "Chandan",
	"age" : 28,
	"skills" : skills
};*/
//$("#header").append(bio.name);
//Using Dot Notation
/*var work = {}
var school = {}
work.position = "Strategy Business Analyst";	//Using Dot Notation
school["name"] = "Udacity";	//Using Bracket notation
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
//$("#header").prepend(HTMLheaderRole.replace("%data%", role));
$("#header").append(HTMLmobile.replace("%data%", bio.name));
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkTitle.replace("%data%", work["position"]));	//Using Bracket notation for calling
$("#education").prepend(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%", school.name));		//Call using dot notation
*/


/*//Declaring Function
function displayWork() {
	//For in Loop
	for (var job in work.jobs) {
		//create new divs for each array
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedLocation);
		for (var items in work.jobs[job].description) {
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description[items]);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}
//Calling Function
displayWork();
*/