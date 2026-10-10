export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem("theme");var d=document.documentElement;d.classList.remove("light","dark");d.classList.add(t==="light"?"light":"dark");}catch(e){document.documentElement.classList.add("dark");}})();`;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
