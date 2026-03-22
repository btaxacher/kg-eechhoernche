"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Kontaktanfrage von ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\n\nNachricht:\n${formData.message}`
    );
    window.location.href = `mailto:Werner.Doemsky@eechhoernche.de?subject=${subject}&body=${body}`;
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold text-foreground">Kontakt</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Fragen, Anregungen oder Interesse am Verein? Wir freuen uns auf Ihre
          Nachricht!
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Form */}
        <Card className="border-none bg-card shadow-md lg:col-span-3">
          <CardContent className="p-8">
            <h2 className="mb-6 text-xl font-bold text-foreground">
              Nachricht senden
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Ihr Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Max Mustermann"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Ihre E-Mail-Adresse *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="max@beispiel.de"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Ihre Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Ihre Nachricht an die Eechhörnche..."
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Send className="mr-2 h-4 w-4" />
                Nachricht senden
              </Button>
              <p className="text-xs text-muted-foreground">
                * Pflichtfelder. Ihre Daten werden nur zur Kontaktaufnahme
                verwendet.
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-4 lg:col-span-2">
          <Card className="border-none bg-card shadow-md">
            <CardContent className="p-6">
              <h3 className="mb-4 font-semibold text-foreground">
                Kontaktdaten
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Adresse</p>
                    <p className="text-muted-foreground">
                      KG Ett&apos;schelder Eechhörnche
                      <br />
                      Niederfeld 14
                      <br />
                      53937 Schleiden-Ettelscheid
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Telefon</p>
                    <p className="text-muted-foreground">0157 32510906</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">E-Mail</p>
                    <a
                      href="mailto:Werner.Doemsky@eechhoernche.de"
                      className="text-primary hover:underline"
                    >
                      Werner.Doemsky@eechhoernche.de
                    </a>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none bg-gradient-to-br from-primary/5 to-secondary/10 shadow-md">
            <CardContent className="p-6 text-center">
              <p className="font-serif text-lg italic text-foreground">
                &ldquo;Wir freuen uns auf Ihren Besuch!&rdquo;
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Eure Eechhörnche 🐿️
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
