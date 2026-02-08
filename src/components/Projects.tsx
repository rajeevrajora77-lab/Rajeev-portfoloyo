import { useEffect, useRef, useState } from 'react';
import {
  Layers, Users,
  TrendingUp, Activity, Database, Cpu
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    title: 'AION v1',
    subtitle: 'Production AI Platform',
    description: 'Multi-user AI web application featuring chat, embedding-based semantic search, voice interaction, session memory, and governance layers.',
    longDescription: `AION v1 is a comprehensive AI SaaS platform designed for enterprise use. It features real-time multi-user chat capabilities, advanced semantic search powered by embedding vectors, and seamless voice interaction through speech-to-text and text-to-speech integration.\n\nKey Features:\n\n• Real-time chat with context-aware responses\n• Semantic search using vector embeddings\n• Voice interaction pipeline (STT → LLM → TTS)\n• Multi-user concurrency support\n• Session memory and context retention\n• Governance and audit layers for compliance`,
    image: '/project-aion.jpg',
    tags: ['AI SaaS', 'Semantic Search', 'Voice AI', 'Multi-user'],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'OpenAI', 'LangChain'],
    metrics: [
      { label: 'Uptime', value: '99.7%', icon: Activity },
      { label: 'Users', value: '1000+', icon: Users },
      { label: 'Latency', value: '<250ms', icon: Cpu },
    ],
    links: {
      demo: 'https://rajora.co.in',
      github: 'https://github.com/rajeevrajora77-lab',
    },
    featured: true,
  },
  {
    id: 2,
    title: 'Predictive Analytics Engine',
    subtitle: 'Forecasting & Inference Platform',
    description: 'Automated forecasting models, data pipelines, and real-time inference APIs with performance dashboards.',
    longDescription: `A robust predictive analytics platform that automates the entire ML lifecycle from data ingestion to model deployment and monitoring. Built for high-throughput real-time inference with comprehensive observability.\n\nKey Features:\n\n• Automated forecasting pipelines\n• Real-time inference APIs\n• Performance monitoring dashboards\n• A/B testing framework\n• Model versioning and rollback\n• Drift detection and alerting`,
    image: '/project-forecast.jpg',
    tags: ['Forecasting', 'Real-time API', 'Monitoring', 'Data Pipelines'],
    tech: ['Python', 'TensorFlow', 'Apache Airflow', 'MLflow', 'Prometheus', 'Grafana'],
    metrics: [
      { label: 'Accuracy', value: '+25%', icon: TrendingUp },
      { label: 'Throughput', value: '10K/min', icon: Database },
      { label: 'Models', value: '50+', icon: Layers },
    ],
    links: {
      demo: 'https://rajora.co.in',
      github: 'https://github.com/rajeevrajora77-lab',
    },
    featured: true,
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.project-card');
    cards?.forEach((card, index) => {
      card.setAttribute('data-index', index.toString());
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Project Gallery</h2>
        <p className="text-center text-muted-foreground mb-12">Production-Grade AI Systems I've Built</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card p-6 rounded-lg border bg-card hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">{tag}</span>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent>
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.subtitle}</DialogDescription>
              </DialogHeader>
              {selectedProject.longDescription.split('\n\n').map((para, i) => (
                <p key={i} className="mb-4">{para}</p>
              ))}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}