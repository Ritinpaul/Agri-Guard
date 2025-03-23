import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface TreatmentSuggestionsProps {
  disease: string;
  treatments: string[];
}

export default function TreatmentSuggestions({
  disease,
  treatments,
}: TreatmentSuggestionsProps) {
  return (
    <Card className="border border-[#e0e7d0]">
      <CardHeader className="bg-[#f1f8e9] border-b border-[#e0e7d0]">
        <CardTitle className="text-[#2e5d32]">
          Treatment Suggestions for {disease}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-2">
          {treatments.map((treatment, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#4caf50] mt-0.5 flex-shrink-0" />
              <span className="text-[#4b7b52]">{treatment}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
