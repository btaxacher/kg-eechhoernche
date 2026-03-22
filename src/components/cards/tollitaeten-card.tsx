import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Crown } from "lucide-react";
import type { Tollitaet } from "@/lib/data/tollitaeten";

interface TollitaetenCardProps {
  readonly tollitaet: Tollitaet;
}

export function TollitaetenCard({ tollitaet }: TollitaetenCardProps) {
  return (
    <Card className="border-none bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-6">
        {tollitaet.image && (
          <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={tollitaet.image}
              alt={`Tollität Session ${tollitaet.session}`}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
            <Crown className="h-5 w-5 text-[oklch(0.65_0.1_85)]" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">
              Session {tollitaet.session}
            </h3>
          </div>
        </div>
        <div className="space-y-2">
          {tollitaet.members.map((member) => (
            <div
              key={`${member.role}-${member.name}`}
              className="flex items-baseline gap-2"
            >
              <span className="text-sm font-semibold text-primary">
                {member.role}
              </span>
              <span className="text-sm text-foreground">
                {member.name}{" "}
                <span className="text-muted-foreground">
                  {member.familyName}
                </span>
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
