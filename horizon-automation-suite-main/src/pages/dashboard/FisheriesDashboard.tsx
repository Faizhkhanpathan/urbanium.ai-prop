import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Waves, 
  Thermometer, 
  Droplets, 
  Wind,
  MapPin,
  Clock,
  Download,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

// Simulated real-time data
const phHistory = [
  { time: "06:00", value: 7.2 },
  { time: "08:00", value: 7.4 },
  { time: "10:00", value: 7.6 },
  { time: "12:00", value: 7.8 },
  { time: "14:00", value: 7.5 },
  { time: "16:00", value: 7.3 },
  { time: "18:00", value: 7.4 },
  { time: "Now", value: 7.5 },
];

const temperatureHistory = [
  { time: "06:00", value: 24.5 },
  { time: "08:00", value: 25.2 },
  { time: "10:00", value: 26.8 },
  { time: "12:00", value: 28.1 },
  { time: "14:00", value: 27.5 },
  { time: "16:00", value: 26.2 },
  { time: "18:00", value: 25.0 },
  { time: "Now", value: 24.8 },
];

const dissolvedOxygenHistory = [
  { time: "06:00", value: 6.8 },
  { time: "08:00", value: 7.2 },
  { time: "10:00", value: 7.5 },
  { time: "12:00", value: 7.8 },
  { time: "14:00", value: 7.4 },
  { time: "16:00", value: 7.1 },
  { time: "18:00", value: 6.9 },
  { time: "Now", value: 7.0 },
];

const turbidityHistory = [
  { time: "06:00", value: 15 },
  { time: "08:00", value: 18 },
  { time: "10:00", value: 22 },
  { time: "12:00", value: 25 },
  { time: "14:00", value: 20 },
  { time: "16:00", value: 17 },
  { time: "18:00", value: 14 },
  { time: "Now", value: 16 },
];

const ponds = [
  { id: "POND-A", name: "Pond Alpha", species: "Tilapia", status: "optimal", devices: 3 },
  { id: "POND-B", name: "Pond Beta", species: "Catfish", status: "optimal", devices: 2 },
  { id: "POND-C", name: "Pond Gamma", species: "Shrimp", status: "warning", devices: 3 },
  { id: "POND-D", name: "Pond Delta", species: "Tilapia", status: "optimal", devices: 2 },
];

interface GaugeProps {
  value: number;
  min: number;
  max: number;
  unit: string;
  label: string;
  status: "safe" | "warning" | "critical";
  icon: React.ElementType;
  trend?: "up" | "down" | "stable";
}

function Gauge({ value, min, max, unit, label, status, icon: Icon, trend }: GaugeProps) {
  const percentage = ((value - min) / (max - min)) * 100;
  const statusColors = {
    safe: "text-green-500",
    warning: "text-amber-500",
    critical: "text-red-500",
  };
  const statusBg = {
    safe: "bg-green-500",
    warning: "bg-amber-500",
    critical: "bg-red-500",
  };

  return (
    <div className="data-card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-lg bg-muted ${statusColors[status]}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{label}</p>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">{value}</span>
              <span className="text-sm text-muted-foreground">{unit}</span>
              {trend && (
                <span className={trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : "text-muted-foreground"}>
                  {trend === "up" ? <TrendingUp className="h-4 w-4" /> : trend === "down" ? <TrendingDown className="h-4 w-4" /> : null}
                </span>
              )}
            </div>
          </div>
        </div>
        <Badge variant={status === "safe" ? "default" : status === "warning" ? "secondary" : "destructive"}>
          {status === "safe" ? <CheckCircle2 className="h-3 w-3 mr-1" /> : <AlertTriangle className="h-3 w-3 mr-1" />}
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>
      
      {/* Progress Bar */}
      <div className="relative h-3 bg-muted rounded-full overflow-hidden">
        <div 
          className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ${statusBg[status]}`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
        {/* Safe Range Indicator */}
        <div className="absolute top-0 h-full w-px bg-green-500/50" style={{ left: "30%" }} />
        <div className="absolute top-0 h-full w-px bg-green-500/50" style={{ left: "70%" }} />
      </div>
      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
        <span>{min}</span>
        <span className="text-green-500">Safe Range</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

const FisheriesDashboard = () => {
  return (
    <div className="min-h-screen">
      <DashboardHeader 
        title="Fisheries Monitoring Dashboard" 
        subtitle="Real-time water quality monitoring for aquaculture operations"
      />
      
      <div className="p-6 space-y-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              <span>Pond Alpha - Tilapia Farm</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Last updated: Just now</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Real-time Sensor Gauges */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Gauge 
            value={7.5}
            min={6.0}
            max={9.0}
            unit="pH"
            label="pH Level"
            status="safe"
            icon={Waves}
            trend="stable"
          />
          <Gauge 
            value={24.8}
            min={15}
            max={35}
            unit="°C"
            label="Water Temperature"
            status="safe"
            icon={Thermometer}
            trend="down"
          />
          <Gauge 
            value={7.0}
            min={4}
            max={12}
            unit="mg/L"
            label="Dissolved Oxygen"
            status="safe"
            icon={Wind}
            trend="up"
          />
          <Gauge 
            value={16}
            min={0}
            max={50}
            unit="NTU"
            label="Turbidity"
            status="safe"
            icon={Droplets}
            trend="down"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* pH Chart */}
          <div className="data-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">pH Level Trend (24h)</h3>
              <Badge variant="secondary">Optimal: 6.5 - 8.5</Badge>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={phHistory}>
                  <defs>
                    <linearGradient id="phGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="time" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis domain={[6, 9]} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--accent))" 
                    strokeWidth={2}
                    fill="url(#phGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Temperature Chart */}
          <div className="data-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Temperature Trend (24h)</h3>
              <Badge variant="secondary">Optimal: 22°C - 28°C</Badge>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={temperatureHistory}>
                  <defs>
                    <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="time" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis domain={[20, 32]} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#f97316" 
                    strokeWidth={2}
                    fill="url(#tempGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Dissolved Oxygen Chart */}
          <div className="data-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Dissolved Oxygen (24h)</h3>
              <Badge variant="secondary">Optimal: 5+ mg/L</Badge>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dissolvedOxygenHistory}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="time" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis domain={[4, 10]} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#22c55e" 
                    strokeWidth={2}
                    dot={{ fill: '#22c55e' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Turbidity Chart */}
          <div className="data-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Turbidity (24h)</h3>
              <Badge variant="secondary">Optimal: &lt;25 NTU</Badge>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={turbidityHistory}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="time" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <YAxis domain={[0, 40]} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    dot={{ fill: '#3b82f6' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Ponds Overview */}
        <div className="data-card">
          <h3 className="font-semibold text-foreground mb-4">All Ponds Overview</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ponds.map((pond) => (
              <div 
                key={pond.id}
                className="p-4 rounded-xl border border-border hover:border-accent/30 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <Badge 
                    variant={pond.status === "optimal" ? "default" : "secondary"}
                    className="capitalize"
                  >
                    {pond.status}
                  </Badge>
                  <code className="text-xs text-muted-foreground">{pond.id}</code>
                </div>
                <h4 className="font-semibold text-foreground">{pond.name}</h4>
                <p className="text-sm text-muted-foreground">{pond.species}</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                  <Waves className="h-3 w-3" />
                  {pond.devices} sensors active
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FisheriesDashboard;
