import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Header } from "./[slug]/header";

export const revalidate = 60;
export default async function ProjectsPage() {
  const featured = allProjects.find((project) => project.slug === "summarizer")!;
  const top2 = allProjects.find((project) => project.slug === "thrift")!;
  const top3 = allProjects.find((project) => project.slug === "socialsync")!;
  const top4 = allProjects.find((project) => project.slug === "neurl")!;
  const top5 = allProjects.find((project) => project.slug === "respondent")!;
  const top6 = allProjects.find((project) => project.slug === "securify")!;

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Combination of hackathon, personal, and internship projects.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
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
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="mt-4">
                  <p className="text-zinc-200 hover:text-zinc-50 lg:block">
                    Click to see details <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
          <Card>
            <Link href={`/projects/${top2.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {top2.date ? (
                      <time dateTime={new Date(top2.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(top2.date))}
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
                  {top2.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {top2.description}
                </p>
                <div className="mt-4 mb-4">
                  <p className="text-zinc-200 hover:text-zinc-50 lg:block">
                    Click to see details <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
          <Card>
            <Link href={`/projects/${top3.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {top3.date ? (
                      <time dateTime={new Date(top3.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(top3.date))}
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
                  {top3.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {top3.description}
                </p>
                <div className="mt-4">
                  <p className="text-zinc-200 hover:text-zinc-50 lg:block">
                    Click to see details <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
          <Card>
          <Link href={`/projects/${top4.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {top4.date ? (
                      <time dateTime={new Date(top4.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(top4.date))}
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
                  {top4.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {top4.description}
                </p>
                <div className="mt-4">
                  <p className="text-zinc-200 hover:text-zinc-50 lg:block">
                    Click to see details <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
          <Card>
            <Link href={`/projects/${top5.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {top5.date ? (
                      <time dateTime={new Date(top5.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(top5.date))}
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
                  {top5.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {top5.description}
                </p>
                <div className="mt-4">
                  <p className="text-zinc-200 hover:text-zinc-50 lg:block">
                    Click to see details <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
          <Card>
            <Link href={`/projects/${top6.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {top6.date ? (
                      <time dateTime={new Date(top6.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(top6.date))}
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
                  {top6.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {top6.description}
                </p>
                <div className="mt-4">
                  <p className="text-zinc-200 hover:text-zinc-50 lg:block">
                    Click to see details <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

      </div>
    </div>
  );
}
