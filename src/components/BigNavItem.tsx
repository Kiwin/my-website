type BigNavItemProps = {
  text: string
  url: string
}

function BigNavItem(props: BigNavItemProps) {
  return (
    <li className="nav-item">
      <a href={props.url}>
        <p>{props.text}</p>
      </a>
    </li>
  )
}

export default BigNavItem
