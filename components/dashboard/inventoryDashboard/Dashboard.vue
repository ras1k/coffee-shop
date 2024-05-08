<template>
  <div class="container mx-auto mt-8">
    <h1 class="text-3xl font-semibold mb-4">Inventory Dashboard</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <!-- Box 1: Low Stock Items -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Low Stock Items</h2>
        <ul>
          <li v-for="(item, index) in lowStockItems" :key="index" class="mb-2">
            {{ item.name }} -
            <span class="text-red-500">{{ item.quantity }}</span> remaining
          </li>
        </ul>
      </div>

      <!-- Box 2: Top Selling Items -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Top Selling Items</h2>
        <ul>
          <li
            v-for="(item, index) in topSellingItems"
            :key="index"
            class="mb-2"
          >
            {{ item.name }} - {{ item.sales }} sold
          </li>
        </ul>
      </div>

      <!-- Box 3: Recent Orders -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Recent Orders</h2>
        <ul>
          <li v-for="(order, index) in recentOrders" :key="index" class="mb-2">
            Order #{{ order.id }} - {{ order.date }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Sample data
const inventoryItems = ref([
  { id: 1, name: "Item 1", quantity: 10 },
  { id: 2, name: "Item 2", quantity: 20 },
  { id: 3, name: "Item 3", quantity: 5 }, // Low stock item
  { id: 4, name: "Item 4", quantity: 25 },
  { id: 5, name: "Item 5", quantity: 30 },
]);

const orders = ref([
  { id: 1, date: "2024-03-18" },
  { id: 2, date: "2024-03-17" },
  { id: 3, date: "2024-03-16" },
  { id: 4, date: "2024-03-15" },
]);

// Computed properties
const lowStockItems = computed(() => {
  return inventoryItems.value.filter((item) => item.quantity < 10);
});

const topSellingItems = computed(() => {
  // In real-world scenario, this would be calculated based on sales data
  return inventoryItems.value.slice(0, 3);
});

const recentOrders = computed(() => {
  return orders.value.slice(0, 3);
});
</script>

<style>
/* Add your custom styles here or use Tailwind utility classes */
</style>
