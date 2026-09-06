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


## v5 real presenter
This version keeps the v4g overall portfolio style but completely replaces the project grid.

Desktop behavior:
- a sticky UR5 stays on screen;
- a physical-looking stack of project cards sits behind the robot;
- exactly one project card is aligned with the gripper;
- when a new project step reaches the viewport, the current card slides away;
- the next card visibly travels from the stack toward the robot's hand;
- the UR5 joints change pose at every project.

On smaller screens the same content remains accessible with a simplified non-sticky layout.


## v5.1 motion polish
- smoother UR5 motion with pick/carry/present phases
- better card transition from the stack to the gripper
- click or scroll the project steps to switch cards

## v5.2 centered cleanup
- Removed the side project rail feeling: project triggers are now centered cards below the animation.
- Centered the whole UR5 presenter scene more clearly on screen.
- Removed the confusing mini-bars near the project card.
- Simplified and smoothed the robot/card motion.

## v5.3 overlap fix
- The visible project rail/cards were removed completely.
- Invisible scroll anchors now drive the sticky UR5 animation.
- Added a compact progress selector inside the presenter window.
- Added section spacing and z-index isolation so the Technical Stack cannot overlap the animation.
- Kept the entire presenter centered.

## v5.4 scroll-lock presenter
- Stronger robot motion with clearer pick / carry / present phases.
- Animated gripper fingers during pickup.
- The project bar stays fully visible and clickable at the bottom of the presenter.
- While the Work section is active, scrolling cycles through the projects first.
- The page continues to the next section only after the last project.

## v5.5 click pick-and-place
- Removed the scroll-driven repo switching.
- The repo selectors are now visible cards above the animation.
- Clicking a repo card triggers the robot to pick it from the upper source area and place it into the main project card.
- The first project shown by default is ALPINE.
- The project selector cards are styled more like the v4g boxes.
