<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Title from '~/components/common/Title.vue';

const { t } = useI18n();

const eduHKIntro = computed(() => {
  return t("About Us.EduHK.intro").replace(/\n/g, "<br>")
})

const eduHKVision = computed(() => {
  return t("About Us.EduHK.vision").replace(/\n/g, "<br>")
})

const eduHKMission = computed(() => {
  return t("About Us.EduHK.mission").replace(/\n/g, "<br>")
})

const eduHKPresident = computed(() => {
  return t("About Us.EduHK.president").replace(/\n/g, "<br>")
})
</script>

<template>
  <div class="w-full h-full mx-10 my-5 pt-24 min-h-full  md:max-w-5xl max-xl:max-w-7xl ">
    <div class="mx-auto md:block hidden">
      <div class="z-20 bg-white px-12 py-4">
        <div class="mb-5 z-20">
          <Title titleMap="About Us.EduHK.intro title" />
          <div class="text-justify" v-html="eduHKIntro"></div>
        </div>

        <div class="flex flex-row h-full w-full z-20">
          <div class="w-4/12 min-h-full flex justify-center items-center ">
            <NuxtImg src="img/eduhk/vision.png" class="w-11/12 m-5" />
          </div>

          <div class="w-8/12 h-full z-20 flex flex-col justify-center items-center">
            <div class="my-3">
              <Title titleMap="About Us.EduHK.vision title" />
              <div class="text-justify" v-html="eduHKVision"></div>
            </div>

            <div class="my-3">
              <Title titleMap="About Us.EduHK.mission title" />
              <div class="text-justify" v-html="eduHKMission"></div>
            </div>
          </div>
        </div>

        <div class="flex flex-col w-full h-full mb-5 ">
          <Title titleMap="About Us.EduHK.president title" />

          <div class="flex flex-row h-full w-full">
            <div class="w-4/5 h-full z-20">
              <div class="text-justify" v-html="eduHKPresident" />
            </div>
            <div class="w-1/5 min-h-full flex justify-center items-start ">
              <NuxtImg src="img/eduhk/Chi-Kin John.png" class="rounded-full mx-auto w-4/5" />
            </div>
          </div>

        </div>


        <div class="font-semibold text-white bg-green-800 p-2">
          <ULink to="https://www.eduhk.hk/en/">
            {{ $t("About Us.EduHK.link") }}
          </ULink>
          <font-awesome class="ml-1" icon="fa-solid fa-arrow-right" />
        </div>

      </div>
    </div>
    <div class="md:hidden">
      <div class="w-full max-w-screen-md">
        <div class="w-full py-1">
          <div class="z-20 bg-white mt-4 px-5">
            <div class="mb-5 z-20">
              <Title titleMap="About Us.EduHK.intro title" />
              <div class="text-justify" v-html="eduHKIntro"></div>
            </div>

            <div class="min-h-full flex justify-center items-center">
              <NuxtImg src="img/eduhk/vision.png" class="w-11/12 m-auto" />
            </div>

            <div class="h-full z-20 flex flex-col justify-center items-center mt-2">
              <div class="my-3">
                <Title titleMap="About Us.EduHK.vision title" />
                <div class="text-justify" v-html="eduHKVision"></div>
              </div>

              <div class="my-3 mt-2">
                <Title titleMap="About Us.EduHK.mission title" />
                <div class="text-justify" v-html="eduHKMission"></div>
              </div>
            </div>

            <div class="mb-5 flex flex-col w-full h-full mt-2">
              <Title titleMap="About Us.EduHK.president title" />

              <div class="min-h-full flex justify-center items-start ">
                <NuxtImg src="img/eduhk/Chi-Kin John.png" class="rounded-full mx-auto w-2/5" />
              </div>
              <div class="h-full z-20">
                <div class="text-justify" v-html="eduHKPresident" />
              </div>

            </div>


            <div class="font-semibold text-white bg-green-800 text-center p-2">
              <ULink to="https://www.eduhk.hk/en/">
                {{ $t("About Us.EduHK.link") }}
              </ULink>
              <font-awesome class="ml-1" icon="fa-solid fa-arrow-right" />
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>