import type { Post } from '~/types/post';

export const posts: Post[] = [
  {
    slug: 'nature-1',
    title: 'Вдохновение в каждом шаге',
    description: 'Наши путешественники находят вдохновение в каждом шаге своего пути по горам и лесам.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    categories: [
      { label: 'Природа', value: 'nature' },
      { label: 'Люди', value: 'people' }
    ],
    date: '9 Апр',
    readTime: '2 мин',
    comments: 1
  },
  {
    slug: 'bear-forest',
    title: 'Моменты тишины и покоя',
    description: 'В такие моменты наши фотографы ощущают гармонию и умиротворение, наблюдая за дикой природой.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
    categories: [
      { label: 'Природа', value: 'nature' },
      { label: 'Животные', value: 'animals' }
    ],
    date: '6 Апр',
    readTime: '3 мин',
    comments: 5
  },
  {
    slug: 'art-nature',
    title: 'Цвета природы в наших руках',
    description: 'Наши художники выражают всю красоту окружающего мира через творчество и живопись.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    categories: [
      { label: 'Природа', value: 'nature' },
      { label: 'Искусство', value: 'art' }
    ],
    date: '5 Апр',
    readTime: '3 мин',
    comments: 10
  },
  {
    slug: 'monkey-family',
    title: 'Семейные узы в дикой природе',
    description: 'Наблюдая за этими семьями, наши фотографы чувствуют тепло и единство.',
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80',
    categories: [
      { label: 'Животные', value: 'animals' },
      { label: 'Природа', value: 'nature' }
    ],
    date: '4 Апр',
    readTime: '2 мин',
    comments: 2
  },
  {
    slug: 'city-moscow',
    title: 'Гармония городских и природных пейзажей',
    description: 'Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    categories: [
      { label: 'Город', value: 'city' },
      { label: 'Природа', value: 'nature' }
    ],
    date: '6 Апр',
    readTime: '2 мин',
    comments: 2
  },
  {
    slug: 'grand-canyon',
    title: 'Моменты, которые остаются в сердце',
    description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
    categories: [
      { label: 'Природа', value: 'nature' }
    ],
    date: '3 Апр',
    readTime: '4 мин',
    comments: 3
  },
  {
    slug: 'hug-love',
    title: 'Объятия, которые говорят больше слов',
    description: 'В мире, где слова иногда теряют свою силу, объятия могут стать самым мощным проявлением чувств.',
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80',
    categories: [
      { label: 'Люди', value: 'people' },
      { label: 'Искусство', value: 'art' }
    ],
    date: '5 Апр',
    readTime: '3 мин',
    comments: 6
  },
  {
    slug: 'forest-magic',
    title: 'Вечная гармония',
    description: 'Фреска в божественных, спокойных тонах о иной природе, где царит вечная гармония и покой.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    categories: [
      { label: 'Природа', value: 'nature' },
      { label: 'Искусство', value: 'art' }
    ],
    date: '4 Апр',
    readTime: '15 мин',
    comments: 8
  },
  {
    slug: 'food-summer',
    title: 'Вкус лета',
    description: 'Яркие овощи и фрукты, что приносят ощущение солнца и радости.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    categories: [
      { label: 'Еда', value: 'food' },
      { label: 'Природа', value: 'nature' }
    ],
    date: '3 Апр',
    readTime: '1 мин',
    comments: 1
  },
  {
    slug: 'old-town',
    title: 'Эхо прошлого',
    description: 'Старинные здания, уютные под кронами деревьев, словно хранят в себе эхо ушедших эпох.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    categories: [
      { label: 'Город', value: 'city' },
      { label: 'Архитектура', value: 'architecture' }
    ],
    date: '2 Апр',
    readTime: '4 мин',
    comments: 2
  }
]; 