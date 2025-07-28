<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import chethanImg from '@/assets/chethankodenkiri.jpg'
</script>

<template>
  <Avatar>
    <AvatarImage :src="chethanImg" alt="Chethan Kodenkiri" />
    <AvatarFallback>CK</AvatarFallback>
  </Avatar>
</template>