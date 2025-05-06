<template>
  <dialog ref="info-modal" class="info-modal">
    <button class="close" @click.prevent="close"><span>&times;</span></button>
    <div class="info-content">
      <MunicipalityInfo :data="data" />
      <MunicipalityPromise :data="data" />
      <div class="buttons">
        <a
          v-if="data.pp_status !== 'yes'"
          :href="ctaResolvedRoute.href"
          target="_blank"
          class="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="4.361 4.044 36.722 34.595"
          >
            <path
              fill="none"
              stroke="#83BA7B"
              stroke-linecap="round"
              stroke-width="8"
              d="M24.5 7.5c-4.284 0-12.278 2.279-14.389 6.5-1.907 3.815-3.197 11.914.139 15.25 4.008 4.008 11.936 5.23 17.25 4.361 8.164-1.336 11.953-13.354 5.222-18.861-2.254-1.845-7.972-.875-10.222.25-2.984 1.492-5.565 6.96-4.972 10.222.911 5.013 11.399 4.733 13.86 1.778 2.21-2.65.856-7.607-1.277-9.889-2.61-2.793-6.1-3.456-9.833-3-4.974.608-16.363 8.613-6.972 11.361 2.636.772 6.054 1.116 7.944-1.194.7-.857.872-2.395.778-1.972-.818 3.68 3.472 5.1 3.472 1.25 0-1.434-1.898-6.029-2-2.556-.062 2.117 1.23 1.91 3 2.5"
            />
            <path
              d="M18.332 4.527c-5.62 1.035-9.64 4.085-11.614 8.824-1.867 4.464-1.427 9.005-1.151 10.75.158.999.481 2.03.935 3.056-.788.833-1.508 1.75-2.034 2.735a.903.903 0 0 0 .364 1.22.9.9 0 0 0 1.22-.366 10.59 10.59 0 0 1 1.336-1.886c1.376 2.322 3.401 4.523 5.795 6.187a19.836 19.836 0 0 0 11.449 3.592c1.39 0 2.876-.14 4.45-.456 5.343-1.067 9.257-4.572 11.026-9.864 2.07-6.197.756-13.861-3.124-18.257-.549-.805-5.808-7.907-18.652-5.535Zm20.071 23.225c-1.552 4.653-4.99 7.731-9.67 8.668-6.695 1.336-11.593-.81-14.521-2.847-2.524-1.76-4.356-3.97-5.507-6.052 2.056-1.881 4.298-3.145 4.33-3.164a.906.906 0 0 0 .35-1.224.903.903 0 0 0-1.223-.351 27.183 27.183 0 0 0-4.252 3.032 10.042 10.042 0 0 1-.562-1.994C7.105 22.286 5.363 8.745 18.66 6.297a25.728 25.728 0 0 1 4.676-.45c8.605 0 12.015 5.004 12.185 5.26l.086.108c3.507 3.938 4.685 10.89 2.795 16.537Z"
            />
            <path
              d="M22.904 12.955c-4.433.756-10.027 2.034-11.34 2.786-1.529.874-2.299 1.994-2.114 3.078.126.738.747 1.705 2.988 2.115l.121.014c2.112.095 4.22.432 5.288.796-.793 1.477-1.976 3.987-2.322 6.395-.144.995.332 1.457.626 1.642.202.126.476.22.854.22.482 0 1.125-.159 1.98-.595.337 2.556.957 4.258 2.295 4.446.063.009.135.018.22.018.643 0 2.083-.572 6.152-6.56.814-1.203 7.924-11.796 6.57-14.167-.36-.629-1.101-1.928-11.318-.188ZM17.342 28.14c.225-1.327.742-2.714 1.264-3.88.05 1.125.104 2.192.176 3.182-.517.311-1.065.577-1.44.698Zm10.593-4.568c-3.182 5.094-5.611 7.92-6.435 8.432-.802-.918-1.022-6.133-1.1-7.89-.054-1.309-.089-2.07-.175-2.483-.009-.05-.032-.09-.046-.139 1.57-.865 7.46-4.064 10.918-5.296a.902.902 0 0 0-.606-1.696c-4.136 1.476-11.282 5.471-11.588 5.638l-.126.072c-1.512-.683-3.938-.963-6.084-1.061-1.16-.22-1.468-.563-1.477-.635-.017-.118.243-.643 1.232-1.211.814-.468 5.365-1.63 10.224-2.484 6.556-1.151 9.288-1.018 9.946-.752-.016.914-1.415 4.277-4.683 9.504Z"
            />
          </svg>
          <span v-if="data.pp_status === 'waiting'">OPOMNI NA ZAVEZO</span>
          <span v-if="data.pp_status === 'no'">SPODBUDI K UVEDBI</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 30"
            fill="currentColor"
            class="arrow"
          >
            <path
              d="M53.979 13.499H0v3h53.984l-9.224 8.572 2.046 2.197L60 15.001 46.806 2.732 44.76 4.929l9.219 8.57z"
            />
          </svg>
        </a>
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 37 32"
            fill="none"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="round"
          >
            <path
              stroke="#A7C6D3"
              stroke-width="8"
              d="M4.5 7.5V22c0 1.336.78 2.645 2.25 2.972.904.201 1.956-.076 2.833-.222 2.59-.431 5.274-.25 7.89-.25 2.495 0 5.033-.131 7.527 0 1.687.089 1.524.264 2-1.722.754-3.15 1.423-6.533 1.5-9.778.023-.989.657-5.5-.75-5.5-6.199 0-12.224-1-18.417-1-1.861 0 5.111.388 5.111 2.25 0 1.672-4.048 2.786-5.11 3.222C4.22 14.07 14.474 14.311 16 14.39c2.244.115 4.442.005 6.667-.278 1.138-.144.89-.179 0 .222-1.755.79-3.39 1.807-5.167 2.556-.053.022-3.278 1.108-3.278 1.111 0 .293 5.55 1.747 6.278 2.111.568.284.041.94 1.028-.972C24.207 13.949 25 10.052 25 4.5c0-.657 1.043.895 1.222 1.111 1.22 1.465 2.724 2.78 4.056 4.111.968.968 2.307 1.221.722 2.278"
            />
            <path
              d="M35.228 14.379 23.03 2.18m12.135 12.261L22.937 26.57M22.802 2l.139 7.899m-.001 9.653v6.885m-.138-7.225c-.91 0-1.862.261-2.756.423-.721.131-1.53.35-2.26.387-.518.027-.982.36-1.479.468-.5.109-.891.338-1.347.54-1.434.637-2.57 1.598-3.694 2.597-.563.5-.99 1.132-1.545 1.624a3.957 3.957 0 0 0-.689.846"
            />
            <path
              d="M22.802 10.08c-1.22 0-2.615-.18-3.8.158-1.2.34-2.491.34-3.618.943-.774.416-1.61.764-2.245 1.397a10.76 10.76 0 0 0-2.024 2.812c-.947 1.886-1.592 3.903-1.974 5.997-.098.537-.02 1.15-.02 1.691 0 .41-.089.78-.089 1.195v1.824"
            />
            <path
              d="M17.884 5.448H8.028c-.774 0-1.552-.051-2.302.158-.468.13-1.18.11-1.663.11-.286 0-.685.126-.964.247-.6.261-1.164.724-1.364 1.407-.321 1.1-.644 2.358-.644 3.518 0 3.167-.091 6.364-.091 9.543 0 2.5.365 4.975.365 7.481 0 .809.435 2.3 1.46 2.418 1.176.135 2.328.357 3.54.357h16.489c1.021 0 1.96-.254 2.966-.352 2.129-.208 5.355.365 6.713-1.7.677-1.028.593-2.271.593-3.438v-2.893"
            />
          </svg>
          <span>DELI Z DRUGIMI</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 30"
            fill="currentColor"
            class="arrow"
          >
            <path
              d="M53.979 13.499H0v3h53.984l-9.224 8.572 2.046 2.197L60 15.001 46.806 2.732 44.76 4.929l9.219 8.57z"
            />
          </svg>
        </button>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { onMounted, useTemplateRef } from "vue";
import { useRouter } from "vue-router";
import MunicipalityInfo from "./MunicipalityInfo.vue";
import MunicipalityPromise from "./MunicipalityPromise.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const router = useRouter();
const infoModal = useTemplateRef("info-modal");
const ctaResolvedRoute = router.resolve({
  name: "municipality-cta",
  params: {
    slug: props.data.slug,
  },
});

function close() {
  infoModal.value?.close();
  emit("close");
}

onMounted(() => {
  infoModal.value.showModal();
  infoModal.value.addEventListener("close", close);
});
</script>

<style lang="scss" scoped>
dialog.info-modal {
  width: 100%;
  max-width: 25rem;
  margin: auto;
  padding: 0;
  background-color: var(--clr-light-gray);
  border: 4px solid #000;

  button.close {
    position: absolute;
    top: 0;
    right: 0;
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    overflow: hidden;
    font-size: 3rem;
    line-height: 1;

    span {
      margin-top: -0.75rem;
    }
  }

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.75);
  }

  .info-content {
    padding: 2rem 1.5rem;
    font-family: var(--fnt-alt);
    text-align: center;

    .buttons {
      display: flex;
      flex-direction: column;
      gap: 0.85rem;

      button,
      .button {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;
        padding: 0.5rem 0.85rem;
        background: #fff;
        border: 2px solid #000;
        border-radius: 9999rem;
        text-decoration: none;

        svg {
          width: 2.25rem;
          height: 2.25rem;
        }

        span {
          font-size: 1.125rem;
          font-weight: 700;
        }

        svg.arrow {
          margin-left: auto;
        }
      }
    }
  }
}
</style>
