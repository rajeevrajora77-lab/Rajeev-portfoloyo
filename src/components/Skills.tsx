import { useEffect, useRef, useState } from 'react';
import {
  Cloud, Container, Brain,
  LineChart, Code, Layers, Shield, Workflow
} from 'lucide-react';

const skillCategories = [
  {
    title: 'MLOps & ML Lifecycle',
    icon: Workflow,
    skills: [
      'Training & Deployment',
      'Monitoring & Versioning',
      'Retraining Pipelines',
      'Feature Engineering',
      'Drift Detection',
      'A/B Testing',
      'Model Governance',
    ],
    color: 'purple',
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    skills: [
      'AWS (EC2, S3, IAM, ELB)',
      'AutoScaling',
      'High Availability',
      'Terraform',
      'Infrastructure as Code',
    ],
    color: 'blue',
  },
  {
    title: 'DevOps & Orchestration',
    icon: Container,
    skills: [
      'Docker',
      'Kubernetes',
      'CI/CD (Jenkins)',
      'GitHub Actions',
      'Container Orchestration',
    ],
    color: 'green',
  },
  {
    title: 'AI / GenAI / ML',
    icon: Brain,
    skills: [
      'Large Language Models (LLMs)',
      'RAG Architecture',
      'Conversational AI',
      'Semantic Search',
      'NLP',
      'Image Processing',
      'Recommendation Systems',
    ],
    color: 'purple',
  },
  {
    title: 'MLOps Tooling',
    icon: Layers,
    skills: [
      'MLflow',
      'Apache Airflow',
      'Model Registries',
      'Feature Stores',
      'Pipeline Orchestration',
    ],
    color: 'cyan',
  },
  {
    title: 'Monitoring & Observability',
    icon: LineChart,
    skills: [
      'Prometheus',
      'Grafana',
      'ELK Stack',
      'Centralized Logging',
      'Alerting Systems',
      'Uptime Monitoring',
    ],
    color: 'orange',
  },
  {
    title: 'Programming & Data',
    icon: Code,
    skills: [
      'Python',
      'REST APIs',
      'Async Systems',
      'PostgreSQL',
      'Data Pipelines',
    ],
    color: 'pink',
  },
  {
    title: 'Security & Governance',
    icon: Shield,
    skills: [
      'IAM-based Access Control',
      'Model Governance',
      'Audit Trails',
      'Compliance',
      'Security Best Practices',
    ],
    color: 'red',
  },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.skill-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Technical Skills</h2>
        <p className="text-center text-muted-foreground mb-12">ATS-Optimized Expertise in AI/ML Engineering & MLOps</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              data-index={index}
              className="skill-card"
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul>
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}