<script module>
  export const title = 'Đồ thị quần thể';
</script>

<script>
  import PopulationChart from './population-chart.svelte';

  let r = $state(0.5);
  let groups = $state({ pre: 45, reproductive: 40, post: 15 });
</script>

<PopulationChart bind:r />
<p class="text-sm text-slate-600 tabular-nums">r = {r}</p>
<PopulationChart
  model="logistic"
  n0={50}
  r={0.9}
  k={1200}
  until={12}
  controls={false}
  unit="giờ"
  label="Vi khuẩn trong bình nuôi cấy"
/>
<PopulationChart kind="pyramid" bind:groups />
<p class="text-sm text-slate-600 tabular-nums">
  {groups.pre} · {groups.reproductive} · {groups.post}
</p>
