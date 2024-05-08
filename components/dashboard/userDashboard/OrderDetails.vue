<script setup>
import { ref } from "vue";

const referralLink = ref("https://example.com/referral?code=yourReferralCode");
const inviteMessage = ref("");

const sendInvitation = () => {
  console.log("Invitation sent:", inviteMessage.value);
};
</script>
<template>
  <div class="container mx-auto px-4 sm:px-8">
    <div class="py-8">
      <div>
        <h2
          class="text-2xl font-semibold leading-tight border-b pb-2 border-orange-400"
        >
          Order Details
        </h2>
      </div>
      <div class="max-w-md">
        <p class="mb-4">
          Invite your friends to join Indian Superstore and earn rewards!
        </p>
        <div class="mb-4">
          <label for="referral-link" class="block text-sm font-medium"
            >Your Referral Link:</label
          >
          <input
            type="text"
            id="referral-link"
            readonly
            :value="referralLink"
            class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black px-2 py-1"
          />
        </div>
        <div>
          <h3 class="text-lg font-medium mb-2">Invite Friends</h3>
          <textarea
            v-model="inviteMessage"
            rows="4"
            class="resize-none border-gray-300 rounded-md w-full px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"
          ></textarea>
        </div>
        <div class="mt-4">
          <button
            @click="sendInvitation"
            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send Invitation
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
