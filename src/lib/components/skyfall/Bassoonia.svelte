<style>
  .dm-matter-elem, .dm-matter-elem-circle, .dm-matter-elem-pill {
    pointer-events: none;
    white-space: nowrap;
    position: absolute; /* Ensure elements can move */
  }
</style>


<div class="matter-box" style="position: relative; width: 100%; height: 500px; z-index: 5;">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js"></script>
    <script>
document.addEventListener("DOMContentLoaded", function () {
  var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Events = Matter.Events,
      Body = Matter.Body;

  var engine = Engine.create();

  var matterBox = document.querySelector('.matter-box');
  if (!matterBox) return;

  var render = Render.create({
    element: matterBox,
    engine: engine,
    options: {
      width: matterBox.clientWidth,
      height: matterBox.clientHeight,
      wireframes: false,
      background: 'transparent'
    }
  });

  var matterElems = document.querySelectorAll('.dm-matter-elem');
  var matterCircle = document.querySelectorAll('.dm-matter-elem-circle');
  var matterPill = document.querySelectorAll('.dm-matter-elem-pill');

  function createRectangles() {
    return Array.from(matterElems).map(function (el) {
      var w = el.offsetWidth, h = el.offsetHeight;
      var x = el.offsetLeft + w / 2, y = el.offsetTop + h / 2;

      var body = Bodies.rectangle(x, y, w, h, {
        density: 0.01,
        friction: 0.1,
        restitution: 0.5,
        render: { opacity: 0 }
      });

      Composite.add(engine.world, body);
      return body;
    });
  }

  function createCircles() {
    return Array.from(matterCircle).map(function (el) {
      var w = el.offsetWidth, h = el.offsetHeight;
      var x = el.offsetLeft + w / 2, y = el.offsetTop + h / 2;
      var r = Math.max(w, h) / 2;

      var body = Bodies.circle(x, y, r, {
        density: 0.01,
        friction: 0.1,
        restitution: 0.5,
        render: { opacity: 0 }
      });

      Composite.add(engine.world, body);
      return body;
    });
  }

  function createPills() {
    return Array.from(matterPill).map(function (el) {
      var w = el.offsetWidth, h = el.offsetHeight;
      var x = el.offsetLeft + w / 2, y = el.offsetTop + h / 2;
      var r = h / 2;

      var left = Bodies.circle(x - w / 2 + r, y, r, { render: { opacity: 0 } });
      var right = Bodies.circle(x + w / 2 - r, y, r, { render: { opacity: 0 } });
      var rect = Bodies.rectangle(x, y, w - h, h, { render: { opacity: 0 } });

      var body = Body.create({
        parts: [left, right, rect],
        friction: 0.1,
        restitution: 0.5
      });

      Composite.add(engine.world, body);
      return body;
    });
  }

  var elemBodies = createRectangles();
  var elemCircles = createCircles();
  var elemPills = createPills();

  function createBoundaries() {
    var w = matterBox.clientWidth, h = matterBox.clientHeight;

    var boundaries = [
      Bodies.rectangle(w / 2, h, w, 1, { isStatic: true, render: { opacity: 0 } }),
      Bodies.rectangle(0, h / 2, 1, h, { isStatic: true, render: { opacity: 0 } }),
      Bodies.rectangle(w, h / 2, 1, h, { isStatic: true, render: { opacity: 0 } }),
      Bodies.rectangle(w / 2, 0, w, 1, { isStatic: true, render: { opacity: 0 } }),
    ];

    Composite.add(engine.world, boundaries);
  }

  createBoundaries();

  var runner = Runner.create();

  var mouse = Mouse.create(render.canvas);
  var mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: { visible: false }
    }
  });

  Composite.add(engine.world, mouseConstraint);
  render.mouse = mouse;

  Events.on(engine, 'afterUpdate', function () {
    elemBodies.forEach((body, i) => updateElem(matterElems[i], body));
    elemCircles.forEach((body, i) => updateElem(matterCircle[i], body));
    elemPills.forEach((body, i) => updateElem(matterPill[i], body));
  });

  function updateElem(elem, body) {
    elem.style.left = (body.position.x - elem.offsetWidth / 2) + 'px';
    elem.style.top = (body.position.y - elem.offsetHeight / 2) + 'px';
    elem.style.transform = 'rotate(' + body.angle + 'rad)';
  }

  function handleResize() {
    Composite.clear(engine.world, false);
    createBoundaries();
    elemBodies = createRectangles();
    elemCircles = createCircles();
    elemPills = createPills();
    render.options.width = matterBox.clientWidth;
    render.options.height = matterBox.clientHeight;
  }

  window.addEventListener('resize', handleResize);

  var engineStarted = false;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !engineStarted) {
        engineStarted = true;
        Runner.run(runner, engine);
        Render.run(render);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(matterBox);
});
</script>
  <div class="dm-matter-elem-circle" style="width: 60px; height: 60px; background: green; border-radius: 50%;  background-image: url('https://res.cloudinary.com/dshelchrn/image/upload/v1747840696/unnamed_atnywx.png'); background-size: 60px;"></div>
  <div class="dm-matter-elem-circle" style="width: 60px; height: 60px; background: green; border-radius: 50%;  background-image: url('https://res.cloudinary.com/dshelchrn/image/upload/v1747840696/unnamed_atnywx.png'); background-size: 60px;"></div>
  <div class="dm-matter-elem-circle" style="width: 60px; height: 60px; background: green; border-radius: 50%;  background-image: url('https://res.cloudinary.com/dshelchrn/image/upload/v1747840696/unnamed_atnywx.png'); background-size: 60px;"></div>
  <div class="dm-matter-elem-circle" style="width: 60px; height: 60px; background: green; border-radius: 50%;  background-image: url('https://res.cloudinary.com/dshelchrn/image/upload/v1747840696/unnamed_atnywx.png'); background-size: 60px;"></div>
  <div class="dm-matter-elem-circle" style="width: 60px; height: 60px; background: green; border-radius: 50%;  background-image: url('https://res.cloudinary.com/dshelchrn/image/upload/v1747840696/unnamed_atnywx.png'); background-size: 60px;"></div>
  <div class="dm-matter-elem-circle" style="width: 60px; height: 60px; background: green; border-radius: 50%;  background-image: url('https://res.cloudinary.com/dshelchrn/image/upload/v1747840696/unnamed_atnywx.png'); background-size: 60px;"></div>
  <div class="dm-matter-elem-circle" style="width: 60px; height: 60px; background: green; border-radius: 50%;  background-image: url('https://res.cloudinary.com/dshelchrn/image/upload/v1747840696/unnamed_atnywx.png'); background-size: 60px;"></div>
  <div class="dm-matter-elem-circle" style="width: 60px; height: 60px; background: green; border-radius: 50%;  background-image: url('https://res.cloudinary.com/dshelchrn/image/upload/v1747840696/unnamed_atnywx.png'); background-size: 60px;"></div>
  <div class="dm-matter-elem-circle" style="width: 60px; height: 60px; background: green; border-radius: 50%;  background-image: url('https://res.cloudinary.com/dshelchrn/image/upload/v1747840696/unnamed_atnywx.png'); background-size: 60px;"></div>
  <div class="dm-matter-elem-circle" style="width: 60px; height: 60px; background: green; border-radius: 50%;  background-image: url('https://res.cloudinary.com/dshelchrn/image/upload/v1747840696/unnamed_atnywx.png'); background-size: 60px;"></div>
</div>
