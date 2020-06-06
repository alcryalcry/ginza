<template>
  <div v-if="model.videoSrc" class="video">
    <div class="video-container">
      <transition mode="out-in" name="fade-reversed">
        <button v-if="!isActive" key="1" class="video-preview" @click="setActive">
          <picture v-if="model.image" class="image">
            <img :src="model.image" alt="" data-not-lazy>
          </picture>
        </button>
        <div v-else class="iframe">
          <iframe
            width="100%"
            height="100%"
            scrolling="no"
            frameborder="no"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            :src="model.videoSrc"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import MODEL from './model.js'

export default {
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    model () {
      return MODEL(this.info)
    }
  },
  methods: {
    setActive() {
      this.isActive = true
    }
  }
}
</script>

<style lang="scss" scoped>
.video {
  position: relative;

  &,
  .video-container,
  .video-preview,
  .iframe {
    width: 100%;
    height: 100%;
  }

  .video-preview {
    position: relative;
    &:active {
      &::before {
        opacity: .7;
      }
    }
    @include desktop {
      &:hover {
        &::before {
          opacity: .7;
        }
      }
    }
    &::before {
      @include absolute;
      content: '';
      background-position: center;
      background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDIiIGhlaWdodD0iNDIiIHZpZXdCb3g9IjAgMCA0MiA0MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9iKSI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMSA0MkMzMi41OTggNDIgNDIgMzIuNTk4IDQyIDIxQzQyIDkuNDAyMDIgMzIuNTk4IDAgMjEgMEM5LjQwMjAyIDAgMCA5LjQwMjAyIDAgMjFDMCAzMi41OTggOS40MDIwMiA0MiAyMSA0MloiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuNiIvPjwvZz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE3LjM4NjcgMTIuODkxNEMxNi43ODc3IDEyLjUwNjQgMTYgMTIuOTM2NCAxNiAxMy42NDg1VjI4LjM1MTVDMTYgMjkuMDYzNiAxNi43ODc3IDI5LjQ5MzYgMTcuMzg2NyAyOS4xMDg2TDI4LjgyMjQgMjEuNzU3MUMyOS4zNzM0IDIxLjQwMjggMjkuMzczNCAyMC41OTcyIDI4LjgyMjQgMjAuMjQyOUwxNy4zODY3IDEyLjg5MTRaIiBmaWxsPSJ3aGl0ZSIvPjxkZWZzPjxmaWx0ZXIgaWQ9ImZpbHRlcjBfYiIgeD0iLTMwIiB5PSItMzAiIHdpZHRoPSIxMDIiIGhlaWdodD0iMTAyIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVHYXVzc2lhbkJsdXIgaW49IkJhY2tncm91bmRJbWFnZSIgc3RkRGV2aWF0aW9uPSIxNSIvPjxmZUNvbXBvc2l0ZSBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0iaW4iIHJlc3VsdD0iZWZmZWN0MV9iYWNrZ3JvdW5kQmx1ciIvPjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9iYWNrZ3JvdW5kQmx1ciIgcmVzdWx0PSJzaGFwZSIvPjwvZmlsdGVyPjwvZGVmcz48L3N2Zz4=');
      background-size: 4.2rem;
      background-repeat: no-repeat;
      z-index: 1;
      transition: opacity .2s ease;
    }
  }
}

</style>
