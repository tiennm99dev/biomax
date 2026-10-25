<script module>
  export const title = 'Lưới thức ăn';
</script>

<script>
  import FoodWeb from './food-web.svelte';
  import { RICE_FIELD } from './food-web.js';
</script>

<FoodWeb web={RICE_FIELD} />
<FoodWeb
  web={{
    species: [
      { id: 'tao', name: 'Tảo', role: 'producer' },
      { id: 'giap-xac', name: 'Giáp xác', role: 'consumer' },
      { id: 'ca-nho', name: 'Cá nhỏ', role: 'consumer' },
      { id: 'ca-lon', name: 'Cá lớn', role: 'consumer' },
    ],
    links: [
      ['tao', 'giap-xac'],
      ['giap-xac', 'ca-nho'],
      ['ca-nho', 'ca-lon'],
    ],
  }}
  removable={false}
  label="Một chuỗi thức ăn ở ao"
/>
