const theme = async(from) => {
    await ui("theme", from);
  };
  
  const mode = () => {
    let newMode = ui("mode") == "dark" ? "light" : "dark";
    ui("mode", newMode);
    localStorage.setItem('mode', newMode);
  }
  
  // On page load, check for saved mode and apply it
  document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      ui("mode", savedMode);
    }
  });
  