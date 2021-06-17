//Pick a random theme
function randomTheme(number) {
  var theme;
  console.log(hideable);
  //Theme text element is created
  var themeText = document.createElement("strong");
  themeText.id = "theme";
  themeText.style.display = "block";
  //Selects a random theme. If the argument passed is 101, it selects themes 5-9 at random. Else, it selects themes 1-5 at random.
  //More information on the themes can be found in the stylesheets repository.
  if(number === 101)
    theme = Math.floor(Math.random() * 5) + 5;
  else
    theme = Math.floor(Math.random() * 5) + 1;
  switch (theme) {
    case 1:
      themeText.innerHTML = "Brought to you by the moss green theme.";
      break;
    case 2:
      themeText.innerHTML = "Brought to you by the blue theme.";
      break;
    case 3:
      themeText.innerHTML = "Brought to you by the violet theme.";
      break;
    case 4:
      themeText.innerHTML = "Brought to you by the <a style='text-decoration:none;' href='https://youtu.be/GZpMy-pW7_8' target='_blank'>sand</a> theme.";
      break;
    case 5:
      themeText.innerHTML = "Brought to you by the gray theme.";
      break;
    case 6:
      themeText.innerHTML = "Brought to you by the slate green theme.";
      break;
    case 7:
      themeText.innerHTML = "Brought to you by the purple theme.";
      break;
    case 8:
      themeText.innerHTML = "Brought to you by the hot & dry theme.";
      break;
    case 9:
      themeText.innerHTML = "Brought to you by the yellow-green theme.";
      break;
    default:
      themeText.innerHTML = "Brought to you by the black theme.";
  }
  hideable.appendChild(themeText);
  //Applies the theme to the document.
  document.body.className = "theme" + theme.toString();
  console.log("Theme " + theme);
}

//Add an event listener to make the hideable element hideable with the "B" key. Does not work on mobile.
window.addEventListener("keyup", function (event) {
  if (event.keyCode === 66) {
    event.preventDefault();
    //Hides the element
    if (hideable.style.display !== "none")
      hideable.style.display = "none";
    //Unhides the element if the display type is "none"
    else
      hideable.style.display = "block";
  }
});
