<template>
  <Section class="section--min">
    <div class="text-block text--18" v-html="model.text" />
  </Section>
</template>

<script>
import MODEL from './model'
import Section from '~/components/Utils/Section'

export default {
  components: {
    Section
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    model() {
      return MODEL(this.info)
    }
  }
}
</script>

<style lang="scss" scoped>
.text-block {
  line-height: 1.5;
  &::v-deep {
    > * {
      &:first-child {
        padding-top: 0;
      }
    }

    strong {
      font-weight: $bold;
    }

    h1 {
      padding: 8rem 0 3.5rem;
      font-size: 5rem;
      line-height: 1.25;
      font-family: $fontBase;
      font-weight: $regular;
      @include desktop {
        text-indent: -.2rem;
      }
      @include tablet {
        text-indent: -.2rem;
        font-size: 3.4rem;
        max-width: 75%;
      }
      @include mobile {
        text-indent: -.2rem;
        font-size: 3rem;
      }
    }

    h2 {
      padding: 4rem 0 2rem;
      font-size: 3.8rem;
      line-height: 1.35;
      font-family: $fontBase;
      font-weight: $regular;
      @include desktop {
        text-indent: -.2rem;
      }
      @include tablet {
        text-indent: -.2rem;
        font-size: 2.6rem;
        max-width: 75%;
      }
      @include mobile {
        text-indent: -.1rem;
        font-size: 2.6rem;
      }
    }

    h3,h4,h5 {
      padding: 4rem 0 2rem;
      font-size: 2.8rem;
      line-height: 1.5;
      font-family: $fontBase;
      @include tablet {
        font-size: 1.8rem;
        max-width: 75%;
      }
      @include mobile {
        font-size: 1.6rem;
      }
    }

    a {
      color: $brown;
      outline: none;
      text-decoration: none;
      border-bottom: 1px solid currentColor;
      padding-bottom: .25rem;
      transition: color .2s ease, border-color .2s ease;
      &:active {
        border-color: transparent;
        color: $brownHover;
      }
      @include desktop {
        &:hover {
          border-color: transparent;
          color: $brownHover;
        }
      }
    }
    p {
      padding: 1.5rem 0;
      margin: 0;
      & + p {
        padding-top: 0;
      }
    }

    ol {
      counter-reset: item;
      margin: 0;
      padding: 1.5rem 0;
      list-style-type: none;
      > li {
        counter-increment: item;
        display: table;
        &::before {
          content: counters(item, '.') ' ';
          display: table-cell;
          padding-right: 1.5rem;
          @include mobile {
            padding-right: 1rem;
          }
        }
        & + li {
          margin-top: 1.5rem;
        }
      }
    }

    ul {
      margin: 0;
      padding: 1.5rem 0;
      > li {
        position: relative;
        padding: 0 0 0 2.5rem;
        &::before {
          content: '';
          position: absolute;
          top: calc(50% - .3rem);
          left: 0;
          width: .6rem;
          height: .6rem;
          border-radius: 50%;
          background: $black17;
        }
        & + li {
          margin-top: 1.5rem;
        }
      }
    }

    blockquote {
      position: relative;
      padding: 1.5rem 0 1.5rem 4rem;
      p {
        padding: 0;
      }
    }
  }
}
</style>
