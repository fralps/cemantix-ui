<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition';

  import Introduction from '@/lib/Introduction.svelte'
  import Stats from '@/lib/Stats.svelte'
  import NotionUrl from '@/lib/NotionUrl.svelte'

  interface Response {
    cemantix: {
      lastWord: string
      elapsedTime: string
      requestsNumber: number
      date: string
    }
    cemantle: {
      lastWord: string
      elapsedTime: string
      requestsNumber: number
      date: string
    }
  }

  const apiUrl: string = import.meta.env.VITE_APP_API_BASE_URL as string

  let data: Response | null = $state(null)
  let error: string | null = $state(null)

  onMount(async (): Promise<void> => {
    await fetchData()
  })

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch(`${apiUrl}/api`)
      const responseData: Response = await response.json()

      if (responseData) {
        data = responseData
      }
    } catch (error) {
      error = 'Error fetching data'
      console.error('Error fetching data:', error)
    }
  }
</script>

<div class="py-14 bg-white area {data ? 'h-full' : 'h-screen'}">
  <ul class="circles">
    {#each Array(12) as _}
      <li></li>
    {/each}
  </ul>
  <div class="px-6 mx-auto max-w-7xl lg:px-8">
    <Introduction {data} {error} />

    {#if error}
      <div class="p-10 bg-red-300 rounded-lg drop-shadow-2xl">
        <p class="font-bold text-white">
          You are not authorized to make a request on this API
        </p>
      </div>
    {/if}

    {#if data?.cemantix && data?.cemantle}
      <div transition:fade>
        <Stats fullData={data.cemantix} app="Cemantix" />
        <Stats fullData={data.cemantle} app="Cemantle" />
        <hr class="mb-10 text-white" />
        <div class="p-10 bg-white rounded-lg cursor-pointer drop-shadow-2xl">
          <p class="mb-6 text-2xl">
            Full data sets available on{' '}
            <span class="text-indigo-600">Notion</span>
          </p>
          <NotionUrl
            url="https://bead-cylinder-699.notion.site/fe486d80a5994c02af48af8dbe3d4f96?v=59ad4e14485d477da756a04999190730"
            app="Cemantix"
          />
          <NotionUrl
            url="https://bead-cylinder-699.notion.site/6440b74a3e6f4d9c9819e0e40eb6613d?v=4db027d34f11496ca09786f996703914"
            app="Cemantle"
          />
        </div>
      </div>
    {/if}
  </div>
</div>
