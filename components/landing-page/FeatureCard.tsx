import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { LucideIcon } from "lucide-react";

type FeatureCardType = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

const FeatureCard = ({ title, desc, icon: Icon }: FeatureCardType) => {
  return (
    <Card className="py-12">
      <CardHeader className="grid gap-4">
        {Icon && <Icon size={40} className="mx-auto text-primary" />}
        <CardTitle className="text-xl text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground text-center">
        {desc}
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
