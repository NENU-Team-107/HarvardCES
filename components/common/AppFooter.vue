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
  <div class="min-w-full min-h-28 bg-green-950/90 text-white w-full py-3">
    <div class="md:text-xl text-lg font-bold text-center relative pb-2">
      {{ $t(footerTitle) }}
    </div>

    <div class="grid md:grid-cols-3 md:grid-rows-1 md:divide-x gap-1 grid-cols-1 grid-rows-1 w-full">

      <div class="hidden md:flex flex-col justify-center mx-10">
        <div class="justify-center items-center flex my-3">
          <UButton padding="2xs" gap="xs" color="sky" variant="soft"
            :ui="{ rounded: 'rounded-full', font: 'font-bold' }" class="w-1/2" block :trailing="true" to=""
            target="_blank">
            <span class="md:text-lg text-sm">Sponsorship</span>
          </UButton>
        </div>
        <!-- <div class="justify-center items-center flex">
          <a href="https://www.unesco.org/en" target="_blank">
            <NuxtImg src="img/logo/UNESCOLogo-single.png" />
          </a>
        </div> -->
      </div>

      <div class="max-w-screen-md row-span-1">
        <div class="flex flex-col text-justify mx-5">
          <!-- TODO 加上原来的列表形式，并在下方加上button -->
          <div class="flex flex-col justify-center items-center py-3">
            <div v-for="item in contact" class="flex flex-row w-full py-2 ">
              <div class=" flex text-end justify-items-end items-start w-2/6 md:w-1/6 md:mr-3">
                {{ $t(item.before) }}:
              </div>
              <div class="justify-self-start col-span-2 flex-1 text-center">

                <span v-if="item.before === 'Host.Location'" class="hover:text-blue-300">
                  <a href="https://www.google.com/maps/place/The+Education+University+of+Hong+Kong+(EdUHK)/@22.4670285,114.1936333,17z/data=!3m1!4b1!4m6!3m5!1s0x340409071d2e8877:0x9062d0835c0a2b87!8m2!3d22.4670285!4d114.1936333!16zL20vMDNtdl9s?hl=en&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
                    target="_blank">
                    <span v-html="$t(item.after).replace(/\n/g, '<br>')" />
                  </a>
                </span>
                <span v-else v-html="$t(item.after).replace(/\n/g, '<br>')"></span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 grid-rows-1 py-3">
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
              <UButton icon="i-line-md-email-arrow-right-filled" size="lg" color="rose" square variant="soft"
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
              <UButton icon="i-line-md-email-arrow-right-filled" size="lg" color="blue" square variant="soft"
                :class="isHover[1] ? 'ml-2 bg-white/60' : 'ml-2 bg-white'" :ui="{ rounded: 'rounded-full' }"
                to="mailto:GIETfuture@eduhk.hk" />
            </div>
          </div>

        </div>
      </div>

      <div class="md:hidden flex flex-col justify-center mx-10">
        <div class="justify-center items-center flex my-3">
          <UButton padding="2xs" gap="xs" color="sky" variant="soft"
            :ui="{ rounded: 'rounded-full', font: 'font-bold' }" class="w-1/2" block :trailing="true" to=""
            target="_blank">
            <span class="md:text-lg text-sm">Sponsorship</span>
          </UButton>
        </div>
        <!-- <div class="justify-center items-center flex">
          <NuxtImg src="img/logo/UNESCOLogo-single.png" class="md:w-full w-2/5" />
        </div> -->
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