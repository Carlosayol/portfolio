export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'HeroImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'profile',
      title: 'Profile',
      type: 'string',
    },
    {
      name: 'likes',
      title: 'Likes',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'cv',
      title: 'CV',
      type: 'file',
    },
  ],
}
