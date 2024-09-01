const total = document.getElementById("total");
const adults = document.getElementById("adults");
const children = document.getElementById("children");
const baby = document.getElementById("baby");
const inputsWrapper = document.querySelectorAll(
  ".heroCalendar__dropdown-item-input"
);

const dropdown = document.querySelector(".heroCalendar__dropdown");
const dropdownBtn = document.querySelector(".heroCalendar__dropdown-title");
const dropdownContent = document.querySelector(
  ".heroCalendar__dropdown-content"
);
if (dropdown) {
  dropdownBtn.onclick = () => {
    dropdownContent.classList.toggle("active");
    dropdownBtn.classList.toggle("active");
  };

  inputsWrapper.forEach((item) => {
    const minusBtn = item.querySelector(".minus");
    const plusBtn = item.querySelector(".plus");
    const input = item.querySelector("input");
    if (input.value <= 0) {
      minusBtn.disabled = true;
    }
    minusBtn.onclick = () => {
      if (input.value <= 0 || (input.id === "adults" && input.value <= 1)) {
        minusBtn.disabled = true;
      } else {
        input.value--;
        if (
          parseInt(adults.value) === 0 &&
          parseInt(children.value) + parseInt(baby.value) !== 0
        ) {
          total.value =
            adults.value +
            " dospělí " +
            (parseInt(children.value) + parseInt(baby.value)) +
            " dítě";
        } else if (
          parseInt(adults.value) !== 0 &&
          parseInt(children.value) + parseInt(baby.value) === 0
        ) {
          total.value =
            adults.value +
            " dospělí " +
            (parseInt(children.value) + parseInt(baby.value)) +
            " dítě";
        } else if (
          parseInt(adults.value) !== 0 &&
          parseInt(children.value) + parseInt(baby.value) !== 0
        ) {
          total.value =
            adults.value +
            " dospělí " +
            (parseInt(children.value) + parseInt(baby.value)) +
            " dítě";
        } else {
          total.value = "2 dospělí 0 dítě";
        }
        if (input.value <= 0) {
          minusBtn.disabled = true;
        }
      }
    };
    plusBtn.onclick = () => {
      input.value++;
      minusBtn.disabled = false;
      if (
        parseInt(adults.value) === 0 &&
        parseInt(children.value) + parseInt(baby.value) !== 0
      ) {
        total.value =
          adults.value +
          " dospělí " +
          (parseInt(children.value) + parseInt(baby.value)) +
          " dítě";
      } else if (
        parseInt(adults.value) !== 0 &&
        parseInt(children.value) + parseInt(baby.value) === 0
      ) {
        total.value =
          adults.value +
          " dospělí " +
          (parseInt(children.value) + parseInt(baby.value)) +
          " dítě";
      } else if (
        parseInt(adults.value) !== 0 &&
        parseInt(children.value) + parseInt(baby.value) !== 0
      ) {
        total.value =
          adults.value +
          " dospělí " +
          (parseInt(children.value) + parseInt(baby.value)) +
          " dítě";
      } else {
        total.value = "2 dospělí 0 dítě";
      }
    };
  });
}
const HeroCalendarWrapper = document.getElementById("heroCalendar__wrapper");
const checkIn = document.getElementById("checkin");
const checkout = document.getElementById("checkout");

// easypick calendar start
const picker = new easepick.create({
  element: "#checkin",
  css: ["css/main.css"],
  zIndex: 10,
  format: "DD.MM.YYYY",
  grid: 2,
  calendars: 1,
  lang: "cs-CZ",
});
const picker2 = new easepick.create({
  element: "#checkout",
  css: ["css/main.css"],
  zIndex: 10,
  format: "DD.MM.YYYY",
  grid: 2,
  calendars: 1,
  lang: "cs-CZ",
});
const HeroCalendar = document.getElementById("heroCalendar");
// easypick calendar end

if (HeroCalendarWrapper) {
  window.addEventListener("click", () => {
    if (picker.isShown()) {
      HeroCalendarWrapper.classList.add("active");
      checkIn.parentElement.classList.add("active");
    } else {
      HeroCalendarWrapper.classList.remove("active");
      checkIn.parentElement.classList.remove("active");
    }
    if (picker2.isShown()) {
      HeroCalendarWrapper.classList.add("new");
      checkout.parentElement.classList.add("active");
    } else {
      HeroCalendarWrapper.classList.remove("new");
      checkout.parentElement.classList.remove("active");
    }
  });
}
