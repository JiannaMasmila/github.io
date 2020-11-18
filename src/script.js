gsap.registerPlugin(GSDevTools, SplitText);

const hoverBox = document.getElementById("hoverBox");
const hoverMe = document.getElementById("hoverme");

//set defalt easing
gsap.defaults({ ease: "back.out(1.4)" });

//set transformOrigin & scale 0 & rotation
setScaleZero = (name, x, y, rotate) => {
  gsap.set(`${name}`, {
    transformOrigin: `${x}% ${y}%`,
    scale: 0,
    rotate: rotate
  });
};

//right pine
setScaleZero("#right-pine-big", 0, 90, 30);
gsap.set("#right-pine-small", {
  transformOrigin: "0% 40%",
  scale: 0,
  rotate: 40,
  x: -50,
  y: 10
});

//center branch
setScaleZero("#center-branch-big", 20, 95, -50);

//feathers
setScaleZero("#feather_2", 120, 0, -60); //btm right
setScaleZero("#feather_4", 140, 50, -70); //btm left
setScaleZero("#feather_3", 120, 140, -100); //top left
setScaleZero("#feather_5", 80, 120, -110); //top middle
setScaleZero("#feather_1", 70, 100, -100); //top right

//bird
setScaleZero("#bird", 20, 100, -100);

//left branches
setScaleZero("#left-branch", 100, 90, -100);
setScaleZero("#left-pine", 70, 120, -100);

//red berries
setScaleZero("#red_mi", 0, 50, -150);

//leaves
setScaleZero("#leaf_1", 90, 80, -60);
setScaleZero("#leaf_2", 30, 10, -50);
setScaleZero("#leaf_3", 20, 80, -40);
setScaleZero("#leaf_4", 70, 10, -50);

//top branch
setScaleZero("#top-branch-f1", 100, 60, 30);
setScaleZero("#top-branch-f2", 50, 70, 30);
setScaleZero("#top-branch-f3", 70, 25, -30);

//text split
const mySplitText = new SplitText("#letter", { type: "chars" });

//set text position
gsap.set(mySplitText.chars, {
  transformOrigin: "center center",
  yPercent: 100
});

//main animation timeline
const AnimationTL = gsap.timeline({
  paused: true
});

AnimationTL.to("#center-branch", { rotate: 15, duration: 1.7 })
  .to("#leaf_1", { scale: 1, rotate: 0, duration: 1.1 }, 0.1)
  .to("#leaf_2", { scale: 1, rotate: 0, duration: 1.3 }, 0.2)
  .to("#leaf_3", { scale: 1, rotate: 0, duration: 1.3 }, 0.1)
  .to("#leaf_4", { scale: 1, rotate: 0, duration: 1.2 }, 0.1)
  .to("#feather_2", { scale: 1, rotate: 0, duration: 1.2 }, 0.2)
  .to("#feather_4", { scale: 1, rotate: 0, duration: 1.4 }, 0.4)
  .to("#feather_3", { scale: 1, rotate: 0, duration: 1.2 }, 0.3)
  .to("#feather_5", { scale: 1, rotate: 0, duration: 1.2 }, 0.4)
  .to("#feather_1", { scale: 1, rotate: 0, duration: 1.3 }, 0.4)
  .to("#red_mi", { scale: 1, rotate: 0, duration: 1.9 }, 0.6)
  .to("#left-branch", { scale: 1, rotate: 0, duration: 1.5 }, 0.5)
  .to("#left-pine", { scale: 1, rotate: 0, duration: 1.3 }, 0.4)
  .to("#center-branch-big", { scale: 1, rotate: 0, duration: 1.3 }, 0.4)
  .to("#right-pine-big", { scale: 1, rotate: 0, duration: 1.3 }, 0.5)
  .to(
    "#right-pine-small",
    { scale: 1, rotate: 0, x: 0, y: 0, duration: 1.1 },
    0.85
  )
  .to("#bird", { scale: 1, rotate: 0, duration: 1.6 }, 0.5)
  .to(
    "#top-branch-cover",
    { scaleX: 0, transformOrigin: "left", duration: 2 },
    0.5
  )
  .to("#top-branch-f3", { scale: 1, rotate: 0, duration: 1.5 }, 0.9)
  .to("#top-branch-f2", { scale: 1, rotate: 0, duration: 1.7 }, 1.2)
  .to("#top-branch-f1", { scale: 1, rotate: 0, duration: 1.7 }, 1.4)
  .to(
    mySplitText.chars,
    {
      duration: 1.1,
      yPercent: 0,
      stagger: {
        each: 0.1
      }
    },
    0.5
  );

//hover actions
hoverBox.addEventListener("mouseover", () => {
  AnimationTL.play();
  hoverMe.style.display = "none";
});

hoverBox.addEventListener("mouseleave", () => {
  AnimationTL.reverse();
  hoverMe.style.display = "block";
});

//loader
window.addEventListener("load", () => {
  gsap.to(".loader", {
    transformOrigin: "left bottom",
    rotate: -100,
    duration: 2,
    ease: "sine.in",
    stagger: {
      each: 0.3,
      from: "end"
    }
  });
});

//GSAP DevTool
// GSDevTools.create({animation:AnimationTL, globalSync:false});
