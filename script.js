document.getElementById("toggleWeekBtn").addEventListener("click", function () {
  const evenWeekElements = document.querySelectorAll(".even-week");
  const oddWeekElements = document.querySelectorAll(".odd-week");
  const commonWeekElements = document.querySelectorAll(".common-week");

  // Get current state from the display text
  const currentWeekText = document.getElementById("currentWeek").textContent;
  const isEvenWeek = currentWeekText.includes("Парний");

  // Toggle visibility
  evenWeekElements.forEach((el) => {
    el.style.display = isEvenWeek ? "none" : "block";
  });

  oddWeekElements.forEach((el) => {
    el.style.display = isEvenWeek ? "block" : "none";
  });

  // Common week elements are always visible
  commonWeekElements.forEach((el) => {
    el.style.display = "block";
  });

  // Update button text and current week display
  this.textContent = isEvenWeek
    ? "Перемкнути на парний тиждень"
    : "Перемкнути на непарний тиждень";

  document.getElementById("currentWeek").textContent = isEvenWeek
    ? "Наразі ви переглядаєте: Непарний тиждень"
    : "Наразі ви переглядаєте: Парний тиждень";
});

// Function to format the date in "1 вересня. неділя"
function formatDate(date) {
  const days = [
    "неділя",
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п'ятниця",
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

// Initial setup when page loads
window.addEventListener("load", function () {
  const evenWeekElements = document.querySelectorAll(".even-week");
  const oddWeekElements = document.querySelectorAll(".odd-week");
  const commonWeekElements = document.querySelectorAll(".common-week");

  // Show even week by default
  evenWeekElements.forEach((el) => (el.style.display = "block"));
  oddWeekElements.forEach((el) => (el.style.display = "none"));
  commonWeekElements.forEach((el) => (el.style.display = "block"));

  // Default display message for even week
  document.getElementById("currentWeek").textContent =
    "Наразі ви переглядаєте: Парний тиждень";

  // Set the current date
  document.getElementById("currentDate").textContent = formatDate(new Date());
});

function toggleStudentList(groupId) {
  const list = document.getElementById(groupId);
  const allLists = document.querySelectorAll(".student-list");

  // Hide all other lists first
  allLists.forEach((item) => {
    if (item.id !== groupId) {
      item.style.display = "none";
    }
  });

  // Toggle the clicked list
  list.style.display = list.style.display === "block" ? "none" : "block";
}

// Close lists when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("student-list-icon")) {
    document.querySelectorAll(".student-list").forEach((list) => {
      list.style.display = "none";
    });
  }
});
