import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'media',
  displayName: 'المحتوى المرئي',
  description: 'إدارة الأفلام والمسلسلات العربية والأجنبية',
  icon: '🎬',

  schema: {
    type: 'object',
    properties: {
      id: { type: 'number', title: 'ID (TMDB/Internal)', required: true },
      title: { type: 'string', title: 'العنوان الأصلي', required: true },
      titleAr: { type: 'string', title: 'العنوان بالعربي' },
      slug: { type: 'slug', title: 'رابط URL Slug', required: true },
      type: { 
        type: 'select', 
        title: 'النوع', 
        enum: ['movie', 'tv'], 
        enumLabels: ['فيلم', 'مسلسل'],
        default: 'movie' 
      },
      lang: { 
        type: 'select', 
        title: 'اللغة', 
        enum: ['ar', 'en'], 
        enumLabels: ['عربي', 'أجنبي'],
        default: 'ar' 
      },
      year: { type: 'number', title: 'سنة الإنتاج' },
      director: { type: 'string', title: 'المخرج' },
      cast: { 
        type: 'list', // مصفوفة نصوص للممثلين
        title: 'طاقم العمل',
        items: { type: 'string' }
      },
      genres: { 
        type: 'list', 
        title: 'التصنيفات', 
        items: { type: 'string' } 
      },
      overview: { type: 'textarea', title: 'قصة العمل' },
      // في الأفلام نضع الرابط هنا مباشرة، في المسلسلات نتركه فارغاً ونستخدم الـ Episodes Collection
      videoUrl: { 
        type: 'string', 
        title: 'رابط الفيديو (للأفلام فقط)', 
        helpText: 'اتركه فارغاً إذا كان مسلسلاً' 
      }
    },
    required: ['id', 'title', 'slug', 'type', 'lang']
  },

  listFields: ['title', 'type', 'lang', 'year'],
  searchFields: ['title', 'titleAr', 'slug', 'cast'],
  defaultSort: 'year',
  defaultSortOrder: 'desc'
} satisfies CollectionConfig
