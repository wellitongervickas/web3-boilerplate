import classnames from '@modules/utils/classnames'
import Link from '@components/shared/Link'

interface NavMainProps {
  className?: string
}

const routes = [
  {
    href: '/',
    label: 'Home'
  }
]

const NavMain = (props: NavMainProps) => (
  <ul
    className={classnames.merge([
      props.className,
      'flex items-start md:items-center md:space-x-8'
    ])}
  >
    {routes.map((route) => (
      <li key={route.href}>
        <Link
          activeclass='text-primary-500'
          className='flex items-center justify-center transition-colors duration-150 hover:text-primary-500'
          href={route.href}
        >
          <span>{route.label}</span>
        </Link>
      </li>
    ))}
  </ul>
)

export default NavMain
