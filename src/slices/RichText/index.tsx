import Bounded from "@/components/Bounded"
import type { Content } from "@prismicio/client"
import { PrismicNextLink } from "@prismicio/next"
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react"

/**
 * Props for `RichText`.
 */
type RichTextProps = SliceComponentProps<Content.RichTextSlice>

/**
 * Component for "RichText" Slices.
 */
const RichText = ({ slice }: RichTextProps): JSX.Element => {
  return (
    <Bounded>
      <div className="prose prose-invert prose-lg prose-slate">
        <PrismicRichText field={slice.primary.content} />
      </div>
    </Bounded>
  )
}

export default RichText
