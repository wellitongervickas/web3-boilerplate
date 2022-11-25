type GetTitleProps = {
  title?: string
}

export const parseTitle = (sitename?: string, props?: GetTitleProps) => {
  const hasTitle = props && 'title' in props

  if (!sitename && hasTitle) {
    return props.title
  }

  if (!hasTitle) {
    return sitename
  }

  return `${sitename} ${hasTitle && `- ${props.title}`}`
}

const head = {
  parseTitle
}

export default head
