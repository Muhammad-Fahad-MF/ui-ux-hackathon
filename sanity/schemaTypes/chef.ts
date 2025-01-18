import { defineField, defineType } from "sanity";

export default defineType({
    name: "chef",
    title: "Chefs",
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Chef Name',
        }),
        defineField({
            name: 'position',
            type: 'string',
            title: 'Position',
        }),
        defineField({
            name: 'experience',
            type: 'number',
            title: 'Experience',
        }),
        defineField({
            name: 'specialty',
            type: 'string',
            title: 'Specialty',
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Chef Image',
            options: {
                hotspot: true // Enables cropping and focal point selection
            }
        }),
        defineField({
            name: 'description',
            type: 'string',
            title: 'Description',
        }),
        defineField({
            name: 'available',
            type: 'boolean',
            title: 'isAvailable',
        })        
    ]
})
