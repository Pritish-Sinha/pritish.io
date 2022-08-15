import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
import Head from "next/head";

const LightTheme = {
  backgroundprimary: "#ffffff",
  backgroundSecondary: "#DFDFDD",
  fontPrimary: "#000000",
  fontSecondary: "#5A5A58",
};

const DarkTheme = {
  backgroundPrimary: "#151515",
  backgroundSecondary: "#202022",
  fontPrimary: "#ffffff",
  fontSecondary: "#A5A5A7",
};

export const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  transition: background-color 500ms ease;
}

html{
  scroll-behavior: smooth;
}

html,body{
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

body{
    background-color: ${({ theme }) => theme.backgroundPrimary};
    position: relative;
  }
`;

function MyApp({ Component, pageProps }) {
  // const [theme, setTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")) || "dark"
  // );
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme:light)").matches
          ? "light"
          : "dark")
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <Head>
        <title>Pritish</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="/js/NotAtAllInteresting.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Primary Meta Tags */}
        <title>Pritish's Portfolio</title>
        <meta name="title" content="Pritish's Portfolio" />
        <meta
          name="description"
          content="I am a CSE undergrad at Galgotias, Uttar Pradesh, batch of 2024.I like to work with TS, JS and it's various frameworks. Python is my 2nd language of choice.I have built many projects on AI-ML.This website shows my contact details, past experience along with some of the projects that I have worked on."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pritish.github.io" />
        <meta property="og:title" content="Pritish's Portfolio" />
        <meta
          property="og:description"
          content="I am a CSE undergrad at Galgotias, Uttar Pradesh, batch of 2024.I like to work with TS, JS and it's various frameworks. Python is my 2nd language of choice.I have built many projects on AI-ML.This website shows my contact details, past experience along with some of the projects that I have worked on."
        />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle theme={themes[theme]} />
      <ThemeProvider theme={themes[theme]}>
        <Component theme={theme} setTheme={setTheme} {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
