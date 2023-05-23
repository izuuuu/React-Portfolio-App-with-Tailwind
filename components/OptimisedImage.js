import { FC, useState } from 'react'
import Image from 'next/future/image'
import cx from 'classnames'

const LAYOUT = {
  'cover': 'object-cover',
  'contain': 'object-contain',
  'fill': 'object-fill',
}

const DEFAULT_SIZES = `(max-width: 640px) 96vw, (max-width: 1024px) 96vw, (max-width: 1536px) 96vw` // Size of an image that spans the full width of screen

export const OptimisedImage = ({
  src,
  alt,
  layout = LayoutEnum.contain,
  sizes = DEFAULT_SIZES,
  className,
  ...props
}) => {
  const [hasLoaded, setHasLoaded] = useState(false)

  return (
    <Image
      src={src}
      alt={alt}
      className={cx(
        'next-image transition-all duration-500',
        className,
        LAYOUT[layout],
        {
          'opacity-100 blur-0': hasLoaded,
          'opacity-0 blur-lg': !hasLoaded,
        },
      )}
      fill
      sizes={sizes}
      quality={100}
      onLoadingComplete={() => setHasLoaded(true)}
      {...props}
    />
  )
}
