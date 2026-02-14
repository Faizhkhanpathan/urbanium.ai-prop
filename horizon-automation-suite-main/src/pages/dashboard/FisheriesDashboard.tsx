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
    safe: "text-green-500 bg-green-500/10",
    warning: "text-amber-500 bg-amber-500/10", 
    critical: "text-red-500 bg-red-500/10",
  };
  const statusBg = {
    safe: "bg-green-500",
    warning: "bg-amber-500",
    critical: "bg-red-500",
  };

  return (
    <div className="data-card p-4 sm:p-6 lg:p-8 rounded-2xl border shadow-sm hover:shadow-md transition-all h-full">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-3 lg:gap-4">
        <div className="flex items-center gap-3 flex-1">
          <div className={`p-2 sm:p-3 rounded-xl ${statusColors[status]}`}>
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium mb-1">{label}</p>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight">{value}</span>
              <span className="text-sm sm:text-base text-muted-foreground font-medium">{unit}</span>
              {trend && (
                <span className={`flex items-center ${
                  trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : "text-muted-foreground"
                }`}>
                  {trend === "up" ? <TrendingUp className="h-4 w-4" /> : trend === "down" ? <TrendingDown className="h-4 w-4" /> : null}
                </span>
              )}
            </div>
          </div>
        </div>
        <Badge 
          variant={status === "safe" ? "default" : status === "warning" ? "secondary" : "destructive"}
          className="whitespace-nowrap"
        >
          {status === "safe" ? <CheckCircle2 className="h-3 w-3 mr-1" /> : <AlertTriangle className="h-3 w-3 mr-1" />}
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>
      
      <div className="space-y-2">
        <div className="relative h-2.5 sm:h-3 bg-muted rounded-full overflow-hidden">
          <div 
            className={`absolute left-0 top-0 h-full rounded-full transition-all duration-500 ${statusBg[status]}`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
          <div className="absolute top-0 h-full w-px bg-green-500/50" style={{ left: "30%" }} />
          <div className="absolute top-0 h-full w-px bg-green-500/50" style={{ left: "70%" }} />
        </div>
        <div className="flex justify-between text-xs sm:text-sm text-muted-foreground">
          <span>{min}</span>
          <span className="text-green-500 font-medium">Safe Range</span>
          <span>{max}</span>
        </div>
      </div>
    </div>
  );
}

const FisheriesDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader 
        title="Fisheries Monitoring" 
        subtitle="Real-time water quality monitoring for aquaculture operations"
      />
      
      <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 lg:space-y-8">
        {/* Header Actions */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground bg-card/50 px-3 py-2 rounded-xl">
              <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
              <span className="truncate">Pond Alpha - Tilapia Farm</span>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground bg-card/50 px-3 py-2 rounded-xl">
              <Clock className="h-4 w-4 flex-shrink-0" />
              <span>Last updated: Just now</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-start lg:justify-end">
            <Button variant="outline" size="sm" className="h-10 px-4 sm:px-6">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button variant="outline" size="sm" className="h-10 px-4 sm:px-6">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Gauges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <Gauge value={7.5} min={6.0} max={9.0} unit="pH" label="pH Level" status="safe" icon={Waves} trend="stable" />
          <Gauge value={24.8} min={15} max={35} unit="°C" label="Water Temperature" status="safe" icon={Thermometer} trend="down" />
          <Gauge value={7.0} min={4} max={12} unit="mg/L" label="Dissolved Oxygen" status="safe" icon={Wind} trend="up" />
          <Gauge value={16} min={0} max={50} unit="NTU" label="Turbidity" status="safe" icon={Droplets} trend="down" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* pH Chart */}
          <div className="data-card p-4 sm:p-6 lg:p-8 rounded-2xl border shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
              <h3 className="font-semibold text-lg sm:text-xl text-foreground">pH Level Trend (24h)</h3>
              <Badge variant="secondary" className="whitespace-nowrap">Optimal: 6.5-8.5</Badge>
            </div>
            <div className="h-56 sm:h-72 lg:h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={phHistory}>
                  <defs>
                    <linearGradient id="phGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="time" tick={{ fill: 'hsl(var(--muted-foreground))' }} tickLine={false} axisLine={false} />
                  <YAxis domain={[6, 9]} tick={{ fill: 'hsl(var(--muted-foreground))' }} tickLine={false} axisLine={false} width={45} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '12px' }} />
                  <Area type="monotone" dataKey="value" stroke="hsl(var(--accent))" strokeWidth={2} fill="url(#phGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Temperature Chart */}
          <div className="data-card p-4 sm:p-6 lg:p-8 rounded-2xl border shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
              <h3 className="font-semibold text-lg sm:text-xl text-foreground">Temperature Trend (24h)</h3>
              <Badge variant="secondary" className="whitespace-nowrap">Optimal: 22-28°C</Badge>
            </div>
            <div className="h-56 sm:h-72 lg:h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={temperatureHistory}>
                  <defs>
                    <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="time" tick={{ fill: 'hsl(var(--muted-foreground))' }} tickLine={false} axisLine={false} />
                  <YAxis domain={[20, 32]} tick={{ fill: 'hsl(var(--muted-foreground))' }} tickLine={false} axisLine={false} width={45} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '12px' }} />
                  <Area type="monotone" dataKey="value" stroke="#f97316" strokeWidth={2} fill="url(#tempGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Dissolved Oxygen Chart */}
          <div className="data-card p-4 sm:p-6 lg:p-8 rounded-2xl border shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
              <h3 className="font-semibold text-lg sm:text-xl text-foreground">Dissolved Oxygen Trend (24h)</h3>
              <Badge variant="secondary" className="whitespace-nowrap">Optimal: 5-8 mg/L</Badge>
            </div>
            <div className="h-56 sm:h-72 lg:h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dissolvedOxygenHistory}>
                  <defs>
                    <linearGradient id="doGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="time" tick={{ fill: 'hsl(var(--muted-foreground))' }} tickLine={false} axisLine={false} />
                  <YAxis domain={[6, 8]} tick={{ fill: 'hsl(var(--muted-foreground))' }} tickLine={false} axisLine={false} width={45} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '12px' }} />
                  <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} fill="url(#doGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Turbidity Chart */}
          <div className="data-card p-4 sm:p-6 lg:p-8 rounded-2xl border shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
              <h3 className="font-semibold text-lg sm:text-xl text-foreground">Turbidity Trend (24h)</h3>
              <Badge variant="secondary" className="whitespace-nowrap">Optimal: 0-30 NTU</Badge>
            </div>
            <div className="h-56 sm:h-72 lg:h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={turbidityHistory}>
                  <defs>
                    <linearGradient id="turbidityGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="time" tick={{ fill: 'hsl(var(--muted-foreground))' }} tickLine={false} axisLine={false} />
                  <YAxis domain={[0, 30]} tick={{ fill: 'hsl(var(--muted-foreground))' }} tickLine={false} axisLine={false} width={45} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '12px' }} />
                  <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} fill="url(#turbidityGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Pond Status Table */}
        <div className="data-card p-4 sm:p-6 lg:p-8 rounded-2xl border shadow-sm overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
            <h3 className="font-semibold text-lg sm:text-xl text-foreground">Pond Status Overview</h3>
            <Badge variant="outline" className="whitespace-nowrap">
              4 Ponds • 10 Devices
            </Badge>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-full">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-3 px-0 font-semibold text-foreground text-sm">Pond</th>
                    <th className="text-left py-3 px-0 font-semibold text-foreground text-sm">Species</th>
                    <th className="text-left py-3 px-0 font-semibold text-foreground text-sm">Status</th>
                    <th className="text-left py-3 px-0 font-semibold text-foreground text-sm">Devices</th>
                  </tr>
                </thead>
                <tbody>
                  {ponds.map((pond) => (
                    <tr key={pond.id} className="border-b border-border/20 hover:bg-accent/50 transition-colors">
                      <td className="py-4 px-0 font-medium text-foreground">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm">{pond.id}</span>
                          </div>
                          <span>{pond.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-0 text-muted-foreground">{pond.species}</td>
                      <td className="py-4 px-0">
                        <Badge 
                          variant={pond.status === "optimal" ? "default" : "secondary"}
                          className="whitespace-nowrap"
                        >
                          {pond.status === "optimal" ? <CheckCircle2 className="h-3 w-3 mr-1" /> : <AlertTriangle className="h-3 w-3 mr-1" />}
                          {pond.status.charAt(0).toUpperCase() + pond.status.slice(1)}
                        </Badge>
                      </td>
                      <td className="py-4 px-0 font-mono text-sm bg-muted/50 px-3 py-1 rounded-lg">
                        {pond.devices}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FisheriesDashboard;
