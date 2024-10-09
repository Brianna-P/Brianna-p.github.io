import React from "react";

function Footer() {
  return (
    <footer className="footer">
          <div className="text-center">
            <p style={{ margin: "0", fontSize: "14px", color: "#2f4f4f" }}>
              © {new Date().getFullYear()} Brianna Patten.
            </p>
          </div>
        </footer>
  );
}

export default Footer;
