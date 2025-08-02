import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";
import { CanvasLeadForm } from "./canvas-lead-form";
import { trackEvent } from "@/lib/analytics";

interface CanvasButtonProps {
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
  className?: string;
}

export function CanvasButton({ variant = "primary", size = "default", className = "" }: CanvasButtonProps) {
  const [showForm, setShowForm] = useState(false);

  const isPrimary = variant === "primary";
  const isLarge = size === "lg";

  const handleCanvasClick = () => {
    trackEvent('canvas_request_initiated', 'lead_generation', variant === "primary" ? 'results_page' : 'welcome_page');
    setShowForm(true);
  };

  return (
    <>
      <Button
        onClick={handleCanvasClick}
        className={`
          ${isPrimary 
            ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/25" 
            : "bg-white bg-opacity-10 border border-white border-opacity-20 text-white hover:bg-opacity-20"
          }
          ${isLarge ? "text-lg py-3 px-6" : ""}
          backdrop-blur-sm transition-all duration-300 
          ${className}
        `}
        size={isLarge ? "lg" : "default"}
      >
        {isPrimary ? (
          <>
            <Sparkles className="w-4 h-4 mr-2" />
            Acesse o Canvas Marketing Digital
          </>
        ) : (
          <>
            <Download className="w-4 h-4 mr-2" />
            Canvas Marketing Digital
          </>
        )}
      </Button>
      
      <CanvasLeadForm 
        open={showForm} 
        onOpenChange={setShowForm}
      />
    </>
  );
}