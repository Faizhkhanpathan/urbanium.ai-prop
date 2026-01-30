import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { 
  Cpu, 
  Wifi, 
  WifiOff, 
  AlertTriangle, 
  Activity,
  Thermometer,
  Droplets,
  Zap
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const stats = [
  { label: "Total Devices", value: "24", icon: Cpu, trend: "+2 this week" },
  { label: "Online", value: "21", icon: Wifi, trend: "87.5% uptime" },
  { label: "Offline", value: "3", icon: WifiOff, trend: "Check alerts" },
  { label: "Alerts", value: "5", icon: AlertTriangle, trend: "2 critical" },
];

const recentActivity = [
  { id: 1, device: "Smart Switch #12", action: "Status changed to Online", time: "2 min ago", type: "info" },
  { id: 2, device: "AquaSense Probe #3", action: "pH level warning: 8.2", time: "15 min ago", type: "warning" },
  { id: 3, device: "IoTHub Gateway", action: "Firmware updated to v2.1.4", time: "1 hour ago", type: "success" },
  { id: 4, device: "TempSensor #8", action: "Temperature: 42°C exceeded", time: "2 hours ago", type: "critical" },
  { id: 5, device: "LumiPro Controller", action: "Schedule executed: Night Mode", time: "3 hours ago", type: "info" },
];

const chartData = [
  { time: "00:00", devices: 20, alerts: 1 },
  { time: "04:00", devices: 19, alerts: 0 },
  { time: "08:00", devices: 22, alerts: 2 },
  { time: "12:00", devices: 24, alerts: 3 },
  { time: "16:00", devices: 23, alerts: 1 },
  { time: "20:00", devices: 21, alerts: 2 },
  { time: "Now", devices: 21, alerts: 5 },
];

const quickMetrics = [
  { label: "Avg Temperature", value: "24.5°C", icon: Thermometer, color: "text-orange-500" },
  { label: "Water Quality", value: "Good", icon: Droplets, color: "text-blue-500" },
  { label: "Power Usage", value: "2.4 kWh", icon: Zap, color: "text-yellow-500" },
  { label: "System Health", value: "98%", icon: Activity, color: "text-green-500" },
];

const DashboardHome = () => {
  return (
    <div className="min-h-screen">
      <DashboardHeader 
        title="Dashboard" 
        subtitle="Welcome back, John. Here's your IoT overview."
      />
      
      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="data-card"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.trend}</p>
                </div>
                <div className="p-2 rounded-lg bg-accent/10">
                  <stat.icon className="h-5 w-5 text-accent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts and Activity */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chart */}
          <div className="lg:col-span-2 data-card">
            <h3 className="font-semibold text-foreground mb-4">Device Activity (24h)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="time" className="text-xs" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <YAxis className="text-xs" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="devices" 
                    stroke="hsl(var(--accent))" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--accent))' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="alerts" 
                    stroke="hsl(var(--destructive))" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--destructive))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="space-y-4">
            {quickMetrics.map((metric) => (
              <div key={metric.label} className="data-card">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-muted ${metric.color}`}>
                    <metric.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                    <p className="text-lg font-semibold text-foreground">{metric.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="data-card">
          <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity) => (
              <div 
                key={activity.id}
                className="flex items-center justify-between py-3 border-b border-border last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'critical' ? 'bg-red-500' :
                    activity.type === 'warning' ? 'bg-amber-500' :
                    activity.type === 'success' ? 'bg-green-500' :
                    'bg-blue-500'
                  }`} />
                  <div>
                    <p className="text-sm font-medium text-foreground">{activity.device}</p>
                    <p className="text-xs text-muted-foreground">{activity.action}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
