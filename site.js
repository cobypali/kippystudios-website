document.querySelectorAll(".video-poster").forEach((button) => {
  button.addEventListener("click", () => {
    const shell = button.closest(".video-shell");
    const frame = document.createElement("iframe");
    frame.src = `https://www.youtube-nocookie.com/embed/${shell.dataset.video}?autoplay=1`;
    frame.title = `${shell.dataset.title} — video player`;
    frame.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    shell.replaceChildren(frame);
    frame.focus();
  });
});

// Center John in the mobile scrolling lineup without animating it.
const lineup = document.querySelector(".ensemble-viewport");
if (lineup) {
  const centerLineup = () => {
    if (matchMedia("(max-width: 700px)").matches)
      lineup.scrollLeft = (lineup.scrollWidth - lineup.clientWidth) / 2;
  };
  const image = lineup.querySelector("img");
  if (image.complete) centerLineup();
  else image.addEventListener("load", centerLineup, { once: true });
  window.addEventListener("resize", centerLineup);
}
