const homeBtn = document.getElementById("homeBtn");
const mondayBtn = document.getElementById("monday");
const tuesdayBtn = document.getElementById("tuesday");
const wednesdayBtn = document.getElementById("wednesday");
const thursdayBtn = document.getElementById("thursday");
const fridayBtn = document.getElementById("friday");
const saturdayBtn = document.getElementById("saturday");
const sundayBtn = document.getElementById("sunday");
const mealBtn = document.getElementsByClassName("mealBtn");
const breakfastBtn = document.getElementById("breakfastBtn");
const lunchBtn = document.getElementById("lunchBtn");
const dinnerBtn = document.getElementById("dinnerBtn");
const mealBtnContainer = document.querySelector(".mealBtnContainer");
const breakfastMeal = document.getElementById("breakfastMeal");
const lunchMeal = document.getElementById("lunchMeal");
const dinnerMeal = document.getElementById("dinnerMeal");

if (homeBtn) {
  homeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

if (mondayBtn) {
  mondayBtn.addEventListener("click", () => {
    window.location.href = "monday.html";
  });
}

if (tuesdayBtn) {
  tuesdayBtn.addEventListener("click", () => {
    window.location.href = "tuesday.html";
  });
}

if (wednesdayBtn) {
  wednesdayBtn.addEventListener("click", () => {
    window.location.href = "wednesday.html";
  });
}

if (thursdayBtn) {
  thursdayBtn.addEventListener("click", () => {
    window.location.href = "thursday.html";
  });
}

if (fridayBtn) {
  fridayBtn.addEventListener("click", () => {
    window.location.href = "friday.html";
  });
}

if (saturdayBtn) {
  saturdayBtn.addEventListener("click", () => {
    window.location.href = "saturday.html";
  });
}

if (sundayBtn) {
  sundayBtn.addEventListener("click", () => {
    window.location.href = "sunday.html";
  });
}

function showMeal(mealId) {
  const meals = ["breakfastMeal", "lunchMeal", "dinnerMeal"];
  const mealBtns = [breakfastBtn, lunchBtn, dinnerBtn];

  // Slide buttons out to the left
  mealBtns.forEach((btn) => {
    btn.style.transform = "translateX(0)"; // reset position
    btn.classList.add("slide-out-left");
  });

  setTimeout(() => {
    mealBtnContainer.style.display = "none"; // hide the container

    meals.forEach((id) => {
      const meal = document.getElementById(id);
      if (!meal) return;

      if (id === mealId) {
        meal.style.display = "block";
        meal.classList.add("slide-in-right");
      } else {
        meal.style.display = "none";
        meal.classList.remove("slide-in-right");
      }
    });
  });
}

if (breakfastBtn) {
  breakfastBtn.addEventListener("click", () => {
    showMeal("breakfastMeal");
  });
}
