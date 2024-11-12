export const contactLinks = [
  {
    href: 'https://goo.gl/maps/R3MaJ5Qt1YP95osG9',
    id: 'location',
    icon: 'location',
    label: 'Meşrutiyet, Rumeli Cd. No:6, 34983 Şişli/İstanbul'
  },
  {
    href: 'https://www.instagram.com/psikologmeltemulutas/',
    id: 'instagram',
    icon: 'instagram',
    label: 'İnstagram'
  },

  {
    href: 'https://api.whatsapp.com/send/?phone=05300954085',
    id: 'whatsapp',
    icon: 'whatsapp',
    label: 'Whatsapp'
  },
  {
    href: 'mailto:psikolog.meltem.ulutas@gmail.com',
    id: 'mail',
    icon: 'mail',
    label: 'Mail'
  }
];
export const contactInputs = [
  {
    pattern: '^[-_ a-zA-Z0-9ğüşöçİĞÜŞÖÇ]{4,100}$',
    label: 'Ad ve Soyad',
    type: 'text',
    key: 1,
    name: 'name_surname',
    message: 'Lütfen adınızı ve soyadınızı eksiksiz giriniz.',
    placeholder: 'Adınız ve soyadınız',
    required: true
  },
  {
    pattern: '^(?:\\+|00)90\\d{10}$|^0\\d{10}$',
    label: 'Telefon Numaranız',
    type: 'text',
    key: 2,
    name: 'phone_number',
    message: 'Lütfen 11 haneli telefon numaranızı eksiksiz giriniz.',
    placeholder: '05....',
    required: true,
    maxLength: 13,
    inputMode: 'numeric'
  },
  {
    label: 'Mesajınız',
    type: 'textarea',
    key: 3,
    name: 'message',
    message: 'Mesajınız en az 15 karakter olmalıdır.',
    placeholder: 'Mesajınızı buraya yazınız.',
    required: false
  }
];

export const animations = {
  slideLeft: 'translateX(20%)',
  slideRight: 'translateX(-20%)',
  slideDown: 'translateY(-20%)',
  slideUp: 'translateY(20%)'
};
