<template>
  <div class="row footer-row">
    <div class="col-md-12">
      <h3>POVEJ NAPREJ!</h3>
    </div>
    <div class="col-md-12">
      <div class="social-buttons">
        <button
          class="btn"
          @click="onShareClick($event, 'fb')"
        >
          <svg
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <!-- eslint-disable-next-line max-len -->
            <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z" />
          </svg>
          Deli na FB
        </button>
        <button
          class="btn"
          @click="onShareClick($event, 'tw')"
        >
          <svg
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <!-- eslint-disable-next-line max-len -->
            <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" />
          </svg>
          Deli na TW
        </button>
        <button
          class="btn"
          @click="onShareClick($event, 'mail')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="currentColor"
            class="send-icon"
          >
            <!-- eslint-disable-next-line max-len -->
            <path d="M59.24 30.3L23.78 14.18a1.87 1.87 0 0 0-2.49 2.43L27.86 32l-6.57 15.39a1.87 1.87 0 0 0 2.49 2.43L59.24 33.7a1.87 1.87 0 0 0 0-3.4zM26.61 44.43l4.51-10.56h9.61a1.87 1.87 0 1 0 0-3.73h-9.61l-4.51-10.57L54 32zM8.07 25.78a1.87 1.87 0 0 1 1.87-1.87h11.51a1.87 1.87 0 0 1 0 3.73H9.94a1.87 1.87 0 0 1-1.87-1.86zm6.84 4.36h9a1.87 1.87 0 1 1 0 3.73h-9a1.87 1.87 0 0 1 0-3.73zm-5 3.73H5.53a1.87 1.87 0 1 1 0-3.73h4.41a1.87 1.87 0 0 1 0 3.73zm10.89 4.36a1.87 1.87 0 0 1-1.8 1.86h-9a1.87 1.87 0 1 1 0-3.73h9a1.87 1.87 0 0 1 1.83 1.86z" />
          </svg>
          Pošlji na mejl
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { openSocialShareLink } from '../helpers/social';

const domain = 'https://danesjenovdan.si';
const baseUrl = process.env.BASE_URL;

export default {
  name: 'SiteFooter',
  created() {
    if (this.shareLink) {
      axios
        .post('https://djnd.si/yomamasofat/', `fatmama=${encodeURIComponent(this.shareLink)}`)
        .then((res) => {
          this.shareLink = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    }
  },
  methods: {
    onShareClick(event, type) {
      const shareLink = 'https://danesjenovdan.si/participativni-proracun/';
      const shareTitle = 'Kje je participativni proračun?';
      const shareText = 'Preveri, katere občine ga že izvajajo, predvsem pa, kateri župani ' +
                        'še niso izpolnili svoje obljube.';
      const shareHashtag = '';

      openSocialShareLink(type, shareTitle, shareText, shareLink, shareHashtag);
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-row {
  color: #f2cc59;
  padding-top: 2rem;
  padding-bottom: 2rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 900;
    text-align: center;
  }

  .social-buttons {
    text-align: center;
    margin-top: 1rem;

    .btn {
      font-size: 1rem;
      margin-bottom: 2rem;
      margin-left: 1rem;
      margin-right: 1rem;

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

  .credits {
    text-align: center;

    .credit {
      display: inline-block;
      padding-bottom: 0.5rem;
      border-bottom: 4px solid #f2cc59;
      width: 300px;
    }

    a {
      color: #f2cc59;
      font-weight: 500;
      text-decoration: none;

      &:hover,
      &:active,
      &:visited {
        text-decoration: underline;
      }
    }

    .disclaimer {
      margin-top: 1rem;
      font-size: 0.75rem;
      padding: 0 2rem;
    }
  }
}
</style>
