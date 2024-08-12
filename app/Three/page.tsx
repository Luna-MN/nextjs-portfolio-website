import React from 'react';
import { Navigation } from '../components/nav';
import { Card } from '../components/card';
import Link from 'next/link';

export default async function ThreePage() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="w-full mx-auto lg:mx-0 pb-10">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl pt-20">
                    <div className="flex justify-center items-center">
                        COMING SOON
                    </div>
                </h2>
            </div>
        </div>
    );
}
