<template>
  <div class="bg-gray-100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 class="text-2xl font-bold text-gray-900">Destinations</h2>

        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <div v-for="destination in destinations" :key="destination.name" class="group relative">
            <CardItem :destination="destination" :displayPlace="displayPlace" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <CardDetails :selectedDestination="selectedDestination" />
</template>

<script setup lang="ts">
import { cities, destinations } from '@/mock/mockedData'
import CardDetails from './components/CardDetails.vue'
import CardItem from './components/CardItem.vue'
import { ref } from 'vue'
import type { ICity } from './utils/common'

const selectedDestination = ref<ICity>()

const displayPlace = (id: string) => {
  const city = cities.find((city) => city.id === id)
  selectedDestination.value = city
}
</script>
