import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import ContactForm from './ContactForm';

const ContactPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading className="text-foreground drop-shadow-sm pb-2">
          Contact
        </PageHeaderHeading>
        <PageHeaderHeading className="text-xl md:text-2xl font-medium text-foreground/80 mt-2">
          Get in touch before I write another line of code!
        </PageHeaderHeading>
      </PageHeader>

      <div className="mt-4">
        <ContactForm />
      </div>

    </>
  );
};
export default ContactPage;
