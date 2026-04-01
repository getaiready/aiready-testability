'use client';

export default function SocialProof() {
  return (
    <section className="py-16 bg-black/20 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-black mb-4 tracking-tighter uppercase italic">
            Built for Modern Infrastructure
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Orchestrate autonomous agentic swarms with human-in-the-loop
            workflows on serverless AWS.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40 grayscale">
          <div className="text-zinc-500 font-black text-xl tracking-tighter">
            AWS Lambda
          </div>
          <div className="text-zinc-500 font-black text-xl tracking-tighter">
            EventBridge
          </div>
          <div className="text-zinc-500 font-black text-xl tracking-tighter">
            Step Functions
          </div>
          <div className="text-zinc-500 font-black text-xl tracking-tighter">
            SST
          </div>
        </div>
      </div>
    </section>
  );
}
