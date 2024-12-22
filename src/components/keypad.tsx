import React from "react";

export const Keypad = ({
  children,
  className,
  variant = "v0",
  type,
}: {
  children: string | number;
  className?: string;
  variant?: string;
  type?: string;
}) => {
  return (
    <>
      <button
        className={`w-full ${className} px-5 py-3 rounded-lg relative uppercase text-2xl ${
          variant == "v0" ? "bg-theme1-lgo_key active:opacity-70" : ""
        } ${
          variant == "v1"
            ? "bg-theme1-ddb_keybg text-theme1-white active:opacity-70"
            : ""
        } ${
          variant == "v2"
            ? "bg-theme1-red_key text-theme1-white  active:opacity-70"
            : ""
        } ${type == "theme1" ? "" : "hidden"} `}
      >
        <div
          className={`h-1 w-full absolute bottom-0 left-0 rounded-br-3xl rounded-bl-3xl ${
            variant == "v0" ? "bg-theme1-go_keyshw" : ""
          } ${variant == "v1" ? "bg-theme1-ddb_keyshw" : ""} ${
            variant == "v2" ? "bg-theme1-dr_keyshw" : ""
          }`}
        />
        {children}
      </button>
      <button
        className={`w-full ${className} px-5 py-3 rounded-lg relative uppercase text-2xl ${
          variant == "v0" ? "bg-theme2-lgy_keybg active:opacity-70" : ""
        } ${
          variant == "v1"
            ? "bg-theme2-dmc_keybg text-theme2-white active:opacity-70"
            : ""
        } ${
          variant == "v2"
            ? "bg-theme2-o_keybg text-theme2-white active:opacity-70"
            : ""
        } ${type == "theme2" ? "" : "hidden"}`}
      >
        <div
          className={`h-1 w-full absolute bottom-0 left-0 rounded-br-3xl rounded-bl-3xl ${
            variant == "v0" ? "bg-theme2-dgo_keyshw" : ""
          } ${variant == "v1" ? "bg-theme2-vdc_keyshw" : ""} ${
            variant == "v2" ? "bg-theme2-do_keyshw" : ""
          }`}
        />
        {children}
      </button>
      <button
        className={` w-full ${className} px-5 py-3 rounded-lg relative uppercase text-2xl ${
          variant == "v0" ? "bg-theme3-vdv_keybg active:opacity-70" : ""
        } ${
          variant == "v1"
            ? "bg-theme3-dv_keybg text-theme3-white active:opacity-70"
            : ""
        } ${
          variant == "v2"
            ? "bg-theme3-pc_keybg text-theme3-vbd_text active:opacity-70"
            : ""
        } ${type == "theme3" ? "" : "hidden"}`}
      >
        <div
          className={`h-1 w-full absolute bottom-0 left-0 rounded-br-3xl rounded-bl-3xl ${
            variant == "v0" ? "bg-theme3-dm_keyshw" : ""
          } ${variant == "v1" ? "bg-theme3-vm_keyshw" : ""} ${
            variant == "v2" ? "bg-theme3-sc_keyshw" : ""
          }`}
        />
        {children}
      </button>
    </>
  );
};
