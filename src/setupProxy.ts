import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app: any) {
  app.use(
    '/apis',
    createProxyMiddleware({
      target: 'http://192.168.0.1:8000/',
      changeOrigin: true,
    })
  );
}
