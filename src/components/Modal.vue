<template>
  <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container" @click="modalConatinerClick">
          <button
            type="button"
            class="close"
            aria-label="Close"
            style="position: relative; top: -10px; right: -10px"
            @click="$emit('close')"
          >
            <span style="color: #5f235b; font-size: 2rem">&times;</span>
          </button>
          <div class="modal-body">
            <slot name="body">
              <div class="shares">
                <card-p-p
                  v-if="pp"
                  class="hide-mobile"
                  :info="obcinaInfo"
                ></card-p-p>
                <card-no-p-p
                  v-else
                  class="hide-mobile"
                  :info="obcinaInfo"
                ></card-no-p-p>
                <div class="social-buttons">
                  <button class="btn" @click="$emit('fbShare')">
                    <svg
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <!-- eslint-disable-next-line max-len -->
                      <path
                        d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"
                      />
                    </svg>
                    Deli na FB
                  </button>
                  <button class="btn" @click="$emit('twShare')">
                    <svg
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <!-- eslint-disable-next-line max-len -->
                      <path
                        d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"
                      />
                    </svg>
                    Deli na TW
                  </button>
                  <button class="btn" @click="$emit('emailShare')">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      fill="currentColor"
                      class="send-icon"
                    >
                      <!-- eslint-disable-next-line max-len -->
                      <path
                        d="M59.24 30.3L23.78 14.18a1.87 1.87 0 0 0-2.49 2.43L27.86 32l-6.57 15.39a1.87 1.87 0 0 0 2.49 2.43L59.24 33.7a1.87 1.87 0 0 0 0-3.4zM26.61 44.43l4.51-10.56h9.61a1.87 1.87 0 1 0 0-3.73h-9.61l-4.51-10.57L54 32zM8.07 25.78a1.87 1.87 0 0 1 1.87-1.87h11.51a1.87 1.87 0 0 1 0 3.73H9.94a1.87 1.87 0 0 1-1.87-1.86zm6.84 4.36h9a1.87 1.87 0 1 1 0 3.73h-9a1.87 1.87 0 0 1 0-3.73zm-5 3.73H5.53a1.87 1.87 0 1 1 0-3.73h4.41a1.87 1.87 0 0 1 0 3.73zm10.89 4.36a1.87 1.87 0 0 1-1.8 1.86h-9a1.87 1.87 0 1 1 0-3.73h9a1.87 1.87 0 0 1 1.83 1.86z"
                      />
                    </svg>
                    Pošlji na mejl
                  </button>
                </div>
                <!--                <h4>Kopiraj povezavo:</h4>-->
                <!--                <input-->
                <!--                  :value="shareLink"-->
                <!--                  class="form-control"-->
                <!--                  spellcheck="false"-->
                <!--                  @focus="$event.target.select()"-->
                <!--                >-->
                <!--                <br>-->
                <!--                <button-->
                <!--                  class="btn"-->
                <!--                  @click="$emit('close')"-->
                <!--                >Zapri</button>-->
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
import CardPP from "../components/CardPP";
import CardNoPP from "../components/CardNoPP";

export default {
  name: "Modal",

  components: {
    CardPP,
    CardNoPP,
  },
  props: {
    shareLink: {
      type: String,
      required: true,
    },
    pp: {
      type: Boolean,
      required: true,
    },
    obcinaInfo: {
      type: Object,
      required: true,
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
    modalConatinerClick(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
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
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 1000px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #f2cc59;
  border-radius: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-body {
  margin: 20px 0;
}

.shares {
  max-width: 100%;
  top: 40%;
  width: 100%;
  text-align: center;
  transition: all 0.3s;

  .social-buttons {
    text-align: center;
    margin-top: 2rem;

    .btn,
    .btn:focus {
      font-size: 1rem;
      margin-bottom: 2rem;
      margin-left: 1rem;
      margin-right: 1rem;
      background-color: #5f235b;
      color: #f2cc59;

      &:not(.disabled):not([disabled]):hover {
        background-color: #864b82;
        color: #f2cc59;
      }

      &:active {
        transform: translate(4px, 4px);
        box-shadow: 2px 2px #5f235b;
      }

      svg {
        width: 1.25rem;
        margin-top: -1rem;
        margin-bottom: -0.8rem;
        margin-right: 0.25rem;

        &.send-icon {
          width: 1.75rem;
        }
      }
    }
  }

  .form-control {
    border-radius: 0;
    border: 6px solid #5f235b;
    background: #f2cc59;
    font-size: 1.25rem;
    font-weight: 700;
    height: auto;
    color: #5f235b;
    text-align: center;

    &::placeholder {
      color: rgba(#5f235b, 0.75);
    }

    &:focus {
      outline: 0;
      box-shadow: none;
      background-color: #fcf5de;
    }
  }

  .btn,
  .btn:focus {
    background-color: #5f235b;
    color: #f2cc59;
    box-shadow: 6px 6px rgba(#5f235b, 0.75);
    font-size: 1.25rem;

    &:not(.disabled):not([disabled]):hover {
      background-color: #864b82;
      color: #f2cc59;
    }

    &:active {
      transform: translate(4px, 4px);
      box-shadow: 2px 2px #5f235b;
    }
  }
}

.hide-mobile {
  @media (max-width: 575px) {
    display: none;
  }
}
</style>
