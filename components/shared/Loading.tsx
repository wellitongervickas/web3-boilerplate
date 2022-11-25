import { useMemo } from 'react'
import classnames from '@modules/utils/classnames'

interface LoadingProps {
  className?: string
  maxPins?: number
  pinsClassName?: string
}

const Loading = ({ maxPins, className, pinsClassName }: LoadingProps) => {
  const pins = useMemo(
    () => Array.from({ length: maxPins || 4 }).fill(''),
    [maxPins]
  )

  return (
    <div
      className={classnames.merge([
        className,
        'flex flex-row items-center justify-between gap-2'
      ])}
    >
      {pins.map((_, index) => (
        <div
          key={index}
          className={classnames.merge([
            pinsClassName || 'bg-gray-500',
            'h-1 w-1 animate-ping rounded-full'
          ])}
        />
      ))}
    </div>
  )
}

export default Loading
