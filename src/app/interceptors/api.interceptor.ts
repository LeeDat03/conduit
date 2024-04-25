import { HttpInterceptorFn } from '@angular/common/http';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('access interceptor');
  const apiReq = req.clone({ url: `https://api.realworld.io/api${req.url}` });
  return next(apiReq);
};
