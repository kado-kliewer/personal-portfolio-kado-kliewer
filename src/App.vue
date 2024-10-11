<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <header class="bg-gray-800 text-white p-4">
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Kado Kliewer</h1>
        <ul class="flex space-x-4">
          <li><a href="#" class="hover:text-blue-400">Home</a></li>
          <li><a href="#" class="hover:text-blue-400">About</a></li>
          <li><a href="#" class="hover:text-blue-400">Portfolio</a></li>
          <li><a href="#" class="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main class="flex-grow container mx-auto p-8">
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <!-- Need to take a good picture of myself -->
            <img class="h-48 w-full object-cover md:w-48" src="/src/assets/logo.png" alt="Kado Kliewer">
          </div>
          <div class="p-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h2>
            <p class="text-gray-600 mb-4">
              Hello! I'm Kado Kliewer, a passionate and ambitious web developer. I'm currently honing my skills in modern web technologies, with a focus on Vue.js and responsive design. This portfolio website showcases my journey and growth in the field of web development.
            </p>
            <p class="text-gray-600">
              As I progress through my studies, I'll be adding more interactive features and showcasing my projects here. Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
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
  name: 'App',
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
</style>