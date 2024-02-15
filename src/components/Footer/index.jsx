export const Footer = () => {
  return (
    <footer className="w-full h-40 bg-segundaryColorBlue text-tertiaryColorRed flex flex-col justify-center items-center gap-5 shadow-md shadow-primaryColorBlue">
      <p>Created by @Marcelo-Soares-codes</p>
      <div className="flex flex-wrap gap-5">
        <img
          onClick={() => {
            window.open('https://github.com/Marcelo-Soares-codes');
          }}
          src="github-icon.svg"
          alt="github icon"
          className="w-7 cursor-pointer"
        />
        <img
          onClick={() => {
            window.open('https://www.linkedin.com/in/marcelo-soares-codes/');
          }}
          src="linkedin-icon.svg"
          alt="linkedin icon"
          className="w-7 cursor-pointer"
        />
      </div>
    </footer>
  );
};
