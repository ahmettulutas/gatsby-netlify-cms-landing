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
    message: 'Lütfen telefon numaranızı eksiksiz giriniz.',
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