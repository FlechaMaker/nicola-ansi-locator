"use client"

import type React from "react"
import { Key } from "./components/key"

interface KeyboardProps {
  highlightedKeys: Array<{
    key: string
    type: "plain" | "space" | "leftCmd" | "rightCmd"
  }>
}

const Keyboard: React.FC<KeyboardProps> = ({ highlightedKeys }) => {
  const isKeyHighlighted = (key: string, type: "plain" | "space" | "leftCmd" | "rightCmd") => {
    return highlightedKeys.some((k) => k.key === key && k.type === type)
  }

  return (
    <div className="grid gap-1">
      {/* Number row */}
      <div className="flex gap-1">
        <Key label="~" />
        <Key label="1" spaceChar="/" />
        <Key label="2" spaceChar="/" />
        <Key label="3" spaceChar="~" />
        <Key label="4" spaceChar="「" />
        <Key label="5" spaceChar="」" />
        <Key label="6" spaceChar="[" />
        <Key label="7" spaceChar="]" />
        <Key label="8" spaceChar="(" />
        <Key label="9" spaceChar=")" />
        <Key label="0" />
        <Key label="-" />
        <Key label="=" />
        <Key label="delete" width="w-16" />
      </div>

      {/* QWERTY row */}
      <div className="flex gap-1">
        <Key label="tab" width="w-16" />
        <Key
          label="Q"
          plainChar="。"
          spaceChar="ぁ"
          isHighlighted={
            isKeyHighlighted("Q", "plain") || isKeyHighlighted("Q", "space") || isKeyHighlighted("Q", "leftCmd")
          }
          highlightType={highlightedKeys.find((k) => k.key === "Q")?.type || "plain"}
        />
        <Key
          label="W"
          plainChar="か"
          spaceChar="え"
          isHighlighted={isKeyHighlighted("W", "plain") || isKeyHighlighted("W", "space")}
          highlightType={highlightedKeys.find((k) => k.key === "W")?.type || "plain"}
        />
        <Key
          label="E"
          plainChar="た"
          spaceChar="り"
          isHighlighted={isKeyHighlighted("E", "plain") || isKeyHighlighted("E", "space")}
          highlightType={highlightedKeys.find((k) => k.key === "E")?.type || "plain"}
        />
        <Key
          label="R"
          plainChar="こ"
          spaceChar="ゃ"
          isHighlighted={isKeyHighlighted("R", "plain") || isKeyHighlighted("R", "space")}
          highlightType={highlightedKeys.find((k) => k.key === "R")?.type || "plain"}
        />
        <Key
          label="T"
          plainChar="さ"
          spaceChar="れ"
          isHighlighted={isKeyHighlighted("T", "plain") || isKeyHighlighted("T", "space")}
          highlightType={highlightedKeys.find((k) => k.key === "T")?.type || "plain"}
        />
        <Key
          label="Y"
          plainChar="ら"
          spaceChar="よ"
          leftCmdChar="ぱ"
          isHighlighted={
            isKeyHighlighted("Y", "plain") || isKeyHighlighted("Y", "space") || isKeyHighlighted("Y", "leftCmd")
          }
          highlightType={highlightedKeys.find((k) => k.key === "Y")?.type || "plain"}
        />
        <Key
          label="U"
          plainChar="ち"
          spaceChar="に"
          isHighlighted={
            isKeyHighlighted("U", "plain") || isKeyHighlighted("U", "space") || isKeyHighlighted("U", "leftCmd")
          }
          highlightType={highlightedKeys.find((k) => k.key === "U")?.type || "plain"}
        />
        <Key
          label="I"
          plainChar="く"
          spaceChar="る"
          isHighlighted={
            isKeyHighlighted("I", "plain") || isKeyHighlighted("I", "space") || isKeyHighlighted("I", "leftCmd")
          }
          highlightType={highlightedKeys.find((k) => k.key === "I")?.type || "plain"}
        />
        <Key
          label="O"
          plainChar="つ"
          spaceChar="ま"
          isHighlighted={
            isKeyHighlighted("O", "plain") || isKeyHighlighted("O", "space") || isKeyHighlighted("O", "leftCmd")
          }
          highlightType={highlightedKeys.find((k) => k.key === "O")?.type || "plain"}
        />
        <Key
          label="P"
          plainChar="、"
          spaceChar="ぇ"
          leftCmdChar="ぴ"
          isHighlighted={
            isKeyHighlighted("P", "plain") || isKeyHighlighted("P", "space") || isKeyHighlighted("P", "leftCmd")
          }
          highlightType={highlightedKeys.find((k) => k.key === "P")?.type || "plain"}
        />
        <Key label="[" />
        <Key label="]" />
        <Key label="\" width="w-14" />
      </div>

      {/* ASDF row */}
      <div className="flex gap-1">
        <Key label="caps" width="w-[4.5rem]" />
        <Key
          label="A"
          plainChar="う"
          spaceChar="を"
          isHighlighted={isKeyHighlighted("A", "plain") || isKeyHighlighted("A", "space")}
          highlightType={highlightedKeys.find((k) => k.key === "A")?.type || "plain"}
        />
        <Key
          label="S"
          plainChar="し"
          spaceChar="あ"
          isHighlighted={isKeyHighlighted("S", "plain") || isKeyHighlighted("S", "space")}
          highlightType={highlightedKeys.find((k) => k.key === "S")?.type || "plain"}
        />
        <Key
          label="D"
          plainChar="て"
          spaceChar="な"
          isHighlighted={isKeyHighlighted("D", "plain") || isKeyHighlighted("D", "space")}
          highlightType={highlightedKeys.find((k) => k.key === "D")?.type || "plain"}
        />
        <Key
          label="F"
          plainChar="け"
          spaceChar="ゅ"
          isHighlighted={isKeyHighlighted("F", "plain") || isKeyHighlighted("F", "space")}
          highlightType={highlightedKeys.find((k) => k.key === "F")?.type || "plain"}
        />
        <Key
          label="G"
          plainChar="せ"
          spaceChar="も"
          isHighlighted={isKeyHighlighted("G", "plain") || isKeyHighlighted("G", "space")}
          highlightType={highlightedKeys.find((k) => k.key === "G")?.type || "plain"}
        />
        <Key
          label="H"
          plainChar="は"
          spaceChar="み"
          isHighlighted={
            isKeyHighlighted("H", "plain") || isKeyHighlighted("H", "space") || isKeyHighlighted("H", "leftCmd")
          }
          highlightType={highlightedKeys.find((k) => k.key === "H")?.type || "plain"}
        />
        <Key
          label="J"
          plainChar="と"
          spaceChar="お"
          isHighlighted={
            isKeyHighlighted("J", "plain") || isKeyHighlighted("J", "space") || isKeyHighlighted("J", "leftCmd")
          }
          highlightType={highlightedKeys.find((k) => k.key === "J")?.type || "plain"}
        />
        <Key
          label="K"
          plainChar="き"
          spaceChar="の"
          isHighlighted={
            isKeyHighlighted("K", "plain") || isKeyHighlighted("K", "space") || isKeyHighlighted("K", "leftCmd")
          }
          highlightType={highlightedKeys.find((k) => k.key === "K")?.type || "plain"}
        />
        <Key
          label="L"
          plainChar="い"
          spaceChar="ょ"
          leftCmdChar="ぽ"
          isHighlighted={
            isKeyHighlighted("L", "plain") || isKeyHighlighted("L", "space") || isKeyHighlighted("L", "leftCmd")
          }
          highlightType={highlightedKeys.find((k) => k.key === "L")?.type || "plain"}
        />
        <Key label=";" plainChar="ん" spaceChar="っ" />
        <Key label="'" plainChar="'" spaceChar="ゎ" />
        <Key label="enter" width="w-20" />
      </div>

      {/* ZXCV row */}
      <div className="flex gap-1">
        <Key label="shift" width="w-[5.5rem]" />
        <Key
          label="Z"
          plainChar="　"
          spaceChar="ぅ"
          isHighlighted={isKeyHighlighted("Z", "plain") || isKeyHighlighted("Z", "space")}
          highlightType={highlightedKeys.find((k) => k.key === "Z")?.type || "plain"}
        />
        <Key
          label="X"
          plainChar="ひ"
          spaceChar="-"
          isHighlighted={isKeyHighlighted("X", "plain") || isKeyHighlighted("X", "space")}
          highlightType={highlightedKeys.find((k) => k.key === "X")?.type || "plain"}
        />
        <Key
          label="C"
          plainChar="す"
          spaceChar="ろ"
          isHighlighted={isKeyHighlighted("C", "plain") || isKeyHighlighted("C", "space")}
          highlightType={highlightedKeys.find((k) => k.key === "C")?.type || "plain"}
        />
        <Key
          label="V"
          plainChar="ふ"
          spaceChar="や"
          isHighlighted={isKeyHighlighted("V", "plain") || isKeyHighlighted("V", "space")}
          highlightType={highlightedKeys.find((k) => k.key === "V")?.type || "plain"}
        />
        <Key
          label="B"
          plainChar="へ"
          spaceChar="い"
          isHighlighted={isKeyHighlighted("B", "plain") || isKeyHighlighted("B", "space")}
          highlightType={highlightedKeys.find((k) => k.key === "B")?.type || "plain"}
        />
        <Key
          label="N"
          plainChar="め"
          spaceChar="ぬ"
          leftCmdChar="ぷ"
          isHighlighted={
            isKeyHighlighted("N", "plain") || isKeyHighlighted("N", "space") || isKeyHighlighted("N", "leftCmd")
          }
          highlightType={highlightedKeys.find((k) => k.key === "N")?.type || "plain"}
        />
        <Key
          label="M"
          plainChar="そ"
          spaceChar="ゆ"
          isHighlighted={
            isKeyHighlighted("M", "plain") || isKeyHighlighted("M", "space") || isKeyHighlighted("M", "leftCmd")
          }
          highlightType={highlightedKeys.find((k) => k.key === "M")?.type || "plain"}
        />
        <Key label="," plainChar="ね" spaceChar="む" />
        <Key label="." plainChar="ほ" spaceChar="わ" />
        <Key label="/" plainChar="・" spaceChar="ぉ" />
        <Key label="shift" width="w-[5.5rem]" />
      </div>

      {/* Space row */}
      <div className="flex gap-1">
        <Key label="cmd" width="w-[3.5rem]" />
        <Key label="alt" width="w-[3.5rem]" />
        <Key label="space" width="w-[20rem]" />
        <Key label="alt" width="w-[3.5rem]" />
        <Key label="cmd" width="w-[3.5rem]" />
      </div>
    </div>
  )
}

export default Keyboard

