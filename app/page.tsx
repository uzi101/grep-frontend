"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Google Form wiring
 * (these are your values)
 */
const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfnQ9zgOPEb9P-WbU-2RHu5wrcvbxyxsl_fgSPomacbsmsn7g/formResponse";
const ENTRY_NAME_ID = "entry.1649839627"; // Name
const ENTRY_EMAIL_ID = "entry.1541683632"; // Email

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submittedRef = useRef(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        {/* subtle orbital rings */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-520px] h-[1200px] w-[1200px] -translate-x-1/2 rounded-full border border-purple-500/20" />
          <div className="absolute left-[10%] top-[-300px] h-[900px] w-[900px] rounded-full border border-purple-500/10" />
          <div className="absolute right-[-200px] top-[-200px] h-[700px] w-[700px] rounded-full border border-purple-500/10" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-purple-500" />
            Available in November 2025
          </div>

          <h1 className="font-mono text-6xl font-bold tracking-tight md:text-7xl">
            grep
            <span
              className="cursor-blink text-purple-500"
              style={{ display: "inline-block", marginLeft: "-0.04em" }} // glue the underscore to "grep"
            >
              _
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold md:text-3xl">
            The AI autopilot for Linux. No more 3am outages.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Detect → Diagnose → Fix in real time. AI that closes the loop, not
            just flag alerts.
          </p>

          {/* hidden iframe keeps user on the page */}
          <iframe
            name="hidden_iframe"
            id="hidden_iframe"
            style={{ display: "none" }}
            onLoad={() => {
              if (submittedRef.current) {
                setIsSubmitted(true);
                submittedRef.current = false;
                setEmail("");
                setName("");
              }
            }}
          />

          {/* inline waitlist form */}
          {!isSubmitted ? (
            <form
              action={FORM_ACTION}
              method="POST"
              target="hidden_iframe"
              onSubmit={() => {
                submittedRef.current = true;
              }}
              className="mx-auto mt-8 flex w-full max-w-2xl flex-col gap-3 rounded-2xl border border-border/60 bg-card/40 p-2 backdrop-blur md:flex-row"
            >
              <Input
                type="text"
                name={ENTRY_NAME_ID}
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                required
              />
              <Input
                type="email"
                name={ENTRY_EMAIL_ID}
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                required
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 md:w-auto"
                size="lg"
              >
                Get Early Access
              </Button>
            </form>
          ) : (
            <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-purple-500/30 bg-purple-500/5 p-4 text-center text-sm text-purple-300">
              ✓ You’re in. We’ll email updates soon.
            </div>
          )}

          {/* tiny terminal visual */}
          <div className="mx-auto mt-8 max-w-2xl">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="font-mono text-left text-sm">
                  <div className="mb-2 text-muted-foreground">
                    $ grep --deploy production
                  </div>
                  <div className="text-purple-400">
                    ✓ Autonomous monitoring activated
                  </div>
                  <div className="mt-1 text-purple-400">
                    ✓ Self-healing protocols enabled
                  </div>
                  <div className="mt-1 text-purple-400">
                    ✓ Cross-platform Linux support ready
                  </div>
                  <div className="mt-1 text-purple-400">
                    ✓ MTTR reduced from 3.5hrs to &lt;5min
                  </div>
                </div>
              </CardContent>
            </Card>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              No spam. We’ll only email product updates.
            </p>
          </div>
        </div>
      </section>

      {/* value props (tight spacing) */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h3 className="font-mono text-3xl font-bold">
              Why teams pick grep
            </h3>
            <p className="mt-2 text-muted-foreground">Clear wins, day one.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              title="Self-healing"
              copy="Automate safe runbooks with human-in-the-loop → full autonomy."
            />
            <ValueCard
              title="Cut MTTR"
              copy="From hours to minutes with diagnose → remediate → verify loops."
            />
            <ValueCard
              title="Noise ↓"
              copy="Correlate alerts and suppress flapping; act only on real incidents."
            />
            <ValueCard
              title="Linux-native"
              copy="Integrates with Prometheus, Grafana, and Kubernetes."
            />
            <ValueCard
              title="Audit trail"
              copy="Every action explainable and reviewable for compliance."
            />
            <ValueCard
              title="Open plugins"
              copy="Add integrations fast without changing your stack."
            />
          </div>
        </div>
      </section>

      {/* how it works (clean arrows) */}
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-5xl">
          <Card className="bg-card border-border">
            <CardContent className="p-6 md:p-8">
              <div className="mb-6 text-center font-mono text-2xl text-foreground">
                How it works
              </div>

              {/* desktop: box → arrow → box → arrow → box */}
              <div className="hidden items-center gap-6 md:grid [grid-template-columns:1fr_auto_1fr_auto_1fr]">
                <DiagramBox
                  title="Detect"
                  lines={[
                    "Prometheus alerts",
                    "Syslogs / dmesg",
                    "Custom probes",
                  ]}
                />
                <ArrowH />
                <DiagramBox
                  title="Diagnose"
                  lines={[
                    "Correlate signals",
                    "Root-cause hypothesis",
                    "Confidence scoring",
                  ]}
                />
                <ArrowH />
                <DiagramBox
                  title="Fix"
                  lines={[
                    "Apply runbook",
                    "Rollback on failure",
                    "Post-fix verification",
                  ]}
                />
              </div>

              {/* mobile: stacked with vertical arrows */}
              <div className="space-y-4 md:hidden">
                <DiagramBox
                  title="Detect"
                  lines={[
                    "Prometheus alerts",
                    "Syslogs / dmesg",
                    "Custom probes",
                  ]}
                />
                <ArrowV />
                <DiagramBox
                  title="Diagnose"
                  lines={[
                    "Correlate signals",
                    "Root-cause hypothesis",
                    "Confidence scoring",
                  ]}
                />
                <ArrowV />
                <DiagramBox
                  title="Fix"
                  lines={[
                    "Apply runbook",
                    "Rollback on failure",
                    "Post-fix verification",
                  ]}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-12">
        <div className="mx-auto max-w-3xl space-y-4">
          <h3 className="font-mono text-2xl"> FAQ</h3>

          <FAQItem
            q="Is it safe to let AI fix things?"
            a="Yes. grep starts human-in-the-loop with a full audit trail. You approve changes until you opt into autonomy for specific classes of fixes."
          />
          <FAQItem
            q="What does it integrate with?"
            a="Prometheus, Grafana, Kubernetes, Docker, systemd, and more via an open plugin model. We meet you where your stack already is."
          />
          <FAQItem
            q="When can I try it?"
            a="Private pilots start soon. Join the waitlist in the hero, early users help shape runbooks and integrations."
          />
          <FAQItem
            q="Will it spam alerts?"
            a="No. grep correlates signals to cut alert noise, suppress flapping, and only act on real incidents."
          />
        </div>
      </section>

      {/* footer */}
      <footer className="px-6 pb-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} grep
      </footer>
    </div>
  );
}

/* helpers */

function ValueCard({ title, copy }: { title: string; copy: string }) {
  return (
    <Card className="bg-card border-border transition-colors hover:border-purple-500/40">
      <CardContent className="p-6">
        <div className="mb-2 font-mono text-lg text-purple-400">{title}</div>
        <p className="text-sm text-muted-foreground">{copy}</p>
      </CardContent>
    </Card>
  );
}

function DiagramBox({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-background/60 p-5">
      <div className="mb-2 font-mono text-sm text-purple-400">{title}</div>
      <ul className="space-y-1 text-xs text-muted-foreground">
        {lines.map((l) => (
          <li key={l} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArrowH() {
  return (
    <svg width="68" height="14" viewBox="0 0 68 14" className="text-border/80">
      <line
        x1="0"
        y1="7"
        x2="58"
        y2="7"
        stroke="currentColor"
        strokeWidth="2"
      />
      <polygon points="58,2 68,7 58,12" fill="currentColor" />
    </svg>
  );
}

function ArrowV() {
  return (
    <div className="flex items-center justify-center">
      <svg
        width="14"
        height="44"
        viewBox="0 0 14 44"
        className="text-border/80"
      >
        <line
          x1="7"
          y1="0"
          x2="7"
          y2="34"
          stroke="currentColor"
          strokeWidth="2"
        />
        <polygon points="2,34 7,44 12,34" fill="currentColor" />
      </svg>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/40 p-4">
      <div className="font-mono text-sm text-purple-400">{q}</div>
      <p className="mt-1 text-sm text-muted-foreground">{a}</p>
    </div>
  );
}
