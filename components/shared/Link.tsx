import { ReactNode, useMemo, ReactElement } from 'react'
import { Children, cloneElement } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'

import classnames from '@modules/utils/classnames'

interface LinkProps {
  title?: string
  children: ReactNode
  activeclass?: string
  className?: string
  href: string
  as?: string
}

const Link = ({
  children,
  activeclass,
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
        isCurrentPath && activeclass,
        child?.props?.className
      ]),
    [className, activeclass, child, isCurrentPath]
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
