const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

const prevButton = document.getElementById("prev-btn");
const monthYear = document.getElementById("month-year");
const nextButton = document.getElementById("next-btn");
const calendarBody = document.getElementById("calendar-body");

prevButton.addEventListener("click", showPreviousMonth);
nextButton.addEventListener("click", showNextMonth);

showCalendar(currentMonth, currentYear);

function showCalendar(month, year) {
    calendarBody.innerHTML = "";
    monthYear.textContent = `${monthNames[month]} ${year}`
    const firstDay = new Date(year, month, 1);
    const startingDay = firstDay.getDay(); //if firstDay is Sat then startingDay is 6   
    // Get the number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let date = 1;
    for (let row = 0; row < 6; row++) {
        const tr = document.createElement("tr");

        for (let col = 0; col < 7; col++) {
            if (row == 0 && col < startingDay) { //add empty td in this case
                const td = document.createElement("td");
                tr.appendChild(td);
            }
            else if (date > daysInMonth) {
                break;
            }
            else { //normal date filling
                const td = document.createElement("td");
                td.textContent = date;
                tr.appendChild(td);

                // Highlight the current date
                if (date === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
                    td.classList.add("current-date");
                }
                date++;
            }
        }
        calendarBody.appendChild(tr);
    }
}

function showPreviousMonth() {
    currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function showNextMonth() {
    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    currentMonth = currentMonth == 11 ? 0 : currentMonth + 1;
    showCalendar(currentMonth, currentYear);
}
