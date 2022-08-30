<template>
    <div id="events">
        <header>
            <slot name="header"></slot>
        </header>
        <slot></slot>
    </div>
</template>

<script>
export default{
    name: 'MyCard',
    props: []
}
</script>

<style scoped>
#events {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#events h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #846181;
  margin: 0 0 1rem 0;
}
header {
    background: #846181;
}
</style>