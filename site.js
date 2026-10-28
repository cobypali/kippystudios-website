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
// Final assets must be supplied and explicitly approved before enabling the ringless hero.
// Pending/review sources never load, even if a URL is accidentally configured.
const humsterMedia = document.querySelector("[data-humster-turnaround]");
if (humsterMedia) {
  const video = humsterMedia.querySelector("video");
  const still = humsterMedia.querySelector("img");
  const toggle = humsterMedia.querySelector(".humster-motion-toggle");
  const formats = [
    [humsterMedia.dataset.turnaroundWebm, "video/webm"],
    [humsterMedia.dataset.turnaroundMp4, "video/mp4"],
  ].filter(([url]) => Boolean(url));
  const approvedFinal =
    humsterMedia.dataset.turnaroundApproval === "approved-final";
  if (video && still && toggle && formats.length && approvedFinal) {
    const stage = humsterMedia.closest(".humster-stage");
    if (stage) stage.dataset.approvedTurnaround = "true";
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let initialized = false;
    let visible = true;
    let userPaused = false;
    let failed = false;
    let playingFrame = false;
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;

    const showStill = () => {
      video.pause();
      video.hidden = true;
      still.hidden = false;
    };
    const updateButton = () => {
      toggle.textContent = video.paused ? "Play animation" : "Pause animation";
    };
    const attemptPlay = () => {
      if (
        failed ||
        reduced.matches ||
        userPaused ||
        !visible ||
        document.hidden
      )
        return;
      if (!initialized) {
        for (const [url, type] of formats) {
          const source = document.createElement("source");
          source.src = url;
          source.type = type;
          video.append(source);
        }
        initialized = true;
        video.load();
      }
      const playResult = video.play();
      if (playResult?.catch)
        playResult.catch(() => {
          // Browser autoplay restrictions retain the still and allow explicit play.
          if (!playingFrame) showStill();
          toggle.hidden = reduced.matches || failed;
          updateButton();
        });
    };
    const sync = () => {
      if (reduced.matches || failed) {
        showStill();
        toggle.hidden = true;
      } else if (!visible || document.hidden || userPaused) {
        video.pause();
        toggle.hidden = !initialized;
        updateButton();
      } else {
        attemptPlay();
      }
    };
    video.addEventListener("playing", () => {
      if (reduced.matches) return sync();
      playingFrame = true;
      video.hidden = false;
      still.hidden = true;
      toggle.hidden = false;
      updateButton();
    });
    video.addEventListener("pause", updateButton);
    video.addEventListener("error", () => {
      failed = true;
      showStill();
      toggle.hidden = true;
    });
    toggle.addEventListener("click", () => {
      userPaused = !video.paused;
      if (userPaused) video.pause();
      else attemptPlay();
      updateButton();
    });
    reduced.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    if ("IntersectionObserver" in window) {
      visible = false;
      new IntersectionObserver(
        ([entry]) => {
          visible = entry.isIntersecting;
          sync();
        },
        { threshold: 0.1 },
      ).observe(humsterMedia);
    } else {
      sync();
    }
  }
}
