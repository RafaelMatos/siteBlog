import { Button } from "@/components/ui/button";
import { ArrowRight, Store } from "lucide-react";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <section className="relative justify-center bg-gradient-to-b from-cyan-950/20 to-transparent py-24">
      <div className="absolute inset-0 bg-[url('/footer.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 p-4">
        <Store className="text-cyan-100" />
      </div>
      <div className="container relative">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className={`text-balance text-center font-sans text-heading-xl text-gray-100`}>
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>
          <Button asChild variant={"primary"} className="mt-4">
            <Link href={"/criar-loja"}>
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
