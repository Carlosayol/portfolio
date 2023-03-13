export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'briefDescription',
      title: 'BriefDescription',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'linkGithub',
      title: 'LinkGithub',
      type: 'url',
    },
  ],
}
