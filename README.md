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

## Local turnaround revision awaiting final media

The homepage title now pads each filled-gold word by 0.08em horizontally. Negative letter spacing previously let the Y ink overhang its painted background box by 1.95–3.59 CSS pixels; the added paint area contains the whole glyph without changing the gold palette, font size, tracking, line height, or shadow treatment.

The Humster hero has a stable media box with the approved still visible. No animation source is configured yet. Once the parent supplies and approves the final furry Humster loop and matching transparent poster, configure the exact optimized source paths and change `data-turnaround-approval` from `paused` to `approved-final` only after a new user instruction to resume. The approval gate keeps review/rejected media inactive. The circular decorative halo is now removed from the local static hero per the later 00:52 clarification; that backdrop-free layout will carry over if video work is resumed. Do not use a Mixamo asset. The model/coin/logo source remains untouched.

The prepared video is autoplay, muted, looped, and inline, with a pause/play control. Reduced motion retains the still without loading the video. Offscreen or background playback pauses. Unsupported media and rejected autoplay retain the still. Controller tests use mocked media events; actual decoding, file weight, loop seam, crop and cross-browser playback remain pending the final media asset. No commit, push, or deployment is authorized for this combined local revision yet.

## Pending asset direction — 2026-10-28

See `PENDING_ASSET_INTEGRATION.json` for the current integration contract. User direction: after the turnaround is approved, remove the hero's circular background and replace its still with the lightweight transparent loop. Retain pause/play, reduced-motion no-load still fallback, offscreen/background pause, transparent browser fallback, stable sizing, and the clipped-Y fix. This does not alter the coin/logo or still icons elsewhere.

The previous rejected turnaround and unapproved full-head v12 review are not authorized for final integration. Neither is configured. The final volumetric-lit With John ensemble is also pending: inspect its native master and make a tall, tightly framed, high-resolution responsive composition with the full cast/John, rather than reusing the skinny YouTube/LinkedIn row or blindly copying the old crop. Existing character sources remain placeholders until that approved final master is supplied.

No final source paths, poster, or ensemble replacement have been guessed. The current live site must remain unchanged until approved final assets and release authorization are supplied. No new public copy or unrelated design changes are part of this preparation.

## Turnaround paused by user — 2026-10-28 00:51 UTC

The user paused the turnaround for a later return. Keep the approved static Humster; do not activate video or publish this staged work. The later 00:52 clarification separately authorizes removing its decorative circle locally. The playback scaffold is retained behind `data-turnaround-approval="paused"` and requires a new user instruction before resumption. The clipped-Y fix and final volumetric-lit With John ensemble remain separate pending website items and are not canceled.

## Static hero backdrop clarification — 2026-10-28 00:52 UTC

Remove the circular decorative `.halo` behind the static hero now, while preserving the exact approved isolated Humster image, its appearance, and the page's navy/sapphire background. This is a local-only change combined with the retained clipped-Y fix. The video remains paused and has no sources configured. The volumetric-lit With John ensemble is still a separate pending asset. No publication is authorized by this clarification.

The user reconfirmed the character-cover replacement at 00:54 UTC. The latest PC wider-beam With John image is review resolution only and must not be substituted into the website. Await the parent-audited full-resolution final volumetric With John master; preserve the current image until it is supplied.

## Final volumetric ensemble and minimalist links — local review

The parent supplied the approved 7680×4320 With John volumetric v08 JPEG (Library `libfile_b4ab3ee9c9308191a7884f12f5b70162`). The homepage now uses responsive WebP derivatives at 1280–7680px, keeping the full native 16:9 composition, beams, entire cast and John. Original ensemble assets remain preserved. The 4K review/delivery copy was not upscaled. Source hash and derivative dimensions/bytes are in ASSET-MANIFEST.json.

Direct inspection of user screenshot `libfile_4b692280df348191a19e215eed002c8b` confirmed the rejected icon is ↗. All 46 decorative arrows are removed across Home, Our Work, Team and footers, including project thumbnail circles. Link destinations and accessible names remain intact; the hero button width contracts naturally. The approved Humster mark remains. These changes accompany the ringless static hero and Y fix; turnaround is paused with no video sources. This section supersedes the earlier pending-cover statements. Publication remains unauthorized.

## Publication approved — 2026-10-28 15:42 UTC

The user authorized publishing the prepared static ringless Humster, clipped-Y fix, all decorative northeast-arrow removals and final 8K volumetric With John responsive ensemble. Existing copy, navigation and team content remain unchanged. This approval supersedes the earlier local-only publication restrictions in this historical preparation log. Turnaround work remains paused; no media source is configured or loaded.
