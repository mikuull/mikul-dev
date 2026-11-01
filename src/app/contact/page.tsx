import { contactData } from "@/data/contact.data";
import { ContactList } from "@/components/contact/contact-list";

export default function ContactPage() {
  return (
    <div className="relative flex flex-col justify-center min-h-[75vh] py-12 w-full">
      <div className="relative z-10 w-full space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {contactData.title}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
            {contactData.description}
          </p>
        </div>
        <ContactList />
      </div>
    </div>
  );
}
