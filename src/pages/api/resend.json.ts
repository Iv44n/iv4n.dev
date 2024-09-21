import { Resend } from 'resend'
import type { APIRoute } from 'astro'

export const prerender = false

type Email = {
    name: string
    email: string
    subject: string
    message: string
}

const resend = new Resend(import.meta.env.RESEND_API_KEY)
const domain = import.meta.env.DOMAIN_NAME

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
        from: `${name} <${domain}>`,
        to: ['todelanoivan13@gmail.com', 'ivandev2oo6@gmail.com'],
        subject,
        html: `
            <div style="background-color: #f5f5f5; margin: 0; width: 100%; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
                <div style="max-width: 600px; width: 100%; margin: 0 auto; background-color: #ffffff; overflow: hidden;">
                    <div style="background-color: #1a1a1a; padding: 20px; text-align: center;">
                        <div style="color: #ffffff; font-size: 26px; font-weight: bold; margin: 0; letter-spacing: 1px;">Nuevo Mensaje de Contacto</div>
                        <div style="color: #cccccc; font-size: 14px; margin-top: 8px;">Has recibido un mensaje desde tu sitio web</div>
                    </div>
                    <div style="padding: 20px;">
                        <div style="font-size: 16px; color: #333333; margin-bottom: 20px;">
                            Aquí están los detalles del mensaje:
                        </div>
                        <div style="font-size: 16px; color: #333333; margin-bottom: 20px; border-left: 4px solid #1a1a1a; padding-left: 15px; background-color: #f9f9f9; padding: 15px;">
                            <div style="color: #1a1a1a; font-weight: bold; display: block; margin-bottom: 5px;">Nombre:</div>
                            ${name}
                        </div>
                        <div style="font-size: 16px; color: #333333; margin-bottom: 20px; border-left: 4px solid #1a1a1a; padding-left: 15px; background-color: #f9f9f9; padding: 15px;">
                            <div style="color: #1a1a1a; font-weight: bold; display: block; margin-bottom: 5px;">Correo Electrónico:</div>
                            ${email}
                        </div>
                        <div style="font-size: 16px; color: #333333; margin-bottom: 20px; border-left: 4px solid #1a1a1a; padding-left: 15px; background-color: #f9f9f9; padding: 15px;">
                            <div style="color: #1a1a1a; font-weight: bold; display: block; margin-bottom: 5px;">Asunto:</div>
                            ${subject}
                        </div>
                        <div style="font-size: 16px; color: #333333; margin-bottom: 30px; border-left: 4px solid #1a1a1a; padding-left: 15px; background-color: #f9f9f9; padding: 15px;">
                            <div style="color: #1a1a1a; font-weight: bold; display: block; margin-bottom: 5px;">Contenido:</div>
                            ${message}
                        </div>
                        <div style="text-align: center; margin-top: 40px;">
                            <a href="mailto:${email}" style="background-color: #1a1a1a; color: #ffffff; padding: 14px 28px; text-decoration: none; font-size: 16px; font-weight: bold; transition: background-color 0.3s ease; border-radius: 4px; display: inline-block;">
                                Responder
                            </a>
                        </div>
                    </div>
                </div>
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
