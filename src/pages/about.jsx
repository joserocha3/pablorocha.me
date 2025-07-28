import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Contact } from '@/components/Contact'
import { TwitterIcon, InstagramIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link href={href} target="_blank" className="flex text-sm font-medium transition group text-zinc-800 hover:text-sky-600 dark:text-zinc-200 dark:hover:text-sky-300">
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-sky-600 dark:group-hover:fill-sky-300" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Pablo Rocha</title>
        <meta name="description" content="I’m Pablo Rocha. I live in New York City, where I design the future." />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="pablo rocha headshot"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Hi! I’m Pablo Rocha 👋</h1>
            <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
              <p>
                I’m currently living in the southern part of Texas right along the border. I hop back and forth between working on client projects and focusing on a few exciting
                ventures.
              </p>
              <p>When I find free time I like to jump rope and do some other active things. It is not always easy, but I try to stick to a keto diet.</p>
              <p>
                Even when I am not working, I still catch myself thinking (or daydreaming) about how to improve current projects. I keep an open mind so I can continually improve
                my development and management skills.
              </p>
            </div>

            <div className="pt-12">
              <Contact />
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://github.com/joserocha3" aria-label="Follow on GitHub" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/jprocha101" aria-label="Follow on LinkedIn" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink href="https://twitter.com/jprocha101" aria-label="Follow on Twitter" icon={TwitterIcon} className="mt-4">
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://instagram.com/jprocha101" aria-label="Follow on Instagram" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="mailto:pablo@pablorocha.me" icon={MailIcon} className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40">
                pablo@pablorocha.me
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
