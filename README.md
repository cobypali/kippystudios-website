# Kippy Studios Website

Static HTML/CSS/JavaScript site. No build step or runtime dependency is required.

## Local review

Run `python3 -m http.server 8765 --bind 127.0.0.1` from this directory, then open http://127.0.0.1:8765/.

Navigation contains Home, Our Work, and Team. Routes are `index.html`, `projects.html`, and `team.html`; the legacy `about.html` URL redirects to Team and includes a fallback link. Existing video, social, and profile/contact destinations are preserved.

The main tagline is the final user-selected sentence: “Premium animation for original stories and branded collaborations.” The brand title uses the static, filled metallic CSS treatment selected from the user's visual reference. No gold animation, transition, pulsing, moving reflection, or brightness effect is implemented. The former pale rendered title overlays remain preserved as unused assets; the approved Humster and coin source artwork is unchanged.

## Character image

The homepage ensemble is derived directly from `Foo_Ensemble_WithJohn_8K.png` (7680 × 4320), from the approved With John / Masters Drive folder. It is cropped to (240, 1250, 7480, 3850), preserving the cast with little empty space above and below. Responsive WebP derivatives run from 1280 to 7200 pixels wide. Retina desktop/mobile checks confirm sufficient source pixels for the rendered size. On narrow screens the image stays tall and horizontally scrollable, initially centered on John; every character remains accessible.

`ASSET-MANIFEST.json` records provenance, dimensions, sizes, hashes, and the completed legacy water-tower archive. Original repository images, models, and user files remain preserved.

## Validation

Checked all three pages at 1440/768/390/320px with 2× desktop and 3× mobile rendering, along with the legacy redirect, exact seven-person team roster/titles, links, image selection, video activation, no horizontal page overflow, and frame stability of the gold title. Axe WCAG A/AA desktop/mobile checks report no violations. Sources and original artwork are checked by SHA-256. Full check reports and review screenshots are kept in the task workspace.

## Publishing

The existing GitHub Pages setup publishes the repository root from `main` to https://kippystudios.com/. Releases use the established `main`-branch Pages workflow; no DNS, credential, or hosting-setting changes are required.
