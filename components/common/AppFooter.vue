<script setup lang="ts">
const footerTitle = ref<string>("Media.Title")

interface ContactItemType {
  before: string,
  after: string
}

const contact = ref<ContactItemType[]>([
  {
    before: "Host.Name",
    after: "Host.Details.Name"
  },
  {
    before: "Host.Language",
    after: "Host.Details.Language"
  },
  {
    before: "Host.Date",
    after: "Host.Details.Date"
  },
  {
    before: "Host.Location",
    after: "Host.Details.Location"
  }
])

interface MediaItemType {
  label: string,
  image: string | undefined
}

const media = ref<MediaItemType[]>([
  {
    label: "Redbook",
    image: "/img/redbook.png"
  },
  {
    label: "Wechat",
    image: "/img/wechat.png"
  },
])

const isHover = ref<boolean[]>([false, false])

</script>

<template>
  <div class="min-w-full min-h-28 bg-green-950/90 dark:bg-green-950 text-white w-full py-6">
    <div class="text-xl font-bold text-center relative leading-10 pb-2">
      {{ $t(footerTitle) }}
    </div>

    <div class="grid md:grid-cols-3 md:grid-rows-1 md:divide-x gap-1 grid-cols-1 grid-rows-4 w-full">

      <div class="hidden row-span-1 md:grid grid-rows-2 grid-cols-1 justify-center items-center mx-10">
        <div class="flex items-center justify-center max-w-md max-h-28">
          <UButton icon="i-fa6-solid-heart" padding="2xs" gap="xs" color="sky" variant="soft"
            :ui="{ rounded: 'rounded-full', font: 'font-bold' }" class="w-1/2" block :trailing="true" to=""
            target="_blank">
            <span class="text-lg">Sponsor Ship</span>
          </UButton>
        </div>
        <div class="w-full justify-center items-center flex row-span-1">
          <NuxtImg src="img/logo/UNESCOLogo-single.png" />
        </div>
      </div>

      <div class="max-w-screen-md grid grid-cols-1 row-span-2">
        <div class="grid md:gap-4 gap-0 grid-rows-5 text-justify mx-5">
          <!-- TODO 加上原来的列表形式，并在下方加上button -->
          <div class="grid gap-2 grid-rows-4 row-span-4">
            <div v-for="item in contact" class="grid grid-cols-3 grid-rows-1 grid-flow-col-dense">
              <div class="mr-5 text-end justify-items-end items-end">
                {{ $t(item.before) }} :
              </div>
              <div class="justify-self-start col-span-2">
                {{ $t(item.after) }}
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 grid-rows-1">
            <div class="flex justify-center items-center" @mouseover="isHover[0] = true"
              @mouseleave="isHover[0] = false">
              <UButton icon="i-material-symbols-public" size="lg" color="rose" square variant="soft"
                :class="isHover[0] ? 'mr-2 bg-white/60' : 'mr-2 bg-white'" :ui="{ rounded: 'rounded-full', }"
                to="https://www.hgseces.org/">
                <template #leading>
                  <span>
                    <font-awesome icon="fa-solid fa-globe" class="px-0.5" />
                    <font-awesome icon="fa-solid fa-c" size="sm" class="pr-0.5" />
                    <font-awesome icon="fa-solid fa-e" size="sm" class="pr-0.5" />
                    <font-awesome icon="fa-solid fa-s" size="sm" class="pr-0.5" />
                  </span>
                </template>
              </UButton>
              <UButton icon="i-material-symbols-mail-rounded" size="lg" color="rose" square variant="soft"
                :class="isHover[0] ? 'ml-2 bg-white/60' : 'ml-2 bg-white'" :ui="{ rounded: 'rounded-full' }"
                to="mailto:general@hgseces.org" />
            </div>

            <div class="flex justify-center items-center" @mouseover="isHover[1] = true"
              @mouseleave="isHover[1] = false">
              <UButton size="lg" color="blue" square variant="soft"
                :class="isHover[1] ? 'mr-2 bg-white/60' : 'mr-2 bg-white'" :ui="{ rounded: 'rounded-full', }"
                to="https://www.eduhk.hk/en/">
                <template #leading>
                  <span>
                    <font-awesome icon="fa-solid fa-globe" class="px-0.5" />
                    <font-awesome icon="fa-solid fa-e" size="sm" class="pr-0.5" />
                    <font-awesome icon="fa-solid fa-d" size="sm" class="pr-0.5" />
                    <font-awesome icon="fa-solid fa-u" size="sm" class="pr-0.5" />
                    <font-awesome icon="fa-solid fa-h" size="sm" class="pr-0.5" />
                    <font-awesome icon="fa-solid fa-k" size="sm" class="pr-0.5" />
                  </span>
                </template>
              </UButton>
              <UButton icon="i-material-symbols-mail-rounded" size="lg" color="blue" square variant="soft"
                :class="isHover[1] ? 'ml-2 bg-white/60' : 'ml-2 bg-white'" :ui="{ rounded: 'rounded-full' }"
                to="mailto:GIETfuture@eduhk.hk" />
            </div>
          </div>

        </div>
      </div>

      <div class="md:hidden row-span-1 grid grid-rows-2 grid-cols-1 justify-center items-center mx-10">
        <div class="flex items-center justify-center max-w-md max-h-28">
          <UButton icon="i-fa6-solid-heart" padding="2xs" gap="xs" color="sky" variant="soft"
            :ui="{ rounded: 'rounded-full', font: 'font-bold' }" class="w-1/2" block :trailing="true" to=""
            target="_blank">
            <span class="text-lg">Sponsor Ship</span>
          </UButton>
        </div>
        <div class="w-full justify-center items-center flex row-span-1">
          <NuxtImg src="img/logo/UNESCOLogo-single.png" />
        </div>
      </div>

      <div class="grid  grid-rows-1 grid-cols-1 row-span-1">
        <div class="flex flex-col justify-center items-center">
          <div class="grid grid-rows-1 grid-cols-2 ">
            <div v-for="item in media" class="ml-5">
              <div class="grid grid-rows-3 grid-cols-1 text-justify">
                <div class="row-span-2">
                  <span class="flex justify-center items-center py-4">
                    {{ $t("Media." + item.label + ".Intro") }}
                  </span>
                  <div class="flex justify-center items-center">
                    <NuxtImg v-if="item.label !== 'Email'" :src="item.image" class="w-20 h-20"></NuxtImg>
                  </div>
                </div>
                <span class="flex justify-center items-center text-center">
                  {{ $t("Media." + item.label + ".Details") }}
                </span>
              </div>
            </div>
          </div>
          <!-- <div class="my-2">
            <span>{{ $t("Media.Email.Details", ["GIETfuture@eduhk.hk"]) }}</span>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>