// Seeded first-run pen: "Silky smooth checkbox toggles with SVG.js"
// by jdillon on CodePen -- https://codepen.io/jdillon/pen/PoLBVmV
// Reproduced (with attribution) as this project's demo of a real, working pen.

export const demoExternalJs = [
  "https://cdnjs.cloudflare.com/ajax/libs/svg.js/3.1.2/svg.min.js",
];

export const demoHtml = `<h1>Silky smooth checkbox toggles</h1>

<div class="wrapper">
  <div class="input-container">
    <input id="slide-toggle-control" type="checkbox" value="1" />
    <label id="slide-toggle-label" for="slide-toggle-control" class="control-label">
      <svg height="36" width="100" xmlns="http://www.w3.org/2000/svg">
        <g class="switch">
          <g class="row">
            <rect x="6" y="6" width="2" height="2" />
            <rect x="8" y="6" width="2" height="2" />
            <rect x="10" y="6" width="2" height="2" />
            <rect x="12" y="6" width="2" height="2" />
            <rect x="14" y="6" width="2" height="2" />
            <rect x="16" y="6" width="2" height="2" />
            <rect x="18" y="6" width="2" height="2" />
            <rect x="20" y="6" width="2" height="2" />
            <rect x="22" y="6" width="2" height="2" />
            <rect x="24" y="6" width="2" height="2" />
            <rect x="26" y="6" width="2" height="2" />
            <rect x="28" y="6" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="8" width="2" height="2" />
            <rect x="8" y="8" width="2" height="2" />
            <rect x="10" y="8" width="2" height="2" />
            <rect x="12" y="8" width="2" height="2" />
            <rect x="14" y="8" width="2" height="2" />
            <rect x="16" y="8" width="2" height="2" />
            <rect x="18" y="8" width="2" height="2" />
            <rect x="20" y="8" width="2" height="2" />
            <rect x="22" y="8" width="2" height="2" />
            <rect x="24" y="8" width="2" height="2" />
            <rect x="26" y="8" width="2" height="2" />
            <rect x="28" y="8" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="10" width="2" height="2" />
            <rect x="8" y="10" width="2" height="2" />
            <rect x="10" y="10" width="2" height="2" />
            <rect x="12" y="10" width="2" height="2" />
            <rect x="14" y="10" width="2" height="2" />
            <rect x="16" y="10" width="2" height="2" />
            <rect x="18" y="10" width="2" height="2" />
            <rect x="20" y="10" width="2" height="2" />
            <rect x="22" y="10" width="2" height="2" />
            <rect x="24" y="10" width="2" height="2" />
            <rect x="26" y="10" width="2" height="2" />
            <rect x="28" y="10" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="12" width="2" height="2" />
            <rect x="8" y="12" width="2" height="2" />
            <rect x="10" y="12" width="2" height="2" />
            <rect x="12" y="12" width="2" height="2" />
            <rect x="14" y="12" width="2" height="2" />
            <rect x="16" y="12" width="2" height="2" />
            <rect x="18" y="12" width="2" height="2" />
            <rect x="20" y="12" width="2" height="2" />
            <rect x="22" y="12" width="2" height="2" />
            <rect x="24" y="12" width="2" height="2" />
            <rect x="26" y="12" width="2" height="2" />
            <rect x="28" y="12" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="14" width="2" height="2" />
            <rect x="8" y="14" width="2" height="2" />
            <rect x="10" y="14" width="2" height="2" />
            <rect x="12" y="14" width="2" height="2" />
            <rect x="14" y="14" width="2" height="2" />
            <rect x="16" y="14" width="2" height="2" />
            <rect x="18" y="14" width="2" height="2" />
            <rect x="20" y="14" width="2" height="2" />
            <rect x="22" y="14" width="2" height="2" />
            <rect x="24" y="14" width="2" height="2" />
            <rect x="26" y="14" width="2" height="2" />
            <rect x="28" y="14" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="16" width="2" height="2" />
            <rect x="8" y="16" width="2" height="2" />
            <rect x="10" y="16" width="2" height="2" />
            <rect x="12" y="16" width="2" height="2" />
            <rect x="14" y="16" width="2" height="2" />
            <rect x="16" y="16" width="2" height="2" />
            <rect x="18" y="16" width="2" height="2" />
            <rect x="20" y="16" width="2" height="2" />
            <rect x="22" y="16" width="2" height="2" />
            <rect x="24" y="16" width="2" height="2" />
            <rect x="26" y="16" width="2" height="2" />
            <rect x="28" y="16" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="18" width="2" height="2" />
            <rect x="8" y="18" width="2" height="2" />
            <rect x="10" y="18" width="2" height="2" />
            <rect x="12" y="18" width="2" height="2" />
            <rect x="14" y="18" width="2" height="2" />
            <rect x="16" y="18" width="2" height="2" />
            <rect x="18" y="18" width="2" height="2" />
            <rect x="20" y="18" width="2" height="2" />
            <rect x="22" y="18" width="2" height="2" />
            <rect x="24" y="18" width="2" height="2" />
            <rect x="26" y="18" width="2" height="2" />
            <rect x="28" y="18" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="20" width="2" height="2" />
            <rect x="8" y="20" width="2" height="2" />
            <rect x="10" y="20" width="2" height="2" />
            <rect x="12" y="20" width="2" height="2" />
            <rect x="14" y="20" width="2" height="2" />
            <rect x="16" y="20" width="2" height="2" />
            <rect x="18" y="20" width="2" height="2" />
            <rect x="20" y="20" width="2" height="2" />
            <rect x="22" y="20" width="2" height="2" />
            <rect x="24" y="20" width="2" height="2" />
            <rect x="26" y="20" width="2" height="2" />
            <rect x="28" y="20" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="22" width="2" height="2" />
            <rect x="8" y="22" width="2" height="2" />
            <rect x="10" y="22" width="2" height="2" />
            <rect x="12" y="22" width="2" height="2" />
            <rect x="14" y="22" width="2" height="2" />
            <rect x="16" y="22" width="2" height="2" />
            <rect x="18" y="22" width="2" height="2" />
            <rect x="20" y="22" width="2" height="2" />
            <rect x="22" y="22" width="2" height="2" />
            <rect x="24" y="22" width="2" height="2" />
            <rect x="26" y="22" width="2" height="2" />
            <rect x="28" y="22" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="24" width="2" height="2" />
            <rect x="8" y="24" width="2" height="2" />
            <rect x="10" y="24" width="2" height="2" />
            <rect x="12" y="24" width="2" height="2" />
            <rect x="14" y="24" width="2" height="2" />
            <rect x="16" y="24" width="2" height="2" />
            <rect x="18" y="24" width="2" height="2" />
            <rect x="20" y="24" width="2" height="2" />
            <rect x="22" y="24" width="2" height="2" />
            <rect x="24" y="24" width="2" height="2" />
            <rect x="26" y="24" width="2" height="2" />
            <rect x="28" y="24" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="26" width="2" height="2" />
            <rect x="8" y="26" width="2" height="2" />
            <rect x="10" y="26" width="2" height="2" />
            <rect x="12" y="26" width="2" height="2" />
            <rect x="14" y="26" width="2" height="2" />
            <rect x="16" y="26" width="2" height="2" />
            <rect x="18" y="26" width="2" height="2" />
            <rect x="20" y="26" width="2" height="2" />
            <rect x="22" y="26" width="2" height="2" />
            <rect x="24" y="26" width="2" height="2" />
            <rect x="26" y="26" width="2" height="2" />
            <rect x="28" y="26" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="28" width="2" height="2" />
            <rect x="8" y="28" width="2" height="2" />
            <rect x="10" y="28" width="2" height="2" />
            <rect x="12" y="28" width="2" height="2" />
            <rect x="14" y="28" width="2" height="2" />
            <rect x="16" y="28" width="2" height="2" />
            <rect x="18" y="28" width="2" height="2" />
            <rect x="20" y="28" width="2" height="2" />
            <rect x="22" y="28" width="2" height="2" />
            <rect x="24" y="28" width="2" height="2" />
            <rect x="26" y="28" width="2" height="2" />
            <rect x="28" y="28" width="2" height="2" />
          </g>
        </g>
      </svg>
    </label>
    <label for="slide-toggle-control">Offset</label>
  </div>

  <div class="input-container">
    <input id="random-slide-toggle-control" type="checkbox" value="1" />
    <label id="random-slide-toggle-label" for="random-slide-toggle-control" class="control-label">
      <svg height="36" width="100" xmlns="http://www.w3.org/2000/svg">
        <g class="switch">
          <g class="row">
            <rect x="6" y="6" width="2" height="2" />
            <rect x="8" y="6" width="2" height="2" />
            <rect x="10" y="6" width="2" height="2" />
            <rect x="12" y="6" width="2" height="2" />
            <rect x="14" y="6" width="2" height="2" />
            <rect x="16" y="6" width="2" height="2" />
            <rect x="18" y="6" width="2" height="2" />
            <rect x="20" y="6" width="2" height="2" />
            <rect x="22" y="6" width="2" height="2" />
            <rect x="24" y="6" width="2" height="2" />
            <rect x="26" y="6" width="2" height="2" />
            <rect x="28" y="6" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="8" width="2" height="2" />
            <rect x="8" y="8" width="2" height="2" />
            <rect x="10" y="8" width="2" height="2" />
            <rect x="12" y="8" width="2" height="2" />
            <rect x="14" y="8" width="2" height="2" />
            <rect x="16" y="8" width="2" height="2" />
            <rect x="18" y="8" width="2" height="2" />
            <rect x="20" y="8" width="2" height="2" />
            <rect x="22" y="8" width="2" height="2" />
            <rect x="24" y="8" width="2" height="2" />
            <rect x="26" y="8" width="2" height="2" />
            <rect x="28" y="8" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="10" width="2" height="2" />
            <rect x="8" y="10" width="2" height="2" />
            <rect x="10" y="10" width="2" height="2" />
            <rect x="12" y="10" width="2" height="2" />
            <rect x="14" y="10" width="2" height="2" />
            <rect x="16" y="10" width="2" height="2" />
            <rect x="18" y="10" width="2" height="2" />
            <rect x="20" y="10" width="2" height="2" />
            <rect x="22" y="10" width="2" height="2" />
            <rect x="24" y="10" width="2" height="2" />
            <rect x="26" y="10" width="2" height="2" />
            <rect x="28" y="10" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="12" width="2" height="2" />
            <rect x="8" y="12" width="2" height="2" />
            <rect x="10" y="12" width="2" height="2" />
            <rect x="12" y="12" width="2" height="2" />
            <rect x="14" y="12" width="2" height="2" />
            <rect x="16" y="12" width="2" height="2" />
            <rect x="18" y="12" width="2" height="2" />
            <rect x="20" y="12" width="2" height="2" />
            <rect x="22" y="12" width="2" height="2" />
            <rect x="24" y="12" width="2" height="2" />
            <rect x="26" y="12" width="2" height="2" />
            <rect x="28" y="12" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="14" width="2" height="2" />
            <rect x="8" y="14" width="2" height="2" />
            <rect x="10" y="14" width="2" height="2" />
            <rect x="12" y="14" width="2" height="2" />
            <rect x="14" y="14" width="2" height="2" />
            <rect x="16" y="14" width="2" height="2" />
            <rect x="18" y="14" width="2" height="2" />
            <rect x="20" y="14" width="2" height="2" />
            <rect x="22" y="14" width="2" height="2" />
            <rect x="24" y="14" width="2" height="2" />
            <rect x="26" y="14" width="2" height="2" />
            <rect x="28" y="14" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="16" width="2" height="2" />
            <rect x="8" y="16" width="2" height="2" />
            <rect x="10" y="16" width="2" height="2" />
            <rect x="12" y="16" width="2" height="2" />
            <rect x="14" y="16" width="2" height="2" />
            <rect x="16" y="16" width="2" height="2" />
            <rect x="18" y="16" width="2" height="2" />
            <rect x="20" y="16" width="2" height="2" />
            <rect x="22" y="16" width="2" height="2" />
            <rect x="24" y="16" width="2" height="2" />
            <rect x="26" y="16" width="2" height="2" />
            <rect x="28" y="16" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="18" width="2" height="2" />
            <rect x="8" y="18" width="2" height="2" />
            <rect x="10" y="18" width="2" height="2" />
            <rect x="12" y="18" width="2" height="2" />
            <rect x="14" y="18" width="2" height="2" />
            <rect x="16" y="18" width="2" height="2" />
            <rect x="18" y="18" width="2" height="2" />
            <rect x="20" y="18" width="2" height="2" />
            <rect x="22" y="18" width="2" height="2" />
            <rect x="24" y="18" width="2" height="2" />
            <rect x="26" y="18" width="2" height="2" />
            <rect x="28" y="18" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="20" width="2" height="2" />
            <rect x="8" y="20" width="2" height="2" />
            <rect x="10" y="20" width="2" height="2" />
            <rect x="12" y="20" width="2" height="2" />
            <rect x="14" y="20" width="2" height="2" />
            <rect x="16" y="20" width="2" height="2" />
            <rect x="18" y="20" width="2" height="2" />
            <rect x="20" y="20" width="2" height="2" />
            <rect x="22" y="20" width="2" height="2" />
            <rect x="24" y="20" width="2" height="2" />
            <rect x="26" y="20" width="2" height="2" />
            <rect x="28" y="20" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="22" width="2" height="2" />
            <rect x="8" y="22" width="2" height="2" />
            <rect x="10" y="22" width="2" height="2" />
            <rect x="12" y="22" width="2" height="2" />
            <rect x="14" y="22" width="2" height="2" />
            <rect x="16" y="22" width="2" height="2" />
            <rect x="18" y="22" width="2" height="2" />
            <rect x="20" y="22" width="2" height="2" />
            <rect x="22" y="22" width="2" height="2" />
            <rect x="24" y="22" width="2" height="2" />
            <rect x="26" y="22" width="2" height="2" />
            <rect x="28" y="22" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="24" width="2" height="2" />
            <rect x="8" y="24" width="2" height="2" />
            <rect x="10" y="24" width="2" height="2" />
            <rect x="12" y="24" width="2" height="2" />
            <rect x="14" y="24" width="2" height="2" />
            <rect x="16" y="24" width="2" height="2" />
            <rect x="18" y="24" width="2" height="2" />
            <rect x="20" y="24" width="2" height="2" />
            <rect x="22" y="24" width="2" height="2" />
            <rect x="24" y="24" width="2" height="2" />
            <rect x="26" y="24" width="2" height="2" />
            <rect x="28" y="24" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="26" width="2" height="2" />
            <rect x="8" y="26" width="2" height="2" />
            <rect x="10" y="26" width="2" height="2" />
            <rect x="12" y="26" width="2" height="2" />
            <rect x="14" y="26" width="2" height="2" />
            <rect x="16" y="26" width="2" height="2" />
            <rect x="18" y="26" width="2" height="2" />
            <rect x="20" y="26" width="2" height="2" />
            <rect x="22" y="26" width="2" height="2" />
            <rect x="24" y="26" width="2" height="2" />
            <rect x="26" y="26" width="2" height="2" />
            <rect x="28" y="26" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="28" width="2" height="2" />
            <rect x="8" y="28" width="2" height="2" />
            <rect x="10" y="28" width="2" height="2" />
            <rect x="12" y="28" width="2" height="2" />
            <rect x="14" y="28" width="2" height="2" />
            <rect x="16" y="28" width="2" height="2" />
            <rect x="18" y="28" width="2" height="2" />
            <rect x="20" y="28" width="2" height="2" />
            <rect x="22" y="28" width="2" height="2" />
            <rect x="24" y="28" width="2" height="2" />
            <rect x="26" y="28" width="2" height="2" />
            <rect x="28" y="28" width="2" height="2" />
          </g>
        </g>
      </svg>
    </label>
    <label for="random-slide-toggle-control">Random</label>
  </div>
  
  <div class="input-container">
    <input id="delayed-offset-slide-toggle-control" type="checkbox" value="1" />
    <label id="delayed-offset-slide-toggle-label" for="delayed-offset-slide-toggle-control" class="control-label">
      <svg height="36" width="100" xmlns="http://www.w3.org/2000/svg">
        <g class="switch">
          <g class="row">
            <rect x="6" y="6" width="2" height="2" />
            <rect x="8" y="6" width="2" height="2" />
            <rect x="10" y="6" width="2" height="2" />
            <rect x="12" y="6" width="2" height="2" />
            <rect x="14" y="6" width="2" height="2" />
            <rect x="16" y="6" width="2" height="2" />
            <rect x="18" y="6" width="2" height="2" />
            <rect x="20" y="6" width="2" height="2" />
            <rect x="22" y="6" width="2" height="2" />
            <rect x="24" y="6" width="2" height="2" />
            <rect x="26" y="6" width="2" height="2" />
            <rect x="28" y="6" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="8" width="2" height="2" />
            <rect x="8" y="8" width="2" height="2" />
            <rect x="10" y="8" width="2" height="2" />
            <rect x="12" y="8" width="2" height="2" />
            <rect x="14" y="8" width="2" height="2" />
            <rect x="16" y="8" width="2" height="2" />
            <rect x="18" y="8" width="2" height="2" />
            <rect x="20" y="8" width="2" height="2" />
            <rect x="22" y="8" width="2" height="2" />
            <rect x="24" y="8" width="2" height="2" />
            <rect x="26" y="8" width="2" height="2" />
            <rect x="28" y="8" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="10" width="2" height="2" />
            <rect x="8" y="10" width="2" height="2" />
            <rect x="10" y="10" width="2" height="2" />
            <rect x="12" y="10" width="2" height="2" />
            <rect x="14" y="10" width="2" height="2" />
            <rect x="16" y="10" width="2" height="2" />
            <rect x="18" y="10" width="2" height="2" />
            <rect x="20" y="10" width="2" height="2" />
            <rect x="22" y="10" width="2" height="2" />
            <rect x="24" y="10" width="2" height="2" />
            <rect x="26" y="10" width="2" height="2" />
            <rect x="28" y="10" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="12" width="2" height="2" />
            <rect x="8" y="12" width="2" height="2" />
            <rect x="10" y="12" width="2" height="2" />
            <rect x="12" y="12" width="2" height="2" />
            <rect x="14" y="12" width="2" height="2" />
            <rect x="16" y="12" width="2" height="2" />
            <rect x="18" y="12" width="2" height="2" />
            <rect x="20" y="12" width="2" height="2" />
            <rect x="22" y="12" width="2" height="2" />
            <rect x="24" y="12" width="2" height="2" />
            <rect x="26" y="12" width="2" height="2" />
            <rect x="28" y="12" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="14" width="2" height="2" />
            <rect x="8" y="14" width="2" height="2" />
            <rect x="10" y="14" width="2" height="2" />
            <rect x="12" y="14" width="2" height="2" />
            <rect x="14" y="14" width="2" height="2" />
            <rect x="16" y="14" width="2" height="2" />
            <rect x="18" y="14" width="2" height="2" />
            <rect x="20" y="14" width="2" height="2" />
            <rect x="22" y="14" width="2" height="2" />
            <rect x="24" y="14" width="2" height="2" />
            <rect x="26" y="14" width="2" height="2" />
            <rect x="28" y="14" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="16" width="2" height="2" />
            <rect x="8" y="16" width="2" height="2" />
            <rect x="10" y="16" width="2" height="2" />
            <rect x="12" y="16" width="2" height="2" />
            <rect x="14" y="16" width="2" height="2" />
            <rect x="16" y="16" width="2" height="2" />
            <rect x="18" y="16" width="2" height="2" />
            <rect x="20" y="16" width="2" height="2" />
            <rect x="22" y="16" width="2" height="2" />
            <rect x="24" y="16" width="2" height="2" />
            <rect x="26" y="16" width="2" height="2" />
            <rect x="28" y="16" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="18" width="2" height="2" />
            <rect x="8" y="18" width="2" height="2" />
            <rect x="10" y="18" width="2" height="2" />
            <rect x="12" y="18" width="2" height="2" />
            <rect x="14" y="18" width="2" height="2" />
            <rect x="16" y="18" width="2" height="2" />
            <rect x="18" y="18" width="2" height="2" />
            <rect x="20" y="18" width="2" height="2" />
            <rect x="22" y="18" width="2" height="2" />
            <rect x="24" y="18" width="2" height="2" />
            <rect x="26" y="18" width="2" height="2" />
            <rect x="28" y="18" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="20" width="2" height="2" />
            <rect x="8" y="20" width="2" height="2" />
            <rect x="10" y="20" width="2" height="2" />
            <rect x="12" y="20" width="2" height="2" />
            <rect x="14" y="20" width="2" height="2" />
            <rect x="16" y="20" width="2" height="2" />
            <rect x="18" y="20" width="2" height="2" />
            <rect x="20" y="20" width="2" height="2" />
            <rect x="22" y="20" width="2" height="2" />
            <rect x="24" y="20" width="2" height="2" />
            <rect x="26" y="20" width="2" height="2" />
            <rect x="28" y="20" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="22" width="2" height="2" />
            <rect x="8" y="22" width="2" height="2" />
            <rect x="10" y="22" width="2" height="2" />
            <rect x="12" y="22" width="2" height="2" />
            <rect x="14" y="22" width="2" height="2" />
            <rect x="16" y="22" width="2" height="2" />
            <rect x="18" y="22" width="2" height="2" />
            <rect x="20" y="22" width="2" height="2" />
            <rect x="22" y="22" width="2" height="2" />
            <rect x="24" y="22" width="2" height="2" />
            <rect x="26" y="22" width="2" height="2" />
            <rect x="28" y="22" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="24" width="2" height="2" />
            <rect x="8" y="24" width="2" height="2" />
            <rect x="10" y="24" width="2" height="2" />
            <rect x="12" y="24" width="2" height="2" />
            <rect x="14" y="24" width="2" height="2" />
            <rect x="16" y="24" width="2" height="2" />
            <rect x="18" y="24" width="2" height="2" />
            <rect x="20" y="24" width="2" height="2" />
            <rect x="22" y="24" width="2" height="2" />
            <rect x="24" y="24" width="2" height="2" />
            <rect x="26" y="24" width="2" height="2" />
            <rect x="28" y="24" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="26" width="2" height="2" />
            <rect x="8" y="26" width="2" height="2" />
            <rect x="10" y="26" width="2" height="2" />
            <rect x="12" y="26" width="2" height="2" />
            <rect x="14" y="26" width="2" height="2" />
            <rect x="16" y="26" width="2" height="2" />
            <rect x="18" y="26" width="2" height="2" />
            <rect x="20" y="26" width="2" height="2" />
            <rect x="22" y="26" width="2" height="2" />
            <rect x="24" y="26" width="2" height="2" />
            <rect x="26" y="26" width="2" height="2" />
            <rect x="28" y="26" width="2" height="2" />
          </g>

          <g class="row">
            <rect x="6" y="28" width="2" height="2" />
            <rect x="8" y="28" width="2" height="2" />
            <rect x="10" y="28" width="2" height="2" />
            <rect x="12" y="28" width="2" height="2" />
            <rect x="14" y="28" width="2" height="2" />
            <rect x="16" y="28" width="2" height="2" />
            <rect x="18" y="28" width="2" height="2" />
            <rect x="20" y="28" width="2" height="2" />
            <rect x="22" y="28" width="2" height="2" />
            <rect x="24" y="28" width="2" height="2" />
            <rect x="26" y="28" width="2" height="2" />
            <rect x="28" y="28" width="2" height="2" />
          </g>
        </g>
      </svg>
    </label>
    <label for="delayed-offset-slide-toggle-control">Delayed offset</label>
  </div>
</div>
`;

export const demoCss = `@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300&display=swap");
html,
body {
  height: 100%;
}

body {
  background-color: #3d3e4a;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a3a7ad;
  font-family: "IBM Plex Mono", monospace;
  font-weight: 300;
  font-style: normal;
  font-size: 12px;
  flex-direction: column;
}

h1 {
  background-color: rgba(0, 0, 0, 0.5);
  color: #76b3fa;
  font-size: 20px;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 300;
  margin-bottom: 30px;
  padding: 20px 0;
  text-align: center;
  width: 100%;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
}

.input-container {
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px 20px;
  position: relative;
}

.control-label {
  background-color: #24252c;
  background-image: repeating-linear-gradient(0deg, #181a29, #181a29 2px, #202436 2px, #202436 4px);
  border: 2px solid #575969;
  border-radius: 4px;
  display: block;
  width: 84px;
  height: 36px;
  position: relative;
  transition: border-color 300ms ease-in-out, box-shadow 300ms ease-in-out;
  margin-bottom: 15px;
}

input[type=checkbox] {
  opacity: 0;
  position: absolute;
}

input[type=checkbox]:checked + label {
  border-color: #76b3fa;
  box-shadow: 0 0 20px 0 #0763f7, inset 0px 0px 12px 0px #0763f7;
}
input[type=checkbox]:checked + label svg rect {
  fill: #76b3fa;
}

input[type=checkbox]:focus + label {
  border-color: #76b3fa;
}

svg rect {
  fill: #484a57;
  transition: fill 300ms ease-in-out;
}
svg .reference rect {
  opacity: 0;
}
`;

export const demoJs = `SVG.on(document, "DOMContentLoaded", () => {
  const slideToggle = document.getElementById("slide-toggle-control");
  const randomSlideToggle = document.getElementById("random-slide-toggle-control");
  const delayedSlideToggle = document.getElementById("delayed-offset-slide-toggle-control");

  const slide = {
    element: slideToggle,
    handler: svgSlideEffect,
    offset: 10,
    duration: 200,
    random: false,
  };

  const randomSlide = {
    element: randomSlideToggle,
    handler: svgSlideEffect,
    offset: 8,
    duration: 150,
    random: true,
  };
  
  const delayedOffsetSlide = {
    element: delayedSlideToggle,
    handler: svgSlideEffect,
    offset: 50,
    duration: 50,
    random: false,
  };

  new SvgToggleEffect(slide);
  new SvgToggleEffect(randomSlide);
  new SvgToggleEffect(delayedOffsetSlide);
});

class SvgToggleEffect {
  constructor(effect) {
    this.nodes = [
      ...effect.element.nextElementSibling.querySelectorAll(".row")
    ];

    this.nodes.forEach((node, index) => {
      this.nodes[index] = SVG(node);
    });

    if (effect.random) {
      this.randomizeArray(this.nodes);
    }

    effect.element.addEventListener("change", () => {
      if (effect.element.checked) {
        effect.handler(this.nodes, false, effect.duration, effect.offset);
      } else {
        effect.handler(this.nodes, true, effect.duration, effect.offset);
      }
    });
  }

  randomizeArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

const svgSlideEffect = (nodes = [], reverse = false, duration = 100, offset = 10) => {
  nodes.forEach((node, index) => {
    setTimeout(() => {
      if (reverse) {
        node.animate({ duration: duration }).transform({ translate: 0 });
      } else {
        node.animate({ duration: duration }).transform({ translate: 48 });
      }
    }, index * offset);
  });
};
`;
