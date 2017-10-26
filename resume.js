var resume = {
	basic_info :
	{
			"name" : "Ashish Kumar Shukla",
			"sex" : "male",
			"mobile_no" : "9755329331",
	},
	academic_qualifications :
	{   "graduation":	
		{
			"year_of_passing" : "2018",
			"institute_name" : "Lovely Professional University",
			"cgpa" : "7.38",
		},
		"intermediate":
		{
			"year_of_passing" : "2014",
			"institute_name" : "Govt. Higher Sec. School No.2 Sidhi",
			"Board_type" : "MP Board",
			"percentages" : "82.00",
		},
		"matriculation":
		{
			"year_of_passing" : "2012",
			"institute_name" : "Govt. Higher Sec. School Bhadaura Sidhi",
			"Board_type" : "MP Board",
			"percentages" : "85.33",
		},
	},
	Technical_Skills :
		{
			"languages" : ["c","c++","java","html","JavaScript"],
			"platforms" : ["Android Studio","Matlab","SPSS"]
		},
	
	projects : 
	{
		"name" : "Online Examination System",
		"technology_used" :"Java Swing and Core Java",
		"duration" : "2 months",
		
	},
	Summer_Training : 
	{
		"mode" : "online", 
		"institute_name" : "Udemy",
		"name" : "Android Development for Beginners",
		"Duration" : "6 Weeks",
		"time" : "jun 2017-july2017",
	},
	personal_details :
	{
		"date_of_birth" : "17 Nov 1996",
		"Nationality" : "Indian",
		"Address" :
		{
			"Village" : "Gotra",
			"Tehsil" : "Kusmi",
			"District" : "Sidhi",
			"State" : "MP",
			"Country" : "India",
			"Pin" : "486669" ,
		},
		"No_of_languages_known" : "2",
		"languages" :[{"language1" : "English"},{"language2" : "Hindi"}]		
	}
	
}
console.log(resume.Technical_Skills.languages);
