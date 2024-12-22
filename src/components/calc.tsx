"use client";

import React, { useState } from "react";
import { Keypad } from "./keypad";

export const Calc = () => {
  const [type, setType] = useState("theme1");
  const [val, setVal] = useState("");
  const handleButtonClick = (value: string) => {
    if (val.length <= 14) {
      setVal((prevInput) => prevInput + value);
    }
  };
  const handleCalculate = () => {
    try {
      setVal(eval(val).toString());
    } catch (error) {
      console.error(error);
      setVal("Error");
    }
  };
  return (
    <div
      className={`h-screen ${
        type == "theme1" ? "bg-theme1-vddb_main text-theme1-vgb_text" : ""
      } ${type == "theme2" ? "bg-theme2-lg_main text-theme2-vdgy_text" : ""} ${
        type == "theme3" ? "bg-theme3-vdv_main text-theme3-ly_text" : ""
      }`}
    >
      <div className={`py-4 px-6 max-w-[500px] mx-auto`}>
        <div
          className={`flex justify-between ${
            type == "theme1" ? "text-theme1-white" : ""
          }`}
        >
          <div className='text-3xl'>calc</div>
          <div className='flex gap-3'>
            <div className='uppercase place-self-center text-xs'>theme</div>
            <div className='flex flex-col'>
              <div>
                <ul className='flex gap-4 text-xs px-2'>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
              </div>
              <div
                className={`p-1 rounded-full flex justify-between ${
                  type == "theme1" ? "bg-theme1-vddb_toggle" : ""
                } ${type == "theme2" ? "bg-theme2-gr_toggle" : ""} ${
                  type == "theme3" ? "bg-theme3-vdv_toggle" : ""
                }`}
                onClick={() => {
                  if (type == "theme1") {
                    setType("theme2");
                  } else if (type == "theme2") {
                    setType("theme3");
                  } else if (type == "theme3") {
                    setType("theme1");
                  }
                }}
              >
                <div
                  className={`rounded-full w-3 h-3 bg-theme1-red_key active:opacity-70 ${
                    type == "theme1" ? "" : "hidden"
                  }`}
                  onClick={() => {
                    setType("theme2");
                  }}
                />
                <div
                  className={`rounded-full w-3 h-3 bg-theme2-o_keybg active:opacity-70 ${
                    type == "theme2" ? "mx-auto" : "hidden"
                  }`}
                  onClick={() => {
                    setType("theme3");
                  }}
                />
                <div
                  className={`rounded-full w-3 h-3 bg-theme3-pc_keybg active:opacity-70 ${
                    type == "theme3" ? "ml-auto mr-0" : "hidden"
                  }`}
                  onClick={() => {
                    setType("theme1");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <input
          className={`my-4 px-5 py-4 rounded-lg text-5xl text-end w-full outline-none ${
            type == "theme1" ? "bg-theme1-vddb_screen text-theme1-white" : ""
          } ${
            type == "theme2" ? "bg-theme2-vlg_screen text-theme2-vdgy_text" : ""
          } ${
            type == "theme3" ? "bg-theme3-vdv_toggle text-theme3-ly_text" : ""
          }`}
          value={val}
          type='text'
          onChange={(e) => {
            if (e.target.value.length <= 15) {
              setVal(e.target.value);
            }
          }}
        ></input>
        <div
          className={`p-5 rounded-lg ${
            type == "theme1" ? "bg-theme1-vddb_toggle" : ""
          } ${type == "theme2" ? "bg-theme2-gr_toggle" : ""} ${
            type == "theme3" ? "bg-theme3-vdv_toggle" : ""
          }`}
        >
          <ul className='custom-grid'>
            <li
              className='seven'
              onClick={() => {
                handleButtonClick("7");
              }}
            >
              <Keypad type={type}>7</Keypad>
            </li>
            <li
              className='eight'
              onClick={() => {
                handleButtonClick("8");
              }}
            >
              <Keypad type={type}>8</Keypad>
            </li>
            <li
              className='nine'
              onClick={() => {
                handleButtonClick("9");
              }}
            >
              <Keypad type={type}>9</Keypad>
            </li>
            <li
              className='del'
              onClick={() => {
                setVal((prevInput) => prevInput.slice(0, -1));
              }}
            >
              <Keypad type={type} variant='v1'>
                del
              </Keypad>
            </li>
            <li
              className='four'
              onClick={() => {
                handleButtonClick("4");
              }}
            >
              <Keypad type={type}>4</Keypad>
            </li>
            <li
              className='five'
              onClick={() => {
                handleButtonClick("5");
              }}
            >
              <Keypad type={type}>5</Keypad>
            </li>
            <li
              className='six'
              onClick={() => {
                handleButtonClick("6");
              }}
            >
              <Keypad type={type}>6</Keypad>
            </li>
            <li
              className='plus'
              onClick={() => {
                handleButtonClick("+");
              }}
            >
              <Keypad type={type}>+</Keypad>
            </li>
            <li
              className='one'
              onClick={() => {
                handleButtonClick("1");
              }}
            >
              <Keypad type={type}>1</Keypad>
            </li>
            <li
              className='two'
              onClick={() => {
                handleButtonClick("2");
              }}
            >
              <Keypad type={type}>2</Keypad>
            </li>
            <li
              className='three'
              onClick={() => {
                handleButtonClick("3");
              }}
            >
              <Keypad type={type}>3</Keypad>
            </li>
            <li
              className='minus'
              onClick={() => {
                handleButtonClick("-");
              }}
            >
              <Keypad type={type}>-</Keypad>
            </li>
            <li
              className='dot'
              onClick={() => {
                handleButtonClick(".");
              }}
            >
              <Keypad type={type}>.</Keypad>
            </li>
            <li
              className='zero'
              onClick={() => {
                handleButtonClick("0");
              }}
            >
              <Keypad type={type}>0</Keypad>
            </li>
            <li
              className='div'
              onClick={() => {
                handleButtonClick("/");
              }}
            >
              <Keypad type={type}>/</Keypad>
            </li>
            <li
              className='mul'
              onClick={() => {
                handleButtonClick("*");
              }}
            >
              <Keypad type={type}>x</Keypad>
            </li>
            <li
              className='clear'
              onClick={() => {
                setVal("");
              }}
            >
              <Keypad type={type} variant='v1'>
                reset
              </Keypad>
            </li>
            <li className='solve' onClick={handleCalculate}>
              <Keypad type={type} variant='v2'>
                =
              </Keypad>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
