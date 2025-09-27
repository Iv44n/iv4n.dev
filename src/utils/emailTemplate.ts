function getContactEmailContent(data): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
        <p><strong>Subject:</strong> ${data.subject}</p>
      </div>
      
      <div style="margin-top: 20px;">
        <h3 style="color: #333;">Message:</h3>
        <div style="background-color: #fff; padding: 15px; border-left: 4px solid #007bff; margin-top: 10px;">
          ${data.message.replace(/\n/g, '<br>')}
        </div>
      </div>
    </div>
  `
}

export default getContactEmailContent
