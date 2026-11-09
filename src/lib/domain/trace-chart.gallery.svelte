<script module>
  export const title = 'Đồ thị theo ngày';
</script>

<script>
  import TraceChart from './trace-chart.svelte';

  const values = [100, 86, 72, 61, 50, 42, 35, 29, 24];
</script>

<TraceChart
  {values}
  max={100}
  level={30}
  levelLabel="Mức cho phép"
  unit="% còn trong nước"
  label="Chất ô nhiễm còn trong nước giảm từ 100 xuống 24 phần trăm sau 8 ngày, mức cho phép là 30 phần trăm."
/>
