import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'movies',
  displayName: 'الأفلام والمسلسلات',
  description: 'إدارة قاعدة بيانات الأفلام والمسلسلات المستخرجة',
  icon: '🎬',

  schema: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        title: 'عنوان الفيلم/المسلسل',
        required: true,
        maxLength: 255
      },
      slug: {
        type: 'slug',
        title: 'رابط URL (Slug)',
        required: true,
        maxLength: 255
      },
      type: {
        type: 'select',
        title: 'النوع',
        enum: ['movie', 'series'],
        enumLabels: ['فيلم', 'مسلسل'],
        default: 'movie'
      },
      year: {
        type: 'number',
        title: 'سنة الإنتاج',
        required: true
      },
      rate: {
        type: 'number',
        title: 'التقييم (IMDB)',
        helpText: 'تقييم من 1 إلى 10'
      },
      description: {
        type: 'textarea',
        title: 'قصة الفيلم',
        maxLength: 1000
      },
      posterImage: {
        type: 'media',
        title: 'بوستر الفيلم'
      },
      videoId: {
        type: 'string',
        title: 'معرف الفيديو (Video Source ID)',
        required: true,
        helpText: 'المعرف الذي يستخدمه المشغل لجلب الرابط من NDJSON'
      },
      status: {
        type: 'select',
        title: 'حالة النشر',
        enum: ['draft', 'published'],
        enumLabels: ['مسودة', 'منشور'],
        default: 'published'
      },
      tags: {
        type: 'string',
        title: 'التصنيفات',
        helpText: 'تصنيفات مفصولة بفواصل (أكشن، دراما، إلخ)'
      }
    },
    required: ['title', 'slug', 'year', 'videoId']
  },

  // إعدادات العرض في لوحة التحكم
  listFields: ['title', 'year', 'type', 'rate', 'status'],
  searchFields: ['title', 'description', 'year'],
  defaultSort: 'year',
  defaultSortOrder: 'desc'
} satisfies CollectionConfig
