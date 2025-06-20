import { Card as ShadcnCard, CardContent } from "@/components/ui/card";

export default function Card({ children }) {
  return (
    <ShadcnCard className="shadow-md">
      <CardContent>{children}</CardContent>
    </ShadcnCard>
  );
}
