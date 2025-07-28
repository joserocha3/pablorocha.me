import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const startups = [
  {
    name: 'NoMoreAnalog',
    description: 'Mobile and web application development. Making cool apps and keeping clients happy.',
    link: { href: 'https://www.nomoreanalog.com', label: 'nomoreanalog.com' },
    className: 'bg-[#AFAEE7] dark:bg-[#AFAEE7] group-hover:opacity-20 opacity-30 dark:opacity-20 scale-100 sm:scale-95',
  },
  {
    name: 'Formcast',
    description: 'A platform for submitting your forms, simply point your HTML form to a secure endpoint.',
    link: { href: 'https://www.criclick.com', label: 'criclick.com' },
    className: 'bg-[#B2D3FF] dark:bg-[#005588] group-hover:opacity-20 opacity-30 dark:opacity-20 scale-100 sm:scale-95',
  },
  {
    name: 'Dot Dot Data',
    description: 'Startup providing location based web and mobile applications to various clients.',
    link: { href: 'https://www.dotdotdata.com', label: 'dotdotdata.com' },
    className: 'bg-[#F1A7A7] dark:bg-[#F187A7] group-hover:opacity-20 opacity-30 dark:opacity-20 scale-100 sm:scale-95',
  },
]

const works = [
  {
    name: 'Pawsome Dogs Training & Behavior',
    description: 'Static website designed for a well-known Chicago dog trainer. Built using Gatsby and styled with styled-components.',
    link: { href: 'https://www.pawsomedogs.net', label: 'pawsomedogs.net' },
    className: 'bg-[#E0B255] dark:bg-[#EE0055] group-hover:opacity-20 opacity-30 dark:opacity-20 scale-100 sm:scale-95',
  },
  {
    name: 'Los Pinos Hardware Co.',
    description: 'Static website hosted for a growing hardware business. This is a static website generated used Nuxt.js.',
    link: {
      href: 'https://www.lospinoshardware.com',
      label: 'lospinoshardware.com',
    },
    className: 'bg-[#7DA180] dark:bg-[#009980] group-hover:opacity-20 opacity-30 dark:opacity-20 scale-100 sm:scale-95',
  },
  {
    name: 'Cagesum',
    description: "The world's first Nicolas Cage text placeholder generator. Created with Next.js on the front-end and Hasura as a backend and hosted via Vercel",
    link: {
      href: 'https://cagesum.com',
      label: 'cagesum.com',
    },
    className: 'bg-[#D5A7B6] dark:bg-[#D5A7B6] group-hover:opacity-20 opacity-30 dark:opacity-20 scale-100 sm:scale-95',
  },
  {
    name: 'Japanese Graded Readers',
    description: 'React Native app powered by an admin dashboard. Uses Firebase for authentication, storage and notifications.',
    link: {
      href: 'https://www.whiterabbitpress.com/japanesegradedreaders',
      label: 'japanesegradedreaders.com',
    },
    className: 'bg-[#AAB7BD] dark:bg-[#AAB7BD] group-hover:opacity-20 opacity-30 dark:opacity-20 scale-100 sm:scale-95',
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Pablo Rocha</title>
        <meta name="description" content="Some things I’ve made over the years." />
      </Head>
      <SimpleLayout
        title="Some things I’ve made over the years."
        intro="I’ve been involved in countless projects over the years. Some business ventures; some shorter term projects. Below are some of the ones that standout and that I am most proud of."
      >
        <h2 className="mt-0 mb-12 text-3xl font-semibold text-zinc-800 dark:text-zinc-100">Ventures</h2>
        <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {startups.map((project) => (
            <Card as="li" key={project.name}>
              <h3 className="mt-0 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target="_blank" className={project.className}>
                  {project.name}
                </Card.Link>
              </h3>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-300 dark:group-hover:text-zinc-50">
                <LinkIcon className="flex-none w-6 h-6" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>

        <h2 className="mt-24 mb-12 text-3xl font-semibold text-zinc-800 dark:text-zinc-100">Projects</h2>
        <ul role="list" className="grid grid-cols-1 mt-12 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((project) => (
            <Card as="li" key={project.name}>
              <h3 className="mt-0 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target="_blank" className={project.className}>
                  {project.name}
                </Card.Link>
              </h3>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 flex mt-6 text-sm font-medium transition text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-300 dark:group-hover:text-zinc-50">
                <LinkIcon className="flex-none w-6 h-6" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
