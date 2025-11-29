import React, { useRef } from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip, CartesianGrid, XAxis, YAxis, BarChart, Bar } from 'recharts';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    BarChart2,
    Users,
    Settings,
    Bell,
    Search,
    MoreHorizontal,
    ArrowUpRight,
    ArrowDownRight,
    Wallet,
    Activity,
    CreditCard,
    Cpu,
    Globe,
    ShieldCheck,
    Zap,
    Layers,
    MessageSquare,
    Terminal,
    Kanban,
    Plus,
    Menu
} from 'lucide-react';

// --- Types ---

interface KanbanItem {
    task: string;
    tag: string;
    active?: boolean;
}

interface TooltipProps {
    active?: boolean;
    payload?: Array<{
        value: number;
        name: string;
        stroke?: string;
        fill?: string;
    }>;
    label?: string;
}

// --- Mock Data ---

const revenueData = [
    { name: 'Mon', value: 4000, previous: 2400 },
    { name: 'Tue', value: 3000, previous: 1398 },
    { name: 'Wed', value: 5000, previous: 3800 },
    { name: 'Thu', value: 2780, previous: 3908 },
    { name: 'Fri', value: 6890, previous: 4800 },
    { name: 'Sat', value: 4390, previous: 3800 },
    { name: 'Sun', value: 7490, previous: 4300 },
];

const sourceData = [
    { name: 'Direct', value: 4000 },
    { name: 'Social', value: 3000 },
    { name: 'Organic', value: 2000 },
    { name: 'Referral', value: 2780 },
];

const recentActivity = [
    { user: "Alex M.", action: "subscribed to Pro", time: "2 min ago", amount: "+$49.00", status: "success" },
    { user: "Sarah J.", action: "requested refund", time: "15 min ago", amount: "-$12.00", status: "warning" },
    { user: "Mike T.", action: "added new member", time: "1 hr ago", amount: null, status: "neutral" },
    { user: "Emily R.", action: "renewed license", time: "3 hrs ago", amount: "+$299.00", status: "success" },
];

// --- Components ---

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-black/90 backdrop-blur-md border border-white/10 p-3 rounded-lg shadow-xl text-xs z-50">
                <p className="text-gray-400 mb-1 font-mono">{label}</p>
                {payload.map((p, i) => (
                    <div key={i} className="flex items-center gap-2 justify-between min-w-[100px]">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.stroke || p.fill }}></div>
                            <span className="text-gray-300 capitalize">{p.name}</span>
                        </div>
                        <p className="font-bold text-white font-mono">
                            ${p.value.toLocaleString()}
                        </p>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

// --- Main Hero Dashboard ---

export const DashboardMockup = ({ className = "" }: { className?: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeUsers, setActiveUsers] = React.useState(8549);
    const [showNotification, setShowNotification] = React.useState(false);

    // Live Data Simulation
    React.useEffect(() => {
        const interval = setInterval(() => {
            // Randomly fluctuate active users
            setActiveUsers(prev => prev + Math.floor(Math.random() * 10) - 3);

            // Randomly show notification
            if (Math.random() > 0.7) {
                setShowNotification(true);
                setTimeout(() => setShowNotification(false), 4000);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Parallax state
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Layer Transforms - Tuned for realistic depth
    const layer1X = useTransform(springX, [-0.5, 0.5], [-8, 8]); // Base UI
    const layer1Y = useTransform(springY, [-0.5, 0.5], [-8, 8]);

    const layer2X = useTransform(springX, [-0.5, 0.5], [-18, 18]); // Widgets
    const layer2Y = useTransform(springY, [-0.5, 0.5], [-18, 18]);

    const layer3X = useTransform(springX, [-0.5, 0.5], [-35, 35]); // Floating Elements
    const layer3Y = useTransform(springY, [-0.5, 0.5], [-35, 35]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Normalize -0.5 to 0.5
        const xPct = (e.clientX - rect.left) / width - 0.5;
        const yPct = (e.clientY - rect.top) / height - 0.5;

        mouseX.set(xPct);
        mouseY.set(yPct);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`w-full h-full font-sans relative overflow-hidden flex bg-[#050505] rounded-xl transform-style-3d ${className}`}
        >
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/5 via-[#050505] to-[#050505] opacity-50 pointer-events-none" />

            {/* --- Sidebar (Layer 1) --- */}
            <motion.div
                style={{ x: layer1X, y: layer1Y }}
                className="w-16 border-r border-white/5 bg-black/40 backdrop-blur-xl flex flex-col items-center py-6 z-20 hidden md:flex shrink-0"
            >
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-black mb-8 shadow-[0_0_10px_rgba(204,255,0,0.2)]">
                    <Layers size={18} />
                </div>

                <div className="flex flex-col gap-6 w-full items-center">
                    {[
                        { icon: LayoutDashboard, active: true },
                        { icon: BarChart2, active: false },
                        { icon: Users, active: false },
                        { icon: MessageSquare, active: false },
                        { icon: Wallet, active: false }
                    ].map((item, i) => (
                        <div key={i} className={`relative group cursor-pointer p-2 rounded-xl transition-all ${item.active ? 'bg-white/10 text-accent' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}>
                            <item.icon size={20} />
                            {item.active && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3 bg-accent rounded-r-full" />}
                        </div>
                    ))}
                </div>

                <div className="mt-auto pb-4">
                    <div className="p-2 text-gray-500 hover:text-white cursor-pointer hover:rotate-90 transition-transform duration-500">
                        <Settings size={20} />
                    </div>
                </div>
            </motion.div>

            {/* --- Main Content Area --- */}
            <div className="flex-1 flex flex-col relative z-10 overflow-hidden">

                {/* Header (Layer 1) */}
                <motion.div
                    style={{ x: layer1X, y: layer1Y }}
                    className="h-14 md:h-16 border-b border-white/5 flex items-center justify-between px-4 md:px-6 bg-white/[0.02] backdrop-blur-sm sticky top-0 z-30"
                >
                    <div className="flex items-center gap-3 md:hidden">
                        <Menu size={20} className="text-gray-400" />
                        <h2 className="text-white font-bold text-sm">Dashboard</h2>
                    </div>

                    <div className="hidden md:flex flex-col">
                        <h2 className="text-white font-bold text-sm leading-none">Dashboard Overview</h2>
                        <p className="text-[10px] text-gray-500 mt-1">Last updated: Just now</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center bg-[#111] px-3 py-1.5 rounded-full border border-white/10 text-xs text-gray-400 gap-2 w-48 hover:border-white/20 transition-colors">
                            <Search size={14} />
                            <span>Search...</span>
                        </div>
                        <div className="w-px h-4 bg-white/10 hidden md:block"></div>
                        <button className="relative text-gray-400 hover:text-white transition-colors">
                            <Bell size={18} />
                            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-accent rounded-full border-2 border-[#050505]"></span>
                        </button>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 border border-white/10 relative overflow-hidden cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </motion.div>

                {/* Scrollable Canvas */}
                <div className="flex-1 overflow-y-auto p-3 md:p-6 space-y-4 md:space-y-6 scrollbar-hide relative">

                    {/* Top Stats Grid (Layer 2) */}
                    <motion.div
                        style={{ x: layer2X, y: layer2Y }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
                    >
                        {[
                            { label: "Total Revenue", value: "$124,592", change: "+12.5%", trend: "up", icon: CreditCard, color: "text-white" },
                            { label: "Active Users", value: activeUsers.toLocaleString(), change: "+5.2%", trend: "up", icon: Users, color: "text-accent" },
                            { label: "Bounce Rate", value: "24.8%", change: "-2.1%", trend: "down", icon: Activity, color: "text-white" },
                        ].map((stat, i) => (
                            <div key={i} className="bg-[#111] rounded-2xl p-4 md:p-5 border border-white/5 relative group overflow-hidden shadow-lg hover:border-white/10 transition-colors">
                                <div className="flex justify-between items-start mb-4 relative z-10">
                                    <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                                        <stat.icon size={18} />
                                    </div>
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 ${stat.trend === 'up' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                                        {stat.trend === 'up' ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                                        {stat.change}
                                    </span>
                                </div>
                                <div className={`text-xl md:text-2xl font-bold mb-1 relative z-10 ${i === 1 ? 'text-accent' : 'text-white'}`}>{stat.value}</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-wider relative z-10">{stat.label}</div>

                                {/* Background Decoration */}
                                <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity transform translate-y-1/4 translate-x-1/4">
                                    <stat.icon size={100} />
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Middle Section: Chart & Feed (Layer 1 & 2 Mixed) */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">

                        {/* Main Chart Card */}
                        <motion.div
                            style={{ x: layer1X, y: layer1Y }}
                            className="lg:col-span-2 bg-[#111] rounded-2xl p-4 md:p-6 border border-white/5 flex flex-col shadow-lg relative overflow-hidden min-h-[350px]"
                        >
                            <div className="flex justify-between items-center mb-6 relative z-10">
                                <div>
                                    <h3 className="font-bold text-white text-base md:text-lg">Revenue Analytics</h3>
                                    <p className="text-[10px] text-gray-500">Year on Year comparison</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="text-[10px] bg-accent text-black font-bold px-2 md:px-3 py-1 rounded-md hover:bg-white transition-colors">12 Months</button>
                                    <button className="text-[10px] bg-white/5 text-gray-400 hover:text-white px-2 md:px-3 py-1 rounded-md transition-colors hidden sm:block">30 Days</button>
                                </div>
                            </div>

                            <div className="flex-1 w-full min-h-[250px] relative z-10 -ml-4">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#ccff00" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#ccff00" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                        <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#666' }} axisLine={false} tickLine={false} tickMargin={12} />
                                        <YAxis tick={{ fontSize: 10, fill: '#666' }} axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
                                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }} />
                                        <Area
                                            type="monotone"
                                            dataKey="value"
                                            stroke="#ccff00"
                                            strokeWidth={2}
                                            fill="url(#colorRevenue)"
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="previous"
                                            stroke="#444"
                                            strokeWidth={2}
                                            strokeDasharray="4 4"
                                            fill="transparent"
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </motion.div>

                        {/* Right Panel: Revenue Sources & Activity */}
                        <div className="flex flex-col gap-4 md:gap-6">
                            {/* Revenue Sources Graph */}
                            <motion.div
                                style={{ x: layer2X, y: layer2Y }}
                                className="bg-[#111] rounded-2xl p-4 md:p-6 border border-white/5 flex flex-col shadow-lg overflow-hidden h-[250px]"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <h3 className="font-bold text-white text-sm">Revenue Sources</h3>
                                        <p className="text-[10px] text-gray-500">By Acquisition Channel</p>
                                    </div>
                                    <MoreHorizontal size={14} className="text-gray-500" />
                                </div>

                                <div className="flex-1 w-full min-h-[150px] relative z-10">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={sourceData}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                            <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#666' }} axisLine={false} tickLine={false} />
                                            <Tooltip
                                                contentStyle={{ backgroundColor: '#000', borderColor: '#333', color: '#fff' }}
                                                itemStyle={{ color: '#fff' }}
                                                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                            />
                                            <Bar dataKey="value" fill="#ccff00" radius={[4, 4, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </motion.div>

                            {/* Recent Activity Feed */}
                            <motion.div
                                style={{ x: layer2X, y: layer2Y }}
                                className="bg-[#111] rounded-2xl p-4 md:p-6 border border-white/5 flex-1 shadow-lg overflow-hidden min-h-[200px]"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-bold text-white text-sm">Live Activity</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] text-gray-500">Real-time</span>
                                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    {recentActivity.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-xs group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 ${item.status === 'success' ? 'bg-green-500/10 text-green-400' : item.status === 'warning' ? 'bg-red-500/10 text-red-400' : 'bg-white/10 text-white'}`}>
                                                {item.user.charAt(0)}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-white font-medium truncate">{item.user} <span className="text-gray-500 font-normal">{item.action}</span></p>
                                                <p className="text-[10px] text-gray-600">{item.time}</p>
                                            </div>
                                            {item.amount && (
                                                <span className={`font-mono font-bold shrink-0 ${item.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{item.amount}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Floating Widget (Layer 3) - Team Availability */}
                    <motion.div
                        style={{ x: layer3X, y: layer3Y }}
                        className="absolute bottom-6 right-6 z-40 bg-[#151515] border border-white/10 rounded-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-56 hidden md:block"
                    >
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-xs font-bold text-white">Team Online</span>
                            <span className="text-[10px] bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded">4 Active</span>
                        </div>
                        <div className="flex -space-x-2 overflow-hidden mb-3">
                            {[1, 2, 3, 4].map((_, i) => (
                                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-[#151515] bg-white/10 flex items-center justify-center text-[10px] text-white font-bold">
                                    {['JD', 'AS', 'MR', 'KT'][i]}
                                </div>
                            ))}
                            <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#151515] bg-[#222] flex items-center justify-center text-[10px] text-gray-500 font-bold">+2</div>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-accent w-2/3 rounded-full" />
                        </div>
                    </motion.div>

                    {/* Notification Toast */}
                    <AnimatePresence>
                        {showNotification && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, x: 20 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                exit={{ opacity: 0, y: 10, x: 10 }}
                                className="absolute top-4 right-4 z-50 bg-[#1a1a1a] border border-white/10 p-3 rounded-xl shadow-2xl flex items-center gap-3 w-64"
                            >
                                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                                    <Bell size={14} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-white">New Subscription</div>
                                    <div className="text-[10px] text-gray-400">Enterprise plan purchased</div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    );
};

// --- Innovation Mockup (Enhanced Version) ---

export const InnovationMockup = () => {
    return (
        <div className="w-full h-auto min-h-[500px] bg-[#080808] rounded-3xl overflow-hidden border border-white/10 flex flex-col md:flex-row relative shadow-2xl font-sans group">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] -z-10" />

            {/* Sidebar - Horizontal on Mobile, Vertical on Desktop */}
            <div className="w-full md:w-20 border-b md:border-b-0 md:border-r border-white/5 flex flex-row md:flex-col items-center justify-around md:justify-start py-4 md:py-8 gap-0 md:gap-8 bg-white/[0.02]">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-accent flex items-center justify-center text-black font-bold shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                    <Zap size={20} fill="currentColor" />
                </div>
                <div className="flex flex-row md:flex-col gap-4 md:gap-6 items-center">
                    {[LayoutDashboard, Globe, Cpu, ShieldCheck].map((Icon, i) => (
                        <div key={i} className={`p-2 md:p-3 rounded-xl transition-all ${i === 1 ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}>
                            <Icon size={20} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-8 flex flex-col gap-6 relative z-10">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-white">Innovation Hub</h3>
                        <p className="text-xs text-gray-500 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            System Optimal
                        </p>
                    </div>
                    <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#080808] bg-white/10 flex items-center justify-center text-xs" />
                        ))}
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#080808] bg-accent text-black flex items-center justify-center font-bold text-xs">+5</div>
                    </div>
                </div>

                {/* Grid Layout - Stacks on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-full">

                    {/* Main AI Card - Spans 2 cols on desktop */}
                    <div className="col-span-1 md:col-span-2 flex flex-col gap-4 md:gap-6">
                        {/* AI Processor Visual */}
                        <div className="flex-1 bg-white/5 rounded-2xl border border-white/5 p-4 md:p-6 relative overflow-hidden flex flex-col justify-between group/card min-h-[200px]">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                            <div className="flex justify-between items-start relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                                        <Cpu size={18} />
                                    </div>
                                    <span className="font-bold text-sm">AI Processing Core</span>
                                </div>
                                <span className="text-xs font-mono text-accent">98.4% Efficiency</span>
                            </div>

                            {/* Animated Waveform Visualization */}
                            <div className="flex items-center justify-center gap-1 h-20 md:h-24 my-4">
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            height: ["20%", "80%", "30%", "60%", "20%"],
                                            backgroundColor: ["#333", "#666", "#ccff00", "#666", "#333"]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            delay: i * 0.05,
                                            ease: "easeInOut"
                                        }}
                                        className="w-1 md:w-1.5 rounded-full bg-white/20"
                                    />
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-2 md:gap-4 relative z-10">
                                {[
                                    { label: "Predictive", val: "Active" },
                                    { label: "Auto-Scale", val: "Enabled" },
                                    { label: "Security", val: "Scanning" }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-black/20 rounded-lg p-2 md:p-3 text-center md:text-left">
                                        <div className="text-[8px] md:text-[10px] text-gray-500 mb-1">{stat.label}</div>
                                        <div className="text-[10px] md:text-xs font-bold text-white">{stat.val}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Metrics */}
                        <div className="h-auto md:h-32 grid grid-cols-2 gap-4 md:gap-6">
                            <div className="bg-white/5 rounded-2xl border border-white/5 p-4 md:p-5 flex items-center gap-4 relative overflow-hidden">
                                <div className="absolute right-0 top-0 p-3 opacity-10">
                                    <Activity size={80} />
                                </div>
                                <div>
                                    <div className="text-xl md:text-3xl font-bold text-white mb-1">2.4s</div>
                                    <div className="text-[10px] md:text-xs text-gray-400">Avg Response</div>
                                </div>
                                <div className="hidden md:block ml-auto text-green-400 text-xs font-bold bg-green-500/10 px-2 py-1 rounded">-12% ▼</div>
                            </div>
                            <div className="bg-accent rounded-2xl border border-accent p-4 md:p-5 flex flex-col justify-center relative overflow-hidden text-black">
                                <div className="absolute -right-4 -bottom-4 opacity-20 rotate-12">
                                    <Zap size={100} fill="black" />
                                </div>
                                <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1 opacity-70">Total Requests</div>
                                <div className="text-2xl md:text-4xl font-black">8.5M</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Global/Server Status */}
                    <div className="col-span-1 bg-black/40 rounded-2xl border border-white/5 p-1 relative flex flex-col min-h-[250px]">
                        <div className="absolute inset-0 bg-grid opacity-20 rounded-2xl" />

                        <div className="flex-1 rounded-xl overflow-hidden relative m-1 border border-white/5 bg-[#0a0a0a]">
                            {/* Abstract Map/Globe Representation */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/10 relative animate-[spin_20s_linear_infinite]">
                                    <div className="absolute inset-2 rounded-full border border-white/5 border-dashed" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_15px_#ccff00]" />
                                    {/* Orbiting dots */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0"
                                    >
                                        <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Floating Status Cards */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-4 left-4 bg-[#111]/90 backdrop-blur border border-white/10 p-2 rounded-lg flex items-center gap-2"
                            >
                                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                                <span className="text-[10px] font-bold">US-East: Online</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                className="absolute bottom-12 right-4 bg-[#111]/90 backdrop-blur border border-white/10 p-2 rounded-lg flex items-center gap-2"
                            >
                                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                                <span className="text-[10px] font-bold">EU-West: Online</span>
                            </motion.div>
                        </div>

                        {/* Terminal Footer */}
                        <div className="h-20 md:h-24 p-3 md:p-4 font-mono text-[10px] text-gray-500 overflow-hidden">
                            <div className="flex items-center gap-2 text-gray-400 mb-2 border-b border-white/5 pb-1">
                                <Terminal size={10} />
                                <span>System Log</span>
                            </div>
                            <div className="space-y-1 opacity-70">
                                <div><span className="text-green-500">✔</span> [10:42:01] Neural Engine optimized</div>
                                <div><span className="text-blue-500">ℹ</span> [10:42:05] Data sync completed (4ms)</div>
                                <div className="hidden md:block"><span className="text-green-500">✔</span> [10:42:12] New node cluster detected</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

// --- Feature Mockup (Enhanced Version - Kanban Board) ---

export const FeatureMockup = () => {
    return (
        <div className="w-full h-full bg-[#0a0a0a] flex flex-col overflow-hidden font-sans relative">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

            {/* Header */}
            <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-accent flex items-center justify-center text-black">
                        <Kanban size={14} />
                    </div>
                    <span className="text-xs font-bold text-white">Product Roadmap</span>
                </div>
                <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full bg-white/10 border border-[#0a0a0a] flex items-center justify-center text-[8px]" >{i}</div>
                    ))}
                    <div className="w-6 h-6 rounded-full bg-white/5 border border-dashed border-gray-600 flex items-center justify-center text-[10px]">+</div>
                </div>
            </div>

            {/* Kanban Columns - Stacks vertically on Mobile */}
            <div className="flex-1 p-3 md:p-4 grid grid-cols-1 sm:grid-cols-3 gap-3 overflow-y-auto custom-scrollbar">
                {[
                    { title: "To Do", color: "bg-gray-500", items: [{ task: "Q3 Strategy", tag: "Planning" }, { task: "Update Assets", tag: "Design" }] },
                    { title: "In Progress", color: "bg-accent", items: [{ task: "API Integration", tag: "Dev", active: true }, { task: "User Testing", tag: "QA" }] },
                    { title: "Done", color: "bg-green-500", items: [{ task: "Launch Landing", tag: "Marketing" }] }
                ].map((col, i) => (
                    <div key={i} className="flex flex-col gap-3">
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full ${col.color}`} />
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{col.title}</span>
                            </div>
                            <MoreHorizontal size={12} className="text-gray-600" />
                        </div>

                        {/* Cards */}
                        <div className="flex-col gap-2 flex">
                            {col.items.map((item: KanbanItem, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * idx + (i * 0.1) }}
                                    className={`p-3 rounded-lg border ${item.active ? 'bg-white/5 border-accent/40 shadow-[0_0_15px_rgba(204,255,0,0.1)]' : 'bg-[#111] border-white/5 hover:border-white/10'} group cursor-pointer transition-all`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <div className={`text-[8px] px-1.5 py-0.5 rounded border ${item.active ? 'bg-accent/10 border-accent/20 text-accent' : 'bg-white/5 border-white/5 text-gray-500'}`}>
                                            {item.tag}
                                        </div>
                                        {item.active && <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />}
                                    </div>
                                    <div className="text-xs font-bold text-white mb-2">{item.task}</div>
                                    <div className="flex justify-between items-center">
                                        <div className="w-4 h-4 rounded-full bg-white/10" />
                                        <div className="text-[8px] text-gray-600">Oct {12 + idx}</div>
                                    </div>
                                </motion.div>
                            ))}
                            {/* Add Button */}
                            <div className="p-2 rounded-lg border border-dashed border-white/10 flex items-center justify-center text-gray-600 hover:text-white hover:border-white/20 transition-colors cursor-pointer">
                                <Plus size={12} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}