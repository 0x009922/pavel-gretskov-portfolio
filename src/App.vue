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

    <section class="space-y-8">
      <VHeading2>
        {{ $t('terms.title') }}
      </VHeading2>

      <ul class="space-y-6 text-lg text-light-600" role="list">
        <PortfolioTerm>
          <div>
            <div class="text-5xl float-left mb-4 mr-4">8+</div>

            <div class="flex-1">
              <VLocale>
                <template #ru>
                  лет опыта успешных кейсов по разработке и трансферу препаратов
                  для российских компаний и компаний входящих в Big Pharma
                  &mdash; твёрдые, жидкие и мягкие формы
                </template>
                <template #en>
                  years of experience of successful cases on the development and
                  transfer of drugs for Russian companies and companies leading
                  to Big Pharma &mdash; solid, liquid and soft forms
                </template>
              </VLocale>
            </div>
          </div>
        </PortfolioTerm>

        <PortfolioTerm>
          <div class="grid items-center gap-4 grid-cols-4">
            <div class="col-span-2">
              <VLocale>
                <template #ru>
                  Создание низкодозированного препарата методом прямого
                  прессования
                </template>
                <template #en>
                  Creation of a low-dose drug by direct compression
                </template>
              </VLocale>
            </div>

            <VTitledValue>
              <template #value>0.17%</template>
              <template #title>
                <VLocale>
                  <template #ru>Доля АФИ</template>
                  <template #en>API share</template>
                </VLocale>
              </template>
            </VTitledValue>

            <VTitledValue>
              <template #value>5%</template>
              <template #title>
                <VLocale>
                  <template #ru>Однородность AV таблеток</template>
                  <template #en>Tablet AV uniformity</template>
                </VLocale>
              </template>
            </VTitledValue>
          </div>
        </PortfolioTerm>

        <PortfolioTerm>
          <div class="grid items-center gap-4 grid-cols-4">
            <div class="col-span-2">
              <VLocale>
                <template #ru>
                  Разработка высокодозированного препарата методом влажной
                  грануляции
                </template>
                <template #en>
                  Development of a high-dose drug by wet granulation
                </template>
              </VLocale>
            </div>

            <VTitledValue>
              <template #value>97%</template>
              <template #title>
                <VLocale>
                  <template #ru>Доля АФИ</template>
                  <template #en>API share</template>
                </VLocale>
              </template>
            </VTitledValue>

            <VTitledValue>
              <template #value>150 H</template>
              <template #title>
                <VLocale>
                  <template #ru>Прочность таблетки</template>
                  <template #en>Tablet strength</template>
                </VLocale>
              </template>
            </VTitledValue>
          </div>
        </PortfolioTerm>

        <PortfolioTerm big-pharma>
          <VLocale>
            <template #ru>
              Создание оригинальной рецептуры и технологии новой лекарственной
              формы (детские антигистаминные капли для приема внутрь) для рынка
              РФ (капли на водной основе с высокой концентрацией нерастворимой
              АФИ в воде 5 мг/мл)
            </template>
            <template #en>
              Creation of an original formulation and a new dosage form
              (children's oral antihistamine drops) for the Russian market
              (water-based drops with a high concentration of insoluble API in
              water 5 mg / ml)
            </template>
          </VLocale>
        </PortfolioTerm>

        <PortfolioTerm big-pharma>
          <VLocale>
            <template #ru>
              Разработка оригинальной рецептуры и технологии таблеток, покрытых
              пленочной оболочкой с 2 несовместимыми АФИ (введение жидкой
              липофильной АФИ в состав)
            </template>
            <template #en>
              Development of an original formulation and technology for
              film-coated tablets with 2 incompatible APIs (introduction of
              liquid lipophilic API into the composition)
            </template>
          </VLocale>
        </PortfolioTerm>

        <PortfolioTerm big-pharma>
          <div>
            <VLocale>
              <template #ru>
                <div class="space-y-2">
                  <p>
                    Создание оригинальной рецептуры и технологии таблеток для
                    рассасывания с 3 АФИ в составе методом влажной грануляции
                  </p>

                  <ul class="list-disc list-inside">
                    <li>
                      1 из 3 АФИ &mdash; фермент с долей в рецептуре 0,035%
                    </li>
                    <li>получен препарат с AV 7</li>
                  </ul>
                </div>
              </template>
              <template #en>
                Creation of an original formulation and technology of lozenges
                with 3 APIs in the composition by wet granulation (1 of 3 APIs
                is an enzyme with a share in the formulation of 0.035%; a tablet
                with AV of 7% was obtained)
              </template>
            </VLocale>
          </div>
        </PortfolioTerm>

        <PortfolioTerm>
          <VLocale>
            <template #ru>
              Разработка оригинального препарата нового поколения от Альцгеймера
              (термолабильная, гигроскопичная, светочувствительная молекула)
            </template>
            <template #en>
              Development of an original drug of a new generation from
              Alzheimer's (thermolabile, hygroscopic, light-sensitive molecule)
            </template>
          </VLocale>
        </PortfolioTerm>

        <PortfolioTerm>
          <VLocale>
            <template #ru>
              Разработка первого российского препарата против коронавируса
              (Фавипиравир, таблетки) &mdash;
              <VLink :href="BLOOMBERG_ARTICLE_HREF">
                публикация в Bloomberg
              </VLink>
            </template>
            <template #en>
              Development of the first Russian drug against COVID-19
              (Favipiravir tablets) &mdash;
              <VLink :href="BLOOMBERG_ARTICLE_HREF">
                Bloomberg publication
              </VLink>
            </template>
          </VLocale>
        </PortfolioTerm>

        <PortfolioTerm>
          <div>
            <span class="text-6xl">30+</span>
            <VLocale>
              <template #ru>
                проектов-разработок дженериковых препаратов, не нарушая патентов
              </template>
              <template #en>
                development projects of generic drugs without infringing patents
              </template>
            </VLocale>
          </div>
        </PortfolioTerm>

        <PortfolioTerm>
          <VLocale>
            <template #ru>
              Открытие лаборатории R&D по твердым лекарственным формам. Старт от
              закупки оборудования до разработки 20+ активных проектов.
            </template>
            <template #en>
              Opening of an R&D laboratory for solid dosage forms. Starting from
              the purchase of equipment to the development of 20+ active
              projects.
            </template>
          </VLocale>
        </PortfolioTerm>
      </ul>
    </section>

    <section class="space-y-4">
      <VHeading2> Gallery </VHeading2>
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
</style>

<style lang="scss" scoped></style>
