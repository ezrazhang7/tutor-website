"use client";
import { useState, useEffect } from "react";

const greetings = [
  "Hello",    // English
  "你好",      // Chinese
  "Hola",     // Spanish
  "안녕하세요",  // Korean
  "Bonjour",  // French
  "Привет",     // Russian
  "こんにちは",  // Japanese
];

export default function CyclingGreeting() {
  const [{ cur, prev, tick }, setState] = useState({ cur: 0, prev: null, tick: 0 });

  useEffect(() => {
    const id = setInterval(() => {
      setState((s) => ({
        cur: (s.cur + 1) % greetings.length,
        prev: s.cur,
        tick: s.tick + 1,
      }));
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="cycling-greeting" aria-label="Hello">
      {prev !== null && (
        <span key={`p${tick}`} className="cycling-greeting-word is-exiting">
          {greetings[prev]}
        </span>
      )}
      <span key={`c${tick}`} className="cycling-greeting-word is-entering">
        {greetings[cur]}
      </span>
    </span>
  );
}
