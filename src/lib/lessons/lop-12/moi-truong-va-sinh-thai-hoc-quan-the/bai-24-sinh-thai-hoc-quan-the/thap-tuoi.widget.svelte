<script>
  import PopulationChart from '#lib/domain/population-chart.svelte';
</script>

<PopulationChart
  kind="pyramid"
  groups={{ pre: 45, reproductive: 40, post: 15 }}
  label="Tháp tuổi của quần thể theo ba nhóm tuổi sinh thái"
/>
