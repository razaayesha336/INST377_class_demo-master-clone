// now we have the groups students want to work in.
// we need to find out what section they're in so they have class together

const all = document.getElementsByClassName("StudentEnrollment");

let nameAndSection = [];
for (let i = 0; i < all.length; i += 1) {
  nameAndSection[i] = {
    name: all[i].querySelector(".roster_user_name").innerText,
    section: all[i].querySelector(".section").innerText
  }
}

sessionStorage.setItem('inst377', JSON.stringify(nameAndSection));

// Open up those groups on-screen


// let's work with groups
let clickbatch = document.getElementsByClassName('group-name');
for (let i = 0; i < clickbatch.length; i += 1) {
  clickbatch[i].click();
}

// Section 2

let subgroups = [];
let groups = [];
let match = [];
let firstIndex = null;

groups = [];
subgroups = [];
groups = document.getElementsByClassName("group-expanded");

for(let i = 0; i < groups.length; i += 1) {
  const text = groups[i].innerText;
  
  let gr = text.match(/Edit\s+([A-Z])\w+\s([A-Z])\w+'s\smembership/gi);
  let members = [];
  
  if(gr){
    // console.log('group', gr);
    for (let j = 0; j < gr.length; j += 1){
      members.push(gr[j].slice(5, gr[j].lastIndexOf('membership') - 3));
    }
  }

  groupName = text.match(/Assignment 3 - Full-Stack Webpage \d+/gi);
  console.log(groupName);

  if(groupName){
  subgroups.push({
    members: members,
    groupName: groupName[0]
  });}
  else {
    console.log("Error - no groupname")
  }
}

console.log(subgroups);


// get the first name of all defined groups 
// crossed with section this will tell us which section each group is
let sectionXGroup = [];
console.log(sessionStorage.getItem('inst377'));

for (let i = 0; i < subgroups.length; i += 1 ){
  let instArray = JSON.parse(sessionStorage.getItem('inst377'));
  let leadMember = subgroups[i].members[0];

  for(let j = 0; j < instArray.length; j += 1){
   if(instArray[j].name == leadMember){
    sectionXGroup.push({
      section: instArray[j].section,
      group: subgroups[i].groupName
    });
   } 
  }
}

sessionStorage.setItem('inst377_names', JSON.stringify(sectionXGroup));
console.log(sectionXGroup);

// End section two

let classList;
// convert the group names to an array
let all = [];
let assignmentGr1 = [];
let groupSections = [];

classList = JSON.parse(sessionStorage.getItem('inst377'));
groupSections = JSON.parse(sessionStorage.getItem('inst377_names'));
console.log('groupSections', groupSections);
all = document.querySelectorAll('.group-name');
all = Array.from(all);
assignmentGr1 = all.filter((f) => !f.innerText.includes('Full-stack Random'));

assignmentGr1.forEach((f) => {
  // in here, find the section name above and inject it
  console.log('f', f.innerText);
  console.log('groupSections', f.innerText);
  groupSections.forEach((groupId) => {
    console.log('groupId', groupId.group);
    if(f.innerText.includes(groupId.group)) {
      console.log('NAME', groupId);
      f.innerText += ` ${groupId.section}`;
    }
  })
});

// DONE: Labelling the groups by section
// Now to show student section next to student name
let instMembers;
let displayStudents;

instMembers = JSON.parse(sessionStorage.getItem('inst377'));
displayStudents = document.querySelectorAll('li.group-user div.group-user-name');
displayStudents = Array.from(displayStudents);
console.log(displayStudents);
instMembers.forEach((student) => {
  let display = displayStudents.find((f) => {
    
    if(f.innerText.includes(student.name)){
      // let newText = f.innerText.slice(0, f.innerText.lastIndexOf( ));
      f.innerText = `${student.section}`;
    }
  });
  
})