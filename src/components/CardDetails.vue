<template>
  <div class="bg-white" v-if="selectedDestination">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8"
    >
      <div ref="destinationDetail">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Informations à propos de {{ selectedDestination.name }}
        </h2>
        <p class="mt-4 text-gray-500">
          {{ selectedDestination.description }}
        </p>

        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div
            v-for="feature in selectedDestination.details"
            :key="feature.name"
            class="border-t border-gray-200 pt-4"
          >
            <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
const { selectedDestination } = defineProps(['selectedDestination'])

const destinationDetail = ref<HTMLElement | null>(null)

watch(
  () => selectedDestination,
  () => {
    scrollTo(destinationDetail)
  },
  { flush: 'post' },
)

function scrollTo(view: Ref<HTMLElement | null>) {
  view.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>
