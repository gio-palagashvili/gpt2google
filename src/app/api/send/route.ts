import { NextResponse, NextRequest } from 'next/server';
import { Configuration, OpenAIApi } from "openai";

export const POST = async (req: NextResponse, res: NextRequest) => {
    try {
        const body = await req.json();
        const { query } = body;
        const openai = new OpenAIApi(new Configuration({
            apiKey: process.env.API_KEY
        }))
        const preText = 'template : /give a short title/give a short description';
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: 'user', content: `${query}` }
            ]
        })

        const newRes: mainResponseMessage = {
            text: response.data.choices[0].message?.content?.split('response body:')[1]!,
            title: response.data.choices[0].message?.content?.split('response body:')[0].split(':')[0]!
        }

        return NextResponse.json(newRes);
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify(error), { status: 400 });
    }
}