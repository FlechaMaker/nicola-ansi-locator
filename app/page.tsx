"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Keyboard from "./components/keyboard"
import { HiraganaTable } from "./components/hiragana-table"

const hiraganaToKeys: { [key: string]: string[] } = {
  あ: ["S", "space"],
  い: ["L"],
  う: ["A"],
  え: ["W", "space"],
  お: ["J", "space"],
  か: ["W"],
  き: ["K"],
  く: ["I"],
  け: ["F"],
  こ: ["R"],
  さ: ["T"],
  し: ["S"],
  す: ["C"],
  せ: ["G"],
  そ: ["M"],
  た: ["E"],
  ち: ["U"],
  つ: ["O"],
  て: ["D"],
  と: ["J"],
  な: ["D", "space"],
  に: ["U", "space"],
  ぬ: ["N", "space"],
  ね: [","],
  の: ["K", "space"],
  は: ["H"],
  ひ: ["X"],
  ふ: ["V"],
  へ: ["B"],
  ほ: ["."],
  ま: ["O", "space"],
  み: ["H", "space"],
  む: [",", "space"],
  め: ["N"],
  も: ["G", "space"],
  や: ["V", "space"],
  ゆ: ["M", "space"],
  よ: ["Y", "space"],
  ら: ["Y"],
  り: ["E", "space"],
  る: ["I", "space"],
  れ: ["T", "space"],
  ろ: ["C", "space"],
  わ: [".", "space"],
  を: ["A", "space"],
  ん: [";"],
  ぱ: ["Y", "leftcmd"],
  ぴ: ["P", "leftcmd"],
  ぷ: ["N", "leftcmd"],
  ぺ: [",", "leftcmd"],
  ぽ: ["L", "leftcmd"],
  ぁ: ["Q", "space"],
  ぃ: ["B", "space"],
  ぅ: ["Z", "space"],
  ぇ: ["P", "space"],
  ぉ: ["/", "space"],
  ゃ: ["R", "space"],
  ゅ: ["F", "space"],
  ょ: ["L", "space"],
};

export default function NicolaKeyboard() {
  const [highlightedKeys, setHighlightedKeys] = useState<string[]>([])
  const [selectedHiragana, setSelectedHiragana] = useState<string | null>(null)

  const handleHiraganaClick = (hiragana: string) => {
    const keys = hiraganaToKeys[hiragana] || []
    setHighlightedKeys(keys)
    setSelectedHiragana(hiragana)
  }

  return (
    <>
      <div className="container mx-auto p-4 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6 text-center">
          NICOLA Keyboard Layout Trainer
        </h1>
        <div className="grid gap-6">
          <Card className="border-2">
            <CardContent className="p-6">
              <HiraganaTable
                onHiraganaClick={handleHiraganaClick}
                selectedHiragana={selectedHiragana}
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Keyboard highlightedKeys={highlightedKeys} />
            </CardContent>
          </Card>
        </div>
      </div>
      <footer className="text-center mt-6">
        <a
          href="https://github.com/FlechaMaker/nicola-ansi-locator"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </footer>
    </>
  );
}

