export const recipe = {
  '@context': 'http://schema.org/',
  '@type': 'Recipe',
  'name': 'Party Coffee Cake',
  'image': [
    'https://example.com/photos/1x1/photo.jpg',
    'https://example.com/photos/4x3/photo.jpg',
    'https://example.com/photos/16x9/photo.jpg'
  ],
  'author': {
    '@type': 'Person',
    'name': 'Mary Stone'
  },
  'datePublished': '2018-03-10',
  'description': 'This coffee cake is awesome and perfect for parties.',
  'prepTime': 'PT20M',
  'cookTime': 'PT30M',
  'totalTime': 'PT50M',
  'keywords': 'cake for a party, coffee',
  'recipeYield': '10 servings',
  'recipeCategory': 'Dessert',
  'recipeCuisine': 'American',
  'nutrition': {
    '@type': 'NutritionInformation',
    'calories': '270 calories'
  },
  'recipeIngredient': [
    '2 cups of flour',
    '3/4 cup white sugar',
    '2 teaspoons baking powder',
    '1/2 teaspoon salt',
    '1/2 cup butter',
    '2 eggs',
    '3/4 cup milk'
  ],
  'recipeInstructions': [
    {
      '@type': 'HowToStep',
      'text': 'Preheat the oven to 350 degrees F. Grease and flour a 9x9 inch pan.'
    },
    {
      '@type': 'HowToStep',
      'text': 'In a large bowl, combine flour, sugar, baking powder, and salt.'
    },
    {
      '@type': 'HowToStep',
      'text': 'Mix in the butter, eggs, and milk.'
    },
    {
      '@type': 'HowToStep',
      'text': 'Spread into the prepared pan.'
    },
    {
      '@type': 'HowToStep',
      'text': 'Bake for 30 to 35 minutes, or until firm.'
    },
    {
      '@type': 'HowToStep',
      'text': 'Allow to cool.'
    }
  ],
  'review': {
    '@type': 'Review',
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': '4',
      'bestRating': '5'
    },
    'author': {
      '@type': 'Person',
      'name': 'Julia Benson'
    },
    'datePublished': '2018-05-01',
    'reviewBody': 'This cake is delicious!',
    'publisher': 'The cake makery'
  },
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '5',
    'ratingCount': '18'
  },
  'video': [
    {
      'name': 'How to make a Party Coffee Cake',
      'description': 'This is how you make a Party Coffee Cake.',
      'thumbnailUrl': [
        'https://example.com/photos/1x1/photo.jpg',
        'https://example.com/photos/4x3/photo.jpg',
        'https://example.com/photos/16x9/photo.jpg'
      ],
      'contentUrl': 'http://www.example.com/video123.mp4',
      'embedUrl': 'http://www.example.com/videoplayer?video=123',
      'uploadDate': '2018-02-05T08:00:00+08:00',
      'duration': 'PT1M33S',
      'interactionCount': '2347',
      'expires': '2019-02-05T08:00:00+08:00'
    }
  ]
}