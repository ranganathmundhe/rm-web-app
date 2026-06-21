import { useEffect, useState, useRef } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
  trigger?: boolean;
}

const chars = '!<>-_\\/[]{}—=+*^?#________';

export default function TextScramble({ text, className = '', speed = 30, trigger = true }: TextScrambleProps) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(0);
  const queueRef = useRef<{ from: string; to: string; start: number; end: number; char: string }[]>([]);
  const frameRequestRef = useRef(0);

  useEffect(() => {
    if (!trigger) return;

    const queue: typeof queueRef.current = [];
    const oldText = display;
    const newText = text;
    const length = Math.max(oldText.length, newText.length);

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      queue.push({ from, to, start, end, char: '' });
    }
    queueRef.current = queue;

    let frame = 0;
    const update = () => {
      let output = '';
      let complete = 0;

      for (let i = 0; i < queueRef.current.length; i++) {
        const { from, to, start, end } = queueRef.current[i];
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!queueRef.current[i].char || Math.random() < 0.28) {
            queueRef.current[i].char = chars[Math.floor(Math.random() * chars.length)];
          }
          output += `<span class="text-primary/70">${queueRef.current[i].char}</span>`;
        } else {
          output += from;
        }
      }

      setDisplay(output);
      frameRequestRef.current = requestAnimationFrame(() => {
        if (complete < queueRef.current.length) {
          frame++;
          frameRef.current = frame;
          update();
        }
      });
    };

    frameRef.current = 0;
    update();

    return () => {
      cancelAnimationFrame(frameRequestRef.current);
    };
  }, [text, trigger, speed]);

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: display }}
    />
  );
}
