<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <button
            type="button"
            class="close"
            aria-label="Close"
            @click="$emit('close')"
          >
            <span style="color: #5f235b; font-size: 2rem">&times;</span>
          </button>
          <div class="modal-body">
            <div class="share-card-container">
              <div class="share-card">
                <slot name="card"></slot>
              </div>
            </div>
            <div class="copy">
              <div class="copy-text">Kopiraj povezavo in jo deli naprej!</div>
              <input
                :value="shortenedShareLink"
                class="form-control"
                spellcheck="false"
                readonly
                @focus="$event.target.select()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";

export default {
  name: "ShareModal",
  props: {
    shareLink: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      shortenedShareLink: null,
    };
  },
  mounted() {
    this.shortenShareLink();
  },
  methods: {
    shortenShareLink() {
      if (!this.shareLink || !this.shareLink.startsWith("http")) {
        this.shortenedShareLink = this.shareLink;
        return;
      }
      axios
        .post(
          "https://djnd.si/yomamasofat/",
          `fatmama=${encodeURIComponent(decodeURIComponent(this.shareLink))}`
        )
        .then((response) => {
          this.shortenedShareLink = response.data;
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
          this.shortenedShareLink = this.shareLink;
        });
    },
  },
};
</script>

<style lang="scss">
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.15s ease-in-out;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
</style>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;

    .modal-container {
      max-width: 1296px;
      margin: 0px auto;
      padding: 20px 30px;
      background-color: #f2cc59;
      border-radius: 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;

      .close {
        position: relative;
        top: -10px;
        right: -10px;
      }

      .modal-body {
        margin: 20px 0;

        .share-card-container {
          position: relative;
          width: 100%;
          padding-top: 52.33334%;

          .share-card {
            position: absolute;
            inset: 0;
          }
        }

        .copy {
          margin-top: 36px;
          padding-top: 36px;
          border-top: 3px solid #000;

          .copy-text {
            margin-bottom: 12px;
            font-family: "BioRhyme";
            font-size: 20px;
            color: #000;
            text-align: center;
          }

          .form-control {
            margin: 0 auto;
            max-width: 520px;
            border-radius: 0;
            border: 6px solid #291749;
            background-color: #fcf5de;
            font-size: 1.5rem;
            font-weight: 700;
            height: auto;
            color: #000;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
