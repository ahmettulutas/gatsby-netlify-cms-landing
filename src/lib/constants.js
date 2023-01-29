export const contactInputs = [
  {
    pattern: '^[-_ a-zA-Z0-9ğüşöçİĞÜŞÖÇ]{4,100}$',
    label: 'Ad ve Soyad',
    type: 'text',
    key: 1,
    name: 'name_surname',
    message: 'Lütfen adınızı ve soyadınızı eksiksiz giriniz.',
    placeholder: 'Adınız ve soyadınızı buraya yazınız.',
    required: true,
    icon: 'fa fa-user icon'
  },
  {
    pattern: '^\\+90\\s\\d{3}\\s\\d{3}\\s\\d{2}\\s\\d{2}$',
    label: 'Telefon Numaranız',
    type: 'text',
    key: 2,
    name: 'phone_number',
    message: 'Lütfen telefon numaranızı eksiksiz giriniz.',
    placeholder: 'Örn. 05309892929',
    required: true,
    maxLength: 17,
    icon: 'fa fa-phone icon'
  },
  {
    pattern: '^.{20,500}$', // still need pattern to disable & enable submit button.
    label: 'Mesajınız',
    type: 'textarea',
    key: 3,
    name: 'message',
    message: 'Mesajınız en az 15 karakter olmalıdır.',
    placeholder: 'Mesajınızı buraya yazınız.',
    required: true,
    minLength: 20 // you can't define a pattern for textarea, instead you can control the length of it's value.

  }
];

export const animations = {
  slideLeft: 'translateX(20%)',
  slideRight: 'translateX(-20%)',
  slideDown: 'translateY(-20%)',
  slideUp: 'translateY(20%)'
};