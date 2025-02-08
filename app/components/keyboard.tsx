"use client";

import type React from "react";
import { Key } from "./key";

interface KeyboardProps {
  highlightedKeys: string[];
}

const keyColors: { [key: string]: string } = {
  "1": "pink",
  q: "pink",
  a: "pink",
  z: "pink",
  "2": "orange",
  w: "orange",
  s: "orange",
  x: "orange",
  "3": "yellow",
  e: "yellow",
  d: "yellow",
  c: "yellow",
  "4": "green",
  r: "green",
  f: "green",
  v: "green",
  "5": "green",
  t: "green",
  g: "green",
  b: "green",
  "6": "skyblue",
  y: "skyblue",
  h: "skyblue",
  n: "skyblue",
  "7": "skyblue",
  u: "skyblue",
  j: "skyblue",
  m: "skyblue",
  "8": "blue",
  i: "blue",
  k: "blue",
  ",": "blue",
  "9": "purple",
  o: "purple",
  l: "purple",
  ".": "purple",
  "0": "grey",
  p: "grey",
  ";": "grey",
  "/": "grey",
  "-": "grey",
  "[": "grey",
  "]": "grey",
  "'": "grey",
  "=": "grey",
  "\\": "grey",
};

const Keyboard: React.FC<KeyboardProps> = ({ highlightedKeys }) => {
  const isKeyHighlighted = (key: string) => highlightedKeys.includes(key);

  return (
    <div className="grid gap-1">
      {/* Number row */}
      <div className="flex gap-1">
        <Key label="~" />
        <Key label="1" spaceChar="/" keyColor={keyColors["1"]} />
        <Key label="2" spaceChar="/" keyColor={keyColors["2"]} />
        <Key label="3" spaceChar="~" keyColor={keyColors["3"]} />
        <Key label="4" spaceChar="「" keyColor={keyColors["4"]} />
        <Key label="5" spaceChar="」" keyColor={keyColors["5"]} />
        <Key label="6" spaceChar="[" keyColor={keyColors["6"]} />
        <Key label="7" spaceChar="]" keyColor={keyColors["7"]} />
        <Key label="8" spaceChar="(" keyColor={keyColors["8"]} />
        <Key label="9" spaceChar=")" keyColor={keyColors["9"]} />
        <Key label="0" keyColor={keyColors["0"]} />
        <Key label="-" keyColor={keyColors["-"]} />
        <Key label="=" keyColor={keyColors["="]} />
        <Key label="delete" width="w-16" />
      </div>

      {/* QWERTY row */}
      <div className="flex gap-1">
        <Key label="tab" width="w-16" />
        <Key
          label="Q"
          plainChar="。"
          spaceChar="ぁ"
          isHighlighted={isKeyHighlighted("Q")}
          keyColor={keyColors["q"]}
        />
        <Key
          label="W"
          plainChar="か"
          spaceChar="え"
          isHighlighted={isKeyHighlighted("W")}
          keyColor={keyColors["w"]}
        />
        <Key
          label="E"
          plainChar="た"
          spaceChar="り"
          isHighlighted={isKeyHighlighted("E")}
          keyColor={keyColors["e"]}
        />
        <Key
          label="R"
          plainChar="こ"
          spaceChar="ゃ"
          isHighlighted={isKeyHighlighted("R")}
          keyColor={keyColors["r"]}
        />
        <Key
          label="T"
          plainChar="さ"
          spaceChar="れ"
          isHighlighted={isKeyHighlighted("T")}
          keyColor={keyColors["t"]}
        />
        <Key
          label="Y"
          plainChar="ら"
          spaceChar="よ"
          leftCmdChar="ぱ"
          isHighlighted={isKeyHighlighted("Y")}
          keyColor={keyColors["y"]}
        />
        <Key
          label="U"
          plainChar="ち"
          spaceChar="に"
          isHighlighted={isKeyHighlighted("U")}
          keyColor={keyColors["u"]}
        />
        <Key
          label="I"
          plainChar="く"
          spaceChar="る"
          isHighlighted={isKeyHighlighted("I")}
          keyColor={keyColors["i"]}
        />
        <Key
          label="O"
          plainChar="つ"
          spaceChar="ま"
          isHighlighted={isKeyHighlighted("O")}
          keyColor={keyColors["o"]}
        />
        <Key
          label="P"
          plainChar="、"
          spaceChar="ぇ"
          leftCmdChar="ぴ"
          isHighlighted={isKeyHighlighted("P")}
          keyColor={keyColors["p"]}
        />
        <Key label="[" keyColor={keyColors["["]} />
        <Key label="]" keyColor={keyColors["]"]} />
        <Key label="\" width="w-14" keyColor={keyColors["\\"]} />
      </div>

      {/* ASDF row */}
      <div className="flex gap-1">
        <Key label="caps" width="w-[4.5rem]" />
        <Key
          label="A"
          plainChar="う"
          spaceChar="を"
          isHighlighted={isKeyHighlighted("A")}
          keyColor={keyColors["a"]}
        />
        <Key
          label="S"
          plainChar="し"
          spaceChar="あ"
          isHighlighted={isKeyHighlighted("S")}
          keyColor={keyColors["s"]}
        />
        <Key
          label="D"
          plainChar="て"
          spaceChar="な"
          isHighlighted={isKeyHighlighted("D")}
          keyColor={keyColors["d"]}
        />
        <Key
          label="F"
          plainChar="け"
          spaceChar="ゅ"
          isHighlighted={isKeyHighlighted("F")}
          keyColor={keyColors["f"]}
        />
        <Key
          label="G"
          plainChar="せ"
          spaceChar="も"
          isHighlighted={isKeyHighlighted("G")}
          keyColor={keyColors["g"]}
        />
        <Key
          label="H"
          plainChar="は"
          spaceChar="み"
          isHighlighted={isKeyHighlighted("H")}
          keyColor={keyColors["h"]}
        />
        <Key
          label="J"
          plainChar="と"
          spaceChar="お"
          isHighlighted={isKeyHighlighted("J")}
          keyColor={keyColors["j"]}
        />
        <Key
          label="K"
          plainChar="き"
          spaceChar="の"
          isHighlighted={isKeyHighlighted("K")}
          keyColor={keyColors["k"]}
        />
        <Key
          label="L"
          plainChar="い"
          spaceChar="ょ"
          leftCmdChar="ぽ"
          isHighlighted={isKeyHighlighted("L")}
          keyColor={keyColors["l"]}
        />
        <Key
          label=";"
          plainChar="ん"
          spaceChar="っ"
          isHighlighted={isKeyHighlighted(";")}
          keyColor={keyColors[";"]}
        />
        <Key label="'" plainChar="'" spaceChar="ゎ" keyColor={keyColors["'"]} />
        <Key label="enter" width="w-20" />
      </div>

      {/* ZXCV row */}
      <div className="flex gap-1">
        <Key label="shift" width="w-[5.5rem]" />
        <Key
          label="Z"
          plainChar="　"
          spaceChar="ぅ"
          isHighlighted={isKeyHighlighted("Z")}
          keyColor={keyColors["z"]}
        />
        <Key
          label="X"
          plainChar="ひ"
          spaceChar="-"
          isHighlighted={isKeyHighlighted("X")}
          keyColor={keyColors["x"]}
        />
        <Key
          label="C"
          plainChar="す"
          spaceChar="ろ"
          isHighlighted={isKeyHighlighted("C")}
          keyColor={keyColors["c"]}
        />
        <Key
          label="V"
          plainChar="ふ"
          spaceChar="や"
          isHighlighted={isKeyHighlighted("V")}
          keyColor={keyColors["v"]}
        />
        <Key
          label="B"
          plainChar="へ"
          spaceChar="ぃ"
          isHighlighted={isKeyHighlighted("B")}
          keyColor={keyColors["b"]}
        />
        <Key
          label="N"
          plainChar="め"
          spaceChar="ぬ"
          leftCmdChar="ぷ"
          isHighlighted={isKeyHighlighted("N")}
          keyColor={keyColors["n"]}
        />
        <Key
          label="M"
          plainChar="そ"
          spaceChar="ゆ"
          isHighlighted={isKeyHighlighted("M")}
          keyColor={keyColors["m"]}
        />
        <Key
          label=","
          plainChar="ね"
          spaceChar="む"
          leftCmdChar="ぺ"
          isHighlighted={isKeyHighlighted(",")}
          keyColor={keyColors[","]}
        />
        <Key
          label="."
          plainChar="ほ"
          spaceChar="わ"
          isHighlighted={isKeyHighlighted(".")}
          keyColor={keyColors["."]}
        />
        <Key
          label="/"
          plainChar="・"
          spaceChar="ぉ"
          isHighlighted={isKeyHighlighted("/")}
          keyColor={keyColors["/"]}
        />
        <Key label="shift" width="w-[5.5rem]" />
      </div>

      {/* Space row */}
      <div className="flex gap-1">
        <Key label="alt" width="w-[3.5rem]" />
        <Key
          label="cmd"
          width="w-[3.5rem]"
          isHighlighted={isKeyHighlighted("leftcmd")}
        />
        <Key
          label="space"
          width="w-[20rem]"
          isHighlighted={isKeyHighlighted("space")}
        />
        <Key
          label="cmd"
          width="w-[3.5rem]"
          isHighlighted={isKeyHighlighted("rightcmd")}
        />
        <Key label="alt" width="w-[3.5rem]" />
      </div>
    </div>
  );
};

export default Keyboard;
