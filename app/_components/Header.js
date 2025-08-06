import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
console.log(process.env.SUPABASE_URL);
function Header() {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
