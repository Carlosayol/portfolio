export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
    },
    {
      name: 'level',
      title: 'Level',
      type: 'string',
      options: {
        list: [
          {title: 'Expert', value: 'expert'},
          {title: 'Proficient', value: 'proficient'},
          {title: 'Beginner', value: 'beginner'},
          {title: 'Want to learn', value: 'want_to_learn'},
        ],
      },
    },
  ],
}
