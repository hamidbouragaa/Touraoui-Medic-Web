import { z } from "zod";

export const InquirySchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse e-mail valide." }),
  phone: z.string().optional(),
  inquiryType: z.enum(["prescription-refill", "general-question"], {
    errorMap: () => ({ message: "Veuillez sélectionner un type de demande." }),
  }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }).max(500, { message: "Le message ne doit pas dépasser 500 caractères." }),
});

export type Inquiry = z.infer<typeof InquirySchema>;
