import { Flame } from "lucide-react";

interface AppHeaderProps {
  title: string;
  showSettings?: boolean;
}

const AppHeader = ({ title }: AppHeaderProps) => {
  return (
    <div className="flex items-center justify-center px-6 py-4 bg-background">
      <h1 className="text-2xl md:text-3xl font-black tracking-tight text-brand-red lowercase leading-relaxed py-1 px-2">
        {title}
      </h1>
    </div>
  );
};

export default AppHeader;
