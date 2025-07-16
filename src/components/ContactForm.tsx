"use client";
import { Check, ChevronRight } from "lucide-react"; // Eliminado 'Loader2' que no se usa
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const ContactForm = () => {
  // Los estados para los campos se mantienen igual
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  // --- INICIO DE LA MODIFICACIÓN ---

  // La función handleSubmit ahora es mucho más simple
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Creamos el asunto y el cuerpo del email
    const subject = `Contacto de ${fullName} desde la web`;
    const body = `Nombre: ${fullName}%0AEmail: ${email}%0A%0AMensaje:%0A${message}`;

    // Abrimos el cliente de correo del usuario
    window.location.href = `mailto:tu-email@ropencorp.com?subject=${subject}&body=${body}`;

    // Opcional: Limpiar el formulario después de hacer clic
    setFullName("");
    setEmail("");
    setMessage("");
  };
  
  // --- FIN DE LA MODIFICACIÓN ---

  return (
    // El resto del formulario visual (JSX) no necesita cambios
    <form className="min-w-7xl mx-auto sm:mt-4" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="fullname">Nombre Completo</Label>
          <Input
            id="fullname"
            placeholder="Tu Nombre"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Dirección de Email</Label>
          <Input
            id="email"
            placeholder="tu@email.com"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </LabelInputContainer>
      </div>
      <div className="grid w-full gap-1.5 mb-4">
        <Label htmlFor="content">Tu Mensaje</Label>
        <Textarea
          placeholder="Cuéntame sobre tu proyecto..."
          id="content"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <p className="text-sm text-muted-foreground">
          Nunca compartiré tus datos con nadie. ¡Promesa!
        </p>
      </div>
      <Button
        // El estado 'disabled' ya no es necesario aquí
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        {/* Eliminamos la lógica del 'loading' y dejamos solo el texto final */}
        <div className="flex items-center justify-center">
          Enviar Mensaje <ChevronRight className="w-4 h-4 ml-4" />
        </div>
        <BottomGradient />
      </Button>
    </form>
  );
};

export default ContactForm;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-brand to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent orange-400 to-transparent" />
    </>
  );
};