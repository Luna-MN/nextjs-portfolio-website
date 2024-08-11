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
                        <h1>FF14 Discord Bot</h1>
                    </div>
                </h1>
                <h2 className="flex justify-center items-center mt-4 text-zinc-100">
                    A discord bot for FFXIV I worked on with a friend coded in
                    discord.js
                </h2>
                <p className="flex justify-center items-center mt-4 text-zinc-400">
                    This is a discord bot I worked on with a friend. is has a
                    couple of features but the main ones are. /itemLookup and
                    /itemData: <br /> <br /> /itemLookup will give you the price
                    of the item on differant servers and if the item is high
                    quality or not. this gives you an easy <br /> way to find
                    item prices on differant servers if does this using the
                    universalis REST api and searching for the item ID of the
                    given <br /> item name. <br /> /itemData will give you the
                    locations to get an item based on the item ID. this is an
                    easy way to get what quest/NPC you need to <br /> go to. it
                    does this but using the Garland Tools api and searching for
                    the item this will give you a long list of accosiated ID's
                    and from
                    <br /> this we can sanitize the data into places you get the
                    item from this and then return it to the user.
                </p>
                <div className="flex justify-center items-center w-full gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16 pt-10">
                    <div className="sm:grid-cols-2">
                        <h2 className="flex justify-center items-center text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-4">
                            Github Repo
                        </h2>
                        <Card>
                            <Link
                                href={
                                    'https://github.com/FabianXh/FF14DiscordBot'
                                }
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
                                        {'FF14 Discord Bot'}
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
                                href={'https://discord.js.org'}
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
                                        {'Discord.js'}
                                    </span>
                                    <span className="mt-2 text-xs text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                        {'API Docs'}
                                    </span>
                                </div>
                            </Link>
                        </Card>
                        <Card>
                            <Link
                                href={'https://garlandtools.org/db/'}
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
                                        {'Garland Tools'}
                                    </span>
                                    <span className="mt-2 text-xs text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                        {'Garland Tools'}
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
