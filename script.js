function progressBar(rootEl, percent, slider) {
  if (isNaN(percent)) {
    alert("Please enter a valid number");
    return;
  }

  const min = 0;
  const max = 100;
  const value = Math.min(Math.max(percent, min), max);

  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");
  progressBar.setAttribute("role", "progressbar");
  progressBar.id = `progress-${percent}`;
  progressBar.setAttribute("aria-valuemin", 0);
  progressBar.setAttribute("aria-valuemax", 100);
  progressBar.setAttribute("aria-valuenow", value);

  const progressAmount = document.createElement("div");
  progressAmount.classList.add("progress-bar--fill");
  progressAmount.textContent = `${value}%`;
  progressAmount.style.width = `${value}%`;

  progressBar.append(progressAmount);

  if (slider) {
    const sliderEl = document.createElement("input");
    sliderEl.setAttribute("type", "range");
    sliderEl.setAttribute("min", "0");
    sliderEl.setAttribute("max", "100");
    sliderEl.setAttribute("value", `${value}`);
    rootEl.append(progressBar, sliderEl);

    sliderEl.addEventListener("input", (e) => {
      progressAmount.style.width = `${sliderEl.value}%`;
      progressBar.setAttribute("aria-valuenow", `${sliderEl.value}`);
      progressAmount.textContent = `${sliderEl.value}%`;
    });
  } else {
    rootEl.append(progressBar);
  }
}

progressBar(document.querySelector(".wrapper"), -1000, true);
