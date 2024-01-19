export default function Header() {
  return (
    <>
      <header className="flex flex-row justify-stretch w-full h-auto text-slate-200 py-4 px-4 xl:p-10 font-sans">
        <Logo />
      </header>
    </>
  );
}

export function Logo() {
  return (
    <>
      <div className="w-full text-3xl xl:text-5xl font-extrabold">
        TEMC ARCADE
      </div>
    </>
  );
}
