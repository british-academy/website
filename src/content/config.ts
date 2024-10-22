import { z, defineCollection } from "astro:content"

// TODO: figure out the type of image
const getImageSchema = ({ image }: { image: any }) =>
  z.object({
    src: image(),
    alt: z.string(),
    title: z.string().optional(),
  })

const pages = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      createdDate: z.coerce.date().optional(),
      updatedDate: z.coerce.date().optional(),
      draft: z.boolean().optional().default(true),

      name: z.string(),
      title: z.string(),
      description: z.string().optional(),
      image: getImageSchema({ image }).optional(),

      pageType: z.enum(["website", "article"]).default("website"),
    }),
})

const images = defineCollection({
  type: "content",
  schema: ({ image }) => getImageSchema({ image }).required(),
})

export type Image = z.infer<ReturnType<typeof getImageSchema>>
export const collections = { images, pages }
