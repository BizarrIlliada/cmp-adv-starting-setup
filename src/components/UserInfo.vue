<template>
  <BaseCard>
    <template v-slot:header>
      <h3>{{ fullName }}</h3>
      <BaseBadge
        :type="role"
        :caption="role.toUpperCase()"
      />
    </template>
    <p>{{ infoText }}</p>
  </BaseCard>
</template>

<script>
  export default {
    name: 'UserInfo',
    props: ['fullName', 'infoText', 'role'],
  };
</script>
