<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
body{
    text-align: center;
}
nav{
    text-align: center;
}
nav a{
    margin: 0 1px;
    padding: 5px 15px;
    font-weight: bold;
    color: blue;
    text-decoration: none;
    text-transform: uppercase;
    font-family: sans-serif;
    letter-spacing: 2px;
    border: 1px solid blue;
}
nav a.router-link-exact-active{
    background: blue;
    color: white;
}
</style>
