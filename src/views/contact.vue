<script setup>
import { ref, computed } from 'vue'
import photo from '/src/assets/Rwanda.jfif'

const language = ref('en')

const texts = {
  en: {
    title: 'CONTACT US',
    subtitle: 'We would love to hear from you.',
    name: 'Your Name',
    email: 'Your Email',
    message: 'Your Message',
    button: 'SEND MESSAGE'
  },
  rw: {
    title: 'TUVUGISHE',
    subtitle: 'Twishimiye kwakira ubutumwa bwawe.',
    name: 'Amazina Yawe',
    email: 'Imeyili Yawe',
    message: 'Andika Ubutumwa',
    button: 'OHEREZA UBUTUMWA'
  },
  fr: {
    title: 'CONTACTEZ-NOUS',
    subtitle: 'Nous serions ravis de vous entendre.',
    name: 'Votre Nom',
    email: 'Votre Email',
    message: 'Votre Message',
    button: 'ENVOYER'
  },
  es: {
    title: 'CONTÁCTANOS',
    subtitle: 'Nos encantaría saber de ti.',
    name: 'Tu Nombre',
    email: 'Tu Correo',
    message: 'Tu Mensaje',
    button: 'ENVIAR'
  },
  de: {
    title: 'KONTAKTIEREN SIE UNS',
    subtitle: 'Wir freuen uns auf Ihre Nachricht.',
    name: 'Ihr Name',
    email: 'Ihre E-Mail',
    message: 'Ihre Nachricht',
    button: 'SENDEN'
  },
  zh: {
    title: '联系我们',
    subtitle: '我们很乐意听到您的消息。',
    name: '您的姓名',
    email: '您的邮箱',
    message: '您的留言',
    button: '发送'
  },
  ja: {
    title: 'お問い合わせ',
    subtitle: 'ご連絡をお待ちしております。',
    name: 'お名前',
    email: 'メールアドレス',
    message: 'メッセージ',
    button: '送信'
  },
  ko: {
    title: '문의하기',
    subtitle: '여러분의 의견을 기다립니다.',
    name: '이름',
    email: '이메일',
    message: '메시지',
    button: '보내기'
  },
  hi: {
    title: 'संपर्क करें',
    subtitle: 'हम आपकी बात सुनना चाहते हैं।',
    name: 'आपका नाम',
    email: 'आपका ईमेल',
    message: 'आपका संदेश',
    button: 'भेजें'
  },
  th: {
    title: 'ติดต่อเรา',
    subtitle: 'เรายินดีรับฟังความคิดเห็นของคุณ',
    name: 'ชื่อของคุณ',
    email: 'อีเมลของคุณ',
    message: 'ข้อความ',
    button: 'ส่งข้อความ'
  }
}

const t = computed(() => texts[language.value])
</script>

<template>
<section class="relative min-h-screen">
  <img :src="photo" class="absolute inset-0 w-full h-full object-cover" alt="Rwanda">

  <div class="absolute inset-0 bg-black/50">

    <!-- Language Selector -->
    <div class="flex justify-end p-6">
      <select
        v-model="language"
        class="bg-white/10 backdrop-blur-4xl border border-white/20 text-green-900 px-4 py-2 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-green-700 "
      >
        <option value="en">English</option>
        <option value="rw">Kinyarwanda</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
        <option value="zh">Chinese</option>
        <option value="ja">Japanese</option>
        <option value="ko">Korean</option>
        <option value="hi">Hindi</option>
        <option value="th">Thai</option>
      </select>
    </div>

    <div class="flex flex-col items-center justify-center px-4 pt-10">

      <h1 class="text-5xl font-bold text-white text-center">
        {{ t.title }}
      </h1><br>

      <p class="text-xl text-white text-center">
        {{ t.subtitle }}
      </p><br><br>

      <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 w-full max-w-2xl">

        <input
          type="text"
          :placeholder="t.name"
          class="w-full p-3 rounded-lg mb-4 bg-white/20 text-white placeholder-gray-200 outline-none"
        >

        <input
          type="email"
          :placeholder="t.email"
          class="w-full p-3 rounded-lg mb-4 bg-white/20 text-white placeholder-gray-200 outline-none"
        >

        <textarea
          rows="5"
          :placeholder="t.message"
          class="w-full p-3 rounded-lg mb-4 bg-white/20 text-white placeholder-gray-200 outline-none"
        ></textarea>

        <button class="bg-green-700 hover:bg-green-900 px-6 py-3 rounded-lg text-white w-full">
          {{ t.button }}
        </button>

      </div>

    </div>
  </div>
</section>
</template>