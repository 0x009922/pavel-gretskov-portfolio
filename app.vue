<script setup lang="ts">
import 'uno.css'
import '@unocss/reset/eric-meyer.css'
import '@fontsource/rubik'

const BLOOMBERG_ARTICLE_HREF =
  'https://www.bloomberg.com/press-releases/2020-05-13/rdif-and-chemrar-announce-first-interim-results-of-clinical-trials-of-favipiravir-drug-s-effectiveness-in-coronavirus-therapy'
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 h-12">
    <div class="max-w-170 mx-auto px-4 h-full flex items-center">
      <ThemePicker />
    </div>
  </nav>

  <main class="mx-auto max-w-170 px-4 pt-28 pb-16 space-y-4">
    <VCard>
      <div class="relative">
        <img
          src="~/assets/bloomberg-hands.webp"
          width="680"
          height="261"
          class="w-full mb-4 object-cover"
          alt="Background - photo of my hands by Bloomberg"
        />
        <img
          src="~/assets/avatar.webp"
          width="64"
          height="64"
          class="avatar absolute bottom-4 left-6 rounded-full"
          style="transform: translateY(25%)"
          alt="My avatar"
        />
      </div>

      <div class="p-6 space-y-2">
        <h1 class="text-4xl font-semibold">Pavel Gretskov</h1>
        <p role="doc-subtitle">Formulation and Process Development Scientist</p>
      </div>
    </VCard>

    <VCard>
      <section class="p-6 space-y-4">
        <VH2>About</VH2>
        <p class="text-sm">
          I have been developing research and design in the pharmaceutical field
          for more than 8 years. The experience and the theoretical and
          practical knowledge I have gained allow me to conduct a full cycle of
          research on the development of the formulation and technology of the
          finished drug product from the development of a target product quality
          profile to transfer to a commercial site, including documentation
          support and risk assessment.
        </p>
      </section>
    </VCard>

    <VCard>
      <section class="p-6 space-y-8 text-sm">
        <VH2>Implemented Projects</VH2>

        <section class="space-y-3">
          <VH3>Original formulation</VH3>

          <ul>
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
        </section>

        <section class="space-y-3">
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
                <li>Tablets hardness &mdash; <b>200 H</b></li>
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

        <section class="space-y-3">
          <VH3>COVID-19</VH3>

          <p>
            <b>Favipiravir tablets</b> (<a
              :href="BLOOMBERG_ARTICLE_HREF"
              target="_blank"
              >Bloomberg publication</a
            >) &dash; development of the first Russian drug against COVID-19.
          </p>
        </section>
      </section>
    </VCard>

    <VCard>
      <section class="p-6 space-y-8">
        <VH2>Gallery</VH2>

        <div class="gallery space-y-4">
          <img
            src="~/assets/bloomberg-deleted.webp"
            alt="Article, deleted from Bloomberg"
            width="680"
            height="1209"
            loading="lazy"
          />
          <img
            src="~/assets/tablets-heart.webp"
            alt="Bunch of tablets formed into heart"
            loading="lazy"
            width="680"
            height="383"
          />
          <img
            src="~/assets/me-in-stock.webp"
            alt="Me in stock"
            loading="lazy"
            width="680"
            height="907"
          />
        </div>
      </section>
    </VCard>
  </main>
</template>

<style lang="scss">
$black: rgb(0, 4, 8);
$white: rgb(250, 252, 255);

:root {
  --font: 'Rubik';
  --c-text-primary: #{$black};
  --c-text-secondary: #{lighten($black, 10)};
  --c-surface: white;
  --c-bg: #{darken($white, 0)};
  --c-border: rgb(221, 225, 227);
  --transition: color 0.3s ease, background-color 0.3s ease,
    border-color 0.3s ease;
}

body {
  background-color: var(--c-bg);
  font-family: var(--font);
  color: var(--c-text-primary);
}

nav {
  background-color: var(--c-surface);
  z-index: 99;
  border-bottom: 2px solid var(--c-border);
  transition: var(--transition);
}

p[role='doc-subtitle'] {
  color: var(--c-text-secondary);
  transition: var(--transition);
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

html.dark {
  color-scheme: dark;

  --c-text-primary: #{$white};
  --c-text-secondary: #{darken($white, 10)};
  --c-surface: #{lighten($black, 15)};
  --c-bg: #{lighten($black, 10)};
  --c-border: rgba(66, 70, 88, 0.5);
}

body {
  transition: var(--transition);
}
</style>

<style lang="scss" scoped>
.gallery {
  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 4px;
    border: 2px solid var(--c-border);
    transition: var(--transition);
  }
}

img.avatar {
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.14),
    0 1px 14px 0 rgba(0, 0, 0, 0.12);
  padding: 2px;
  background-color: var(--c-surface);
  transition: var(--transition);
}
</style>
