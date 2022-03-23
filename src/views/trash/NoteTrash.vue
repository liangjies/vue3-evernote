<template>
<trash-side></trash-side>
</template>

<script>
import TrashSide from "@/views/trash/TrashSide.vue";
import NoteEditor from "@/views/note/NoteEditor.vue";
export default {
  name: "NoteTrash",
  components: { TrashSide,NoteEditor },
};
</script>

<style>
</style>