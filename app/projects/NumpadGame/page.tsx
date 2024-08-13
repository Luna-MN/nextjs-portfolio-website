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
                        <h1>Numpad Game</h1>
                    </div>
                </h1>
                <h2 className="flex justify-center items-center mt-4 text-zinc-100">
                    Quick game to test my skills in godot
                </h2>
                <p className="flex justify-center items-center mt-4 text-zinc-400">
                    This is a simple game I made to test my skills in godot. It
                    is a simple game where you have to press the numpad keys in
                    order as fast as you can. <br /> This game was made using
                    godot and C#. I made this game to test my skills in godot
                    and to see how fast I could make a game. The game is simple
                    <br />
                    and easy to play. you just have to press the numpad keys in
                    order as fast as you can. The game will keep track of your
                    time and show you how long <br /> it took you to complete
                    the game.
                </p>
                <div className="flex justify-center items-center w-full gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16 pt-10">
                    <div className="sm:grid-cols-2">
                        <h2 className="flex justify-center items-center text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-4">
                            Github Repo
                        </h2>
                        <Card>
                            <Link
                                href={'https://github.com/Luna-MN/Numpad'}
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
                                        {'Numpad Game'}
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
                                href={'https://godotengine.org'}
                                target="_blank"
                                className="p-1 relative flex flex-col items-center gap-2 duration-700 group md:gap-2 md:py-7 lg:pb-24 md:p-8"
                            >
                                <span
                                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                    aria-hidden="true"
                                />
                                <span className="relative z-10 flex items-center justify-center w-8 h-8 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                                    {<ArrowUpIcon size={20} />}
                                </span>{' '}
                                <div className="z-10 flex flex-col items-center">
                                    <span className="lg:text-lg font-medium duration-150 xl:text-2xl text-zinc-200 group-hover:text-white font-display">
                                        {'Godot'}
                                    </span>
                                    <span className="mt-2 text-xs text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                        {'API Docs'}
                                    </span>
                                </div>
                            </Link>
                        </Card>
                        <Card>
                            <Link
                                href={
                                    'https://learn.microsoft.com/en-us/dotnet/csharp/'
                                }
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
                                        {'C#'}
                                    </span>
                                    <span className="mt-2 text-xs text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                        {'Learn C#'}
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
