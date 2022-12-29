import './index.scss'
import { useEffect } from 'react'

const Logo = () => {
  const texts = [
    'JavaScript', 'TypeScript',
    'HTML5','CSS','SCSS','MongoDB', 'React', 'Express',
    'NodeJS', 'Angular', 'Redux', 'RxJs', 'NgRx','Git','MUI'
  ];
  const counts = [1,2,4,5,4,2,];

  const options = {
    color: "white",
    tilt: Math.PI / 6,
    initialVelocityX: 0.2,
    initialVelocityY: 0.2,
    initialRotationX: Math.PI * 10,
    initialRotationZ: 1
  };

  function wordSphere(canvas, texts, counts, options) {
    const π = Math.PI; // happy math!
    const {
      width = 600,
      height = 600,
      radius = 150,
      padding = 20,
      fontSize = 22,
      tilt = 0,
      initialVelocityX = 1,
      initialVelocityY = 1,
      initialRotationX = 1,
      initialRotationZ = 1,
    } = options;

    let vx = initialVelocityX, vy = initialVelocityY;
    let rx = initialRotationX, rz = initialRotationZ;

    // canvas setup
    let ctx = canvas.getContext('2d');
    ctx.textAlign = 'center';

    // Hi-DPI support
    canvas.width = width * 2;
    canvas.height = height * 2;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(2,2);

    // scrolling
    let clicked = false, lastX, lastY;
    canvas.addEventListener('mousedown', event => {
      clicked = true;
      lastX = event.screenX;
      lastY = event.screenY;
    });
    canvas.addEventListener('mousemove', event => {
      if (!clicked) return;
      const [dx, dy] = [event.screenX - lastX, event.screenY - lastY];
      [lastX, lastY] = [event.screenX, event.screenY];

      // rotation update
      rz += -dy * 0.01;
      rx += dx * 0.01;

      // velocity update
      vx = dx * 0.1;
      vy = dy * 0.1;

      if (!looping) startLoop();
    });
    canvas.addEventListener('mouseup', e => clicked = false);
    canvas.addEventListener('mouseleave', e => clicked = false);

    function rot(x,y,t) {
      return [x*Math.cos(t)-y*Math.sin(t), x*Math.sin(t)+y*Math.cos(t)];
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let ix = 0, iz = 0, i = 1;
      for (const text of texts) {
        const degZ = (π/(counts.length-1)) * iz;
        const degX = (2*π/counts[iz]) * ix;

        let x = radius * Math.sin(degZ) * Math.cos(degX);
        let y = radius * Math.sin(degZ) * Math.sin(degX);
        let z = radius * Math.cos(degZ) + 8*(ix % 2) /* randomness */;

        // camera transform
        [y,z] = rot(y, z, tilt);
        [x,z] = rot(x, z, rz);
        [x,y] = rot(x, y, rx);

        // convert to cartesian and then draw.
        const alpha = 0.6 + 0.4 * (x/radius);
        const size = fontSize + 8 + 5*(x/radius);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.font = `${size}px "La Belle Aurore", sans-serif`;
        ctx.fillText(text, y + width/3, -z + height/3);

        ix--;
        if (ix < 0) {
          iz++;
          ix = counts[iz] - 1;
        }
        i++;
      }
    }

    // renderer
    let looping = false;
    function rendererLoop() {
      if (looping) window.requestAnimationFrame(rendererLoop);
      render();

      if (vx > 0) vx = vx - 0.01;
      if (vy > 0) vy = vy - 0.01;
      if (vx < 0) vx = vx + 0.01;
      if (vy > 0) vy = vy + 0.01;
      if (vx === 0 && vy === 0) stopLoop();

      rz += vy * 0.01;
      rx += vx * 0.01;
    }

    function startLoop() {
      looping = true;
      window.requestAnimationFrame(rendererLoop);
    }

    function stopLoop() {
      looping = false;
    }
    startLoop();
  }
  useEffect(()=>{
    const canvas =document.getElementById('canvas');
    wordSphere(canvas, texts, counts, options);

    // Clean up function to remove all listeners when component is destroyed
    return () =>{
      canvas.replaceWith(canvas.cloneNode(true));
    }
  },[])

  return (
    <div className='logo-container'>
    <canvas id="canvas"></canvas>
    </div>
    )
}

export default Logo
