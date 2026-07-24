import { LayoutDashboard, Users, BookOpen, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';

export function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-black border-r border-white/10 p-6 flex flex-col gap-8 hidden md:flex shrink-0">
      <div className="flex items-center gap-3 px-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-white tracking-tight">EduManage</span>
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 text-white font-medium transition-colors">
          <Users className="w-5 h-5 text-purple-400" />
          Students
        </Link>
        <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-white/5 hover:text-white transition-colors">
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </Link>
        <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-white/5 hover:text-white transition-colors">
          <Settings className="w-5 h-5" />
          Settings
        </Link>
      </nav>

      <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-red-500/10 hover:text-red-400 transition-colors mt-auto">
        <LogOut className="w-5 h-5" />
        Logout
      </button>
    </aside>
  );
}
