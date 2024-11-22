<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <header class="bg-gray-800 text-white p-4">
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Kado Kliewer</h1>
        <ul class="flex space-x-4">
          <li><router-link to="/" class="hover:text-blue-400">Home</router-link></li>
          <li><router-link to="/portfolio" class="hover:text-blue-400">Portfolio</router-link></li>
          <li><a href="#" class="hover:text-blue-400">About</a></li>
          <li><a href="#" class="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main class="flex-grow container mx-auto p-8">
      <router-view></router-view>
    </main>

    <footer class="bg-gray-800 text-white p-4">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 Kado Kliewer. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
</style>