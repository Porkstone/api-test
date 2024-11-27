import puppeteer from 'puppeteer';
import { type NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest) {
    try {   
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.google.com');
        const content = await page.content();
        return NextResponse.json({ content });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}