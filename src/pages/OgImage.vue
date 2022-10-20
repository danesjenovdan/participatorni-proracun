<template>
  <div id="og-image-border">
    <div id="og-image">
      <template v-if="obcinaInfo['PRVI DROPDOWN'] === '1'">
        <card-p-p :info="obcinaInfo" />
      </template>
      <template v-else-if="obcinaInfo['DRUGI DROPDOWN'] === '1'">
        <card-no-p-p :info="obcinaInfo" />
      </template>
    </div>
  </div>
</template>

<script>
import Papa from 'papaparse';
import { transliterate as tr } from 'transliteration';
import CardPP from '@/components/CardPP.vue';
import CardNoPP from '@/components/CardNoPP.vue';
// eslint-disable-next-line
import csvData from '!raw-loader!../assets/seznam_kandidatov.csv';

export default {
  components: {
    CardPP,
    CardNoPP,
  },
  data() {
    const query = tr(this.$route.params.query.toLowerCase());

    const data = Papa.parse(csvData, { header: true, skipEmptyLines: true });
    if (data.errors.length) {
      // eslint-disable-next-line no-console
      console.error('CSV Parse Errors:', data.errors);
    }
    const allData = data.data.map(row => ({
      ...row,
      SIMPLE_OBCINA: row['OBČINA'].replace(/(?:MESTNA )?OBČINA /gi, ''),
    }));

    const obcinaInfo = allData.filter(x => tr(x.SIMPLE_OBCINA.toLowerCase()) === query)[0];

    return {
      obcinaInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
#og-image-border {
  --width: 1000px;
  background-color: #f2cc59;
  width: var(--width);
  height: calc(var(--width) / 1.9);
  display: flex;
  align-items: center;
  justify-content: center;
}

#og-image {
  width: 904px;
  height: 424px;
  text-align: center;

  & > * {
    flex: 1;
  }
}
</style>
