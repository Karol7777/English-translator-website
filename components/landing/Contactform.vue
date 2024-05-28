<script setup>
import { onMounted, computed } from 'vue'
import { useSelectedLanguage } from '~/composables/useState.js'

const selectedLanguage = useSelectedLanguage()

const translations = computed(() => {
  const language = selectedLanguage.value
  return language === 'pl' ? {
    full_name_placeholder: "Imię i nazwisko",
    full_name_feedback: "Proszę podać pełne imię i nazwisko.",
    email_placeholder: "Adres e-mail",
    email_feedback: "Proszę podać adres e-mail.",
    email_invalid_feedback: "Proszę podać prawidłowy adres e-mail.",
    message_placeholder: "Twoja wiadomość",
    message_feedback: "Proszę podać treść wiadomości.",
    send_message: "Wyślij wiadomość",
    sending: "Wysyłanie...",
    something_went_wrong: "Coś poszło nie tak!"
  } : {
    full_name_placeholder: "Full Name",
    full_name_feedback: "Please provide your full name.",
    email_placeholder: "Email Address",
    email_feedback: "Please provide your email address.",
    email_invalid_feedback: "Please provide a valid email address.",
    message_placeholder: "Your Message",
    message_feedback: "Please enter your message.",
    send_message: "Send Message",
    sending: "Sending...",
    something_went_wrong: "Something went wrong!"
  }
})

onMounted(() => {
  const form = document.getElementById("form")
  const result = document.getElementById("result")

  form.addEventListener("submit", function (e) {
    e.preventDefault()
    form.classList.add("was-validated")
    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid")[0].focus()
      return
    }
    const formData = new FormData(form)
    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    result.innerHTML = translations.value.sending

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
        .then(async (response) => {
          let json = await response.json()
          if (response.status == 200) {
            result.classList.add("text-green-500")
            result.innerHTML = json.message
          } else {
            console.log(response)
            result.classList.add("text-red-500")
            result.innerHTML = json.message
          }
        })
        .catch((error) => {
          console.log(error)
          result.innerHTML = translations.value.something_went_wrong
        })
        .then(function () {
          form.reset()
          form.classList.remove("was-validated")
          setTimeout(() => {
            result.style.display = "none"
          }, 5000)
        })
  })
})
</script>

<template>
  <form
      action="https://api.web3forms.com/submit"
      method="POST"
      id="form"
      class="needs-validation"
      novalidate
  >
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE"/>
    <input
        type="checkbox"
        class="hidden"
        style="display: none"
        name="botcheck"
    />
    <div class="mb-5">
      <input
          type="text"
          :placeholder="translations.full_name_placeholder"
          required
          class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
          name="name"
      />
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        {{ translations.full_name_feedback }}
      </div>
    </div>
    <div class="mb-5">
      <label for="email_address" class="sr-only">{{ translations.email_placeholder }}</label>
      <input
          id="email_address"
          type="email"
          :placeholder="translations.email_placeholder"
          name="email"
          required
          class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
      />
      <div class="empty-feedback text-red-400 text-sm mt-1">
        {{ translations.email_feedback }}
      </div>
      <div class="invalid-feedback text-red-400 text-sm mt-1">
        {{ translations.email_invalid_feedback }}
      </div>
    </div>
    <div class="mb-3">
      <textarea
          name="message"
          required
          :placeholder="translations.message_placeholder"
          class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
      ></textarea>
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        {{ translations.message_feedback }}
      </div>
    </div>
    <LandingButton type="submit" size="lg" block>{{ translations.send_message }}</LandingButton>
    <div id="result" class="mt-3 text-center"></div>
  </form>
</template>

<style>
.invalid-feedback,
.empty-feedback {
  display: none;
}

.was-validated :placeholder-shown:invalid ~ .empty-feedback {
  display: block;
}

.was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
  display: block;
}

.is-invalid,
.was-validated :invalid {
  border-color: #dc3545;
}
</style>
