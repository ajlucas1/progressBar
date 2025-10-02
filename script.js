function progressBar(rootEl, percent, slider) {
  if (isNaN(percent)) {
    alert("Please enter a valid number");
    return;
  }
  let sliderEl;
  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");
  progressBar.setAttribute("role", "progressbar");
  progressBar.id = `progress-${percent}`;
  progressBar.setAttribute("aria-valuemin", 0);
  progressBar.setAttribute("aria-valuemax", 100);

  const progressAmount = document.createElement("div");
  progressAmount.classList.add("progress-bar--fill");
  progressBar.append(progressAmount);

  function setValue(value) {
    const min = 0;
    const max = 100;
    const cValue = Math.min(Math.max(value, min), max);
    progressBar.setAttribute("aria-valuenow", cValue);
    progressAmount.textContent = `${cValue}%`;
    progressAmount.style.width = `${cValue}%`;

    if (sliderEl) sliderEl.value = String(cValue);
    return cValue;
  }

  const initial = setValue(percent);

  if (slider) {
    sliderEl = document.createElement("input");
    sliderEl.setAttribute("type", "range");
    sliderEl.setAttribute("min", "0");
    sliderEl.setAttribute("max", "100");
    sliderEl.setAttribute("value", String(initial));
    rootEl.append(progressBar, sliderEl);

    sliderEl.addEventListener("input", (e) => {
      setValue(sliderEl.value);
    });
  } else {
    rootEl.append(progressBar);
  }

  return {
    setValue,
  };
}

const bar1 = progressBar(document.querySelector(".wrapper"), -1000, true);
bar1.setValue(30);
bar1.setValue(50);
