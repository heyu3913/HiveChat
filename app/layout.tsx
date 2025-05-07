import React from 'react';
import type { Metadata } from "next";
import type { Viewport } from 'next'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { SessionProvider } from 'next-auth/react';
import "./globals.css";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "行业精灵",
  description: "同时和多个机器人聊天，最快获取最佳结果",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SessionProvider>
            <AntdRegistry>
              {children}
              <Script
                id="baidu-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?e15744a2ce60a55d13de44d74c81e586";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
              })();
            `,
                }}
              />
            </AntdRegistry>
          </SessionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
