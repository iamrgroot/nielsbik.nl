import { Icon } from "@/components/Icon";
import Image from "next/image";
import { ListensStat } from "@/components/ListensStat";
import { NowPlayingStat } from "@/components/NowPlayingStat";
import { RecordsStat } from "@/components/RecordsStat";
import { Suspense } from "react";
import avatar from "./niels.jpg";

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section className="prose prose-neutral text-neutral-800 prose-headings:font-serif dark:prose-invert dark:text-neutral-200">
      <h1>Niels Bik</h1>
      <p className="max-w-[460px]">
        Hey, I'm Niels. I'm a <strong>Product Manager at Stuvia</strong> where I
        work to make buying and selling study materials easy and fast.
      </p>
      <div className="not-prose my-8 flex max-w-[600px] flex-col items-start md:flex-row md:items-center">
        <Image
          alt="Niels Bik"
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 ml-0 space-y-2 text-neutral-500 dark:text-neutral-400 md:mt-0 md:ml-6">
          <NowPlayingStat />
          {/* @ts-expect-error async components */}
          <ListensStat />
          {/* @ts-expect-error async components */}
          <RecordsStat />
        </div>
      </div>
      <p className="max-w-[600px]">
        I absolutely <strong>love</strong> listening to music. Other than that I
        enjoy reading, working out (I do CrossFit), and building web-apps.
      </p>
      <ul className="font-sm not-prose flex list-none flex-col space-x-0 space-y-2 p-0 text-neutral-500 dark:text-neutral-400 md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <a
            className="flex items-center gap-2 transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/nielsrowinbik"
          >
            <Icon.ArrowUpRight className="h-5 w-5" />
            <p className="h-7">connect on linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-2 transition-all hover:text-neutral-700 dark:hover:text-neutral-200"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:hey@nielsbik.nl"
          >
            <Icon.ArrowUpRight className="h-5 w-5" />
            <p className="h-7">send me an email</p>
          </a>
        </li>
      </ul>
    </section>
  );
}