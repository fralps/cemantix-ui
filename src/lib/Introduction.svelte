<script lang="ts">
  import { fade } from 'svelte/transition';
  import Loader from '@/lib/Loader.svelte'

  let { data, error } = $props()
</script>

<div transition:fade>
  <h1
    class="text-4xl font-semibold leading-7 text-yellow-400 uppercase duration-100 lg:text-center animate-bounce"
  >
    Cemantix UI
  </h1>
  <div class="mt-2 text-xs italic text-gray-300 lg:text-center">
    Developed by Fralps
  </div>
  <p
    class="mt-4 text-base font-bold tracking-tight text-gray-200 sm:text-2xl lg:text-center"
  >
    Daily recap of the famous Cemantix and Cemantle apps
  </p>
  <p class="mt-6 text-lg leading-8 text-white">
    It is a personal <b class="text-yellow-400">Side Project </b>
    divided into several parts.
  </p>
  <p class="mt-2 text-lg leading-8 text-white">
    The first part consists in finding the word of the day of the Cemantix and
    Cemantle apps via a Github Actions automated brute force{' '}
    <b class="text-yellow-400">Python</b> script.
  </p>
  <p class="mt-2 text-lg leading-8 text-white">
    Then, all these data are stored in a{' '}
    <b class="text-yellow-400">Notion</b> database.
  </p>
  <p class="mt-2 text-lg leading-8 text-white">
    And finally, this app makes a visual restitution of the data for today.
  </p>
  <hr class="mt-10 mb-10 text-white" />
</div>

{#if !data && !error}
  <Loader />
{/if}
