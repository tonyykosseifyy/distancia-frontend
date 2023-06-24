function handleClickAfterDelay() {
  const button = document.getElementById("course-pills-tab-2");
  if (button) {
    button.click();
  } else {
    console.error("Button not found.");
  }
}

setTimeout(handleClickAfterDelay, 50);