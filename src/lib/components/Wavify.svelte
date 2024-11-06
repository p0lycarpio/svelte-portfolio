<script>
  // Svelte lite implementation of [Wavify](https://github.com/woofers/react-wavify)

  
  /**
   * @typedef {Object} Props
   * @property {any} parentWidth
   * @property {any} parentHeight
   * @property {any} [options] - Use prop values or default options of the wave
   */

  /** @type {Props} */
  let { parentWidth, parentHeight, options = {
    height: 20,
    amplitude: 20,
    speed: 0.5,
    bones: 3,
    color: "grey",
  } } = $props();

  let waveEl = $state()
  let frameId, path = $state(), step, elapsed, lastUpdate;
  step = elapsed = lastUpdate = 0;

  function calculateWavePoints() {
    const points = [];
    for (let i = 0; i <= options.bones; i++) {
      const scale = 100;
      const x = (i / options.bones) * parentWidth;
      const seed = (step + (i + (i % options.bones))) * options.speed * scale;
      const sinHeight = Math.sin(seed / scale) * options.amplitude;
      const y = Math.sin(seed / scale) * sinHeight + options.height;
      points.push({ x, y });
    }
    return points;
  }

  function buildPath(points) {
    let svg = `M ${points[0].x} ${points[0].y}`;
    let initial = {
      x: (points[1].x - points[0].x) / 2,
      y: points[1].y - points[0].y + points[0].y + (points[1].y - points[0].y),
    };
    let cubic = (a, b) => ` C ${a.x} ${a.y} ${a.x} ${a.y} ${b.x} ${b.y}`;
    svg += cubic(initial, points[1]);
    let point = initial;
    for (let i = 1; i < points.length - 1; i++) {
      point = {
        x: points[i].x - point.x + points[i].x,
        y: points[i].y - point.y + points[i].y,
      };
      svg += cubic(point, points[i + 1]);
    }
    svg += " L " + parentWidth + " " + parentHeight;
    svg += " L 0 " + parentHeight + " Z";
    return svg;
  }

  function redraw() {
    path = buildPath(calculateWavePoints());
  }

  function draw() {
    const now = new Date();
    elapsed += now - lastUpdate;
    lastUpdate = now;
    step = (elapsed * Math.PI) / 1000;
    redraw();
  }

  function update() {
    draw();
    if (frameId) {
      resume();
    }
  }

  function resume() {
    frameId = window.requestAnimationFrame(update);
    lastUpdate = new Date();
  }

  $effect.pre(() => {
    resume();
  });
</script>

<svg
  bind:this={waveEl}
  width="100%"
  height="100%"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  class="wave">
  <path d={path} fill={options.color} />
</svg>
