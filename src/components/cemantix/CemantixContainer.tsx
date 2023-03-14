import { ReactElement } from 'react'
import { LastWord } from '@src/components/shared'

interface ComponentProps {
  lastWord: string
  data: Data
}

function CemantixContainer({ data }: { data: ComponentProps }): ReactElement {
  return (
    <div>
      <LastWord lastWord={data.lastWord} />
    </div>
  )
}

export default CemantixContainer
