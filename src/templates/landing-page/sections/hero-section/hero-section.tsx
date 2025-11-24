import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Store } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export const HeroSecttion = () => {
  return (
    <section className="container relative mt-6 flex items-center justify-center">
      <div className="grid min-h-[20rem] grid-cols-1 items-center gap-8 md:h-[36rem] md:grid-cols-2">
        <div className="absolute inset-0 block md:hidden">
          <Image
            src={"/herosection.svg"}
            alt="Ilustração com ícones store, tag e sacola"
            fill
            priority
            className="object-cover opacity-30" // deixa translúcida
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
          <h1 className="font-sans text-heading-hg text-gray-100">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-cyan-100" />
                <span className="text-body-md text-gray-200">
                  Crie o seu site em menos de 5 minutos
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Store className="h-4 w-4 text-cyan-100" />
                <span className="text-body-md text-gray-200">
                  Acompanhe e otimize seu negócio online
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-col items-center gap-2 text-white md:items-start lg:items-start">
              <Button className="w-fit rounded-full" asChild>
                <Link href={"/criar-loja"}>
                  Criar loja grátis
                  <ArrowRight className="" />
                </Link>
              </Button>
              <p className="text-body-xs text-gray-300">Não precisa de cartão de crédito</p>
            </div>
          </div>
        </div>

        <div className="realative order-first hidden h-[20rem] items-center justify-center md:order-last md:flex md:h-full lg:flex">
          <Image
            src={"/herosection.svg"}
            alt="Ilustração com icones store,tag e sacola"
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
