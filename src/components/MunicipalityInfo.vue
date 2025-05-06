<template>
  <div
    :class="{ 'municipality-info': true, 'municipality-info--large': large }"
  >
    <div class="coat">
      <img :src="`${baseUrl}generated/coats/coat-${data.slug}.png`" alt="" />
    </div>
    <div class="name">
      <div class="key">{{ data.type }}</div>
      <div class="value">{{ data.name }}</div>
    </div>
    <div class="mayor">
      <div class="key">
        {{ data.mayor_gender === "f" ? "Županja" : "Župan" }}
      </div>
      <div class="value">{{ data.mayor_name }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
  large: {
    type: Boolean,
    default: false,
  },
});

const baseUrl = import.meta.env.BASE_URL;
</script>

<style lang="scss" scoped>
.municipality-info {
  .coat {
    margin-bottom: 1.5rem;

    img {
      display: block;
      width: 5rem;
      height: 5rem;
      margin-inline: auto;
    }
  }

  .name,
  .mayor {
    margin-bottom: 1rem;

    .key {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.1;
    }

    .value {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.2;
    }
  }

  &.municipality-info--large {
    .coat {
      margin-bottom: 2.5rem;

      img {
        width: 7rem;
        height: 7rem;
      }
    }

    .name,
    .mayor {
      margin-bottom: 1.5rem;

      .key {
        font-size: 1.3125rem;
      }

      .value {
        font-size: 2rem;
      }
    }
  }
}
</style>
