import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import type { VorstandMember } from "@/lib/data/vorstand";

interface PersonCardProps {
  readonly member: VorstandMember;
}

export function PersonCard({ member }: PersonCardProps) {
  return (
    <Card className="border-none bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="flex flex-col items-center p-8 text-center">
        {member.image ? (
          <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
            <User className="h-10 w-10 text-primary" />
          </div>
        )}
        <h3 className="mb-1 text-lg font-bold text-primary">{member.title}</h3>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {member.realTitle}
        </p>
        <p className="text-base font-semibold text-foreground">{member.name}</p>
      </CardContent>
    </Card>
  );
}
