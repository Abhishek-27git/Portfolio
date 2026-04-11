import ContactForm from '@/components/ContactForm';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 mb-16 bg-card border rounded-xl flex flex-col items-center text-center w-full">
      <div className="flex flex-col items-center text-center max-w-4xl px-4">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 text-card-foreground">
          Let&apos;s build <br className="hidden md:block" /> something great.
        </h2>
        
        <p className="text-muted-foreground mb-12 max-w-lg">
          Currently available for select freelance opportunities and full-time collaborations.
        </p>
        
        <div className="pb-8">
          <a
            href="mailto:singhabhi2705@gmail.com"
            className="text-2xl font-bold border-b-2 border-zinc-900 dark:border-zinc-100 pb-1 text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 hover:border-zinc-600 dark:hover:border-zinc-400 transition-colors duration-300"
          >
            singhabhi2705@gmail.com
          </a>
        </div>
      </div>

      <div className="w-full max-w-2xl mt-12 px-4">
        <ContactForm />
      </div>
    </section>
  );
}
