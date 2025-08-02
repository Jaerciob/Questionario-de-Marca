import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertCanvasLeadSchema, type InsertCanvasLead } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Mail, MessageCircle, Download, CheckCircle } from "lucide-react";

interface CanvasLeadFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CanvasLeadForm({ open, onOpenChange }: CanvasLeadFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertCanvasLead>({
    resolver: zodResolver(insertCanvasLeadSchema),
    defaultValues: {
      email: "",
      whatsapp: "",
    },
  });

  const createLeadMutation = useMutation({
    mutationFn: async (data: InsertCanvasLead) => {
      const response = await apiRequest("POST", "/api/canvas-leads", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      trackEvent('canvas_lead_submitted', 'lead_generation', 'form_completed');
      toast({
        title: "Solicitação enviada!",
        description: "Você receberá o Canvas Marketing Digital em breve.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Erro ao enviar solicitação",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertCanvasLead) => {
    createLeadMutation.mutate(data);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    form.reset();
    onOpenChange(false);
  };

  if (isSubmitted) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 border-slate-700">
          <div className="text-center py-6">
            <div className="mx-auto mb-4 w-16 h-16 bg-green-500 bg-opacity-20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Solicitação Confirmada!
            </h3>
            <p className="text-gray-300 mb-6">
              Obrigado pelo seu interesse! Você receberá o Canvas Marketing Digital personalizado para escritórios de advocacia em breve.
            </p>
            <Button onClick={handleClose} className="w-full">
              Fechar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-white flex items-center gap-2">
            <Download className="w-5 h-5 text-orange-400" />
            Canvas Marketing Digital
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Receba um canvas personalizado com estratégias de marketing digital para escritórios de advocacia.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="seu@email.com"
                        {...field}
                        className="pl-10 bg-white bg-opacity-10 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">WhatsApp (opcional)</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="(11) 99999-9999"
                        {...field}
                        className="pl-10 bg-white bg-opacity-10 border-gray-600 text-white placeholder-gray-400 focus:border-orange-400"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="flex-1 bg-transparent border-gray-600 text-white hover:bg-white hover:bg-opacity-10"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={createLeadMutation.isPending}
                className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              >
                {createLeadMutation.isPending ? "Enviando..." : "Solicitar Canvas"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}