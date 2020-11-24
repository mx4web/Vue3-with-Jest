<template lang="">
  <div class="user">
    <h1>Current user ID: {{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: "User",
  props: ["user", "id"]
};
</script>
