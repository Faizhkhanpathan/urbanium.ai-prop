import { useState } from "react";
import { Link } from "react-router-dom";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Cpu, 
  Wifi, 
  WifiOff, 
  Clock, 
  MoreVertical,
  Plus,
  Grid,
  List,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";

const devices = [
  { id: "DEV-001", name: "Smart Switch #12", type: "Switch", status: "online", lastUpdate: "2 min ago", location: "Living Room" },
  { id: "DEV-002", name: "AquaSense Probe #1", type: "Fisheries", status: "online", lastUpdate: "5 min ago", location: "Pond A" },
  { id: "DEV-003", name: "LumiPro Controller", type: "Lighting", status: "online", lastUpdate: "1 min ago", location: "Office Floor 2" },
  { id: "DEV-004", name: "TempSensor #8", type: "Sensor", status: "offline", lastUpdate: "2 hours ago", location: "Server Room" },
  { id: "DEV-005", name: "IoTHub Gateway", type: "Gateway", status: "online", lastUpdate: "Just now", location: "Main Building" },
  { id: "DEV-006", name: "AquaSense Probe #2", type: "Fisheries", status: "online", lastUpdate: "3 min ago", location: "Pond B" },
  { id: "DEV-007", name: "Smart Switch #15", type: "Switch", status: "offline", lastUpdate: "45 min ago", location: "Conference Room" },
  { id: "DEV-008", name: "MotionDetect PIR", type: "Sensor", status: "online", lastUpdate: "10 min ago", location: "Entrance" },
  { id: "DEV-009", name: "AquaSense Probe #3", type: "Fisheries", status: "warning", lastUpdate: "1 min ago", location: "Pond C" },
  { id: "DEV-010", name: "Climate Controller", type: "HVAC", status: "online", lastUpdate: "8 min ago", location: "Building A" },
];

const Devices = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDevices = devices.filter(device => 
    device.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    device.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    device.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <DashboardHeader 
        title="My Devices" 
        subtitle="Manage and monitor all your connected IoT devices"
      />
      
      <div className="p-6 space-y-6">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search devices by name, ID, or location..." 
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center border border-border rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${viewMode === "grid" ? "bg-muted" : ""}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${viewMode === "list" ? "bg-muted" : ""}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
            <Button variant="teal">
              <Plus className="h-4 w-4 mr-2" />
              Add Device
            </Button>
          </div>
        </div>

        {/* Devices Grid */}
        {viewMode === "grid" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredDevices.map((device) => (
              <Link 
                key={device.id}
                to={device.type === "Fisheries" ? "/dashboard/fisheries" : `/dashboard/devices/${device.id}`}
                className="data-card group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Cpu className="h-5 w-5 text-accent" />
                  </div>
                  <button className="p-1 rounded hover:bg-muted opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
                
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                  {device.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">{device.location}</p>
                
                <div className="flex items-center justify-between">
                  <Badge 
                    variant={device.status === "online" ? "default" : device.status === "warning" ? "secondary" : "destructive"}
                    className="capitalize"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                      device.status === "online" ? "bg-green-400" :
                      device.status === "warning" ? "bg-amber-400" :
                      "bg-red-400"
                    }`} />
                    {device.status}
                  </Badge>
                  <code className="text-xs text-muted-foreground">{device.id}</code>
                </div>
                
                <div className="flex items-center gap-1 mt-3 pt-3 border-t border-border text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {device.lastUpdate}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="data-card overflow-hidden">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr className="text-left">
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Device</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">ID</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Type</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Location</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Last Update</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredDevices.map((device) => (
                  <tr key={device.id} className="hover:bg-muted/50 transition-colors">
                    <td className="py-4">
                      <Link 
                        to={device.type === "Fisheries" ? "/dashboard/fisheries" : `/dashboard/devices/${device.id}`}
                        className="font-medium text-foreground hover:text-accent"
                      >
                        {device.name}
                      </Link>
                    </td>
                    <td className="py-4">
                      <code className="text-xs text-muted-foreground">{device.id}</code>
                    </td>
                    <td className="py-4 text-sm text-muted-foreground">{device.type}</td>
                    <td className="py-4">
                      <Badge 
                        variant={device.status === "online" ? "default" : device.status === "warning" ? "secondary" : "destructive"}
                        className="capitalize"
                      >
                        {device.status}
                      </Badge>
                    </td>
                    <td className="py-4 text-sm text-muted-foreground">{device.location}</td>
                    <td className="py-4 text-sm text-muted-foreground">{device.lastUpdate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Devices;
