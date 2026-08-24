interface TechBadgeProps {
  name: string;
}

export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 dark:bg-primary text-primary-700 dark:text-primary-300 border border-primary/20 dark:border-primary/40">
      {name}
    </span>
  );
};
