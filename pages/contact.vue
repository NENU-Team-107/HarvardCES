<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import type { TabItems } from '~/lib/model';
import Title from '~/components/common/Title.vue';
import Tabs from '~/components/common/Tabs.vue';
import { TabsContent } from 'radix-vue'

const { t } = useI18n();

const tabMenuBase = ref<TabItems[]>([
  {
    label: "Harvard China Education Symposium",
    content: "Harvard China Education Symposium",
    show: true,
    index: 0,
  },
  {
    label: "The Education University of Hong Kong",
    content: "The Education University of Hong Kong",
    show: false,
    index: 1,
  }
])

const toggleShowMore = (index: number) => {
  tabMenuBase.value[index].show = !tabMenuBase.value[index].show;
}

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
  <div class="w-full h-full min-h-screen mx-10 my-5 pt-24">
    <NuxtPage />

    <Tabs :tab-menu-base="tabMenuBase">
      <TabsContent v-for="item in tabMenuBase" :value="item.label" class="flex-1 ml-8">
        <div class="min-h-full w-full flex flex-col bg-white/80 dark:bg-gray-800/80 dark:text-white px-10">

          <div v-if="item.index === 0" class="w-full max-w-screen">
            <div class="flex flex-col space-y-12">
              <!-- 关于我们部分 -->
              <div class="bg-harvard-img1 bg-cover bg-no-repeat bg-center">
                <div class="bg-red-900/85 text-white pr-10 pb-5">
                  <div class="grid grid-cols-3 gap-4 w-full">
                    <div class="col-start-2 col-span-2">
                      <div class="grid-flow-row gap-4">
                        <div class="text-3xl font-bold mt-10 mb-5">
                          哈佛中国教育论坛 | China Education Symposium
                        </div>

                        <div class=" bg-white w-full h-0.5 mb-5"></div>

                        <div class="text-lg text-justify">
                          哈佛中国教育论坛成立于2010年，是哈佛教育学院官方的学生组织，也是美国顶尖高等学府中对中国教育关注度最长和影响力最大的公益平台。一年一度的论坛旨在连接中美教育实践者、学者、政策制定者及各界领袖精英，促进与中国教育相关的讨论并支持教育实践，交锋观点，展示成果。
                          <br>
                          <br>
                          China Education Symposium, established in 2010, is an official student-run organization at the
                          Harvard Graduate School of Education. The non-profit Symposium has been widely recognized as
                          one
                          of the most well-established and well-known events in the United States around education in
                          China. The annual Symposium aims to gather practitioners, researchers, and policymakers in the
                          field of education to present the latest research, exchange new ideas, and brainstorm
                          innovative
                          solutions related to education in China.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 使命部分 -->
              <div class="flex flex-col space-y-8">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white self-center">
                  我们的使命 | Our Mission
                </h2>
                <div class=" bg-red-900 w-10/12 h-px items-center self-center"></div>

                <div class="grid grid-cols-3 gap-8 justify-center items-center text-center self-center pl-5 pr-5">
                  <div class="col-start-1 col-span-3">
                    <div class="grid grid-cols-3 gap-8">
                      <div class="text-xl font-semibold ">
                        创新 | INNOVATE
                      </div>
                      <div class="text-xl font-semibold ">
                        启迪 | INSPIRE
                      </div>
                      <div class="text-xl font-semibold">
                        影响 | INFLUENCE
                      </div>
                    </div>
                  </div>

                  <div class="col-start-1 col-span-3">
                    <div class="grid grid-cols-3 gap-8">
                      <div>
                        为解决中国教育问题提供思路方法
                      </div>
                      <div>
                        为教育工作者，政策制定者，和专家学者讨论中国教育问题提供开放的平台
                      </div>
                      <div>
                        影响中国教育新一代的领导人
                      </div>
                    </div>
                  </div>

                  <div class="col-start-1 col-span-3">
                    <div class="grid grid-cols-3 gap-8">
                      <div>
                        Innovate solutions to the most crucial problems in China’s education
                      </div>
                      <div>
                        Inspire diverse conversations with practitioners, policy-makers and researchers about China’s
                        Educational problems
                      </div>
                      <div>
                        Influence the future leaders of China’s education
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <!-- 关注我们部分 -->

              <div class="bg-harvard-img2 bg-cover bg-no-repeat bg-center">
                <div class="bg-red-900/85 text-white pl-10 pb-5">
                  <div class="grid grid-cols-3 gap-4 w-full">
                    <div class="col-start-1 col-span-2">
                      <div class="grid-flow-row gap-4">
                        <div class="text-3xl font-bold mt-10 mb-5">
                          关注我们｜Follow US
                        </div>
                        <div class=" bg-white w-full h-0.5 mb-5"></div>
                        <div class="text-lg text-justify">
                          官方微信公众号：Harvard CES，定期更新论坛动态与相关资讯。
                          <br>
                          官方Youtube账号：CES HGSE，记录往年会场
                          <br>
                          官方邮箱：general@hgseces.org，洽谈赞助合作
                        </div>
                      </div>
                    </div>
                    <div class="mt-5">
                      <NuxtImg src="img/eduhk/ces-wechat-logo-white.png" class="w-40" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="w-full min-h-full relative ">
            <div class="z-20 bg-white  dark:bg-gray-800/80">
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
        </div>
      </TabsContent>
    </Tabs>

    <div class="md:hidden">
      <div v-for="item in tabMenuBase">
        <UCard :ui="{
          base: '',
          background: 'bg-white dark:bg-gray-900',
          divide: 'divide-y divide-gray-200 dark:divide-gray-800',
          ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
          rounded: 'rounded-lg',
          shadow: 'shadow',
          body: {
            base: '',
            background: 'dark:bg-gray-900',
            padding: ''
          },
          header: {
            base: 'dark:text-white/90',
            background: 'bg-tabs-header dark:bg-gray-700',
            padding: 'px-4 py-3 sm:px-6'
          },
        }">
          <template #header>
            <div class="flex w-full justify-between">
              <span>{{ item.label }}</span>
              <button @click="toggleShowMore(item.index)">
                <span v-if="item.show">
                  <font-awesome icon="fa-solid fa-angle-up" />
                  {{ $t("Collapse") }}
                </span>
                <span v-else>
                  <font-awesome icon="fa-solid fa-angle-down" />
                  {{ $t("Show More") }}
                </span>
              </button>
            </div>
          </template>

          <div class="w-full max-w-screen-md">
            <div v-if="item.index === 0 && item.show" class="w-full max-w-screen">
              <ClientOnly>
                <NuxtImg src="img/harvard/Introduction.png" class="items-center justify-center w-2/3 ml-16 mt-2" />
                <NuxtImg src="img/harvard/aiming.png" class="items-center justify-center w-10/12 ml-6" />
                <NuxtImg src="img/harvard/reachUs.png" class="items-center justify-center w-10/12 ml-6" />
                <div class="font-semibold text-white bg-red-800 mt-2 text-lg w-10/12 ml-6 mb-2">
                  <ULink to="https://www.hgseces.org/">
                    {{ $t("About Us.HarvardCES.link") }}
                  </ULink>
                  <font-awesome class="ml-1" icon="fa-solid fa-arrow-right" />
                </div>
              </ClientOnly>
            </div>
            <div v-else-if="item.index === 1 && item.show" class="w-full px-2 py-1">
              <div class="z-20 bg-white mt-4">
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

        </UCard>
      </div>
    </div class=" break-all">
  </div>
</template>
<style>
.truncate {
  word-break: break-all;
  text-overflow: unset;
  white-space: inherit;
}
</style>
