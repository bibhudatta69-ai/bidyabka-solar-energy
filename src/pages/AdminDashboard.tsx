import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { format } from "date-fns";
import {
  LogOut,
  Search,
  Download,
  Users,
  Calendar,
  Phone,
  MapPin,
  Zap,
  RefreshCw,
  Loader2,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import logo from "@/assets/logo.png";

interface Lead {
  id: string;
  created_at: string;

  name: string;
  phone: string;
  email: string | null;

  city: string;
  system_size: string;
  monthly_electricity_bill: number | null;

  message?: string | null;
}



export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [systemSizeFilter, setSystemSizeFilter] = useState("all");
  const [cityFilter, setCityFilter] = useState("all");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
    fetchLeads();
  }, []);

  useEffect(() => {
    filterLeads();
  }, [leads, searchQuery, systemSizeFilter, cityFilter]);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/admin");
      return;
    }

    // Verify admin role
 const checkAuth = async () => {
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    navigate("/admin");
    return;
  }

  const role =
    session.user.user_metadata?.role ||
    session.user.app_metadata?.role;

  if (role !== "admin") {
    await supabase.auth.signOut();
    navigate("/admin");
  }
};

  };

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (error) {
      console.error("Error fetching leads:", error);
      toast({
        title: "Error",
        description: "Failed to fetch leads",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const filterLeads = () => {
    let filtered = [...leads];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
filtered = filtered.filter(
  (lead) =>
    lead.name.toLowerCase().includes(query) ||
    lead.phone.includes(query) ||
    lead.city.toLowerCase().includes(query)
);

    }

    // System size filter
    if (systemSizeFilter !== "all") {
      filtered = filtered.filter((lead) => lead.system_size === systemSizeFilter);
    }

    // City filter
    if (cityFilter !== "all") {
      filtered = filtered.filter((lead) => lead.city.toLowerCase() === cityFilter.toLowerCase());
    }

    setFilteredLeads(filtered);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const exportToCSV = () => {
    const headers = [
      "Name",
      "Mobile",
      "WhatsApp",
      "Address",
      "City",
      "System Size",
      "Monthly Bill",
      "Message",
      "Date",
    ];

const csvData = filteredLeads.map((lead) => [
  lead.name,
  lead.phone,
  lead.city,
  lead.system_size,
  lead.monthly_electricity_bill || "",
  lead.message?.replace(/,/g, ";") || "",
  format(new Date(lead.created_at), "dd/MM/yyyy HH:mm"),
]);


    const csvContent = [headers, ...csvData]
      .map((row) => row.map((cell) => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `BSEAS_Leads_${format(new Date(), "yyyy-MM-dd")}.csv`;
    link.click();

    toast({
      title: "Export Successful",
      description: `${filteredLeads.length} leads exported to CSV`,
    });
  };

  const uniqueCities = [...new Set(leads.map((lead) => lead.city))];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="BSEAS Logo" className="h-8" />

              <div>
                <p className="font-bold">Admin Panel</p>
                <p className="text-xs text-primary-foreground/70">BSEAS Lead Management</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors text-sm"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{leads.length}</p>
                <p className="text-sm text-muted-foreground">Total Leads</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {leads.filter((l) => {
                    const today = new Date();
                    const leadDate = new Date(l.created_at);
                    return leadDate.toDateString() === today.toDateString();
                  }).length}
                </p>
                <p className="text-sm text-muted-foreground">Today</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {leads.filter((l) => l.system_size === "3kW" || l.system_size === "5kW").length}
                </p>
                <p className="text-sm text-muted-foreground">3kW+ Systems</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{uniqueCities.length}</p>
                <p className="text-sm text-muted-foreground">Cities</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by name, phone, city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={systemSizeFilter} onValueChange={setSystemSizeFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="System Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sizes</SelectItem>
              <SelectItem value="1kW">1 kW</SelectItem>
              <SelectItem value="2kW">2 kW</SelectItem>
              <SelectItem value="3kW">3 kW</SelectItem>
              <SelectItem value="5kW">5 kW</SelectItem>
              <SelectItem value="10kW+">10 kW+</SelectItem>
            </SelectContent>
          </Select>

          <Select value={cityFilter} onValueChange={setCityFilter}>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="City" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              {uniqueCities.map((city) => (
                <SelectItem key={city} value={city.toLowerCase()}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <button
            onClick={fetchLeads}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>

          <button
            onClick={exportToCSV}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:opacity-90 transition-colors"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-4">
          Showing {filteredLeads.length} of {leads.length} leads
        </p>

        {/* Table */}
        <div className="rounded-2xl border border-border overflow-hidden bg-card">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              No leads found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>City</TableHead>
                    <TableHead>System</TableHead>
                    <TableHead>Bill</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLeads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell className="font-medium">{lead.name}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <a
                            href={`tel:${lead.phone}`}
                            className="flex items-center gap-1 text-sm text-primary hover:underline"
                          >
                            <Phone className="w-3 h-3" />
                            {lead.phone}
                          </a>
                          {lead.phone && (
                            <a
                              href={`https://wa.me/91${lead.phone}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-secondary hover:underline"
                            >
                              WA: {lead.phone}
                            </a>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="max-w-xs truncate text-sm text-muted-foreground">
                      </TableCell>
                      <TableCell>{lead.city}</TableCell>
                      <TableCell>
                        <span className="inline-block px-2 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                          {lead.system_size}
                        </span>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {lead.monthly_electricity_bill || "-"}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {format(new Date(lead.created_at), "dd MMM yyyy")}
                        <br />
                        <span className="text-xs">
                          {format(new Date(lead.created_at), "hh:mm a")}
                        </span>
                      </TableCell>
                      <TableCell>
  <select
    value={lead.city}
    onChange={(e) =>
      (lead.id, e.target.value)
    }
    className="border rounded px-2 py-1 text-sm"
  >
    <option value="new">New</option>
    <option value="contacted">Contacted</option>
    <option value="closed">Closed</option>
  </select>
</TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
