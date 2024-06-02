<script setup>
import * as demoCode from '../../../views/demos/forms/tables/data-table/demoCodeDataTable';
</script>

<template>
  <VRow>
    <VCol cols="12">
      <!-- 👉 Basic -->
      <AppCardCode title="Basic" :code="demoCode.basic" no-padding>
        <DemoDataTableBasic />
      </AppCardCode>
    </VCol>
    <!-- 👉 External Pagination  -->
    <VCol cols="12">
      <AppCardCode title="External Pagination" :code="demoCode.externalPagination" no-padding>
        <DemoDataTableExternalPagination />
      </AppCardCode>
    </VCol>

    <!-- 👉 Kitchen Sink  -->
    <VCol cols="12">
      <AppCardCode title="Kitchen Sink" :code="demoCode.kitchenSink" no-padding>
        <DemoDataTableKitchenSink />
      </AppCardCode>
    </VCol>
  </VRow>
</template>
