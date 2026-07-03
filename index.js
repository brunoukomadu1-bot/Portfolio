// let firstName = "kim" ;
// let lastName = "Jhon" ;
// let fullname = firstName + lastName ;
// console.log("my fullname is",fullname)

// let person = {
//     firstName: "Jhon",
//     lastName: "Stephen",
//     age: 20,
//     gender: "Male",
// };
// console.log(person)
// console.log(person.firstName)
// console.log(person.age)

// let book = {
//     author :{
//         Name: "Emman Jons",
//         country: "Cameroon",
//         gender: "Male",
//     },
//     title: "Learn to code",
//     Published: "2018",
// }
// console.log(book)
// console.log("bookauthor", book.author)
// console.log("authorname:", book.author.Name)

// let student = {
//     "name": "Paul",
//     "class": "three",
//     "school":{
//         "Name":"G.H.S",
//         "Location": "limbe",

//     }
// }
// console.log(student)

// let kingblack = {
//     "courses" : {
//         "programing": "1year",
//         "digitalmarketing": "10months"
//     }
// }
// console.log(kingblack)

// Functions
// function helloWorld() {
//     let text ="hello World"
//     console.log(text)
// }

// helloWorld()

// function four() {
//     let number = 4
//     console.log(number)
// }

// four()

// function add

const data = [
  {
    liveUrl: 'https://bruno-counter.netlify.app/',
    sourseUrl: 'https://github.com/brunoukomadu1-bot/js-todo',
    img: 'images/Todo.png',
    name: 'Todo app',
    desc: `conquer your day, one task at a time. Streamline your workflow, set reminders, and crush your goals with todo app`,
  },
  {
    liveUrl: 'https://bruno-todo-list.netlify.app/',
    sourseUrl: 'https://github.com/brunoukomadu1-bot/Counter-app',
    img: 'images/Counter.png',
    name: 'Java script counter',
    desc: `From 0-10 with just a press`,
  },
  {
    liveUrl: 'https://brunosearch.netlify.app/',
    sourseUrl: 'https://github.com/brunoukomadu1-bot/Search-site',
    img: 'images/search section.png',
    name: 'Search Section',
    desc: `Search anything you wish`,
  },
  {
    liveUrl: 'https://bruno-weather-app.netlify.app/',
    sourseUrl: 'https://github.com/brunoukomadu1-bot/Weather-App.git',
    img: 'images/weather app.png',
    name: 'Weather App',
    desc: `Your daily weather simplified. See if it'll rain, how it gets and when it stops. Its fast and clean, no stress`,
  },
  {
    liveUrl: 'https://bruno-toast-notification.netlify.app/',
    sourseUrl: 'https://github.com/brunoukomadu1-bot/Toast-Notification.git',
    img: 'images/toast-notification.png',
    name: 'Toast notification',
    desc: `Clean, responsive alerts at your fingertips. Deliver instant, elegant user feedback for actions like successful saves, form errors, or system updates without disrupting the workflow.`,
  },
  {
    liveUrl: 'https://bruno-toast-notification.netlify.app/',
    sourseUrl: 'https://github.com/brunoukomadu1-bot/Quote_Generator-app.git',
    img: 'images/Quote-generator.png',
    name: 'Quote Generator',
    desc: `Inspire your day with a click. Generate random quotes to uplift, motivate, and spark creativity. Perfect for daily inspiration or sharing wisdom with friends.`,
  },
  
];

const name = document.querySelector(".project-title")
const desc = document.querySelector("#desc")
console.log(name)



// function getData() {
 
//   const detailUrls = data.map((item)=>{
//     let detailUrl = item.detailUrl
//     // console.log(item)
//     return detailUrl
//   })
//   console.log(detailUrls)
//   return detailUrls
// }
// getData()

function geturl() {
  const liveUrls = data.map((T)=>{
    let liveUrl = T.liveUrl
    return liveUrl
  })
  console.log(liveUrls)
  return liveUrls
}
geturl()

function getimg() {
  const getimgs = data.map((I)=>{
    let img = I.img
    return img
  })
  console.log(getimgs)
  return getimgs
}
getimg()

function getname(){
  const getnames = data.map((N)=>{
    let name = N.name
    return name
  })
  console.log(getnames)
  return getname
}
getname()


function getskill(){
  const getskills = data.map((R)=>{
    let skill = R.skill
    return skill
  })
  console.log(getskills)
  return getskill
}
getskill()


function getseeLiveIcon(){
  const getseeLiveIcons = data.map((L)=>{
    let seeLiveIcon = L.seeLiveIcon
    return seeLiveIcon
  })
  console.log(getseeLiveIcons)
  return getseeLiveIcon
}
getseeLiveIcon()

function getseeSourceIcon() {
  const getseeSourceIcons = data.map((A)=>{
    let seeSourceIcon = A.seeSourceIcon
    return seeSourceIcon
  })
  console.log(getseeSourceIcons)
  return getseeSourceIcon
}
getseeSourceIcon()


function getmobilePopUpClose(){
  const getmobilePopUpCloses = data.map((P)=>{
    let mobilePopUpClose =P.mobilePopUpClose
    return mobilePopUpClose
  })
  console.log(getmobilePopUpCloses)
  return getmobilePopUpClose
}
getmobilePopUpClose()


function getdesc(){
  const getdescs = data.map((D)=>{
    let desc = D.desc
    return desc
  })
  console.log(getdescs)
  return getdesc
}
getdesc()

function gettechnologies(){
  const gettechnologies = data.map((G)=>{
    let technologies = G.technologies
    return technologies 
  })
  console.log(gettechnologies)
  return gettechnologies
}
gettechnologies()

function getsourseUrl(){
  const getsourseUrls = data.map((C)=>{
    let sourseUrl = C.sourseUrl
    return sourseUrl
  })
  console.log(getsourseUrls)
  return getsourseUrl
}
getsourseUrl()



//-------------------------------------------------------------DISPLAY PROJECTS

function displayProjects(projects) {
  const container = document.querySelector('.cards-container');
  if (!container) return;
  
  container.innerHTML = ''; // clear existing cards
  
  const projetstToDisplay = projects.map(project => {
     const liveBtn = project.liveUrl 
      ? `<a class="sourceurl" href="${project.liveUrl}" target="_blank">
           <button class="my-btn">Live</button>
         </a>`
      : '';
    const card = `<div class="card">
                <div class="card-img-container">
                    <img class="card-img" src="${project.img}" alt="${project.name}">
                </div>
                <div class="card-content">
                    <h3 class="project-title">${project.name}</h3>
                    <p class="desc">${project.desc}</p>
                </div>
                <!-- TO DO BUTTON -->
                 <div class="btn">
                    <a class="sourceurl" href="${project.sourseUrl}">
                    <button class="my-btn">github</button>
                    </a>
                    ${liveBtn}
                </div>
           </div>`
           return card;
  });
console.log('projects', projetstToDisplay)
  container.innerHTML = projetstToDisplay;
}
displayProjects(data)