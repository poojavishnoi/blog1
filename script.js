
const moonPath = "M76 131.5C76 203.021 128.055 260.966 131 261C60.8598 261 4 203.021 4 131.5C4 59.9791 60.8598 0.499939 131 0.499939C133.053 0.499939 76 59.9791 76 131.5Z";
const sunPath = "M258 129.5C258 201.021 201.14 259 131 259C60.8598 259 4 201.021 4 129.5C4 57.9791 60.8598 0 131 0C201.14 0 258 57.9791 258 129.5Z"

const darkMode = document.querySelector("#darkmode");
let toggle = false;

darkMode.addEventListener("click", () => {
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });
    timeline.add({
        targets: ".sun",
        d: [
            { value: toggle ? sunPath : moonPath }
        ]

    })
        .add({
            targets: "#darkmode",
            rotate: toggle ? -5 : 320
        }, '-= 700')
        .add({
            targets: "div",
            backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
            color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)",
        }, '-= 2000')
        .add({
          targets: "nav",
          backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
          color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)",
      }, '-= 2000')
      .add({
        targets: "p",
        color: toggle ? "rgb(68, 68, 68)" : "rgb(156, 156, 156)",
    }, '-= 2000')


    if (!toggle) {
        toggle = true
    } else {
        toggle = false
    }
})

rgb(156, 156, 156)