<script module>
  export const title = 'Phiên mã và dịch mã';
</script>

<script>
  import DnaCodonTranslator from './dna-codon-translator.svelte';

  let sequence = $state('TACATGGAGAAATGGTAAGC');
</script>

<DnaCodonTranslator bind:sequence table />
<p class="font-mono text-sm break-all text-slate-600">sequence = {sequence}</p>
<DnaCodonTranslator
  sequence="ATGTTTGGCTGA"
  editable={false}
  template={false}
  label="Một gene ngắn, chỉ xem"
/>
