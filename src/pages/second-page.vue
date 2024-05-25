<script setup lang="ts">
import ApexChartDataScience from '@/views/charts/apex-chart/ApexChartDataScience.vue'
</script>
<template>
  <div>
    <VCard title="Create Awesome 🙌">
      <VCardText>This is your second page.</VCardText>
      <VCardText>
        Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin.
        Carrot cake dragée chupa chups jujubes. Macaroon liquorice cookie
        wafer tart marzipan bonbon. Gingerbread jelly-o dragée
        chocolate.
      </VCardText>
    </VCard>
  </div>

  <VCol cols="12">
      <VCard>
        <VCardItem class="d-flex flex-wrap justify-space-between gap-4">
          <VCardTitle>Data Science</VCardTitle>

          <template #append>
            <div class="date-picker-wrapper">
              <AppDateTimePicker
                model-value="2022-06-09"
                prepend-inner-icon="tabler-calendar"
                placeholder="Select Date"
                :config="$vuetify.display.smAndDown ? { position: 'auto center' } : { position: 'auto right' }"
              />
            </div>
          </template>
        </VCardItem>

        <VCardText>
          <ApexChartDataScience />
        </VCardText>
      </VCard>
    </VCol>
</template>
<style lang="scss">
@use "@core/scss/template/libs/apex-chart.scss";

.date-picker-wrapper {
  inline-size: 10.5rem;
}

#apex-chart-wrapper {
  .v-card-item__append {
    padding-inline-start: 0;
  }
}
</style>
