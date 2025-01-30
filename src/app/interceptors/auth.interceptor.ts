// Importaciones necesarias para el interceptor
import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

// Definición del interceptor de autenticación
export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  // Inyección del servicio de enrutamiento
  const router = inject(Router);
  
  // Token de autenticación (debería reemplazarse con la lógica real para obtener el token)
  const authToken = 'your-auth-token';

  // Si no hay token, redirige al usuario a la página de inicio y lanza un error
  if (!authToken) {
    router.navigate(['/home']);
    return throwError(() => 'No auth token found');
  }

  // Obtiene la configuración del entorno
  const isProduction = environment.production;
  const apiUrl = environment.apiUrl;

  // Clona la solicitud original y añade el token de autenticación en los encabezados
  const authReq = req.clone({
    url: req.url.startsWith(apiUrl) ? req.url : `${apiUrl}${req.url}`,
    setHeaders: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  // Pasa la solicitud clonada al siguiente manejador y captura errores
  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      // Si el error es 401 o 403, redirige al usuario a la página de inicio
      if (error.status === 401 || error.status === 403) {
        router.navigate(['/home']);
      }
      // Lanza el error para que pueda ser manejado por otros interceptores o servicios
      return throwError(() => error);
    })
  );
};