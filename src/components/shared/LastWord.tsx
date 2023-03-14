import { ReactElement } from 'react'

function LastWord({ lastWord }: { lastWord: string }): ReactElement {
  return (
    <div className="p-20 border shadow-xl border-gray-50 rounded-xl">
      <p>{lastWord}</p>
    </div>
  )
}

export default LastWord
