# Andrea Dalla Villa — Personal Website

Ready-to-deploy static website for GitHub Pages.

## Publish it at `https://andreadallavilla.github.io`

1. On GitHub create a **public** repository named exactly:
   `AndreaDallaVilla.github.io`
2. Upload the files from this folder to the repository root.
3. Commit/push to the default branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select your default branch (usually `main`) and `/ (root)`.
7. Save.

GitHub Pages will publish the site at:

`https://andreadallavilla.github.io`

## Files

- `index.html` — page content
- `styles.css` — complete responsive styling
- `script.js` — reveal animations + live GitHub repo count
- `favicon.svg` — AD favicon

## Easy edits

Search `index.html` for:

- `ALPINE — Climbing Robot`
- `Distributed SpMV`
- `NipponQuest`
- `UR5 Pick & Place`
- `RoadEye`

to edit project text and links.

The profile photo is loaded directly from:

`https://github.com/AndreaDallaVilla.png`

so it follows the current GitHub avatar automatically.


## v2 changes
- Removed the terminal/focus card from the hero.
- Added the supplied ALPINE image.
- Added SICURA.
- UR5 Pick & Place now has an external project link.
- Removed the RoadEye 'project in development' label.

## v3 changes
- Added YouTube video links to ALPINE, UR5, SICURA and RoadEye cards.
- ALPINE image now opens its YouTube results.
- Added YouTube to the contact section.
- SICURA uses the directly indexed video URL.

## v4 changes
- Reduced the ALPINE project image size.
- Corrected the UR5 repository link to acristoforetti-1-pixel/lab_myproject.
- Added the SICURA GitHub repository link: anass03/Sicura.

## v4c changes
- Rebuilt the orbit animation system from the HTML/CSS structure instead of only tweaking the old one.
- All four orbit dots now visibly rotate on separate rings.
- The cyan dot now definitely rotates; the outer orbit dot is also made visible.
- The ALPINE image is wrapped in its own media frame, reduced further, and forced to use object-fit: contain so the full image shows.

## v4d changes
- Moved all orbit paths farther outside the profile photo so dots and labels no longer pass across the face.
- Matched each rotator radius exactly to its visible ring.
- Added the supplied video thumbnails for UR5, SICURA and RoadEye using the same compact visual treatment as ALPINE.

## v4e changes
- Rebuilt the orbit visuals again so the rings are circular and centered around the avatar.
- The orbiting dots now move on pure circular paths outside the profile image.
- The labels are fixed outside the orbit system so they do not pass over the face.
- Updated UR5, SICURA and RoadEye thumbnails to use the same size and visual treatment as the ALPINE card.

## v4f changes
- Reduced the UR5, SICURA and RoadEye thumbnails so they match the ALPINE thumbnail proportions more closely.
- Kept the rest of the v4e layout unchanged.

## v4g changes
- Shortened UR5, SICURA and RoadEye thumbnails to make them compact like the ALPINE thumbnail.
- Updated the orbit labels to: ROS, AI, Hardware, IoT.
- Updated the hero eyebrow to: Robotic Engineer.


## v5 presenter version
- Replaced the standard project-grid section with a custom sticky showcase.
- Added a stylized UR5 that acts as a project presenter.
- Only one project card is shown at a time.
- Scrolling activates the next project card in the UR5's hand.
- Included ALPINE, Distributed SpMV, NipponQuest, UR5, SICURA and RoadEye.
