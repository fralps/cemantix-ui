declare module '*'

interface Data {
  date: string
  elapsedTime: string
  lastWord: string
  requestsNumber: number
}

interface Response {
  cemantix: Data
  cemantle: Data
}

/// <reference types="vite/client" />
