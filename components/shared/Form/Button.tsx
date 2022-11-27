import { ReactNode, useMemo, ButtonHTMLAttributes } from 'react'
import Loading from '@components/shared/Loading'
import classnames from '@modules/utils/classnames'

export enum Variants {
  primary,
  dark
}

export enum Sizes {
  sm
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  loading?: boolean
  children: ReactNode
  variant?: Variants
  size?: Sizes
  className?: string
}

export const Button = ({
  children,
  className,
  loading,
  size = Sizes.sm,
  variant = Variants.primary,
  ...rest
}: ButtonProps) => {
  const customizations = useMemo(() => {
    return {
      size: { [Sizes.sm]: 'py-1.5 px-3' }[size],
      variant: {
        [Variants.primary]: 'hover:bg-primary-500/50 bg-primary-500 text-white',
        [Variants.dark]: 'hover:bg-gray-800/50 bg-gray-800 text-gray-300'
      }[variant]
    }
  }, [size, variant])

  return (
    <button
      {...rest}
      className={classnames.merge([
        className,
        customizations.size,
        customizations.variant,
        'transition-colors duration-200'
      ])}
    >
      {loading ? (
        <Loading className='m-2' pinsClassName='bg-white' />
      ) : (
        children
      )}
    </button>
  )
}

export default Button
