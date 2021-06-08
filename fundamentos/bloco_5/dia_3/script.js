function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  function createDaysOfTheMonth () {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDays = document.querySelector("#days");

    for(let day of dezDaysList) {
      const dayOfMonth = document.createElement("li");
      dayOfMonth.innerHTML = day;

      monthDays.appendChild(dayOfMonth);

      dayOfMonth.classList.add("day")

      if(day === 24 || day === 25 || day === 31){
        dayOfMonth.classList.add("holiday");
      }

      if(day === 4 || day === 11 || day === 18 || day === 25){
        dayOfMonth.classList.add("friday");
      }
    }
  }

  createDaysOfTheMonth();

  function createButtonHoliday (buttonName) {
    let buttonHoliday = document.createElement("button");
    let buttonsContainer = document.querySelector(".buttons-container");
    
    buttonsContainer.appendChild(buttonHoliday);
    buttonHoliday.id = "btn-holiday";
    buttonHoliday.innerHTML = buttonName
  }

  createButtonHoliday("Feriados");

  let buttonHoliday = document.getElementById("btn-holiday");
  buttonHoliday.addEventListener("click", changeColorOfHolidays)
    function changeColorOfHolidays (){
    let holidays = document.getElementsByClassName("holiday")
    for(let holiday of holidays){
      if(holiday.style.backgroundColor === "black"){
        holiday.style.backgroundColor="rgb(238, 238, 238)"
      }else{
        holiday.style.backgroundColor="black"
      }
    }
  }

  function createButtonFriday (buttonName) {
    let buttonFriday = document.createElement("button");
    let buttonsContainer = document.querySelector(".buttons-container");
    buttonsContainer.appendChild(buttonFriday);
    buttonFriday.id = "btn-friday";
    buttonFriday.innerHTML = buttonName    
  }
  createButtonFriday("Sexta-feira");

  let buttonFriday = document.getElementById("btn-friday");
  
  buttonFriday.addEventListener("click", changeTextOfFridays)
  function changeTextOfFridays (){
    let fridays = document.getElementsByClassName("friday")
    for(let friday of fridays){
      if(friday.innerText === "SEXTOU"){
        friday.innerText= (friday.nextElementSibling.innerText -1)
      } else {
        friday.innerText = "SEXTOU"
      }
      }
  }
  
  let dias = document.getElementsByClassName("day")
  for(let dia of dias){
      dia.addEventListener("mouseover", zoom)
  }
  function zoom (event) {
    event.target.style.fontSize = "30px"
  }

   for(let dia of dias){
      dia.addEventListener("mouseleave", deszoom)
  }
  function deszoom (event) {
    event.target.style.fontSize = "20px"
  }

  function addNewTask (NewTask){
    let task = document.createElement("span");
    let mytasks = document.querySelector(".my-tasks")
    mytasks.appendChild(task);
    task.innerHTML=NewTask
  }

  addNewTask ("Cozinhar");

  function addCaption (cor) {
    let caption = document.createElement("div");
    let mytasks = document.querySelector(".my-tasks")
    mytasks.appendChild(caption);
    caption.id = "caption"
    caption.style.backgroundColor=cor
  }

  addCaption("yellow");

  function taskSelected () {
    let caption = document.getElementById("caption");
    caption.addEventListener("click", addClassTaskSelected)
      function addClassTaskSelected (){
        caption.classList.add("task")
        if(caption.classList.contains("selected") === true){
          caption.classList.remove("selected")
        }else{
          caption.classList.add("selected")
        }
    }
  }

  taskSelected ();

  function changeColorOfTheDay (){
    let days = document.getElementsByClassName("day");
    for(let day of days){
      day.addEventListener("click", changeColor)
      function changeColor (event) {
        let selected = document.getElementsByClassName("selected")
        if(selected.length === 0){
          return
        }
        if(event.target.style.color === selected[0].style.backgroundColor){
          event.target.style.color = "rgb(119,119,119)"
        } else {
          event.target.style.color = "yellow"
        }
      }
    }
  }

  changeColorOfTheDay();

  

    
