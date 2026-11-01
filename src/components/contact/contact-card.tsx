import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { ContactLink } from "@/data/contact.data";

interface ContactCardProps {
  item: ContactLink;
}

export const ContactCard = ({ item }: ContactCardProps) => {
  const IconComponent =
    (
      LucideIcons as unknown as Record<
        string,
        React.ComponentType<LucideIcons.LucideProps>
      >
    )[item.iconName] || LucideIcons.Mail;

  const isExternal = item.href.startsWith("http");

  return (
    <Link
      href={item.href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative flex flex-col gap-4 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-950/80 shadow-sm backdrop-blur-sm transition-all hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:scale-[1.01] overflow-hidden"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 group-hover:text-emerald-500 transition-colors">
            <IconComponent className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-emerald-500 transition-colors">
            {item.title}
          </h3>
        </div>
        <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-emerald-500 transition-colors" />
      </div>

      <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 break-words">
        {item.value}
      </p>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {item.description}
      </p>
    </Link>
  );
};