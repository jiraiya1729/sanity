import { MdPerson } from 'react-icons/md';

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'normalText',
    },
  ],
  preview: {
    select: {
      title: 'name',
      image: 'profileImage',
      slug: 'slug',
    },
    prepare({ title, image, slug }: { title: string; image: any; slug: { current: string } }) {
        return {
        title,
        media: image,
        subtitle: slug.current,
      };
    },
  },
};