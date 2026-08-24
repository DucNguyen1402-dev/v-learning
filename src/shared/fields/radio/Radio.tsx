import { cn } from "@shared/utils";

type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
};

export function Radio({ id, ...props }: RadioProps) {
  return <input {...props} id={id} type="radio" className={cn("radio")} />;
}
