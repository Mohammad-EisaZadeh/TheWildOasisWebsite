"use client";
import SideNavigation from "@/app/_components/SideNavigation";
import { useMediaQuery, useTheme } from "@mui/material";
import SideNavigationDrawer from "../_components/SideNavigationDrawer";

function Layout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="flex h-screen flex-col gap-12 overflow-hidden xl:flex-row">
      <SideNavigation />
      <div className="flex-1 py-1">{children}</div>
    </div>
  );
}

export default Layout;
