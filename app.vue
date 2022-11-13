<script setup lang="ts">
import 'uno.css'
import '@unocss/reset/eric-meyer.css'

const BLOOMBERG_ARTICLE_HREF =
  'https://www.bloomberg.com/press-releases/2020-05-13/rdif-and-chemrar-announce-first-interim-results-of-clinical-trials-of-favipiravir-drug-s-effectiveness-in-coronavirus-therapy'
</script>

<template>
  <main class="mx-auto max-w-140 p-4 space-y-4">
    <VCard class="pb-4">
      <div class="relative">
        <img src="~/assets/bloomberg-hands.jpeg" class="w-full mb-4" />
        <img
          src="~/assets/avatar.jpeg"
          class="w-16 h-16 absolute bottom-4 left-3 rounded-full p-1 bg-white"
          style="transform: translateY(25%)"
        />
      </div>

      <h1 class="text-4xl px-4 pt-2 pb-2 font-semibold">Pavel Gretskov</h1>
      <p class="px-4 text-gray-500" role="doc-subtitle">
        Formulation and Process Development Scientist
      </p>
    </VCard>

    <VCard class="p-4 space-y-4">
      <VH2>About</VH2>
      <p class="text-sm">
        I have been developing research and design in the pharmaceutical field
        for more than 8 years. The experience and the theoretical and practical
        knowledge I have gained allow me to conduct a full cycle of research on
        the development of the formulation and technology of the finished drug
        product from the development of a target product quality profile to
        transfer to a commercial site, including documentation support and risk
        assessment.
      </p>
    </VCard>

    <VCard class="p-4 space-y-8 text-sm">
      <VH2>Implemented Projects</VH2>

      <section class="space-y-4">
        <VH3>Original formulation</VH3>

        <ul>
          <li>
            Water-based drops with a high concentration of insoluble API in
            water 5 mg / ml
          </li>
          <li>
            Film-coated tablets with 2 incompatible APIs (introduction of liquid
            lipophilic API into the composition)
          </li>
          <li>
            New generation tablet form against Alzheimer's &mdash; thermolabile,
            hygroscopic, light-sensitive molecule
          </li>
        </ul>
      </section>

      <section class="space-y-4">
        <VH3>Design of technology</VH3>

        <ul>
          <li>
            A low-dose drug by direct compression

            <ul>
              <li>API concentration &mdash; <b>0.17%</b></li>
              <li>Tablets AV uniformity &mdash; <b>5%</b></li>
            </ul>
          </li>
          <li>
            A high-dose drug by wet granulation

            <ul>
              <li>API concentration &mdash; <b>97%</b></li>
              <li>Tablets hardness &mdash; <b>150 H</b></li>
            </ul>
          </li>
          <li>
            Tablets with 3 APIs

            <ul>
              <li>1 of 3 APIs concentration &mdash; <b>0.035%</b></li>
              <li>Tablets AV uniformity &mdash; <b>7%</b></li>
            </ul>
          </li>
        </ul>
      </section>

      <section class="space-y-4">
        <VH3>COVID-19</VH3>

        <p>
          <b>Favipiravir tablets</b> (<a :href="BLOOMBERG_ARTICLE_HREF"
            >Bloomberg publication</a
          >) &dash; development of the first Russian drug against COVID-19.
        </p>
      </section>
    </VCard>

    <VCard class="p-4 space-y-8">
      <h2>Gallery</h2>

      <div class="gallery space-y-4">
        <img src="~/assets/bloomberg-deleted.jpeg" />
        <img src="~/assets/tablets-heart.jpeg" />
        <img src="~/assets/me-in-lab.jpeg" />
      </div>
    </VCard>
  </main>
</template>

<style lang="scss">
:root {
  --font: 'Inconsolata';
}

body {
  background-color: #eee;
}

main {
  font-family: var(--font);
}

b {
  font-weight: bolder;
}

ul {
  list-style: outside disc;
  padding-left: 16px;

  li + li,
  li ul {
    margin-top: 4px;
  }

  & & {
    list-style-type: circle;
  }
}
</style>

<style lang="scss" scoped>
.gallery {
  img {
    width: 100%;
    border-radius: 4px;
    border: 1px solid #aaa;
  }
}
</style>
