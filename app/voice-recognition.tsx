"use client"

import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Mic, MicOff } from "lucide-react"
// import { webkitSpeechRecognition } from 'webkit-speech-recognition'  // Removed invalid import

interface VoiceRecognitionProps {
  onRecognized: (text: string) => void
}

export function VoiceRecognition({ onRecognized }: VoiceRecognitionProps) {
  const [isListening, setIsListening] = useState(false)
  const [recognition, setRecognition] = useState<any | null>(null) // Changed type to any | null
  const [error, setError] = useState<string | null>(null)

  const createRecognition = useCallback(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition
      if (!SpeechRecognition) {
        setError("Speech recognition is not supported in this browser")
        return null
      }

      const recognition = new SpeechRecognition()
      recognition.continuous = false
      recognition.interimResults = true
      recognition.lang = "ja-JP"
      recognition.maxAlternatives = 1

      return recognition
    }
    return null
  }, [])

  useEffect(() => {
    const recognitionInstance = createRecognition()
    if (recognitionInstance) {
      recognitionInstance.onstart = () => {
        console.log("Speech recognition started")
        setIsListening(true)
        setError(null)
      }

      recognitionInstance.onresult = (event: any) => {
        const result = event.results[event.results.length - 1]
        const text = result[0].transcript
        console.log("Recognized text:", text)

        if (result.isFinal || text.length >= 1) {
          const recognizedChar = text[0]
          if (/^[\u3040-\u309F]$/.test(recognizedChar)) {
            console.log("Recognized Hiragana:", recognizedChar)
            onRecognized(recognizedChar)
            recognitionInstance.stop()
          } else {
            console.log("Ignored non-Hiragana character:", recognizedChar)
            if (!result.isFinal) {
              return // Continue listening if it's not a final result
            }
          }
        }

        if (result.isFinal) {
          recognitionInstance.stop()
        }
      }

      recognitionInstance.onerror = (event: any) => {
        console.error("Speech recognition error", event.error)
        setError(`Speech recognition error: ${event.error}`)
        setIsListening(false)
      }

      recognitionInstance.onend = () => {
        console.log("Speech recognition ended")
        setIsListening(false)
      }

      setRecognition(recognitionInstance)
    }
  }, [createRecognition, onRecognized])

  const toggleListening = useCallback(() => {
    if (!recognition) {
      setError("Speech recognition is not initialized")
      return
    }

    if (isListening) {
      recognition.stop()
    } else {
      recognition.start()
    }
  }, [recognition, isListening])

  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        onClick={toggleListening}
        variant={isListening ? "destructive" : "default"}
        size="lg"
        className="gap-2"
        disabled={!recognition}
      >
        {isListening ? (
          <>
            <MicOff className="w-5 h-5" />
            Stop Listening
          </>
        ) : (
          <>
            <Mic className="w-5 h-5" />
            Start Listening
          </>
        )}
      </Button>
      {isListening && <p className="text-sm text-muted-foreground">Listening for a single Hiragana character...</p>}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

