const cardList = [
     {
          src: '/img/book-of-seven',
          title: 'Seventh Book of Spellweaving',
          content: 'An ancient tome revered for its unparalleled collection of magical knowledge. Within its pages, one can find the most potent and intricate spells, detailed instructions for advanced spellcasting techniques, and secrets of the arcane arts long thought lost to time. The book is divided into seven chapters, each focusing on a different aspect of spellweaving, from elemental manipulation and illusion crafting to time alteration and soul binding. Enriched with cryptic annotations and powerful enchantments, the Seventh Book of Spellweaving is a definitive guide for any aspiring sorcerer seeking to master the highest forms of magic'
     },
     {
          src: '/img/book-of-seven',
          title: 'Seventh Book of Spellweaving',
          content: 'An ancient tome revered for its unparalleled collection of magical knowledge. Within its pages, one can find the most potent and intricate spells, detailed instructions for advanced spellcasting techniques, and secrets of the arcane arts long thought lost to time. The book is divided into seven chapters, each focusing on a different aspect of spellweaving, from elemental manipulation and illusion crafting to time alteration and soul binding. Enriched with cryptic annotations and powerful enchantments, the Seventh Book of Spellweaving is a definitive guide for any aspiring sorcerer seeking to master the highest forms of magic'
     },
     {
          src: '/img/book-of-seven',
          title: 'Seventh Book of Spellweaving',
          content: 'An ancient tome revered for its unparalleled collection of magical knowledge. Within its pages, one can find the most potent and intricate spells, detailed instructions for advanced spellcasting techniques, and secrets of the arcane arts long thought lost to time. The book is divided into seven chapters, each focusing on a different aspect of spellweaving, from elemental manipulation and illusion crafting to time alteration and soul binding. Enriched with cryptic annotations and powerful enchantments, the Seventh Book of Spellweaving is a definitive guide for any aspiring sorcerer seeking to master the highest forms of magic'
     },
     {
          src: '/img/book-of-seven',
          title: 'Seventh Book of Spellweaving',
          content: 'An ancient tome revered for its unparalleled collection of magical knowledge. Within its pages, one can find the most potent and intricate spells, detailed instructions for advanced spellcasting techniques, and secrets of the arcane arts long thought lost to time. The book is divided into seven chapters, each focusing on a different aspect of spellweaving, from elemental manipulation and illusion crafting to time alteration and soul binding. Enriched with cryptic annotations and powerful enchantments, the Seventh Book of Spellweaving is a definitive guide for any aspiring sorcerer seeking to master the highest forms of magic'
     },
     {
          src: '/img/book-of-seven',
          title: 'Seventh Book of Spellweaving',
          content: 'An ancient tome revered for its unparalleled collection of magical knowledge. Within its pages, one can find the most potent and intricate spells, detailed instructions for advanced spellcasting techniques, and secrets of the arcane arts long thought lost to time. The book is divided into seven chapters, each focusing on a different aspect of spellweaving, from elemental manipulation and illusion crafting to time alteration and soul binding. Enriched with cryptic annotations and powerful enchantments, the Seventh Book of Spellweaving is a definitive guide for any aspiring sorcerer seeking to master the highest forms of magic'
     },
     // {
     //      src: 'https://picsum.photos/seed/picsum/200/300',
     //      title: 'Card 2',
     //      content: 'This is the content for card 2'
     // },
     // {
     //      src: 'https://picsum.photos/seed/picsum/200/300',
     //      title: 'Card 3',
     //      content: 'This is the content for card 3'
     // },
     // {
     //      src: 'https://picsum.photos/seed/picsum/200/300',
     //      title: 'Card 4',
     //      content: 'This is the content for card 4'
     // },
     // {
     //      src: 'https://picsum.photos/seed/picsum/200/300',
     //      title: 'Card 5',
     //      content: 'This is the content for card 5'
     // }
]



const navButton = document.getElementById('mobile-menu-button');
const card = document.getElementById('cards');

navButton.addEventListener('click', () => {
     const nav = document.getElementById('nav');
     nav.classList.toggle('hidden');
})
