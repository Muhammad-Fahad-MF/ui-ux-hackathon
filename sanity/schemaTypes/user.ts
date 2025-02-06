

import { defineField, defineType } from "sanity";

export default defineType({
    name: "user",
    title: "User",
    type: "document",
    fields: [
        defineField({
            name: "username",
            title: "UserName",
            type: "string",
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
            validation: Rule => Rule.email().required(),
        }),
        defineField({
            name: "password",
            title: "Password",
            type: "string",
        }),
    ] 
})