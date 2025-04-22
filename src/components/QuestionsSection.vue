<template>
  <section class="questions-section">
    <div class="container">
      <div class="subtitle">
        <h2>KAJ SPLOH JE <em>PARTICIPATIVNI PRORAČUN</em>?</h2>
      </div>
      <div class="video">
        <BigVideo />
      </div>
      <div class="questions-and-answers">
        <div class="grid">
          <div class="span-11 questions">
            <div
              v-for="(question, i) in questions"
              :key="question.q"
              :class="{ question: true, selected: i === selectedIndex }"
            >
              <button @click="selectAnswer(i)">
                {{ question.q }}
              </button>
              <div class="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60 30"
                  fill="currentColor"
                >
                  <path
                    d="M53.979 13.499H0v3h53.984l-9.224 8.572 2.046 2.197L60 15.001 46.806 2.732 44.76 4.929l9.219 8.57z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="span-1"></div>
          <div class="span-11 answer">
            <!-- eslint-disable vue/no-v-html -->
            <div
              ref="answer-element"
              class="answer-text"
              v-html="questions[selectedIndex].a"
            ></div>
            <!-- eslint-enable vue/no-v-html -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import questionsYaml from "../assets/questions.yaml";
import BigVideo from "./BigVideo.vue";

const { questions } = questionsYaml;
const selectedIndex = ref(0);

function selectAnswer(i) {
  selectedIndex.value = i;
}
</script>

<style lang="scss" scoped>
section.questions-section {
  padding-block: 8rem;

  .subtitle {
    max-width: 80rem;
    margin-inline: auto;

    h2 {
      font-size: 3.25rem;
      font-weight: 700;
      text-align: center;
      color: var(--clr-dark-purple);

      em {
        font-style: normal;
        font-weight: 900;
        color: var(--clr-light-purple);
      }
    }

    p {
      max-width: 70rem;
      margin-inline: auto;
      margin-top: 1.5rem;
      text-align: center;
      font-family: var(--fnt-alt);
      font-size: 1.5rem;
    }
  }

  .video {
    max-width: 70rem;
    margin-inline: auto;
    margin-block: 4rem;
  }

  .questions-and-answers {
    .questions {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      .question {
        position: relative;
        color: var(--clr-dark-purple);

        button {
          display: block;
          width: 100%;
          min-height: 4.5rem;
          padding: 0.75rem 7rem 0.75rem 2.5rem;
          background: #fff;
          border: 3px solid var(--clr-dark-purple);
          font-size: 1.125rem;
          font-weight: 700;
          text-align: left;
          color: inherit;
        }

        .arrow {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 1.25rem;
          display: flex;
          width: 4.5rem;
          will-change: transform;
          transition: transform 0.15s ease-in-out;
          pointer-events: none;
        }

        &:hover {
          .arrow {
            transform: translateX(65%);
          }
        }

        &.selected {
          color: #000;

          button {
            background: var(--clr-accent-3);
            border-color: #000;
          }

          .arrow {
            transform: translateX(65%);
          }
        }
      }
    }

    .answer {
      font-family: var(--fnt-alt);
      font-size: 1.25rem;

      :deep(.answer-text) {
        p,
        ul,
        ol {
          margin-top: 1rem;

          &:first-child {
            margin-top: 0;
          }
        }

        a {
          font-weight: 700;
        }
      }
    }
  }
}
</style>
