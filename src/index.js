import { hello } from ".to-do-functions.js"

hello()

// Selects all the page options
const homeButtons = document.querySelectorAll('.page')
// Main contents page display
const mainContents = document.querySelector('.contents-container')
// Tracks the amount of notifications for each page
let homeNotificationsCount = 0
const homeNotifications = document.querySelector('.home-notifications')
let todayNotificationsCount = 0
const todayNotifications = document.querySelector('.today-notifications')
let weekNotificationsCount = 0
const weekNotifications = document.querySelector('.week-notifications')
let notesNotificationsCount = 0
const notesNotifications = document.querySelector('.notes-notifications')

// Tracks which page is open
let currentPage = ''

// Changing the colour of the selected menu
document.addEventListener('click', (e) => {
    if (e.target.matches('.page')) {
        buttonActive(e.target)
        clearContents()   
    }
    // Displays the select page's contents
    if (e.target.matches('.home')) {
        currentPage = 'Home'
        showHomePage()
        
    } else if (e.target.matches('.today')) {
        currentPage = 'Today'
        showTodayPage()
        
    } else if (e.target.matches('.week')) {
        currentPage = 'Week'
        showWeekPage()
        
    } else if (e.target.matches('.projects')) {
        currentPage = 'Projects'
        showProjectPage() 
        
    } else if (e.target.matches('.notes')) {
        currentPage = 'Notes'
        showNotesPage()
        
    }
})

// Updates the styling on the sidebar options
function buttonActive(target) {
    homeButtons.forEach(button => {
        button.style.color = 'rgb(141, 141, 141)'
        target.style.color = 'black'
    });   
}

// Removing every child of an array
function clearContents() {
    const contentElements = document.querySelector('.contents-container')            
    while (contentElements.firstChild) {
        contentElements.removeChild(contentElements.lastChild)
  }
}

// Displays the selected content page
function showHomePage() {
    displayTitle()
    for (let i = 0; i < homeToDo.length; i++) {
        homeNotificationsCount++
        createHomeToDo(homeToDo[i].title, homeToDo[i].details, homeToDo[i].dueDate, homeToDo[i].priority, homeToDo[i].completed)
        homeNotifications.textContent = homeNotificationsCount.toString()
    }
}

function showTodayPage() {
    displayTitle()
}

function showWeekPage() {
    displayTitle()
}

function showProjectPage() {
    displayTitle()
}

function showNotesPage() {
    displayTitle()
}

function displayTitle() {
    const header = document.createElement('div')
    header.classList.add('header')
    header.textContent = currentPage
    mainContents.append(header)
}

const popUpContainer = document.querySelector('.pop-up-container')
const popUpDisplay = document.querySelector('.pop-up-display')

// Display the pop-up menu
function homeAddButton() {
    // const popUpContainer = document.querySelector('.pop-up-container')
    // const popUpDisplay = document.querySelector('.pop-up-display')
    popUpContainer.style.display = 'flex'
    popUpDisplay.style.display = 'flex'
}

// Removes the pop-up menu if pressed outside of box
document.addEventListener('click', (e) => {
    if (e.target.matches('.pop-up-container')) {
        popUpContainer.style.display = 'none'
        popUpDisplay.style.display = 'none'
    }
})

function closePopUp() {
    popUpContainer.style.display = 'none'
    popUpDisplay.style.display = 'none'
}

let homeToDo = [
    {
        title: "Pay Bills",
        details: "Rent due (£1,750)",
        dueDate: "31/08/2024",
        priority: "High",
        completed: true
    },
    {
        title: "Pick up birthday bits",
        details: "Party hats, balloons and cake",
        dueDate: "25/09/2024",
        priority: "Medium",
        completed: false
    },
    {
        title: "Finish report",
        details: "Finance report for Mr. Smith showing market trends",
        dueDate: "31/10/2024",
        priority: "Low",
        completed: false
    }
]

function createHomeToDo(title, details, dueDate, priority, completed) {
    const toDoContainer = document.createElement('div')
    const checkBox = document.createElement('input')
    const toDo = document.createElement('div')
    const date = document.createElement('div')
    const importance = document.createElement('div')
    const detailsButton = document.createElement('div')
    const deleteButton = document.createElement('button')

    toDoContainer.classList.add('to-do-container')
    checkBox.setAttribute("type", "checkbox")
    toDo.textContent = title
    toDo.classList.add('to-do')
    date.textContent = dueDate
    importance.textContent = priority
    
    mainContents.append(toDoContainer)
    toDoContainer.append(checkBox)
    toDoContainer.append(title)
    toDoContainer.append(detailsButton)
    toDoContainer.append(date)
    toDoContainer.append(importance)
    toDoContainer.append(deleteButton)
}

