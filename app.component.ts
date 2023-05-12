import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  myProfile = {
    "fname" : "ANUSHKA",
    "lname" : "KALBANDE",
    "address" : "97 Nagsen Nagar,Jaripatka,Nagpur-440014",
    "contactNo" : "+91-9075987170",
    "email": "anushkakalbande28@gmail.com",
    "about": "I am a talented and ambitious front-end developer with one Year of experience. Proficient in HTML, CSS,  Bootstrap,and JavaScript, I have successfully built visually appealing and responsive web applications. I am a detail-oriented team player, collaborating effectively with designers, back-end developers, and stakeholders to deliver high-quality code and exceptional user experiences. ",
    "projects":[
        {
            "project_name":"Total Print Solutions",
            "year":2023,
            "role":["Designed UI in figma", "Created the website using HTML,CSS & Bootstrap"],
            "description":"Developed a Multipage Website with static data,& deployed it on firebase."
        },
        {
            "project_name":"News Portal",
            "year":2023,
            "role":["Created the design of Webisite and Admin Panel in Figma & monitered the developement process."],
            "description":"Managed the designing & developement process."
        }
    ],
    "education":[
        {
            "graduation":{
                "type":"BE in computer science",
                "duration":"Aug.2016-Dec.2020",
                "course_name":"RTMNU",
                "gpa":"GPA-9",
            },
            "hsc":{
                "type":"HSC",
                "duration":"Feb.2016",
                "course_name":" Maharashtra State Board",
                "gpa":"67%",
            },
            "ssc":{
                "type":"SSC",
                "duration":"Mar.2014",
                "course_name":" Maharashtra State Board",
                "gpa":"82%",
            },

        }
       
    ],
    "skills":[{"title" : "PROGRAMMING LANGUAGES", "skills" : ["HTML", "CSS","Bootstrap","Angular", "JavaScript","MYSQL"]},
    {"title" : "Tools", "skills" : ["VSCode", "Workbench", "Github", "firebase"]}],
    "awards":["Google Analytics Certified Developer","Mobile Web Specialist - Google Certification","University of Colorado Boulder - Emerging Tech Competition 2009","University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)"],
    "hobbies" : [ "Reading Books", "Watching Movies", "Trekking"]
  }
}


