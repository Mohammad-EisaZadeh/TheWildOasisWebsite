"use client";
import {
  Bars3Icon,
  HomeModernIcon,
  InformationCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Drawer, IconButton } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

function NavigationDrawer({ session }) {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (state) => () => setOpen(state);

  return (
    <>
      <IconButton className="z-10" onClick={() => setOpen(true)}>
        <Bars3Icon className="h-8 w-8 text-primary-100" />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: { xs: "50%", sm: "40%" },
            backgroundColor: "#1B2631",
            padding: 4,
          },
        }}
      >
        <div className="text-md flex flex-col gap-6 text-lg font-semibold text-primary-200">
          {session?.user.image ? (
            <Link
              onClick={toggleDrawer(false)}
              href="/account"
              className="flex items-center gap-3 border-b border-gray-700 pb-4"
            >
              <img
                src={session.user.image}
                alt={session.user.name}
                className="h-10 w-10 rounded-full"
              />
              <span className="font-semibold">{session.user.name}</span>
            </Link>
          ) : (
            <Link
              onClick={toggleDrawer(false)}
              href="/account"
              className="flex gap-3 transition-colors hover:text-accent-400"
            >
              <UserIcon className="h-5 w-5 text-primary-600" />
              <span>Guest area</span>
            </Link>
          )}

          <Link
            onClick={toggleDrawer(false)}
            href="/cabins"
            className="flex gap-3 transition-colors hover:text-accent-400"
          >
            <HomeModernIcon className="h-5 w-5 text-primary-600" />
            <span>Cabins</span>
          </Link>

          <Link
            onClick={toggleDrawer(false)}
            href="/about"
            className="flex gap-3 transition-colors hover:text-accent-400"
          >
            <InformationCircleIcon className="h-5 w-5 text-primary-600" />
            <span>About</span>
          </Link>
        </div>
      </Drawer>
    </>
  );
}

export default NavigationDrawer;
