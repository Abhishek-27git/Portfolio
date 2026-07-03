import ContactForm from '@/components/ContactForm';

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 mb-16">
      <div className="max-w-[640px] mx-auto px-0">

        {/* Eyebrow tag */}
        <p className="flex items-center gap-2 font-mono text-[13px] text-muted-foreground mb-12">
          <span className="inline-block w-2 h-2 bg-[#22c55e] shrink-0" />
          04 — contact.config.ts
        </p>

        {/* Heading */}
        <h2 className="text-center text-[30px] font-extrabold tracking-tight leading-snug text-foreground m-0 mb-5">
          Let&apos;s build<br />something great.
        </h2>

        {/* Availability */}
        <p className="text-center text-[15px] text-muted-foreground leading-[1.6] max-w-[440px] mx-auto mb-8">
          Currently available for select freelance opportunities and full-time collaborations.
        </p>

        {/* Email */}
        <div className="text-center mb-12">
          <a
            href="mailto:singhabhi2705@gmail.com"
            className="text-[22px] font-extrabold text-foreground border-b-2 border-foreground pb-[2px] no-underline hover:opacity-70 transition-opacity"
          >
            singhabhi2705@gmail.com
          </a>
        </div>

        {/* Form */}
        <ContactForm />

      </div>
    </section>
  );
}
