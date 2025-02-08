import { Button } from "@/components/ui/button"

interface HiraganaTableProps {
  onHiraganaClick: (hiragana: string) => void
  selectedHiragana: string | null
}

const hiraganaGrid = [
  ["あ", "い", "う", "え", "お"],
  ["ぁ", "ぃ", "ぅ", "ぇ", "ぉ"],
  ["か", "き", "く", "け", "こ"],
  ["さ", "し", "す", "せ", "そ"],
  ["た", "ち", "つ", "て", "と"],
  ["な", "に", "ぬ", "ね", "の"],
  ["は", "ひ", "ふ", "へ", "ほ"],
  ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"],
  ["ま", "み", "む", "め", "も"],
  ["や", "　", "ゆ", "　", "よ"],
  ["ゃ", "　", "ゅ", "　", "ょ"],
  ["ら", "り", "る", "れ", "ろ"],
  ["わ", "　", "を", "　", "ん"],
]

export function HiraganaTable({ onHiraganaClick, selectedHiragana }: HiraganaTableProps) {
  return (
    <div className="flex flex-row-reverse justify-center">
      {hiraganaGrid.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col">
          {column.map((hiragana, rowIndex) => (
            <Button
              key={`${columnIndex}-${rowIndex}`}
              variant="outline"
              className={`
                w-12 h-12 text-lg font-normal rounded-none border-[1px] border-border 
                hover:bg-muted disabled:hover:bg-background
                ${selectedHiragana === hiragana ? "bg-primary text-primary-foreground border-primary" : ""}
              `}
              onClick={() => hiragana !== "　" && onHiraganaClick(hiragana)}
              disabled={hiragana === "　"}
            >
              {hiragana}
            </Button>
          ))}
        </div>
      ))}
    </div>
  )
}

