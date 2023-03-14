import { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'
import CemantixContainer from '@src/components/cemantix/CemantixContainer'

function App(): ReactElement {
  const apiUrl = import.meta.env.VITE_APP_API_BASE_URL
  const [data, setData] = useState<Response | undefined>(undefined)

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      const data: Response = response.data
      setData(data)
    })
  }, [])

  return <div>{data && <CemantixContainer data={data.cemantix} />}</div>
}

export default App
