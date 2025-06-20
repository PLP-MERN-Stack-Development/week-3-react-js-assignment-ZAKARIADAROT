import { Button as ShadcnButton } from "@/components/ui/button";

export default function Button({ variant = "default", ...props }) {
  return <ShadcnButton variant={variant} {...props} />;
}
