interface TechBadgeProps {
  name: string;
}

export const TechBadge = ({ name }: TechBadgeProps) => {
  return (
    <span className="px-2.5 py-1 text-xs font-medium rounded-md border border-primary text-primary-700 dark:text-primary-300 hover:bg-primary transition-colors cursor-default">
      {name}
    </span>
  );
};
