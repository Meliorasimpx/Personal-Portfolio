import { useState, useEffect } from "react";

type TerminalTextProps = {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  className?: string;
  showCursor?: boolean;
};

const TerminalText = ({
  text,
  speed = 30,
  delay = 0,
  onComplete,
  className = "",
  showCursor = true,
}: TerminalTextProps) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setDone(true);
      onComplete?.();
    }
  }, [started, displayed, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayed}
      {showCursor && !done && <span className="typing-cursor" />}
    </span>
  );
};

export default TerminalText;
