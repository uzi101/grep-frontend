"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background snap-y snap-mandatory overflow-y-scroll">
      {/* Hero Section */}
      <section className="relative px-6 py-24 lg:px-8 min-h-screen flex items-center snap-start">
        <div className="mx-auto max-w-4xl text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="font-mono text-6xl font-bold tracking-tight text-foreground lg:text-8xl">
              grep<span className="cursor-blink text-purple-500">_</span>
            </h1>
          </div>

          {/* Tagline */}
          <h2 className="mb-6 text-2xl font-semibold text-foreground lg:text-3xl">
            The AI autopilot for Linux. No more 3am outages.
          </h2>

          {/* Subtext */}
          <p className="mb-8 text-lg text-muted-foreground lg:text-xl">
            Detect → Diagnose → Fix in real time. AI that closes the loop, not just flag alerts.
          </p>

          {/* Terminal Command Animation */}
          <div className="mb-12 mx-auto max-w-2xl">
            <Card className="bg-card border-border glow-card">
              <CardContent className="p-6">
                <div className="font-mono text-left text-sm">
                  <div className="text-muted-foreground mb-2">$ grep --deploy production</div>
                  <div className="text-purple-400 typewriter">✓ Autonomous monitoring activated</div>
                  <div className="text-purple-400 mt-1">✓ Self-healing protocols enabled</div>
                  <div className="text-purple-400 mt-1">✓ Cross-platform Linux support ready</div>
                  <div className="text-purple-400 mt-1">✓ MTTR reduced from 3.5hrs to &lt;5min</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 text-lg px-8 py-6 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
            onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
          >
            Join the Waitlist
          </Button>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="px-6 py-16 lg:px-8 min-h-screen flex items-center snap-start">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Problem */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="mb-4 font-mono text-2xl font-bold text-red-500">// Problem</h3>
                <p className="text-lg text-card-foreground mb-6">
                  Enterprise downtime costs $9,000 per minute. SREs are burning out from 24/7 on-call rotations while
                  the talent gap widens.
                </p>
                <div className="space-y-3 font-mono text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="text-red-500">×</span>
                    <span>$9,000/min average enterprise downtime cost</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-500">×</span>
                    <span>3.5 hours typical MTTR for critical incidents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-500">×</span>
                    <span>70% of SREs report burnout from on-call</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-500">×</span>
                    <span>1M+ unfulfilled DevOps/SRE roles by 2026</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="mb-4 font-mono text-2xl font-bold text-purple-500">// Solution</h3>
                <p className="text-lg text-card-foreground mb-6">
                  AI that doesn't wake you up. Self-healing Linux ops, 24/7, across multi-cloud environments. From
                  co-pilot to autopilot.
                </p>
                <div className="space-y-3 font-mono text-sm text-purple-400">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    <span>MTTR cut from 3.5 hours to &lt;5 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    <span>Human-in-loop → fully autonomous remediation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    <span>Deep integration with Prometheus, Grafana, K8s</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span>
                    <span>Open plugin ecosystem for rapid integrations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 bg-muted/20 min-h-screen flex items-center snap-start">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl font-bold text-foreground mb-4">// Why Grep Wins</h2>
            <p className="text-lg text-muted-foreground">The only true cross-platform & autonomous ops tool</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-card border-border hover:border-purple-500/50 transition-colors duration-300 glow-card-hover">
              <CardContent className="p-6">
                <div className="mb-4 font-mono text-lg font-bold text-purple-500">Linux-Native</div>
                <p className="text-sm text-muted-foreground">
                  Deep integration with open-source tools like Prometheus, Grafana & Kubernetes
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-purple-500/50 transition-colors duration-300 glow-card-hover">
              <CardContent className="p-6">
                <div className="mb-4 font-mono text-lg font-bold text-purple-500">Human → Autonomy</div>
                <p className="text-sm text-muted-foreground">
                  Human-in-the-loop initially, gradually handing off safe fixes to AI
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-purple-500/50 transition-colors duration-300 glow-card-hover">
              <CardContent className="p-6">
                <div className="mb-4 font-mono text-lg font-bold text-purple-500">Open Plugins</div>
                <p className="text-sm text-muted-foreground">
                  Developer-friendly plugin ecosystem accelerates new integrations
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-purple-500/50 transition-colors duration-300 glow-card-hover">
              <CardContent className="p-6">
                <div className="mb-4 font-mono text-lg font-bold text-purple-500">Data Moat</div>
                <p className="text-sm text-muted-foreground">Unique incident & fix telemetry grows smarter over time</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 min-h-screen flex items-center snap-start">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-mono text-3xl font-bold text-foreground mb-4">// Validation</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Trusted by engineers at leading tech companies & selected by top AI infrastructure builders
            </p>

            {/* Company Logos */}
            <div className="flex flex-wrap items-center justify-center gap-8 mb-12 opacity-60">
              <div className="font-mono text-lg font-semibold text-muted-foreground">LUX CAPITAL</div>
              <div className="font-mono text-lg font-semibold text-muted-foreground">AWS</div>
              <div className="font-mono text-lg font-semibold text-muted-foreground">COGNITION</div>
              <div className="font-mono text-lg font-semibold text-muted-foreground">MODAL</div>
            </div>

            {/* Engineer Validation */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-card border-border hover:border-purple-500/50 transition-colors duration-300 glow-card-hover">
                <CardContent className="p-6 text-center">
                  <div className="font-mono text-sm font-bold text-purple-500 mb-2">Meta</div>
                  <p className="text-xs text-muted-foreground">Engineer Validated</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border hover:border-purple-500/50 transition-colors duration-300 glow-card-hover">
                <CardContent className="p-6 text-center">
                  <div className="font-mono text-sm font-bold text-purple-500 mb-2">JPMorgan</div>
                  <p className="text-xs text-muted-foreground">Engineer Validated</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border hover:border-purple-500/50 transition-colors duration-300 glow-card-hover">
                <CardContent className="p-6 text-center">
                  <div className="font-mono text-sm font-bold text-purple-500 mb-2">Stripe</div>
                  <p className="text-xs text-muted-foreground">Engineer Validated</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border hover:border-purple-500/50 transition-colors duration-300 glow-card-hover">
                <CardContent className="p-6 text-center">
                  <div className="font-mono text-sm font-bold text-purple-500 mb-2">AWS</div>
                  <p className="text-xs text-muted-foreground">Engineer Validated</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 bg-muted/20 min-h-screen flex items-center snap-start">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-mono text-3xl font-bold text-foreground mb-8">// Market Opportunity</h2>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <Card className="bg-card border-border hover:border-purple-500/50 transition-colors duration-300 glow-card-hover">
              <CardContent className="p-8">
                <div className="font-mono text-4xl font-bold text-purple-500 mb-2">$12B</div>
                <div className="font-mono text-lg text-foreground mb-2">AIOps 2025</div>
                <p className="text-sm text-muted-foreground">
                  Growing at 20-30% annually as enterprises seek automation
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-purple-500/50 transition-colors duration-300 glow-card-hover">
              <CardContent className="p-8">
                <div className="font-mono text-4xl font-bold text-purple-500 mb-2">$22B</div>
                <div className="font-mono text-lg text-foreground mb-2">GenAI DevOps 2032</div>
                <p className="text-sm text-muted-foreground">38% CAGR as AI transforms operations workflows</p>
              </CardContent>
            </Card>
          </div>

          <p className="text-lg text-muted-foreground">
            <span className="font-mono text-purple-500">ROI:</span> Preventing one outage per year pays for Grep 10×
            over
          </p>
        </div>
      </section>

      <section id="waitlist" className="px-6 py-24 lg:px-8 min-h-screen flex items-center snap-start">
        <div className="mx-auto max-w-2xl">
          <Card className="bg-card border-border glow-card">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="mb-4 font-mono text-3xl font-bold text-foreground">Join the AI SRE Revolution</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Be among the first to experience infrastructure that runs itself.
                </p>
                <div className="font-mono text-sm text-purple-500">Early access • Pilot program • Shape the future</div>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="your.email@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
                    size="lg"
                  >
                    Get Early Access
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Join FAANG+ and Fintech engineers already in our pilot program
                  </p>
                </form>
              ) : (
                <div className="text-center">
                  <div className="mb-4 font-mono text-purple-500 text-lg">✓ Welcome to the future of ops</div>
                  <p className="text-muted-foreground">We'll be in touch soon with pilot program details.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12 lg:px-8 snap-start">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="mb-4 font-mono text-2xl font-bold text-foreground">grep</div>
            <p className="text-sm text-muted-foreground mb-2">Infrastructure that runs itself.</p>
            <p className="text-xs text-muted-foreground">
              We're building the AI SRE that every company will depend on.
            </p>
            <div className="mt-6 font-mono text-xs text-muted-foreground">
              © 2024 Grep. Join us to transform Linux operations forever.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
