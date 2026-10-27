# Kippy Studios Website

Static HTML/CSS/JavaScript site for Kippy Studios. No build step or runtime dependency is required.

## Local review

From this directory, run `python3 -m http.server 8765 --bind 127.0.0.1`, then open http://127.0.0.1:8765/.

Routes: `index.html` (home), `about.html` (studio), `projects.html` (originals), and `team.html` (team). Original routes remain available. Video players load only when a visitor selects Play Film; existing watch links remain available. Social links work without JavaScript or WebGL. Expandable biographies use native HTML details controls. Fonts fall back to Arial if Google Fonts is unavailable.

## Brand assets

`assets/` contains optimized WebP derivatives of the approved Facecap Humster logo render and final physically rendered 3D solid-gold lettering PNG overlays, the final Without John character cover, and the existing public project thumbnails. The Humster source is the approved front render, not the Mixamo model. The gold lettering comes from `Gold Lettering Overlays/Solid Gold Final/`, using the two PNG files ending `_Final.png`. It contains actual extruded and beveled 3D gold, not the v01 Photoshop-effect drafts. Arial Bold is an approximation of the raster coin lettering; exact font recovery is not claimed. Responsive derivatives preserve the render's transparent counters and exterior. PSD/model sources were not edited. The original repository images, social models and script remain in place for preservation, and are no longer loaded by the redesigned pages.

`ASSET-MANIFEST.json` records provenance, file dimensions, byte sizes, source hashes, original image inventory, and legacy Drive archive IDs. Six missing legacy water-tower assets were added to V02 WATER TOWER; existing Header_v03 and Icon_v02 copies were verified byte-for-byte, and duplicate favicon.png was not uploaded again. No sharing settings changed.

## Validation

Reviewed at desktop 1440, tablet 768, and mobile 390/320 pixels. Checked every route for images, horizontal overflow, page heading/navigation semantics, team details, navigation, video activation, and reduced motion. Axe WCAG A/AA checks reported no violations on all four pages at desktop and mobile sizes. JavaScript syntax and local link checks passed.

## Publishing

GitHub Pages publishes the repository root from `main` to https://kippystudios.com/. The existing `pages-build-deployment` workflow handles publishing after a normal push. The custom domain and HTTPS configuration are unchanged.
