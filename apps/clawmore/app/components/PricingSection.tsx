'use client';

import Link from 'next/link';
import { Zap, ShieldCheck } from 'lucide-react';

export default function PricingSection() {
  return (
    <section
      className="py-20 sm:py-32 scroll-mt-24 sm:scroll-mt-28"
      id="pricing"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 tracking-tighter">
            Simple, Transparent Pricing
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* OSS Tier */}
          <div className="glass-card p-6 sm:p-8 flex flex-col border-white/10 hover:border-white/20 transition-all opacity-80">
            <div className="mb-8">
              <h4 className="text-zinc-400 font-mono text-xs uppercase tracking-widest font-black mb-2">
                Open Source
              </h4>
              <div className="text-4xl sm:text-5xl font-black tracking-tight text-white/70">
                OSS
              </div>
              <p className="text-[10px] font-mono text-zinc-500 uppercase mt-3 tracking-tighter font-bold">
                Self-host OpenClaw for free
              </p>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-sm text-zinc-400">
                <Zap className="w-4 h-4 text-zinc-600 shrink-0" /> Full source
                code
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-400">
                <Zap className="w-4 h-4 text-zinc-600 shrink-0" /> Community
                support
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-400">
                <Zap className="w-4 h-4 text-zinc-600 shrink-0" /> 100% data
                sovereignty
              </li>
            </ul>
            <Link
              href="https://github.com/getaiready/aiready-cli"
              className="w-full py-4 rounded-sm border border-white/10 hover:bg-white/5 transition-all text-white text-xs font-black uppercase text-center tracking-widest"
            >
              View on GitHub
            </Link>
          </div>

          {/* Solo Tier */}
          <div className="glass-card p-6 sm:p-8 border-cyber-blue/30 bg-cyber-blue/[0.03] relative flex flex-col hover:border-cyber-blue/50 transition-all shadow-[0_0_80px_rgba(0,224,255,0.08)]">
            <div className="mb-8">
              <h4 className="text-cyber-blue font-mono text-xs uppercase tracking-widest font-black mb-2">
                Solo
              </h4>
              <div className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                $29
                <span className="text-xl font-normal text-zinc-500">
                  /month
                </span>
              </div>
              <p className="text-[10px] font-mono text-cyber-blue uppercase mt-3 tracking-tighter font-bold">
                For individual developers
              </p>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-sm text-zinc-100">
                <Zap className="w-4 h-4 text-cyber-blue shrink-0" /> Unlimited
                repositories
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-100">
                <Zap className="w-4 h-4 text-cyber-blue shrink-0" /> Unlimited
                scans
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-100">
                <Zap className="w-4 h-4 text-cyber-blue shrink-0" /> $10/month
                AI credits
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-100">
                <Zap className="w-4 h-4 text-cyber-blue shrink-0" /> Priority
                support
              </li>
            </ul>
            <Link
              href="/signup"
              className="w-full py-4 rounded-sm bg-cyber-blue hover:bg-cyber-blue/90 transition-all text-black text-xs font-black uppercase text-center tracking-widest shadow-[0_0_25px_rgba(0,224,255,0.2)]"
            >
              Start Managed Solo
            </Link>
          </div>

          {/* Team/Enterprise Column */}
          <div className="flex flex-col gap-6">
            {/* Team Tier */}
            <div className="glass-card p-6 border-amber-500/20 bg-amber-500/[0.02] hover:border-amber-500/40 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-amber-400 font-mono text-xs uppercase tracking-widest font-black mb-1">
                    Team
                  </h4>
                  <div className="text-3xl font-black tracking-tight text-white">
                    $99
                    <span className="text-sm font-normal text-zinc-500">
                      /month
                    </span>
                  </div>
                </div>
                <Link
                  href="/signup"
                  className="px-4 py-2 rounded-sm bg-amber-500 hover:bg-amber-400 transition-all text-black text-[10px] font-black uppercase tracking-widest"
                >
                  Join
                </Link>
              </div>
              <p className="text-[10px] font-mono text-amber-400/70 uppercase tracking-tighter font-bold">
                For startups & teams
              </p>
            </div>

            {/* Enterprise Tier */}
            <div className="glass-card p-6 border-cyber-purple/20 bg-cyber-purple/[0.02] hover:border-cyber-purple/40 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-cyber-purple font-mono text-xs uppercase tracking-widest font-black mb-1">
                    Enterprise
                  </h4>
                  <div className="text-3xl font-black tracking-tight text-white">
                    $299
                    <span className="text-sm font-normal text-zinc-500">
                      /month
                    </span>
                  </div>
                </div>
                <Link
                  href="/signup"
                  className="px-4 py-2 rounded-sm bg-cyber-purple hover:bg-cyber-purple/90 transition-all text-black text-[10px] font-black uppercase tracking-widest"
                >
                  Scale
                </Link>
              </div>
              <p className="text-[10px] font-mono text-cyber-purple/70 uppercase tracking-tighter font-bold">
                For large scale swarms
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-20 glass-card p-6 sm:p-10 max-w-2xl mx-auto border-emerald-500/20 bg-emerald-500/[0.02]">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h5 className="font-mono text-xs font-black uppercase tracking-[0.4em] text-emerald-400">
              30-Day Money-Back Guarantee
            </h5>
          </div>
          <p className="text-sm text-zinc-400 font-mono leading-relaxed tracking-tight">
            Try ClawMore risk-free. If you're not satisfied within 30 days,
            we'll refund your payment in full. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
