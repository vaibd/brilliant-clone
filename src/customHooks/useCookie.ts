type cookieOptions =  {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
}

type cookiesT = {
  name: string;
  value: string;
  options?: cookieOptions;
}

export const Cookies = {
  set({name, value, options}: cookiesT) {
    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    
    if (options?.expires) {
      if (typeof options.expires === 'number') {
        const date = new Date();
        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
        options.expires = date;
      }
      cookie += `;expires=${options.expires.toUTCString()}`;
    }

    if (options?.path) cookie += `;path=${options.path}`;
    if (options?.domain) cookie += `;domain=${options.domain}`;
    if (options?.secure) cookie += ';secure';
    if (options?.sameSite) cookie += `;samesite=${options.sameSite}`;

    document.cookie = cookie;
  },

  get(name: string) {
    const match = document.cookie.match(new RegExp(
      '(?:^|;\\s*)' + name.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1') + '=([^;]*)'
    ));
    return match ? decodeURIComponent(match[1]) : undefined;
  },

  delete(name: string) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  }
};