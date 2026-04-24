import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ClipboardList, Mail, MessageCircle, Users } from "lucide-react";
import type { QuizResponse, SelectCanvasLead } from "@shared/schema";

export default function Admin() {
  const quizResponsesQuery = useQuery<QuizResponse[]>({
    queryKey: ["/api/quiz-responses"],
  });

  const canvasLeadsQuery = useQuery<SelectCanvasLead[]>({
    queryKey: ["/api/canvas-leads"],
  });

  return (
    <>
      <Helmet>
        <title>Administração - Dados do Diagnóstico</title>
        <meta name="description" content="Painel administrativo para visualizar leads e respostas do diagnóstico." />
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-white">
        <div className="container mx-auto px-4 py-8 space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold">Painel Administrativo</h1>
              <p className="text-slate-300">Veja os leads e diagnósticos salvos sem usar SQL.</p>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-slate-700 text-white bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-400" />
                    <h2 className="text-xl font-semibold">Leads do Canvas</h2>
                  </div>
                  <Badge variant="secondary">{canvasLeadsQuery.data?.length ?? 0}</Badge>
                </div>

                {canvasLeadsQuery.isLoading ? (
                  <p className="text-slate-400">Carregando...</p>
                ) : canvasLeadsQuery.data?.length ? (
                  <div className="space-y-3 max-h-[520px] overflow-auto pr-2">
                    {canvasLeadsQuery.data.map((lead) => (
                      <div key={lead.id} className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4 text-slate-400" />
                          <span>{lead.email}</span>
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-sm">
                          <MessageCircle className="h-4 w-4 text-slate-400" />
                          <span>{lead.whatsapp}</span>
                        </div>
                        <p className="mt-2 text-xs text-slate-500">
                          {new Date(lead.requestedAt).toLocaleString("pt-BR")}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-400">Nenhum lead encontrado.</p>
                )}
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <ClipboardList className="h-5 w-5 text-blue-400" />
                    <h2 className="text-xl font-semibold">Respostas do Diagnóstico</h2>
                  </div>
                  <Badge variant="secondary">{quizResponsesQuery.data?.length ?? 0}</Badge>
                </div>

                {quizResponsesQuery.isLoading ? (
                  <p className="text-slate-400">Carregando...</p>
                ) : quizResponsesQuery.data?.length ? (
                  <div className="space-y-3 max-h-[520px] overflow-auto pr-2">
                    {quizResponsesQuery.data.map((response) => (
                      <div key={response.id} className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                        <p className="font-medium">{response.firmInfo.name}</p>
                        <p className="text-sm text-slate-400">
                          {response.firmInfo.specialty} • {response.firmInfo.size}
                        </p>
                        <p className="mt-2 text-xs text-slate-500">
                          {new Date(response.completedAt).toLocaleString("pt-BR")}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-400">Nenhuma resposta encontrada.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}