import React from "react"

const Footer = props => {
  return (
    <div id="footer">
      <div className="row">
        <div className="column">
          <p id="cp">&copy; {props.name}</p>
          <p id="by-gatsby" style={{opacity: .5}}>
            Built with love by{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://bald.design"
            >
              B
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
