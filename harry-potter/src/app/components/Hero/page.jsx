
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#050e0d] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/img/banner.png')"
            }}
        >
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 bg-linear-to-r from-black/35 via-black/10 to-transparent" />

            <div className="absolute inset-0 bg-linear-to-t from-[#020807]/35 via-transparent to-black/25" />

            <div className="relative z-10 flex w-full items-center justify-center px-6 py-28 sm:px-12">
                <div className="flex w-full max-w-155 flex-col items-center text-center">

                    <div className="mb-3 flex w-full items-center justify-center gap-4">
                        <span className="h-px w-12 bg-linear-to-r from-transparent to-[#c4a16e] sm:w-20" />

                        <span className="font-cinzel text-lg uppercase tracking-[0.22em] text-[#dfc49a] sm:text-2xl lg:text-3xl">
                            Bem-vindo a
                        </span>

                        <span className="h-px w-12 bg-linear-to-l from-transparent to-[#c4a16e] sm:w-20" />
                    </div>

                    <div className="flex w-full items-center justify-center">
                        <Image
                            src="/img/saudacao2.png"
                            alt="Hogwarts"
                            width={650}
                            height={200}
                            priority
                            className="h-auto w-full max-w-137.5 object-contain drop-shadow-[0_5px_15px_rgba(0,0,0,0.7)]"
                        />
                    </div>

                    <div className="mt-5 flex w-[85%] items-center justify-center gap-4 text-[#c7a674]">
                        <span className="h-px flex-1 bg-linear-to-r from-transparent to-[#c7a674]" />

                        <span className="text-2xl">✧</span>

                        <span className="h-px flex-1 bg-linear-to-l from-transparent to-[#c7a674]" />
                    </div>

                    <p className="mt-7 max-w-112.5 font-serif text-lg leading-relaxed text-[#f0dfbd] [text-shadow:0_2px_8px_#000] sm:text-xl lg:text-[22px]">
                        Mais que uma escola, um lar para aqueles
                        <br className="hidden sm:block" />
                        {" "}que acreditam na magia.
                    </p>

                    <Link
                        href="/chapeu-seletor"
                        className="group relative mt-8 inline-flex min-h-14.5 items-center justify-center gap-5 border border-[#c5a372] bg-[#08150f]/80 px-6 font-cinzel text-xs uppercase tracking-[0.12em] text-[#e9cfa1] shadow-[inset_0_0_0_4px_#08150f,inset_0_0_0_5px_#9e8159] transition-all duration-300 hover:bg-[#c5a372] hover:text-[#08150f] sm:px-8 sm:text-sm"
                    >
                        <span className="text-[#c5a372] transition group-hover:text-[#08150f]">
                            ✧
                        </span>

                        Iniciar minha jornada

                        <span className="text-[#c5a372] transition group-hover:text-[#08150f]">
                            ✧
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
