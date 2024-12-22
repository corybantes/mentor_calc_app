import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme1: {
          vddb_main: "hsl(var(--very-dark-desaturated-blue-main))",
          vddb_toggle: "hsl(var(--very-dark-desaturated-blue-toggle-keypad))",
          vddb_screen: "hsl(var(--very-dark-desaturated-blue-screen))",

          ddb_keybg: "hsl(var(--desaturated-dark-blue-key-bg))",
          ddb_keyshw: "hsl(var(--desaturated-dark-blue-key-shw))",

          red_key: "hsl(var(--red-key-toggle))",
          dr_keyshw: "hsl(var(--dark-red-key-shw))",

          lgo_key: "hsl(var(--light-grayish-orange-key-bg))",
          go_keyshw: "hsl(var(--grayish-orange-key-shw))",

          vgb_text: "hsl(var(--very-grayish-blue-text))",
          white: "hsl(var(--white))",
        },
        theme2: {
          lg_main: "hsl(var(--light-gray-main))",
          gr_toggle: "hsl(var(--grayish-red-toggle))",
          vlg_screen: "hsl(var(--very-light-gray-screen))",

          dmc_keybg: "hsl(var(--dark-moderate-cyan-key-bg))",
          vdc_keyshw: "hsl(var(--very-dark-cyan-key-shw))",

          o_keybg: "hsl(var(--orange-key-bg))",
          do_keyshw: "hsl(var(--dark-orange-key-shw))",

          lgy_keybg: "hsl(var(--light-grayish-yellow-key-bg))",
          dgo_keyshw: "hsl(var(--dark-grayish-orange-key-shw))",

          vdgy_text: "hsl(var(--very-dark-grayish-yellow-text))",
          white: "hsl(var(--white))",
        },
        theme3: {
          vdv_main: "hsl(var(--very-dark-violet-main))",
          vdv_toggle: "hsl(var(--very-dark-violet-toggle))",

          dv_keybg: "hsl(var(--dark-violet-key-bg))",
          vm_keyshw: "hsl(var(--vivid-magenta-key-shw))",

          pc_keybg: "hsl(var(--pure-cyan-key-bg))",
          sc_keyshw: "hsl(var(--soft-cyan-key-shw))",

          vdv_keybg: "hsl(var(--very-dark-violet-key-bg))",
          dm_keyshw: "hsl(var(--dark-magenta-key-shw))",

          ly_text: "hsl(var(--light-yellow-text))",
          vbd_text: "hsl(var(--very-dark-blue-text))",
          white: "hsl(var(--white))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
