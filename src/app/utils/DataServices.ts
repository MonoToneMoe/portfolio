export const SendMessage = async (name: string, email: string, message: string) => {
    const messageData = {
        service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        template_params: {
            name,
            email,
            message
        }
    };

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messageData)
        });

        if (!response.ok) {
            throw new Error(`An error has occurred: ${response.status}`);
        }

        const result = await response.text();
        console.log(result);
        return result;
    } catch (error) {
        console.error('Failed to send message:', error);
        throw error;
    }
};
