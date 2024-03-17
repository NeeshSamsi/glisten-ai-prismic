"use client"

import { type Content } from "@prismicio/client"

import Link from "next/link"
import { PrismicNextLink } from "@prismicio/next"
import WordMark from "@/components/WordMark"
import ButtonLink from "@/components/ButtonLink"

type NavBarProps = {
  settings: Content.SettingsDocument
}

export default function NavBar({ settings }: NavBarProps) {
  return (
    <nav aria-label="Main" className="px-4 py-4 md:px-6 md:py-6">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <Link href="/">
          <WordMark />
          <span className="sr-only">Glisten.ai Home Page</span>
        </Link>
        <ul className="flex gap-6">
          {settings.data.navigation.map(({ link, label, cta_button }) => {
            if (cta_button) {
              return (
                <li key={label}>
                  <ButtonLink field={link}>{label}</ButtonLink>
                </li>
              )
            }

            return (
              <li key={label}>
                <PrismicNextLink
                  field={link}
                  className="inline-flex min-h-11 items-center"
                >
                  {label}
                </PrismicNextLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
