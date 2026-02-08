import { useEffect, useRef } from 'react';
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

    const cards = sectionRef.current?.querySelectorAll('.skill-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Technical Skills</h2>
        <p className="text-center text-muted-foreground mb-12">ATS-Optimized Expertise in AI/ML Engineering & MLOps</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                data-index={index}
                className="skill-card p-6 rounded-lg border bg-card hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <IconComponent className="w-5 h-5" />
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{skill}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}