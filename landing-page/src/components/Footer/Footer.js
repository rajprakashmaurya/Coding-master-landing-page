import React from "react";
import "./Footer.css";
import FooterLogo from "./FooterLogo/FooterLogo";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-header">
          <div className="footer-header-left">
            Get connected with us on social network:
          </div>
          <div className="footer-header-right">
            <FooterLogo
              logo="https://cliply.co/wp-content/uploads/2021/02/372102050_LINKEDIN_ICON_TRANSPARENT_1080.gif"
              altImage="LinkdinLogo"
            />
            <FooterLogo
              logo="https://moein.video/wp-content/uploads/2022/12/Gmail-Logo-GIF-Telegram-Icon-GIF-Royalty-Free-Animated-Icon-GIF-350px-after-effects-project.gif"
              altImage="gmailLogo"
            />
            <FooterLogo
              logo="https://media4.giphy.com/media/5a3xbeZj7AkqG8197S/200w.gif?cid=6c09b952yosxiayz40e4319dbhh25ouldh2mv6vdps0nnxxj&rid=200w.gif&ct=s"
              altImage="youtubeLogo"
            />
          </div>
        </div>
        <h1>© 2023 Copyright: codingMaster.com</h1>
      </div>
    </>
  );
}
