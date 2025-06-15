import SideNavigation from "@/app/_components/SideNavigation";

function Layout({ children }) {
  return (
    <div className="grid h-screen grid-cols-[16rem_1fr] gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}

export default Layout;
