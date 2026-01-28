import { useEffect, useRef } from 'react';

const CircuitBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Circuit nodes
    const nodes: { x: number; y: number; connections: number[]; active: boolean; pulsePhase: number }[] = [];
    const gridSize = 80;
    const cols = Math.ceil(canvas.width / gridSize) + 1;
    const rows = Math.ceil(canvas.height / gridSize) + 1;

    // Create grid of nodes
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (Math.random() > 0.6) {
          nodes.push({
            x: i * gridSize + (Math.random() - 0.5) * 20,
            y: j * gridSize + (Math.random() - 0.5) * 20,
            connections: [],
            active: Math.random() > 0.7,
            pulsePhase: Math.random() * Math.PI * 2,
          });
        }
      }
    }

    // Create connections
    nodes.forEach((node, index) => {
      nodes.forEach((other, otherIndex) => {
        if (index !== otherIndex) {
          const dist = Math.hypot(node.x - other.x, node.y - other.y);
          if (dist < gridSize * 1.5 && Math.random() > 0.5) {
            node.connections.push(otherIndex);
          }
        }
      });
    });

    // Signal particles
    const signals: { fromNode: number; toNode: number; progress: number; speed: number }[] = [];

    const animate = () => {
      ctx.fillStyle = 'rgba(6, 10, 15, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      // Draw connections
      ctx.strokeStyle = 'rgba(0, 200, 255, 0.08)';
      ctx.lineWidth = 1;
      nodes.forEach((node, index) => {
        node.connections.forEach(connIndex => {
          const other = nodes[connIndex];
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        });
      });

      // Draw and update signals
      signals.forEach((signal, index) => {
        signal.progress += signal.speed;
        if (signal.progress >= 1) {
          signals.splice(index, 1);
          return;
        }

        const from = nodes[signal.fromNode];
        const to = nodes[signal.toNode];
        const x = from.x + (to.x - from.x) * signal.progress;
        const y = from.y + (to.y - from.y) * signal.progress;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 6);
        gradient.addColorStop(0, 'rgba(0, 255, 150, 0.8)');
        gradient.addColorStop(1, 'rgba(0, 255, 150, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
      });

      // Add new signals randomly
      if (Math.random() > 0.97 && signals.length < 15) {
        const activeNodes = nodes.filter(n => n.connections.length > 0);
        if (activeNodes.length > 0) {
          const randomNode = nodes.indexOf(activeNodes[Math.floor(Math.random() * activeNodes.length)]);
          const node = nodes[randomNode];
          if (node.connections.length > 0) {
            signals.push({
              fromNode: randomNode,
              toNode: node.connections[Math.floor(Math.random() * node.connections.length)],
              progress: 0,
              speed: 0.02 + Math.random() * 0.02,
            });
          }
        }
      }

      // Draw nodes
      nodes.forEach(node => {
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.5 + 0.5;
        const alpha = node.active ? 0.4 + pulse * 0.4 : 0.15;
        const size = node.active ? 2 + pulse : 1.5;

        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, size * 3);
        gradient.addColorStop(0, `rgba(0, 200, 255, ${alpha})`);
        gradient.addColorStop(1, 'rgba(0, 200, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(0, 200, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default CircuitBackground;
