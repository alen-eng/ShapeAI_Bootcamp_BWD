import React from "react";
function Footer() {
  var curryr = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {curryr}</p>
    </footer>
  );
}
export default Footer;
