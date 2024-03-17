import Bounded from "@/components/Bounded"
import ButtonLink from "@/components/ButtonLink"
import StarGrid from "@/components/StarGrid"
import { Content, isFilled } from "@prismicio/client"
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react"

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
      <div className="relative">
        <StarGrid />

        {isFilled.richText(slice.primary.heading) && (
          <h1 className="text-balance text-5xl font-medium md:text-7xl">
            <PrismicText field={slice.primary.heading} />
          </h1>
        )}
        {isFilled.richText(slice.primary.body) && (
          <p className="mx-auto mt-6 max-w-md text-balance text-slate-300">
            <PrismicText field={slice.primary.body} />
          </p>
        )}
        {isFilled.link(slice.primary.button_link) && (
          <ButtonLink field={slice.primary.button_link} className="mt-8">
            {slice.primary.button_label}
          </ButtonLink>
        )}
        {isFilled.image(slice.primary.image) && (
          <div className="glass-container mt-16 w-fit">
            <div className="absolute inset-0 -z-10 bg-blue-500/30 blur-2xl filter" />
            <PrismicNextImage
              field={slice.primary.image}
              className="rounded-lg"
            />
          </div>
        )}
      </div>
    </Bounded>
  )
}

export default Hero
