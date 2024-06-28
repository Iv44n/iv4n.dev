import { Resend } from 'resend'
import type { APIRoute } from 'astro'

export const prerender = false;

type Email = {
    name: string
    email: string
    subject: string
    message: string
}

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const POST: APIRoute = async ({ request }) => {
    const body: Email = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
        return new Response(JSON.stringify({ error: 'All fields are required' }), {
            status: 400,
            statusText: 'Bad Request'
        })
    }

    const { data, error } = await resend.emails.send({
        from: `Acme <onboarding@resend.dev>`,
        to: ['todelanoivan13@gmail.com'],
        subject,
        html: `
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); font-family: Arial, sans-serif;">
                <h1 style="font-size: 28px; color: #333; margin-bottom: 15px;">${name}</h1>
                <hr style="border: none; border-top: 1px solid #ccc; margin-bottom: 15px;">
                <p style="font-size: 18px; color: #555; margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
                <p style="font-size: 18px; color: #555; margin-bottom: 10px;"><strong>Asunto:</strong> ${subject}</p>
                <p style="font-size: 18px; color: #555; margin-bottom: 10px;"><strong>Mensaje:</strong> ${message}</p>
            </div>
        `
    })

    if (error) {
        return new Response(JSON.stringify({
            error,
            message: 'Email not sent'
        }), {
            status: 500,
            statusText: 'Internal Server Error'
        })
    }

    return new Response(
        JSON.stringify({
            data,
            message: 'Email sent successfully'
        }),
        {
            statusText: 'Email sent',
            status: 200
        }
    )

}