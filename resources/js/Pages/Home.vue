<template>
  <div>
    <Link href="/login">Login</Link>
    <h1>Teste de InertiaJS, {{ testando }}</h1>
  </div>
</template>

<script>
import { Link } from '@inertiajs/vue3'
export default {
  props: {
    testando: String,
  },
  components: {
    Link
  }
}
</script>
