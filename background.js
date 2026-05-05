/**
 * Passify — Space Background
 * Animated starfield with mouse-parallax depth effect
 */

(function () {
  const canvas = document.getElementById('starCanvas');
  const ctx = canvas.getContext('2d');

  let W, H, mouse = { x: 0, y: 0 }, target = { x: 0, y: 0 };

  /* ── Resize ── */
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  /* ── Star layers (depth) ── */
  const LAYERS = [
    { count: 80,  speed: 0.008, size: [0.3, 0.8],  opacity: [0.2, 0.45] }, // far
    { count: 50,  speed: 0.018, size: [0.7, 1.3],  opacity: [0.35, 0.6] }, // mid
    { count: 25,  speed: 0.035, size: [1.2, 2.2],  opacity: [0.55, 0.9] }, // near
  ];

  const stars = [];

  LAYERS.forEach((layer, li) => {
    for (let i = 0; i < layer.count; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: layer.size[0] + Math.random() * (layer.size[1] - layer.size[0]),
        o: layer.opacity[0] + Math.random() * (layer.opacity[1] - layer.opacity[0]),
        speed: layer.speed,
        layer: li,
        // twinkle
        twinkleSpeed: 0.004 + Math.random() * 0.008,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }
  });

  /* ── Mouse tracking ── */
  window.addEventListener('mousemove', e => {
    target.x = (e.clientX / W - 0.5);
    target.y = (e.clientY / H - 0.5);
  });

  /* ── Occasional shooting star ── */
  let shooters = [];
  function spawnShooter() {
    shooters.push({
      x: Math.random() * W * 0.8,
      y: Math.random() * H * 0.3,
      len: 80 + Math.random() * 120,
      speed: 8 + Math.random() * 10,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.4,
      life: 1,
      decay: 0.025 + Math.random() * 0.02,
    });
  }
  setInterval(spawnShooter, 4000 + Math.random() * 4000);

  /* ── Draw background gradient ── */
  function drawBg() {
    const grad = ctx.createRadialGradient(W * 0.65, H * 0.3, 0, W * 0.5, H * 0.5, W * 0.85);
    grad.addColorStop(0, '#0d1b2e');
    grad.addColorStop(0.5, '#0a1424');
    grad.addColorStop(1, '#080e18');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
  }

  /* ── Animation loop ── */
  let t = 0;
  function draw() {
    t++;

    // Smooth mouse lerp
    mouse.x += (target.x - mouse.x) * 0.06;
    mouse.y += (target.y - mouse.y) * 0.06;

    ctx.clearRect(0, 0, W, H);
    drawBg();

    // Draw stars with parallax
    stars.forEach(s => {
      const px = s.x + mouse.x * s.speed * W * 12;
      const py = s.y + mouse.y * s.speed * H * 12;

      // wrap around edges
      const wx = ((px % W) + W) % W;
      const wy = ((py % H) + H) % H;

      // twinkle
      const twinkle = Math.sin(t * s.twinkleSpeed + s.twinkleOffset) * 0.18 + 0.82;
      const alpha = s.o * twinkle;

      ctx.beginPath();
      ctx.arc(wx, wy, s.r, 0, Math.PI * 2);

      // near stars get a slight cyan tint
      const tint = s.layer === 2 ? `rgba(180,240,255,${alpha})` : `rgba(255,255,255,${alpha})`;
      ctx.fillStyle = tint;
      ctx.fill();

      // glow for near stars
      if (s.layer === 2 && s.r > 1.6) {
        ctx.beginPath();
        ctx.arc(wx, wy, s.r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,200,255,${alpha * 0.08})`;
        ctx.fill();
      }
    });

    // Draw shooting stars
    shooters = shooters.filter(sh => sh.life > 0);
    shooters.forEach(sh => {
      const tx = Math.cos(sh.angle);
      const ty = Math.sin(sh.angle);
      const grad = ctx.createLinearGradient(sh.x, sh.y, sh.x - tx * sh.len, sh.y - ty * sh.len);
      grad.addColorStop(0, `rgba(0,210,255,${sh.life * 0.9})`);
      grad.addColorStop(1, 'rgba(0,210,255,0)');
      ctx.beginPath();
      ctx.moveTo(sh.x, sh.y);
      ctx.lineTo(sh.x - tx * sh.len, sh.y - ty * sh.len);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      sh.x += tx * sh.speed;
      sh.y += ty * sh.speed;
      sh.life -= sh.decay;
    });

    requestAnimationFrame(draw);
  }

  draw();
})();
