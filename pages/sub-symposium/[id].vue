<script setup lang="ts">
import { VuePDF, usePDF } from "@tato30/vue-pdf";
import type { ApiResponse, Poster } from '~/lib/model.ts';

const route = useRoute()

const { t } = useI18n()

const sessionId = ref(Number.parseInt(route.params.id as string))

const content = computed(() => {
  return [
    t("server.Poster.id" + sessionId.value + ".content.p1"),
    t("server.Poster.id" + sessionId.value + ".content.p2"),
    t("server.Poster.id" + sessionId.value + ".content.p3")
  ]
})

</script>

<template>
  <div class="max-w-5xl mx-10 my-5 pt-24">
    <div
      class="md:flex flex-col px-8 md:px-16 bg-white/50 py-10 h-full w-full shadow-2xl  border-1 rounded-lg self-center relative hidden">

      <div class="px-4">
        <div class="flex justify-between">
          <div class="text-orange-500 text-4xl font-bold mx-14 mt-5">
            <h1 v-html="t('CallForPoster')">
            </h1>
          </div>
          <div class="text-green-800 text-center text-2xl font-bold mr-8">
            <div>
              {{ $t("Session") }}{{ $t("server.Poster.id" + sessionId + ".index") }}:
            </div>
            <div>
              {{ $t("server.Poster.id" + sessionId + ".name") }}
            </div>
            <div class="text-base text-end">
              {{ $t("server.Poster.id" + sessionId + ".submitddl") }}
              <br>
              {{ $t("server.Poster.id" + sessionId + ".notifyddl") }}
            </div>
          </div>
        </div>

        <div class="py-6 mx-auto text-justify text-base md:text-lg w-11/12 leading-7">

          <div v-html="content[0]"></div>

          <div class="flex text-green-900 justify-center items-center my-5 text-xl">
            <div class="bg-green-900 w-1/3 h-0.5"></div>
            <h1 class="mx-auto">{{ t("server.Poster.id" + sessionId + ".content.d1") }}</h1>
            <div class="bg-green-900 w-1/3 h-0.5"></div>
          </div>

          <div v-html="content[1]"></div>

          <div class="flex text-green-900 justify-center items-center my-5 text-xl">
            <div class="bg-green-900 w-1/3 h-0.5"></div>
            <h1 class="mx-auto"> {{ t("server.Poster.id" + sessionId + ".content.d2") }}</h1>
            <div class="bg-green-900 w-1/3 h-0.5"></div>
          </div>

          <div v-html="content[2]"></div>

        </div>

      </div>


    </div>

    <div class="md:hidden">

      <div class="justify-between px-4">
        <div class="text-orange-500 text-2xl font-bold">
          <h1 v-html="t('CallForPoster')">
          </h1>
        </div>
        <div class="text-green-800  text-end text-base font-bold">
          <div>
            {{ $t("Session") }} {{ $t("server.Poster.id" + sessionId + ".index") }}:
          </div>
          <div>
            {{ $t("server.Poster.id" + sessionId + ".name") }}
          </div>
          <div class="text-base text-end">
            {{ $t("server.Poster.id" + sessionId + ".submitddl") }}
            <br>
            {{ $t("server.Poster.id" + sessionId + ".notifyddl") }}
          </div>
        </div>
      </div>

      <div class="py-6 mx-auto text-justify text-sm w-11/12 leading-7">

        <div v-html="content[0]"></div>

        <div class="flex text-green-900 justify-center items-center my-5 text-base">
          <div class="bg-green-900 w-1/3 h-0.5"></div>
          <h1 class="mx-auto">{{ t("server.Poster.id" + sessionId + ".content.d1") }}</h1>
          <div class="bg-green-900 w-1/3 h-0.5"></div>
        </div>

        <div v-html="content[1]"></div>

        <div class="flex text-green-900 justify-center items-center my-5 text-base">
          <div class="bg-green-900 w-1/4 h-0.5"></div>
          <h1 class="mx-auto"> {{ t("server.Poster.id" + sessionId + ".content.d2") }}</h1>
          <div class="bg-green-900 w-1/4 h-0.5"></div>
        </div>

        <div v-html="content[2]"></div>

      </div>


    </div>
  </div>

</template>