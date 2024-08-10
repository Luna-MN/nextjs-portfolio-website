import { Navigation } from '../components/nav';
import { Card } from '../components/card';
import Particles from '../components/particles';
import Link from 'next/link';
import { Article } from './article';
const projects = [
    {
        title: 'Duty Complete Plugin',
        description: 'this is a pluin I made for FFXIV in C#',
        href: '/projects/dutycomplete',
        date: '2024-08-04',
        completed: true,
    },
    {
        title: 'FF14 Discord Bot',
        description: 'A discord bot for FFXIV I worked on with a friend',
        href: '/projects/FF14DiscordBot',
        date: '2024-07-30',
    },
    {
        title: 'Numpad game',
        description: 'Quick game I made to test my skills in godot!',
        href: 'https://github.com/Luna-MN/Numpad',
        date: '2024-05-02',
    },
    {
        title: 'Dungeon Rouge',
        description: 'Currently working on a rouge like game in godot',
        href: 'https://github.com/Luna-MN/DungeonRouge',
    },
];

export default async function ProjectsPage() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="w-full mx-auto lg:mx-0 pb-10">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl pt-20">
                    <div className="flex justify-center items-center">
                        Projects
                    </div>
                </h2>
                <p className="flex justify-center items-center mt-4 text-zinc-400">
                    Some of the projects I work on in my some are on my own
                    time.
                </p>
            </div>
            <Particles className="absolute inset-0 -z-10" quantity={100} />
            <div className="w-full h-px bg-zinc-800" />
            <div className="grid w-full h-full min-h-screen grid-cols-3 gap-8 mx-auto mt-3 sm:mt-0 sm:grid-cols-3 lg:gap-16 pt-10">
                {projects.map((p) => (
                    <Card>
                        <Link href={p.href}>
                            <article className="relative w-full h-full p-4 md:p-8">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="text-xs text-zinc-100">
                                        {p.date ? (
                                            <time
                                                dateTime={new Date(
                                                    p.date
                                                ).toISOString()}
                                            >
                                                {Intl.DateTimeFormat(
                                                    undefined,
                                                    {
                                                        dateStyle: 'medium',
                                                    }
                                                ).format(new Date(p.date))}
                                            </time>
                                        ) : (
                                            <span>SOON</span>
                                        )}
                                    </div>
                                </div>

                                <h2
                                    id="featured-post"
                                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                                >
                                    {p.title}
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    {p.description}
                                </p>
                                <div className="absolute bottom-4 md:bottom-8">
                                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                                        Read more{' '}
                                        <span aria-hidden="true">&rarr;</span>
                                    </p>
                                </div>
                            </article>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    );
}
