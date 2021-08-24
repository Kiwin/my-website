import { SocialIcon } from "react-social-icons"
function LinkBar() {
  return (
    <div>
      <SocialIcon
        url="https://github.com/Kiwin"
        bgColor="#ffffff"
        //BUG: Bind scaling to viewport size.
        style={{ transform: "scale(200%)", fontSize: "1em" }}
      />
    </div>
  )
}

export default LinkBar
