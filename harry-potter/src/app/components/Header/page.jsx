"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, UserRound, Menu, X } from "lucide-react";

const links = [
    { nome: "Início", href: "/" },
    { nome: "Hogwarts", href: "/hogwarts" },
    { nome: "Casas", href: "/casas" },
    { nome: "Feitiços", href: "/feiticos" },
    { nome: "Poções", href: "/pocoes" },
    { nome: "Mapa", href: "/mapa" },
    { nome: "Curiosidades", href: "/curiosidades" }
];

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className="absolute top-0 left-0 z-50 w-full">
            <div className="mx-auto flex h-28 max-w-[1920px] items-center justify-between gap-6 px-6 lg:px-14">
                <Link href="/" className="flex shrink-0 items-center gap-8">
                    <Image
                        src="/img/sonserina.png"
                        alt="Brasão da Sonserina"
                        width={75}
                        height={90}
                        className="h-auto w-18.75 object-contain"
                        priority
                    />

                    <span className="hidden h-16 w-px bg-linear-to-b from-transparent via-[#bda47a] to-transparent xl:block" />
                </Link>

                <nav className="hidden flex-1 items-center gap-7 xl:flex 2xl:gap-10">
                    {links.map((link, index) => (
                        <Link
                            key={link.nome}
                            href={link.href}
                            className={`relative whitespace-nowrap font-cinzel text-[12px] uppercase tracking-[0.09em] transition-colors hover:text-[#e7c994] 2xl:text-sm ${index === 0
                                    ? "text-[#e7c994]"
                                    : "text-[#e5d4b3]"
                                }`}
                        >
                            {link.nome}

                            {index === 0 && (
                                <span className="absolute -bottom-3 left-0 h-px w-full bg-[#c9a66b]" />
                            )}
                        </Link>
                    ))}
                </nav>

                <div className="hidden shrink-0 items-center gap-7 xl:flex">
                    <button
                        type="button"
                        aria-label="Pesquisar"
                        className="text-[#d6b985] transition hover:text-white"
                    >
                        <Search size={27} strokeWidth={1.5} />
                    </button>

                    <Link
                        href="/perfil"
                        aria-label="Perfil"
                        className="text-[#d6b985] transition hover:text-white"
                    >
                        <UserRound size={27} strokeWidth={1.5} />
                    </Link>

                    <Link
                        href="/minha-jornada"
                        className="border border-[#bfa477] bg-[#07120f]/70 px-7 py-4 font-cinzel text-xs uppercase tracking-widest text-[#e6cca0] transition hover:bg-[#bfa477] hover:text-[#101b16]"
                    >
                        Minha Jornada
                    </Link>
                </div>

                <button
                    type="button"
                    aria-label="Abrir menu"
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="text-[#e6cca0] xl:hidden"
                >
                    {menuAberto ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {menuAberto && (
                <nav className="absolute left-0 top-28 flex w-full flex-col gap-1 border-t border-[#bfa477]/30 bg-[#07120f]/95 px-7 py-6 backdrop-blur-xl xl:hidden">
                    {links.map((link) => (
                        <Link
                            key={link.nome}
                            href={link.href}
                            onClick={() => setMenuAberto(false)}
                            className="border-b border-[#bfa477]/10 py-3 font-cinzel text-sm uppercase tracking-widest text-[#e6cca0]"
                        >
                            {link.nome}
                        </Link>
                    ))}

                    <Link
                        href="/minha-jornada"
                        onClick={() => setMenuAberto(false)}
                        className="mt-5 border border-[#bfa477] py-4 text-center font-cinzel text-sm uppercase text-[#e6cca0]"
                    >
                        Minha Jornada
                    </Link>
                </nav>
            )}
        </header>
    );
}
