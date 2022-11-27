import { ReactNode, useMemo, ReactElement } from 'react'
import { Children, cloneElement } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'

import classnames from '@modules/utils/classnames'

interface LinkProps {
  title?: string
  children: ReactNode
  activeClass?: string
  defaultClass?: string

  className?: string
  href: string
  as?: string
}

const Link = ({
  children,
  activeClass,
  defaultClass,
  className,
  href,
  ...rest
}: LinkProps) => {
  const router = useRouter()
  const child = Children.only(children) as ReactElement

  const isCurrentPath = useMemo(
    () => router.asPath === href,
    [router.asPath, href]
  )

  const elementClassName = useMemo(
    () =>
      classnames.merge([
        className,
        !isCurrentPath ? defaultClass : activeClass,
        child?.props?.className
      ]),
    [className, activeClass, defaultClass, child, isCurrentPath]
  )

  return (
    <NextLink href={href} {...rest}>
      {cloneElement(child, {
        className: elementClassName
      })}
    </NextLink>
  )
}

export default Link
