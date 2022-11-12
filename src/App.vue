<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useNavigatorLanguage, whenever } from '@vueuse/core'
import { match } from 'ts-pattern'
import PortfolioTerm from './components/PortfolioTerm.vue'
import VLink from './components/VLink.vue'
import VLocale from './components/VLocale.vue'
import VHeading2 from './components/VHeading2.vue'
import VTitledValue from './components/VTitledValue.vue'
import TheLocalePicker from './components/TheLocalePicker.vue'
import BadgeBigPharmaContract from './components/BadgeBigPharmaContract.vue'

const { t, locale } = useI18n()

const { language } = useNavigatorLanguage()

whenever(
  language,
  (value) => {
    locale.value = match(value)
      .with('ru-RU', () => 'ru')
      .otherwise(() => 'en')
  },
  { immediate: true }
)

useHead({
  title: computed(() => t('page-title')),
})

const BLOOMBERG_ARTICLE_HREF =
  'https://www.bloomberg.com/press-releases/2020-05-13/rdif-and-chemrar-announce-first-interim-results-of-clinical-trials-of-favipiravir-drug-s-effectiveness-in-coronavirus-therapy'
</script>

<template>
  <div class="fixed top-0 right-0 p-4">
    <TheLocalePicker />
  </div>

  <div class="max-w-160 mx-auto py-16 px-8 text-md space-y-8">
    <h1 class="text-5xl font-semibold">{{ $t('name') }}</h1>

    <section class="space-y-4">
      <VHeading2> {{ $t('about.title') }} </VHeading2>

      <p class="text-sm">
        I have been developing research and design in the pharmaceutical field
        for more than 8 years. The experience and the theoretical and practical
        knowledge I have gained allow me to conduct a full cycle of research on
        the development of the formulation and technology of the finished drug
        product from the development of a target product quality profile to
        transfer to a commercial site, including documentation support and risk
        assessment.
      </p>
    </section>

    <section class="space-y-8">
      <VHeading2>
        {{ $t('projects.title') }}
      </VHeading2>

      <ul class="space-y-6 text-sm text-light-600" role="list">
        <div class="space-y-4">
          <h3>Original formulation</h3>

          <ul class="prose">
            <li>
              Water-based drops with a high concentration of insoluble API in
              water 5 mg / ml
            </li>
            <li>
              Film-coated tablets with 2 incompatible APIs (introduction of
              liquid lipophilic API into the composition)
            </li>
            <li>
              New generation tablet form against Alzheimer's &mdash;
              thermolabile, hygroscopic, light-sensitive molecule
            </li>
          </ul>

          <h3>Design of technology</h3>

          <ul class="prose">
            <li>
              A low-dose drug by direct compression.

              <ul class="list-inside list-circle">
                <li>API concentration &mdash; <b>0.17%</b></li>
                <li>Tablets AV uniformity &mdash; <b>5%</b></li>
              </ul>
            </li>
            <li>
              A high-dose drug by wet granulation.

              <ul class="list-inside list-circle">
                <li>API concentration &mdash; <b>97%</b></li>
                <li>Tablets hardness &mdash; <b>150 H</b></li>
              </ul>
            </li>
            <li>
              Tablets with 3 APIs.

              <ul class="prose">
                <li>1 of 3 APIs concentration &mdash; <b>0.035%</b></li>
                <li>Tablets AV uniformity &mdash; <b>7%</b></li>
              </ul>
            </li>
          </ul>

          <h3>COVID-19</h3>

          <p>
            <b>Favipiravir tablets</b> (<VLink :href="BLOOMBERG_ARTICLE_HREF"
              >Bloomberg publication</VLink
            >) &dash; development of the first Russian drug against COVID-19.
          </p>
        </div>
      </ul>
    </section>
  </div>
</template>

<style lang="scss">
#app {
  font-family: var(--font-sans);
  color: white;
}

body {
  background: black;
}

b {
  font-weight: bolder;
}

ul.prose {
  list-style: outside disc;
  padding-left: 16px;

  & > & {
    list-style-type: circle;
  }
}

h3 {
  font-size: 1.5em;
  font-weight: 600;
}
</style>

<style lang="scss" scoped></style>
