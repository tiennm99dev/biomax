<script>
  import PopulationChart from '#lib/domain/population-chart.svelte';
</script>

<PopulationChart
  kind="growth"
  model="both"
  n0={20}
  r={0.5}
  k={500}
  until={20}
  unit="năm"
  label="Tăng trưởng quần thể theo tiềm năng sinh học (chữ J) và trong môi trường có giới hạn (chữ S)"
/>
