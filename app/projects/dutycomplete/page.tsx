import React from 'react';
import { Navigation } from '../../components/nav';
import { Card } from '../../components/card';
import { Github, ArrowUpIcon } from 'lucide-react';
import Link from 'next/link';

export default async function DutyCompletePage() {
    return (
        <div className="relative pb-16">
            <Navigation />
            <div className="min-h-screen mx-auto lg:mx-0 pt-20 ">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                    <div className="flex justify-center items-center">
                        <h1>Duty Complete Plugin</h1>
                    </div>
                </h1>
                <h2 className="flex justify-center items-center mt-4 text-zinc-100">
                    This is a pluin I made for FFXIV in C#
                </h2>
                <p className="flex justify-center items-center mt-4 text-zinc-400">
                    This plugin is designed to help you track your completed
                    duties and the time taken to complete them. <br /> It
                    leverages the Dalamud plugin framework and is developed in
                    C#. This simple addon requires the <br />
                    Dalamud plugin framework to function. <br /> it works by
                    subscribing to the chat function of the game and waiding for
                    the word "complition" in <br /> a specific chat channel.
                    then logging the kill time and increasing the kill count by
                    one.
                </p>
                <div className="flex justify-center items-center text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl pt-8"></div>
                <div className="flex justify-center items-center w-full gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16 pt-8">
                    <div className="sm:grid-cols-2">
                        <h2 className="flex justify-center items-center text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-4">
                            Github Repo
                        </h2>
                        <Card>
                            <Link
                                href={'https://github.com/Luna-MN/ffxiv-plugin'}
                                target="_blank"
                                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                            >
                                <span
                                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                    aria-hidden="true"
                                />
                                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                    {<Github size={20} />}
                                </span>{' '}
                                <div className="z-10 flex flex-col items-center">
                                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                                        {'Duty Complete Plugin'}
                                    </span>
                                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                        {'Github'}
                                    </span>
                                </div>
                            </Link>
                        </Card>
                    </div>
                    <div>
                        <h2 className="flex justify-center items-center text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-4">
                            API Docs
                        </h2>
                        <Card>
                            <Link
                                href={'https://goatcorp.github.io/faq/'}
                                target="_blank"
                                className="p-1 relative flex flex-col items-center gap-2 duration-700 group md:gap-2 md:py-7 lg:pb-24 md:p-8"
                            >
                                <span
                                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                    aria-hidden="true"
                                />
                                <span className="relative z-10 flex items-center justify-center w-8 h-8 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                    {<ArrowUpIcon size={16} />}
                                </span>
                                <div className="z-10 flex flex-col items-center">
                                    <span className="lg:text-lg font-medium duration-150 xl:text-2xl text-zinc-200 group-hover:text-white font-display">
                                        {'XIV Quick Launcher'}
                                    </span>
                                    <span className="mt-2 text-xs text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                        {'Dalamud'}
                                    </span>
                                </div>
                            </Link>
                        </Card>
                        <Card>
                            <Link
                                href={'https://www.finalfantasyxiv.com'}
                                target="_blank"
                                className="p-1 relative flex flex-col items-center gap-2 duration-700 group md:gap-2 md:py-7 lg:pb-24 md:p-8"
                            >
                                <span
                                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                    aria-hidden="true"
                                />
                                <span className="relative z-10 flex items-center justify-center w-8 h-8 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                    {<ArrowUpIcon size={16} />}
                                </span>
                                <div className="z-10 flex flex-col items-center">
                                    <span className="lg:text-lg font-medium duration-150 xl:text-2xl text-zinc-200 group-hover:text-white font-display">
                                        {'Final Fantasy XIV'}
                                    </span>
                                    <span className="mt-2 text-xs text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                        {'FFXIV'}
                                    </span>
                                </div>
                            </Link>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
