import { AxiosDefaults, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse, AxiosStatic } from 'axios';

declare class Client {
    readonly defaults:  Readonly<AxiosDefaults<any>>;
    interceptors: { request: AxiosInterceptorManager<AxiosRequestConfig<any>>; response: AxiosInterceptorManager<AxiosResponse<any, any>>; };
    delete<T = any, R = AxiosResponse<T, any>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
    get<T = any, R = AxiosResponse<T, any>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
    getUri(config?: AxiosRequestConfig<any>): string;
    head<T = any, R = AxiosResponse<T, any>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
    options<T = any, R = AxiosResponse<T, any>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
    patch<T = any, R = AxiosResponse<T, any>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    patchForm<T = any, R = AxiosResponse<T, any>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    post<T = any, R = AxiosResponse<T, any>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    postForm<T = any, R = AxiosResponse<T, any>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    put<T = any, R = AxiosResponse<T, any>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    putForm<T = any, R = AxiosResponse<T, any>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
    request<T = any, R = AxiosResponse<T, any>, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
}

export default Client;