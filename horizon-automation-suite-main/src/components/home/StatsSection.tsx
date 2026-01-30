import { Building, Users, Globe, Zap } from "lucide-react";

const stats = [
  {
    icon: Building,
    value: "500+",
    label: "Projects Deployed",
    description: "Across residential & commercial sectors",
  },
  {
    icon: Users,
    value: "10K+",
    label: "Devices Connected",
    description: "Real-time monitoring & control",
  },
  {
    icon: Globe,
    value: "25+",
    label: "Countries",
    description: "Global presence & support",
  },
  {
    icon: Zap,
    value: "99.9%",
    label: "Uptime",
    description: "Enterprise-grade reliability",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                <stat.icon className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
