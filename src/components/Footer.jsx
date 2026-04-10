import '../styles/Footer.css'; // Make sure this path matches where your CSS file is saved!

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copyright">
        © {new Date().getFullYear()} YU STUDIOS
      </p>
    </footer>
  );
}