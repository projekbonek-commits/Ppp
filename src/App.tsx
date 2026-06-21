// @ts-nocheck
import React from 'react';
// ... sisa kode Anda

import React, { useState, useEffect, useRef } from 'react';

// --- ICONS (Custom SVG for zero dependencies and perfect styling) ---
const Icons = {
  Home: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
  Inventory: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
  Analytics: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>,
  User: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
  Plus: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>,
  Camera: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>,
  Eye: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>,
  EyeOff: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>,
  ChevronRight: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="9 18 15 12 9 6"></polyline></svg>,
  ArrowUpRight: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>,
  Football: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><polygon points="12 6 7.5 10 9 15.5 15 15.5 16.5 10"></polygon><line x1="12" y1="6" x2="12" y2="2"></line><line x1="7.5" y1="10" x2="2.5" y2="8.5"></line><line x1="16.5" y1="10" x2="21.5" y2="8.5"></line><line x1="9" y1="15.5" x2="6" y2="20"></line><line x1="15" y1="15.5" x2="18" y2="20"></line></svg>,
  Check: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12"></polyline></svg>,
  Moon: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>,
  Sun: (props) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
};

// --- UTILS ---
const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
};

const calculateDays = (dateString) => {
  const diffTime = Math.abs(new Date() - new Date(dateString));
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

// --- CORE APP COMPONENT ---
export default function App() {
  // State Management
  const [appState, setAppState] = useState(() => {
    const saved = localStorage.getItem('marketEfootballState');
    if (saved) return JSON.parse(saved);
    return {
      isFirstLaunch: true,
      isAuthenticated: false,
      user: null,
      theme: 'dark', // Default to dark for premium feel
      wallet: { balance: 180000, history: [] },
      inventory: [],
      goal: { name: 'Xiaomi 14', target: 6000000, saved: 180000 }
    };
  });

  const [currentView, setCurrentView] = useState('landing');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedAccount, setSelectedAccount] = useState(null);

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem('marketEfootballState', JSON.stringify(appState));
    if (appState.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [appState]);

  // Initial routing logic
  useEffect(() => {
    if (appState.isFirstLaunch) {
      setCurrentView('landing');
    } else if (!appState.isAuthenticated) {
      setCurrentView('login');
    } else if (currentView === 'landing' || currentView === 'login' || currentView === 'register') {
      setCurrentView('main');
    }
  }, [appState.isFirstLaunch, appState.isAuthenticated]);

  // Actions
  const toggleTheme = () => {
    setAppState(prev => ({ ...prev, theme: prev.theme === 'dark' ? 'light' : 'dark' }));
  };

  const updateState = (key, value) => {
    setAppState(prev => ({ ...prev, [key]: value }));
  };

  const login = (username, password) => {
    if (appState.user && appState.user.username === username && appState.user.password === password) {
      updateState('isAuthenticated', true);
    } else {
      alert("Invalid credentials");
    }
  };

  // --- VIEWS ---

  const LandingView = () => (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-black text-neutral-900 dark:text-neutral-50 transition-colors duration-300 animate-in fade-in">
      <div className="flex-1 flex flex-col items-center justify-center p-8 max-w-md mx-auto w-full">
        <div className="mb-12 text-center">
          <Icons.Football className="w-16 h-16 mx-auto mb-6 text-blue-600 dark:text-blue-500 opacity-80" />
          <h1 className="text-4xl font-extrabold tracking-tight mb-3">Market EFootball</h1>
          <p className="text-blue-600 dark:text-blue-400 font-medium tracking-widest text-sm uppercase mb-8">Track • Hold • Profit</p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Manage your eFootball account inventory, track profits, monitor holding duration, and reach your savings goals.
          </p>
        </div>

        {/* Goal Card Preview */}
        <div className="w-full bg-white dark:bg-neutral-900 rounded-3xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-800 mb-12">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider mb-1">Current Goal</p>
              <h3 className="text-xl font-bold">{appState.goal.name}</h3>
            </div>
            <div className="text-right">
              <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider mb-1">Target</p>
              <p className="font-semibold text-blue-600 dark:text-blue-400">{formatCurrency(appState.goal.target)}</p>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-neutral-600 dark:text-neutral-400">Saved: <span className="font-semibold text-neutral-900 dark:text-white">{formatCurrency(appState.goal.saved)}</span></span>
              <span className="text-neutral-600 dark:text-neutral-400">Remains: {formatCurrency(appState.goal.target - appState.goal.saved)}</span>
            </div>
            <div className="h-2 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-1000"
                style={{ width: `${Math.min(100, (appState.goal.saved / appState.goal.target) * 100)}%` }}
              ></div>
            </div>
          </div>
          <div className="text-right text-xs font-bold text-neutral-400">
            {Math.round((appState.goal.saved / appState.goal.target) * 100)}%
          </div>
        </div>

        <div className="w-full space-y-4">
          <button 
            onClick={() => setCurrentView('register')}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-all active:scale-[0.98]"
          >
            Get Started
          </button>
          <button 
            className="w-full py-4 bg-transparent text-neutral-600 dark:text-neutral-400 font-semibold rounded-2xl hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );

  const RegisterView = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
      e.preventDefault();
      if(username && password) {
        setAppState(prev => ({
          ...prev,
          isFirstLaunch: false,
          isAuthenticated: true,
          user: { username, password, displayName: username, bio: 'EFootball Trader' }
        }));
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50 dark:bg-black animate-in fade-in">
        <div className="w-full max-w-sm bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">Create Account</h2>
            <p className="text-sm text-neutral-500">Set up your local credentials.</p>
          </div>
          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-neutral-500 mb-2 ml-1">USERNAME</label>
              <input 
                type="text" required
                className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"
                value={username} onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-500 mb-2 ml-1">PASSWORD</label>
              <input 
                type="password" required
                className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-all"
                value={password} onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full py-4 mt-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-xl font-bold transition-all active:scale-[0.98]">
              Continue to Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  };

  const LoginView = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
      e.preventDefault();
      login(username, password);
    };

    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50 dark:bg-black animate-in fade-in">
        <div className="w-full max-w-sm">
          <div className="text-center mb-10">
            <Icons.Football className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-500" />
            <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Welcome Back</h1>
          </div>
          <form onSubmit={handleLogin} className="bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-800 space-y-6">
            <div>
              <input 
                type="text" placeholder="Username" required
                className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 px-2 py-3 text-base focus:outline-none focus:border-blue-500 dark:text-white transition-colors placeholder-neutral-400"
                value={username} onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} placeholder="Password" required
                className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 px-2 py-3 text-base focus:outline-none focus:border-blue-500 dark:text-white transition-colors placeholder-neutral-400"
                value={password} onChange={e => setPassword(e.target.value)}
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-3 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
              >
                {showPassword ? <Icons.EyeOff className="w-5 h-5" /> : <Icons.Eye className="w-5 h-5" />}
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center text-sm text-neutral-500">
                <input type="checkbox" className="mr-2 rounded border-neutral-300 dark:border-neutral-700 text-blue-600 focus:ring-blue-500 bg-transparent" />
                Remember Me
              </label>
            </div>
            <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold transition-all active:scale-[0.98] mt-6">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };

  // --- MAIN LAYOUT & TABS ---

  const DashboardTab = () => {
    const activeInventory = appState.inventory.filter(i => i.status === 'active');
    const portfolioValue = activeInventory.reduce((sum, item) => sum + Number(item.targetPrice), 0);
    const lifetimeProfit = appState.inventory.filter(i => i.status === 'sold').reduce((sum, item) => sum + (Number(item.soldPrice) - Number(item.purchasePrice)), 0);

    return (
      <div className="space-y-6 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Current Balance</p>
            <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">{formatCurrency(appState.wallet.balance)}</h1>
          </div>
          <button onClick={toggleTheme} className="p-3 bg-white dark:bg-neutral-900 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300">
            {appState.theme === 'dark' ? <Icons.Sun className="w-5 h-5" /> : <Icons.Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-neutral-900 p-5 rounded-3xl border border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center text-neutral-500 mb-2">
              <Icons.Inventory className="w-4 h-4 mr-2" />
              <span className="text-xs font-semibold uppercase tracking-wider">Portfolio</span>
            </div>
            <p className="text-lg font-bold text-neutral-900 dark:text-white">{formatCurrency(portfolioValue)}</p>
            <p className="text-xs text-neutral-400 mt-1">{activeInventory.length} Active Accs</p>
          </div>
          <div className="bg-white dark:bg-neutral-900 p-5 rounded-3xl border border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center text-neutral-500 mb-2">
              <Icons.Analytics className="w-4 h-4 mr-2" />
              <span className="text-xs font-semibold uppercase tracking-wider">Lifetime PnL</span>
            </div>
            <p className="text-lg font-bold text-green-600 dark:text-green-400">+{formatCurrency(lifetimeProfit)}</p>
            <p className="text-xs text-neutral-400 mt-1">Total Realized</p>
          </div>
        </div>

        {/* Goal Card */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-800">
          <div className="flex justify-between items-start mb-5">
            <div>
              <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mb-1">Current Goal</p>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{appState.goal.name}</h3>
            </div>
            <div className="text-right bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-lg">
              <p className="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase">Target</p>
              <p className="font-semibold text-blue-700 dark:text-blue-300 text-sm">{formatCurrency(appState.goal.target)}</p>
            </div>
          </div>
          
          <div className="mb-2">
            <div className="flex justify-between text-sm mb-3">
              <span className="text-neutral-600 dark:text-neutral-400">Saved: <span className="font-semibold text-neutral-900 dark:text-white">{formatCurrency(appState.wallet.balance)}</span></span>
              <span className="text-neutral-500 text-xs">Remains: {formatCurrency(Math.max(0, appState.goal.target - appState.wallet.balance))}</span>
            </div>
            <div className="h-2.5 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${Math.min(100, (appState.wallet.balance / appState.goal.target) * 100)}%` }}
              ></div>
            </div>
          </div>
          <div className="text-right text-sm font-extrabold text-blue-600 dark:text-blue-400 mt-2">
            {Math.round((appState.wallet.balance / appState.goal.target) * 100)}% Complete
          </div>
        </div>

        {/* Recent Inventory */}
        <div>
          <div className="flex justify-between items-center mb-4 px-1">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Active Inventory</h3>
            <button onClick={() => setActiveTab('inventory')} className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {activeInventory.slice(0, 3).map(acc => (
              <div key={acc.id} onClick={() => { setSelectedAccount(acc); setActiveTab('accountDetail'); }} className="flex items-center p-4 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800 active:scale-[0.98] transition-transform cursor-pointer">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 flex-shrink-0 mr-4">
                  {acc.image ? <img src={acc.image} alt="Account" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-neutral-400"><Icons.Football className="w-6 h-6"/></div>}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-neutral-900 dark:text-white text-base truncate">{acc.konamiId}</h4>
                  <div className="flex items-center text-xs text-neutral-500 mt-1 space-x-2">
                    <span className="bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded text-neutral-700 dark:text-neutral-300 font-medium">{acc.epicCount} Epic</span>
                    <span>•</span>
                    <span>{calculateDays(acc.purchaseDate)} days hold</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-neutral-900 dark:text-white">{formatCurrency(acc.targetPrice)}</p>
                  <p className="text-xs text-green-500 font-medium">+{formatCurrency(acc.targetPrice - acc.purchasePrice)}</p>
                </div>
              </div>
            ))}
            {activeInventory.length === 0 && (
              <div className="p-8 text-center border border-dashed border-neutral-300 dark:border-neutral-700 rounded-3xl">
                <p className="text-neutral-500 text-sm">No active accounts. Start building your portfolio.</p>
                <button onClick={() => setActiveTab('addAccount')} className="mt-4 text-blue-600 font-medium text-sm">Add New Account</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const InventoryTab = () => {
    const [filter, setFilter] = useState('active'); // active, sold
    const filteredInventory = appState.inventory.filter(i => i.status === filter);

    return (
      <div className="space-y-6 pb-24 animate-in fade-in">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Inventory</h1>
          <button 
            onClick={() => setActiveTab('addAccount')}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm active:scale-95 transition-transform"
          >
            <Icons.Plus className="w-4 h-4 mr-1" /> Add
          </button>
        </div>

        {/* Segmented Control */}
        <div className="flex p-1 bg-neutral-200/50 dark:bg-neutral-900/50 rounded-xl mb-6">
          <button 
            onClick={() => setFilter('active')} 
            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-colors ${filter === 'active' ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm' : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'}`}
          >
            Holding
          </button>
          <button 
            onClick={() => setFilter('sold')} 
            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-colors ${filter === 'sold' ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm' : 'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300'}`}
          >
            Sold
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredInventory.map(acc => (
            <div key={acc.id} onClick={() => { setSelectedAccount(acc); setActiveTab('accountDetail'); }} className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 cursor-pointer active:scale-[0.98] transition-transform">
              <div className="h-32 bg-neutral-200 dark:bg-neutral-800 relative">
                {acc.image ? (
                  <img src={acc.image} alt="Screenshot" className="w-full h-full object-cover" />
                ) : (
                   <div className="w-full h-full flex items-center justify-center text-neutral-400"><Icons.Football className="w-8 h-8"/></div>
                )}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full font-medium">
                  {acc.epicCount} Epics
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-neutral-900 dark:text-white truncate mb-1">{acc.konamiId}</h4>
                <div className="flex justify-between items-end mt-4">
                  <div>
                    <p className="text-xs text-neutral-500 mb-0.5">Bought: {formatCurrency(acc.purchasePrice)}</p>
                    <p className="text-sm font-bold text-neutral-900 dark:text-white">{filter === 'active' ? `Target: ${formatCurrency(acc.targetPrice)}` : `Sold: ${formatCurrency(acc.soldPrice)}`}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium text-neutral-400">{calculateDays(acc.purchaseDate)} Days</p>
                    {filter === 'sold' ? (
                       <p className={`text-sm font-bold ${acc.soldPrice - acc.purchasePrice >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                         {acc.soldPrice - acc.purchasePrice >= 0 ? '+' : ''}{formatCurrency(acc.soldPrice - acc.purchasePrice)}
                       </p>
                    ) : (
                       <p className="text-sm font-bold text-blue-600 dark:text-blue-400">Est +{formatCurrency(acc.targetPrice - acc.purchasePrice)}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filteredInventory.length === 0 && (
             <div className="col-span-full p-12 text-center">
               <p className="text-neutral-500 font-medium">No {filter} accounts found.</p>
             </div>
          )}
        </div>
      </div>
    );
  };

  const AddAccountTab = () => {
    const fileInputRef = useRef(null);
    const [formData, setFormData] = useState({
      image: '', konamiId: '', password: '', epicCount: '', bigTimeCount: '', showtimeCount: '', purchasePrice: '', targetPrice: '', notes: ''
    });

    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData(prev => ({ ...prev, image: reader.result }));
        };
        reader.readAsDataURL(file);
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!formData.image) return alert("Screenshot is mandatory");
      
      const price = Number(formData.purchasePrice);
      
      const newAccount = {
        ...formData,
        id: Date.now().toString(),
        purchaseDate: new Date().toISOString(),
        status: 'active'
      };

      setAppState(prev => ({
        ...prev,
        inventory: [newAccount, ...prev.inventory],
        wallet: {
          ...prev.wallet,
          balance: prev.wallet.balance - price,
          history: [...prev.wallet.history, { type: 'buy', amount: price, date: new Date().toISOString(), accountId: newAccount.id }]
        }
      }));
      setActiveTab('inventory');
    };

    return (
      <div className="space-y-6 pb-24 animate-in slide-in-from-right-8 duration-300">
        <div className="flex items-center mb-6">
          <button onClick={() => setActiveTab('inventory')} className="mr-4 p-2 bg-white dark:bg-neutral-900 rounded-full border border-neutral-200 dark:border-neutral-800">
            <Icons.ChevronRight className="w-5 h-5 rotate-180" />
          </button>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">New Account</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="w-full aspect-video bg-neutral-100 dark:bg-neutral-900 rounded-3xl border-2 border-dashed border-neutral-300 dark:border-neutral-700 flex flex-col items-center justify-center cursor-pointer overflow-hidden relative group"
          >
            {formData.image ? (
              <>
                <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-medium">Replace Image</div>
              </>
            ) : (
              <>
                <Icons.Camera className="w-8 h-8 text-neutral-400 mb-2" />
                <span className="text-sm font-medium text-neutral-500">Upload Screenshot (Required)</span>
              </>
            )}
            <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleImageUpload} />
          </div>

          <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-4">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-2">Credentials</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-xs font-medium text-neutral-500 mb-1 ml-1">Konami ID</label>
                <input required type="email" className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white" value={formData.konamiId} onChange={e => setFormData({...formData, konamiId: e.target.value})} />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-medium text-neutral-500 mb-1 ml-1">Password</label>
                <input required type="text" className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-4">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-2">Assets</h3>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1 text-center">Epic</label>
                <input required type="number" min="0" className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-2 py-3 text-center font-bold focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" value={formData.epicCount} onChange={e => setFormData({...formData, epicCount: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1 text-center">Big Time</label>
                <input type="number" min="0" className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-2 py-3 text-center font-bold focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" value={formData.bigTimeCount} onChange={e => setFormData({...formData, bigTimeCount: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1 text-center">Showtime</label>
                <input type="number" min="0" className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-2 py-3 text-center font-bold focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" value={formData.showtimeCount} onChange={e => setFormData({...formData, showtimeCount: e.target.value})} />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-4">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-2">Financials</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1 ml-1">Purchase Price (Rp)</label>
                <input required type="number" className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 font-semibold focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" value={formData.purchasePrice} onChange={e => setFormData({...formData, purchasePrice: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-1 ml-1">Target Sell Price (Rp)</label>
                <input required type="number" className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 font-semibold focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" value={formData.targetPrice} onChange={e => setFormData({...formData, targetPrice: e.target.value})} />
              </div>
            </div>
            {formData.purchasePrice && formData.targetPrice && (
              <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800 flex justify-between items-center">
                <span className="text-sm text-neutral-500 font-medium">Est. Profit</span>
                <span className="text-lg font-bold text-green-500">+{formatCurrency(formData.targetPrice - formData.purchasePrice)}</span>
              </div>
            )}
          </div>

          <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-transform">
            Save Account & Deduct Balance
          </button>
        </form>
      </div>
    );
  };

  const AccountDetailTab = () => {
    const acc = selectedAccount;
    const [sellPrice, setSellPrice] = useState(acc.targetPrice);

    if (!acc) return null;

    const handleSell = () => {
      const price = Number(sellPrice);
      setAppState(prev => ({
        ...prev,
        inventory: prev.inventory.map(i => i.id === acc.id ? { ...i, status: 'sold', soldPrice: price, soldDate: new Date().toISOString() } : i),
        wallet: {
          ...prev.wallet,
          balance: prev.wallet.balance + price,
          history: [...prev.wallet.history, { type: 'sell', amount: price, date: new Date().toISOString(), accountId: acc.id }]
        }
      }));
      setActiveTab('inventory');
    };

    const handleDelete = () => {
      if(confirm("Are you sure you want to delete this record? This will not refund the wallet.")) {
        setAppState(prev => ({ ...prev, inventory: prev.inventory.filter(i => i.id !== acc.id) }));
        setActiveTab('inventory');
      }
    }

    return (
       <div className="space-y-6 pb-24 animate-in slide-in-from-bottom-8 duration-300">
        <div className="flex items-center justify-between mb-2">
          <button onClick={() => setActiveTab('inventory')} className="p-2 bg-white dark:bg-neutral-900 rounded-full border border-neutral-200 dark:border-neutral-800">
            <Icons.ChevronRight className="w-5 h-5 rotate-180" />
          </button>
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${acc.status === 'active' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-neutral-200 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'}`}>
            {acc.status}
          </span>
        </div>

        <div className="w-full aspect-video rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm relative">
          {acc.image && <img src={acc.image} alt="Screenshot" className="w-full h-full object-cover" />}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
            <h2 className="text-2xl font-bold text-white truncate">{acc.konamiId}</h2>
            <p className="text-neutral-300 text-sm font-mono mt-1">{acc.password}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white dark:bg-neutral-900 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 text-center">
            <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider mb-1">Epic</p>
            <p className="text-xl font-bold text-neutral-900 dark:text-white">{acc.epicCount}</p>
          </div>
          <div className="bg-white dark:bg-neutral-900 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 text-center">
            <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider mb-1">Big Time</p>
            <p className="text-xl font-bold text-neutral-900 dark:text-white">{acc.bigTimeCount || 0}</p>
          </div>
          <div className="bg-white dark:bg-neutral-900 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 text-center">
            <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider mb-1">Showtime</p>
            <p className="text-xl font-bold text-neutral-900 dark:text-white">{acc.showtimeCount || 0}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-neutral-100 dark:border-neutral-800">
             <div>
               <p className="text-xs text-neutral-500 mb-1">Purchase Price</p>
               <p className="font-bold text-neutral-900 dark:text-white">{formatCurrency(acc.purchasePrice)}</p>
             </div>
             <div className="text-right">
               <p className="text-xs text-neutral-500 mb-1">Holding Duration</p>
               <p className="font-bold text-neutral-900 dark:text-white">{calculateDays(acc.purchaseDate)} Days</p>
             </div>
          </div>
          <div className="flex justify-between items-center pt-2">
             <div>
               <p className="text-xs text-neutral-500 mb-1">{acc.status === 'active' ? 'Target Price' : 'Sold Price'}</p>
               <p className="font-bold text-neutral-900 dark:text-white text-lg">{formatCurrency(acc.status === 'active' ? acc.targetPrice : acc.soldPrice)}</p>
             </div>
             <div className="text-right">
               <p className="text-xs text-neutral-500 mb-1">{acc.status === 'active' ? 'Est. Profit' : 'Realized Profit'}</p>
               <p className={`font-bold text-lg ${acc.status === 'active' ? 'text-blue-600 dark:text-blue-400' : 'text-green-500'}`}>
                 +{formatCurrency((acc.status === 'active' ? acc.targetPrice : acc.soldPrice) - acc.purchasePrice)}
               </p>
             </div>
          </div>
        </div>

        {acc.status === 'active' && (
          <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-4">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase">Process Sale</h3>
            <div>
              <label className="block text-xs font-medium text-neutral-500 mb-2">Final Selling Price (Rp)</label>
              <input type="number" className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 font-bold text-lg focus:ring-2 focus:ring-green-500 outline-none dark:text-white" value={sellPrice} onChange={e => setSellPrice(e.target.value)} />
            </div>
            <button onClick={handleSell} className="w-full py-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-2xl font-bold active:scale-[0.98] transition-transform flex justify-center items-center">
               <Icons.Check className="w-5 h-5 mr-2" /> Mark as Sold & Add to Balance
            </button>
          </div>
        )}

        <div className="pt-4 flex justify-center">
          <button onClick={handleDelete} className="text-red-500 text-sm font-semibold hover:underline">Delete Record</button>
        </div>
       </div>
    );
  };

  const AnalyticsTab = () => {
    const soldItems = appState.inventory.filter(i => i.status === 'sold');
    const totalProfit = soldItems.reduce((sum, item) => sum + (Number(item.soldPrice) - Number(item.purchasePrice)), 0);
    const avgROI = soldItems.length > 0 ? (soldItems.reduce((sum, item) => sum + ((item.soldPrice - item.purchasePrice) / item.purchasePrice * 100), 0) / soldItems.length).toFixed(1) : 0;
    
    // Generate simple chart data based on last 5 sales
    const recentSales = [...soldItems].sort((a,b) => new Date(a.soldDate) - new Date(b.soldDate)).slice(-5);
    const maxProfit = Math.max(...recentSales.map(i => i.soldPrice - i.purchasePrice), 100000); // minimum scale

    return (
      <div className="space-y-6 pb-24 animate-in fade-in">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Analytics</h1>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white dark:bg-neutral-900 p-5 rounded-3xl border border-neutral-200 dark:border-neutral-800">
            <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mb-1">Total Profit</p>
            <p className="text-xl font-bold text-green-500">+{formatCurrency(totalProfit)}</p>
          </div>
          <div className="bg-white dark:bg-neutral-900 p-5 rounded-3xl border border-neutral-200 dark:border-neutral-800">
            <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mb-1">Avg. ROI</p>
            <p className="text-xl font-bold text-neutral-900 dark:text-white">{avgROI}%</p>
          </div>
        </div>

        {/* Minimal Bar Chart purely with HTML/CSS */}
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800">
          <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-6">Profit Trend (Last 5 Sales)</h3>
          
          <div className="h-40 flex items-end justify-between space-x-2">
            {recentSales.length > 0 ? recentSales.map((sale, idx) => {
              const profit = sale.soldPrice - sale.purchasePrice;
              const height = `${Math.max(10, (profit / maxProfit) * 100)}%`;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center group relative">
                   <div 
                     className="w-full bg-blue-500 hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-t-md transition-all relative"
                     style={{ height }}
                   >
                     <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap transition-opacity">
                       {formatCurrency(profit)}
                     </div>
                   </div>
                   <span className="text-[10px] text-neutral-400 mt-2 truncate w-full text-center">{sale.konamiId.split('@')[0]}</span>
                </div>
              )
            }) : (
              <div className="w-full h-full flex items-center justify-center text-neutral-500 text-sm">Not enough data to display chart.</div>
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
          <div className="p-5 border-b border-neutral-100 dark:border-neutral-800">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider">Inventory Health</h3>
          </div>
          <div className="p-5 space-y-4">
             <div className="flex justify-between items-center">
               <span className="text-sm text-neutral-600 dark:text-neutral-400">Total Accounts</span>
               <span className="font-bold text-neutral-900 dark:text-white">{appState.inventory.length}</span>
             </div>
             <div className="flex justify-between items-center">
               <span className="text-sm text-neutral-600 dark:text-neutral-400">Active</span>
               <span className="font-bold text-neutral-900 dark:text-white">{appState.inventory.filter(i=>i.status==='active').length}</span>
             </div>
             <div className="flex justify-between items-center">
               <span className="text-sm text-neutral-600 dark:text-neutral-400">Sold</span>
               <span className="font-bold text-neutral-900 dark:text-white">{soldItems.length}</span>
             </div>
          </div>
        </div>
      </div>
    );
  };

  const ProfileTab = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState(appState.user);

    const handleSave = () => {
      updateState('user', editData);
      setIsEditing(false);
    };

    return (
      <div className="space-y-6 pb-24 animate-in fade-in">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Profile</h1>

        <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl font-bold mr-5">
              {appState.user.displayName ? appState.user.displayName[0].toUpperCase() : 'U'}
            </div>
            <div className="flex-1">
              {isEditing ? (
                <input type="text" className="w-full bg-neutral-100 dark:bg-neutral-950 border-none rounded-lg px-3 py-2 text-lg font-bold outline-none mb-2 dark:text-white" value={editData.displayName} onChange={e=>setEditData({...editData, displayName: e.target.value})} />
              ) : (
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white">{appState.user.displayName}</h2>
              )}
              {isEditing ? (
                 <input type="text" className="w-full bg-neutral-100 dark:bg-neutral-950 border-none rounded-lg px-3 py-1 text-sm outline-none dark:text-white" value={editData.bio} onChange={e=>setEditData({...editData, bio: e.target.value})} />
              ) : (
                <p className="text-sm text-neutral-500">{appState.user.bio}</p>
              )}
            </div>
          </div>
          {isEditing ? (
            <button onClick={handleSave} className="w-full py-3 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-xl font-bold">Save Changes</button>
          ) : (
            <button onClick={() => setIsEditing(true)} className="w-full py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-xl font-semibold">Edit Profile</button>
          )}
        </div>

        <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-5">
           <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider border-b border-neutral-100 dark:border-neutral-800 pb-3">Application Settings</h3>
           
           <div className="flex justify-between items-center">
             <div>
               <p className="font-semibold text-neutral-900 dark:text-white">Dark Mode</p>
               <p className="text-xs text-neutral-500">Toggle AMOLED pure black theme</p>
             </div>
             <button 
                onClick={toggleTheme}
                className={`w-12 h-6 rounded-full relative transition-colors ${appState.theme === 'dark' ? 'bg-blue-600' : 'bg-neutral-300'}`}
             >
                <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${appState.theme === 'dark' ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
             </button>
           </div>

           <div className="pt-4">
             <button onClick={() => {
                 if(confirm("Log out?")) {
                   updateState('isAuthenticated', false);
                 }
             }} className="text-red-500 font-semibold w-full text-left py-2">Log Out</button>
           </div>
        </div>
      </div>
    );
  };

  // --- MAIN APP RENDER ---

  if (currentView === 'landing') return <LandingView />;
  if (currentView === 'register') return <RegisterView />;
  if (currentView === 'login') return <LoginView />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-neutral-900 dark:text-neutral-50 font-sans transition-colors duration-300 selection:bg-blue-500/30">
      <div className="max-w-md mx-auto relative min-h-screen shadow-2xl dark:shadow-none bg-gray-50 dark:bg-black">
        
        {/* Main Content Area */}
        <main className="p-6 pt-10 h-full overflow-y-auto custom-scrollbar">
          {activeTab === 'dashboard' && <DashboardTab />}
          {activeTab === 'inventory' && <InventoryTab />}
          {activeTab === 'addAccount' && <AddAccountTab />}
          {activeTab === 'accountDetail' && <AccountDetailTab />}
          {activeTab === 'analytics' && <AnalyticsTab />}
          {activeTab === 'profile' && <ProfileTab />}
        </main>

        {/* Bottom Navigation Bar */}
        <nav className="absolute bottom-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-xl border-t border-neutral-200 dark:border-neutral-800 pb-safe">
          <div className="flex justify-around items-center p-4">
            <button 
              onClick={() => setActiveTab('dashboard')} 
              className={`flex flex-col items-center space-y-1 transition-colors ${activeTab === 'dashboard' ? 'text-blue-600 dark:text-blue-400' : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'}`}
            >
              <Icons.Home className="w-6 h-6" />
              <span className="text-[10px] font-medium">Home</span>
            </button>
            <button 
              onClick={() => setActiveTab('inventory')} 
              className={`flex flex-col items-center space-y-1 transition-colors ${activeTab === 'inventory' || activeTab === 'accountDetail' ? 'text-blue-600 dark:text-blue-400' : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'}`}
            >
              <Icons.Inventory className="w-6 h-6" />
              <span className="text-[10px] font-medium">Inventory</span>
            </button>
            
            {/* Add Button Fab-style inline */}
            <div className="relative -top-5">
              <button 
                onClick={() => setActiveTab('addAccount')}
                className="bg-neutral-900 dark:bg-white text-white dark:text-black p-4 rounded-full shadow-xl shadow-black/10 dark:shadow-white/5 active:scale-95 transition-transform"
              >
                <Icons.Plus className="w-6 h-6" />
              </button>
            </div>

            <button 
              onClick={() => setActiveTab('analytics')} 
              className={`flex flex-col items-center space-y-1 transition-colors ${activeTab === 'analytics' ? 'text-blue-600 dark:text-blue-400' : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'}`}
            >
              <Icons.Analytics className="w-6 h-6" />
              <span className="text-[10px] font-medium">Analytics</span>
            </button>
            <button 
              onClick={() => setActiveTab('profile')} 
              className={`flex flex-col items-center space-y-1 transition-colors ${activeTab === 'profile' ? 'text-blue-600 dark:text-blue-400' : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'}`}
            >
              <Icons.User className="w-6 h-6" />
              <span className="text-[10px] font-medium">Profile</span>
            </button>
          </div>
        </nav>

      </div>
    </div>
  );
}
