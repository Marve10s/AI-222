document.getElementById("toggleWeekBtn").addEventListener("click", function () {
  const oddWeekElements = document.querySelectorAll(".odd-week");
  const evenWeekElements = document.querySelectorAll(".even-week");
  const isOddWeekVisible = oddWeekElements[0].style.display !== "none";

  // Toggle visibility of odd and even week containers
  oddWeekElements.forEach(
    (el) => (el.style.display = isOddWeekVisible ? "none" : "block")
  );
  evenWeekElements.forEach(
    (el) => (el.style.display = isOddWeekVisible ? "block" : "none")
  );

  // Change button text
  this.textContent = isOddWeekVisible
    ? "Перемкнути на непарний тиждень"
    : "Перемкнути на парний тиждень";

  // Update current week display
  document.getElementById("currentWeek").textContent = isOddWeekVisible
    ? "Наразі ви переглядаєте: Парний тиждень"
    : "Наразі ви переглядаєте: Непарний тиждень";
});

// Function to format the date in "1 вересня. неділя"
function formatDate(date) {
  const days = [
    "неділя",
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п’ятниця",
    "субота",
  ];
  const months = [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const dayOfWeek = days[date.getDay()];

  return `${day} ${month}. ${dayOfWeek}`;
}

// Display the current date
window.addEventListener("load", function () {
  const evenWeekElements = document.querySelectorAll(".even-week");
  evenWeekElements.forEach((el) => (el.style.display = "none"));

  // Default display message
  document.getElementById("currentWeek").textContent =
    "Наразі ви переглядаєте: Непарний тиждень";

  // Set the current date
  document.getElementById("currentDate").textContent = formatDate(new Date());
});
