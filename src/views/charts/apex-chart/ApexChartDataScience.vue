<script lang="ts" setup>
import { getLineChartSimpleConfig } from '@core/libs/apex-chart/apexCharConfig';
import { useTheme } from 'vuetify';

const vuetifyTheme = useTheme()

const chartConfig = computed(() => getLineChartSimpleConfig(vuetifyTheme.current.value))

const series = [
  {
    name: "High - 2013",
    data: [28, 29, 33, 36, 32, 32, 33]
  },
  {
    name: "Low - 2013",
    data: [12, 11, 14, 18, 17, 13, 13]
  }
]

const colors = ['#77B6EA', '#545454']
const dataLabels = { enabled: true };
const stroke = { curve: 'smooth' };
const title = {
  text: 'Average High & Low Temperature',
  align: 'left'
};
const grid = {
  borderColor: '#e7e7e7',
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
};
const markers = { size: 1 };
const xaxis = {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  title: {
    text: 'Month'
  }
};
const yaxis = {
  title: {
    text: 'Temperature'
  },
  min: 5,
  max: 40
};
const legend = {
  position: 'top',
  horizontalAlign: 'right',
  floating: true,
  offsetY: -25,
  offsetX: -5
};
// :colors="colors"
// :dataLabels="dataLabels"
// :stroke="stroke"
// :title="title"
// :grid="grid"
// :markers="markers"
// :xaxis="xaxis"
// :yaxis="yaxis"
// :legend="legend"
</script>

<template>
  <VueApexCharts
    type="line"
    height="400"
    :options="chartConfig"
    :series="series"
    :colors="colors"
  />
</template>
