import Link from "next/link";
import { auth } from "../_lib/auth";
import { useMediaQuery, useTheme } from "@mui/material";
import NavigationClient from "./NavigationClient";

export default async function Navigation() {
  const session = await auth();
  return <NavigationClient session={session} />;
}
