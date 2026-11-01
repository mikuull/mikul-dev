import { contactData } from "@/data/contact.data";
import { ContactCard } from "./contact-card";

export function ContactList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {contactData.links.map((item) => (
        <ContactCard key={item.href} item={item} />
      ))}
    </div>
  );
}
