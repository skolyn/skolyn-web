import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.initializeApiUrl();
  }

  private initializeApiUrl(): void {
    // Support for runtime API URL injection
    if (typeof window !== 'undefined' && (window as any).API_URL) {
      this.apiUrl = (window as any).API_URL;
    }
  }

  // ─── Authentication ──────────────────────────────────────────────
  login(payload: any): Observable<ApiResponse<any>> {
    return this.post('/api/login', payload);
  }

  // ─── Contact Form ────────────────────────────────────────────────
  submitContact(payload: any): Observable<ApiResponse<any>> {
    return this.post('/api/contact', payload);
  }

  // ─── Applications/Careers ────────────────────────────────────────
  submitApplication(payload: any): Observable<ApiResponse<any>> {
    return this.post('/api/apply', payload);
  }

  // ─── Newsletter ───────────────────────────────────────────────────
  subscribeNewsletter(payload: { email: string }): Observable<ApiResponse<any>> {
    return this.post('/api/newsletter', payload);
  }

  // ─── Generic HTTP Methods ────────────────────────────────────────

  private get<T = any>(endpoint: string, options?: any): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${endpoint}`, options)
      .pipe(catchError(this.handleError));
  }

  private post<T = any>(endpoint: string, body?: any, options?: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${endpoint}`, body, options)
      .pipe(catchError(this.handleError));
  }

  private put<T = any>(endpoint: string, body?: any, options?: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${endpoint}`, body, options)
      .pipe(catchError(this.handleError));
  }

  private delete<T = any>(endpoint: string, options?: any): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${endpoint}`, options)
      .pipe(catchError(this.handleError));
  }

  // ─── Error Handling ──────────────────────────────────────────────
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      if (error.error?.message) {
        errorMessage = error.error.message;
      }
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  // ─── Utility Methods ────────────────────────────────────────────
  getApiUrl(): string {
    return this.apiUrl;
  }

  setApiUrl(url: string): void {
    this.apiUrl = url;
  }
}
