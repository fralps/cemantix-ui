<script lang="ts">
  import { fade } from 'svelte/transition';

  let { fullData, app }: { fullData: { date: string; lastWord: string; requestsNumber: number; elapsedTime: string }; app: string } = $props()

  let parsedNumber: string = $derived(
    fullData.requestsNumber
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    )
</script>

<div
  class="py-20 mb-10 bg-white rounded-lg cursor-pointer drop-shadow-2xl sm:py-32"
  transition:fade
>
  <div class="px-6 mx-auto max-w-7xl lg:px-8">
    <dl class="grid grid-cols-1 text-center gap-y-16 gap-x-8 lg:grid-cols-3">
      <div class="flex flex-col max-w-xs mx-auto gap-y-4">
        <dt class="text-base leading-7 text-gray-600">
          {app} last word from <b>{fullData.date}</b>
        </dt>
        <dd
          class="order-first text-2xl font-semibold tracking-tight text-indigo-600 capitalize sm:text-4xl"
        >
          {fullData.lastWord}
        </dd>
      </div>

      <div class="flex flex-col max-w-xs mx-auto gap-y-4">
        <dt class="text-base leading-7 text-gray-600">
          Number of requests to find the word
        </dt>
        <dd
          class="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
        >
          {parsedNumber}
        </dd>
      </div>

      <div class="flex flex-col max-w-xs mx-auto gap-y-4">
        <dt class="text-base leading-7 text-gray-600">Time to find the word</dt>
        <dd
          class="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
        >
          {fullData.elapsedTime}
        </dd>
      </div>
    </dl>
  </div>
</div>
