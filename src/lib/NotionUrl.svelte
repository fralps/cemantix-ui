<script lang="ts">
  let { url, app }: { url: string; app: string } = $props()
</script>

<div class="flex items-center mb-4">
  <div class="w-6 h-6 mr-2 text-indigo-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
      />
    </svg>
  </div>

  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    class="text-xl text-indigo-600"
  >
    {app} full data set
  </a>
</div>
