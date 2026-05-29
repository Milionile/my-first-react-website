export default function HomePage() {
  return (
    <main className="pt-24">
      <section id="hero" className="mt-1 mx-auto flex min-h-[88vh] max-w-8xl flex-col justify-center px-6 py-16 lg:px-8">
        <p className=" mb-1 text-lg text-bold uppercase tracking-[0.1em] text-primary">C3E Information Technology Services</p>
        <h1 className="max-w-3xl text-left text-4xl font-black tracking-tight text-black md:text-6xl lg:text-7xl">
          Providing intelligent communications solutions specific to your business needs
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-black md:text-xl">
          We are formed from the core passion and commitment of continued service and support for our Enterprise Customers and the rest of the ICT market.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#contact" className="rounded-3xl bg-primary px-6 py-4 text-sm font-bold uppercase tracking-[0.25em] text-dark hover:bg-secondary transition-colors">Book a consultation</a>
          <a href="#services" className="rounded-3xl border border-white/15 px-6 py-4 no-underline text-sm font-bold uppercase tracking-[0.25em] text-accent hover:bg-white/5 transition-colors">Explore services</a>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <h2 className="text-2xl font-bold uppercase tracking-[0.25em] text-primary">Our services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ['Network Infrastructure', 'Design, monitoring, and optimization for stable business networks.'],
            ['Cyber Security', 'Protection that covers endpoints, access, and threat response.'],
            ['Storage & Devices', 'Servers, desktops, and storage built for growth and uptime.'],
          ].map(([title, description]) => (
            <article key={title} className="rounded-none border border-white/10 bg-surface/80 p-6 shadow-lg shadow-black/20">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Service</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-slate-200/85">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="calculator" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="rounded-none border border-white/10 bg-linear-to-br from-primary/10 via-surface to-secondary/10 p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">SLA calculator</p>
          <h2 className="mt-3 text-2xl font-bold text-white">What good service looks like</h2>
          <p className="mt-4 max-w-3xl text-slate-200/85">Fast response, clear reporting, and real accountability matter more than generic promises. This is why we focus on measurable SLAs that are easy to understand.</p>
        </div>
      </section>

      <section id="casestudies" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <h2 className="text-2xl font-bold uppercase tracking-[0.25em] text-primary">Success logs</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-none border border-white/10 bg-white/5 p-6">Reduced support ticket wait times by 40% for a growing office network.</article>
          <article className="rounded-none border border-white/10 bg-white/5 p-6">Improved endpoint resilience and recovery planning for multi-site operations.</article>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <h2 className="text-2xl font-bold uppercase tracking-[0.25em] text-primary">Disclosures</h2>
        <div className="mt-6 space-y-4 text-slate-200/85">
          <p>• Support is structured around real business priorities, not generic templates.</p>
          <p>• We prioritize transparency in response times, escalation paths, and issue ownership.</p>
          <p>• Every engagement is tailored to your environment, hardware, and security needs.</p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-none border border-white/10 bg-surface/80 p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-primary">Contact</p>
          <h2 className="mt-3 text-2xl font-bold text-white">Ready to improve your IT operations?</h2>
          <p className="mt-4 max-w-2xl text-slate-200/85">Start with a short consultation and we’ll map your current environment, priorities, and next steps.</p>
        </div>
      </section>
    </main>
  );
}
