import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import { useToast } from "vue-toastification";

const options = {
  // You can set your default options here
  position: "top-center",
  timeout: 3000,
  keepOnHover: true,
  hideProgressBar: true,
  icon: false,
  closeButton: false,
};

const $toast = useToast();

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(Toast, options);
  nuxtApp.provide("toast", (name, value) => {
    if (name === "error") {
      $toast.error(value.message, { toastClassName: value.className });
    } else if (name === "success") {
      $toast.success(value.message, {
        toastClassName: value.className,
      });
    } else if (name === "clear") {
      $toast.clear();
    }
  });
});
