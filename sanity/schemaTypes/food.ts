import { defineField, defineType } from "sanity";

export default defineType({
    name: "food",
    title: "Food",
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Dish Name',
        }),
        defineField({
            name: 'category',
            type: 'string',
            title: 'Category',
        }),
        defineField({
            name: 'price',
            type: 'number',
            title: 'Price',
        }),
        defineField({
            name: 'originalPrice',
            type: 'number',
            title: 'Original Price',
        }),
        defineField({
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [{ type: 'string'}],
            options: {
                layout: 'tags'
            },
            description: 'Add tags like "Healthy", "Popular", etc.'
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Dish Image',
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
