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
    <div className="min-h-screen bg-background">
      <DashboardHeader 
        title="Dashboard" 
        subtitle="Welcome back, John. Here's your IoT overview."
      />
      
      <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 lg:space-y-8">
        {/* Stats Grid - Single column mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="data-card p-4 sm:p-6 lg:p-8 rounded-xl border shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-base text-muted-foreground font-medium mb-2">{stat.label}</p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium">{stat.trend}</p>
                </div>
                <div className="p-3 sm:p-4 rounded-xl bg-accent/10 flex-shrink-0">
                  <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts and Quick Metrics - Full width chart on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Chart - Full width on mobile & tablet */}
          <div className="lg:col-span-2 data-card p-4 sm:p-6 lg:p-8 rounded-xl border shadow-sm">
            <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl text-foreground mb-4 sm:mb-6">Device Activity (24h)</h3>
            <div className="h-60 sm:h-72 lg:h-80 xl:h-96 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis 
                    dataKey="time" 
                    className="text-xs sm:text-sm" 
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    className="text-xs sm:text-sm" 
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                    tickLine={false}
                    axisLine={false}
                    width={45}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="devices" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                    name="Active Devices"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="alerts" 
                    stroke="hsl(var(--destructive))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--destructive))', strokeWidth: 2, r: 4 }}
                    name="Alerts"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Metrics - Stacked column on mobile */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {quickMetrics.map((metric) => (
              <div key={metric.label} className="data-card p-4 sm:p-6 lg:p-8 rounded-xl border shadow-sm hover:shadow-md transition-all duration-200">
                <div className="flex items-start gap-4 sm:gap-5 h-full">
                  <div className={`p-3 sm:p-4 rounded-xl bg-muted/50 flex-shrink-0 ${metric.color}`}>
                    <metric.icon className="h-6 w-6 sm:h-7 sm:w-7 flex-shrink-0" />
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <p className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium mb-2 line-clamp-2">{metric.label}</p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground leading-tight">{metric.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity - Scrollable on mobile */}
        <div className="data-card p-4 sm:p-6 lg:p-8 rounded-xl border shadow-sm">
          <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl text-foreground mb-4 sm:mb-6">Recent Activity</h3>
          <div className="space-y-3 sm:space-y-4 max-h-96 lg:max-h-none overflow-y-auto lg:overflow-visible">
            {recentActivity.map((activity) => (
              <div 
                key={activity.id}
                className="flex items-start lg:items-center justify-between py-4 px-2 lg:px-0 border-b border-border/50 last:border-b-0 hover:bg-accent/50 rounded-xl transition-all duration-200 group"
              >
                <div className="flex items-start gap-3 lg:gap-4 flex-1 min-w-0">
                  <div className={`w-3 h-3 lg:w-2.5 lg:h-2.5 rounded-full flex-shrink-0 mt-1 lg:mt-0.5 transition-all duration-200 ${
                    activity.type === 'critical' ? 'bg-destructive' :
                    activity.type === 'warning' ? 'bg-yellow-500' :
                    activity.type === 'success' ? 'bg-green-500' :
                    'bg-primary'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm lg:text-base font-semibold text-foreground line-clamp-1 group-hover:text-accent transition-colors">
                      {activity.device}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 mt-1">
                      {activity.action}
                    </p>
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground ml-4 flex-shrink-0 min-w-[75px] lg:min-w-[80px] text-right">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
