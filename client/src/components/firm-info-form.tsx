import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertFirmInfoSchema, type InsertFirmInfo } from "@shared/schema";

interface FirmInfoFormProps {
  onSubmit: (firmInfo: InsertFirmInfo) => void;
}

export default function FirmInfoForm({ onSubmit }: FirmInfoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<InsertFirmInfo>({
    resolver: zodResolver(insertFirmInfoSchema)
  });

  return (
    <div className="glass-morphism p-6 md:p-12 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <i className="fas fa-building text-5xl text-blue-300 mb-4"></i>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
          Informações do Escritório
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Por favor, preencha as informações abaixo para um diagnóstico mais preciso e personalizado para seu escritório.
        </p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 font-semibold mb-3">
              <i className="fas fa-building mr-2"></i>Nome do Escritório *
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              className="form-input"
              placeholder="Ex: Santos & Associados Advocacia"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="size" className="block text-gray-300 font-semibold mb-3">
              <i className="fas fa-users mr-2"></i>Tamanho do Escritório *
            </label>
            <select {...register("size")} id="size" className="form-input">
              <option value="">Selecione...</option>
              <option value="solo">Advogado autônomo</option>
              <option value="small">2-5 advogados</option>
              <option value="medium">6-20 advogados</option>
              <option value="large">Mais de 20 advogados</option>
            </select>
            {errors.size && (
              <p className="text-red-400 text-sm mt-1">{errors.size.message}</p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="specialty" className="block text-gray-300 font-semibold mb-3">
            <i className="fas fa-gavel mr-2"></i>Principal Área de Atuação *
          </label>
          <input
            {...register("specialty")}
            type="text"
            id="specialty"
            className="form-input"
            placeholder="Ex: Direito Trabalhista, Direito Tributário, Direito Civil"
          />
          {errors.specialty && (
            <p className="text-red-400 text-sm mt-1">{errors.specialty.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="target" className="block text-gray-300 font-semibold mb-3">
            <i className="fas fa-target mr-2"></i>Público-alvo Principal *
          </label>
          <input
            {...register("target")}
            type="text"
            id="target"
            className="form-input"
            placeholder="Ex: Empresas de tecnologia, Pessoas físicas de alta renda, PMEs"
          />
          {errors.target && (
            <p className="text-red-400 text-sm mt-1">{errors.target.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="years" className="block text-gray-300 font-semibold mb-3">
            <i className="fas fa-calendar mr-2"></i>Anos de Atuação *
          </label>
          <select {...register("years")} id="years" className="form-input">
            <option value="">Selecione...</option>
            <option value="0-2">0-2 anos</option>
            <option value="3-5">3-5 anos</option>
            <option value="6-10">6-10 anos</option>
            <option value="11-20">11-20 anos</option>
            <option value="20+">Mais de 20 anos</option>
          </select>
          {errors.years && (
            <p className="text-red-400 text-sm mt-1">{errors.years.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="mission" className="block text-gray-300 font-semibold mb-3">
            <i className="fas fa-heart mr-2"></i>Missão ou Propósito do Escritório *
          </label>
          <textarea
            {...register("mission")}
            id="mission"
            rows={4}
            className="form-input resize-none"
            placeholder="Ex: Oferecer soluções jurídicas inovadoras e eficientes, garantindo segurança jurídica e excelência no atendimento aos nossos clientes..."
          />
          {errors.mission && (
            <p className="text-red-400 text-sm mt-1">{errors.mission.message}</p>
          )}
        </div>
        
        <div className="text-center mt-8">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="btn-primary text-lg px-10 py-4 shadow-lg"
          >
            <i className="fas fa-arrow-right mr-3"></i>
            {isSubmitting ? "Processando..." : "Continuar para o Questionário"}
          </button>
        </div>
      </form>
    </div>
  );
}
