<template>
  <div class="grid lg:grid-cols-2 grid-cols-1 mt-20 bg-[url('~/assets/img/dots.png')]">
    <div ref="additionalElement" class="animate-element additional-animation flex flex-col lg:order-1 text-white py-10 section-container-left px-4">
      <p class="section-heading text-3xl py-5 font-bold">{{ translations.services_and_offer }}</p>
      <p class="section-text text-xs py-5 opacity-70">{{ translations.intro }}</p>
    </div>
    <div ref="demo" class="demo flex flex-col lg:order-2 justify-start mt-11 text-white section-container-right px-4 pb-10">
      <div class="flex justify-center items-center">
        <div class="flex flex-col max-w-[420px]">
          <p class="section-heading text-xl py-5 font-bold">{{ translations.certified_translations }}</p>
          <p class="section-text text-xs py-5 opacity-70">{{ translations.certified_description }}</p>
        </div>
        <div class="arrow-container">
          <a href="#" class="arrow-link">
            <img
                class="arrow-offer"
                src="~/assets/img/Vector.png"
                alt="Arrow"
                loading="eager"
                format="avif"
            />
          </a>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div class="flex flex-col max-w-[420px]">
          <p class="section-heading text-xl py-5 font-bold">{{ translations.regular_translations }}</p>
          <p class="section-text text-xs py-5 opacity-70">{{ translations.regular_description }}</p>
        </div>
        <div class="arrow-container">
          <a href="#" class="arrow-link">
            <img
                class="arrow-offer"
                src="~/assets/img/Vector.png"
                alt="Arrow"
                loading="eager"
                format="avif"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSelectedLanguage } from '~/composables/useState.js'
import { computed } from 'vue'

import { onMounted, ref } from 'vue';
const demo = ref(null);

const additionalElement = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-delay');

          }
          if (entry.target.classList.contains('additional-animation')) {
            entry.target.classList.add('additional-animate-delay');
          }
        });
      },
      {
        threshold: 0.5,
      }
  );

  if (demo.value) {
    observer.observe(demo.value);
  }

  if (additionalElement.value) {
    observer.observe(additionalElement.value);
  }
});

const selectedLanguage = useSelectedLanguage()

const translations = computed(() => {
  const language = selectedLanguage.value
  return language === 'pl' ? {
    services_and_offer: 'Usługi i Oferta',
    intro: 'Jestem tłumaczem przysięgłym języka angielskiego. Kompetencje językowe zdobyłem w szkole średniej Richland High School w stanie Teksas w USA, a następnie na wydziale anglistyki Uniwersytetu Warszawskiego oraz w Wyższej Szkole Lingwistycznej w Częstochowie. Uprawnienia tłumacza przysięgłego uzyskałem w 2002 roku. Od tego czasu wykonuję tłumaczenia zwykłe i uwierzytelnione dla klientów indywidualnych oraz firm z Polski i zagranicy.',
    certified_translations: 'Tłumaczenia uwierzytelnione',
    certified_description: 'Dokumenty sporządzone w języku obcym lub polskim przeznaczone dla polskich lub zagranicznych urzędów i sądów wymagają tłumaczenia na język polski lub obcy dla uzyskania mocy prawnej. Ich tłumaczenia może dokonać wyłącznie tłumacz przysięgły posiadający stosowne uprawnienia i pieczęć zawierającą w otoku jego imię i nazwisko, wskazanie języka, w zakresie którego posiada uprawnienia oraz numer na liście tłumaczy przysięgłych Ministerstwa Sprawiedliwości.',
    regular_translations: 'Tłumaczenia zwykłe',
    regular_description: 'Tłumaczenia zwykłe to tłumaczenia tekstów z różnych dziedzin niewymagające uwierzytelnienia.'
  } : {
    services_and_offer: 'Services and Offer',
    intro: 'I am a sworn translator of the English language. I acquired my language skills in high school at Richland High School in Texas, USA, and then at the Faculty of English Studies at the University of Warsaw and the Higher School of Linguistics in Częstochowa. I obtained my sworn translator qualifications in 2002. Since then, I have been providing regular and certified translations for individual clients and companies from Poland and abroad.',
    certified_translations: 'Certified Translations',
    certified_description: 'Documents drawn up in a foreign language or Polish intended for Polish or foreign offices and courts require translation into Polish or a foreign language to obtain legal force. Their translation can only be done by a sworn translator with the appropriate qualifications and a seal containing his/her name and surname, indication of the language in which he/she is qualified, and the number on the list of sworn translators of the Ministry of Justice.',
    regular_translations: 'Regular Translations',
    regular_description: 'Regular translations are translations of texts from various fields that do not require certification.'
  }
})
</script>

<style>
.additional-animation {
  /* Inne style dla dodatkowego elementu */
}

.additional-animation.animate-delay {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: additional-animate-delay;
}

@keyframes additional-animate-delay {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-delay {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: animate-delay;
}

@keyframes animate-delay {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.demo {
  display: inline-block;
  opacity: 0;
  transform: translateY(0);
}
.orange {
  color: #FF4900;
}

.section-name {
  position: relative;
}

.arrow-container {
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.arrow-offer {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.3s ease;
  border-radius: 50%;
  border: 1px solid #fff;
  padding: 12px;
  overflow: visible;
}

.arrow-offer:hover {
  background-color: #FF4900;
  border: 1px solid #FF4900;
}

.section-name::after {
  content: "";
  display: block;
  width: 60px;
  height: 2px;
  background-color: #FF4900;
  margin-left: 10px;
}

.section-container-right {
  background: radial-gradient(at bottom right, rgba(255, 73, 0, 0.3), transparent 400px);
}

.section-container-left {
  background: radial-gradient(at top left, rgba(255, 73, 0, 0.3), transparent 400px);
}
</style>
