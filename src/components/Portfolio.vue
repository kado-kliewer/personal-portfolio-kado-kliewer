<template>
    <div class="space-y-6">
      <h2 class="text-3xl font-bold text-gray-800">My GitHub Repositories</h2>
      
      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800"></div>
      </div>
  
      <!-- Error State -->
      <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <p>{{ error }}</p>
      </div>
  
      <!-- Repositories List -->
      <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="repo in repositories" 
             :key="repo.id" 
             class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            <a :href="repo.html_url" 
               target="_blank" 
               class="hover:text-blue-600 transition-colors">
              {{ repo.name }}
            </a>
          </h3>
          <p v-if="repo.description" class="text-gray-600 mb-4">{{ repo.description }}</p>
          <div class="flex items-center space-x-4 text-sm">
            <span v-if="repo.language" 
                  class="bg-gray-100 px-2 py-1 rounded">
              {{ repo.language }}
            </span>
            <span class="text-gray-500">
              Updated: {{ new Date(repo.updated_at).toLocaleDateString() }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PortfolioView',
    data() {
      return {
        repositories: [],
        loading: true,
        error: null
      }
    },
    async created() {
      try {
        const response = await fetch('https://api.github.com/users/kado-kliewer/repos')
        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }
        this.repositories = await response.json()
      } catch (err) {
        this.error = 'Failed to load repositories. Please try again later.'
        console.error('Error:', err)
      } finally {
        this.loading = false
      }
    }
  }
  </script>