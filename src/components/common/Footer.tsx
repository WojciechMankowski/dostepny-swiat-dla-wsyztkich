const Footer = () => {
  return (
    <footer>
      <div
        className="w-full mx-auto max-w-screen-xl
       p-4 md:flex md:items-center 
       md:justify-between
       grid-item
       "
      >
        <p>© Copyright 2024 - Wszystkie prawa zastrzeżone.</p>
      </div>
      <div className="grid-item"></div>
      <div className="grid-item">
        <p>
          Stworzony przez:{" "}
          <a
            href="https://www.linkedin.com/in/w-mankowski/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wojciech Mankowski
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
