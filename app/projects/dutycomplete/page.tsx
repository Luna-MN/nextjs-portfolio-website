import React from 'react';
import { Navigation } from '../../components/nav';
import { Card } from '../../components/card';
import Link from 'next/link';

export default async function DutyCompletePage() {
    return (
        <div className="relative pb-16">
            <Navigation />
            <div className="min-h-screen mx-auto lg:mx-0 pt-20">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                    <div className="flex justify-center items-center">
                        <h1>Duty Complete Plugin</h1>
                    </div>
                </h2>
                <p className="flex justify-center items-center mt-4 text-zinc-400">
                    this is a pluin I made for FFXIV in C#
                </p>
            </div>
        </div>
    );
}
