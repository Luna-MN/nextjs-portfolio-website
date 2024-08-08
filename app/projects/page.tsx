import { Navigation } from '../components/nav';
import { Card } from '../components/card';
import Link from 'next/link';
import { Article } from './article';
const projects = [
    {
        title: 'Duty Complete Plugin',
        description: 'this is a pluin I made for FFXIV in C#',
        href: 'https://github.com/Luna-MN/ffxiv-plugin',
        date: '2024-08-04',
        completed: true,
    },
    {
        title: 'Project 2',
        description: 'This is a description for project 2',
        href: 'https://github.com/Luna-MN/ffxiv-plugin',
        date: '2022-01-02',
    },
    {
        title: 'Project 3',
        description: 'This is a description for project 3',
        href: 'https://github.com/Luna-MN/ffxiv-plugin',
        date: '2022-01-03',
    },
];

export default async function ProjectsPage() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />

            <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-3 sm:mt-0 sm:grid-cols-3 lg:gap-16">
                {projects.map((p) => (
                    <div style={{ marginTop: '75px' }}>
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
                                            <span aria-hidden="true">
                                                &rarr;
                                            </span>
                                        </p>
                                    </div>
                                </article>
                            </Link>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
