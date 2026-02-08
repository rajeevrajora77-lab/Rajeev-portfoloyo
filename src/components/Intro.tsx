import { useEffect, useState, useRef } from 'react';
import { Zap, SkipForward, Terminal, Activity, Cpu, Cloud, Database, Shield } from 'lucide-react';

interface IntroProps {
  onEnter: () => void;
}

const lines = [
  "Initializing AION Neural Boot Sequence...",
  "Loading: MLOps pipelines ✔",
  "Loading: AWS Infrastructure ✔",
  "Loading: Kubernetes Orchestration ✔",
  "Loading: Observability Layer ✔",
  "Loading: GenAI Modules (LLMs) ✔",
  "Loading: RAG + Semantic Search ✔",
  "Loading: Low-Latency Inference ✔",
  "Loading: Governance & Auditing ✔",
  "",
  "User: Er Rajeev Kumar",
  "Role: AI/ML Engineer — MLOps | GenAI Systems | Cloud AI",
  "Location: Bengaluru, India",
  "",
  "System Ready. Press ENTER to proceed."
];

export function Intro({ onEnter }: IntroProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const termRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 86) return 86;
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setIsComplete(true);
      setProgress(100);
      return;
    }

    const targetLine = lines[currentLine];
    if (currentChar < targetLine.length) {
      const timeout = setTimeout(() => {
        setCurrentChar(prev => prev + 1);
      }, 12);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => [...prev, targetLine]);
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar]);

  useEffect(() => {
    if (termRef.current) {
      termRef.current.scrollTop = termRef.current.scrollHeight;
    }
  }, [displayedLines, currentChar]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onEnter]);

  const currentDisplayLine = lines[currentLine]?.slice(0, currentChar) || '';

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold">Er Rajeev Kumar</h1>
        <p className="text-sm text-muted-foreground">AI/ML Engineer — MLOps | GenAI Systems | Cloud AI</p>
        <span className={`text-xs ${isComplete ? 'text-green-500' : 'text-yellow-500'}`}>
          {isComplete ? 'READY' : 'BOOTING…'}
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-hidden">
        {/* Terminal */}
        <div className="terminal" ref={termRef}>
          <div className="mb-2">rajora@aion:~$</div>
          {displayedLines.map((line, i) => (
            <div key={i}>{line || '\u00A0'}</div>
          ))}
          {currentLine < lines.length && (
            <div>{currentDisplayLine}</div>
          )}
        </div>

        {/* Stats Panel */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">System Integrity</h3>
          <div className="space-y-2">
            <div><Cloud /> AWS • Terraform • K8s</div>
            <div><Brain /> LLMs • RAG • Search</div>
            <div><Activity /> Uptime: 99.5%–99.7%</div>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-2">Deployment Readiness</div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="text-sm text-right">{progress}%</div>
        </div>

        <div className="mt-8 flex gap-4">
          <button onClick={onEnter} className="btn btn-primary">
            <Zap className="mr-2" /> Enter Portfolio
          </button>
          <button onClick={onEnter} className="btn btn-secondary">
            <SkipForward className="mr-2" /> Skip Intro
          </button>
        </div>
      </div>
    </div>
  );
}