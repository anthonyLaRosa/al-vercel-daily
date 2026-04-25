export interface DailyFetchResponse<T = unknown> {
  success: boolean;
  data?: T;
  meta?: {
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  };
  error?: {
    code:
      | "VALIDATION_ERROR"
      | "NOT_FOUND"
      | "INTERNAL_SERVER_ERROR"
      | "BAD_REQUEST";
    message: string;
  };
}

export type DailyFetchParams = Record<
  string,
  string | number | boolean | undefined
>;

export interface DailyFetchRequestInit extends RequestInit {
  params?: DailyFetchParams;
}

export async function dailyFetch<T>(
  url: string,
  options?: DailyFetchRequestInit,
) {
  const params = getQueryParams(options?.params);
  const internalUrl = `${url}${params}`;
  try {
    const resp = await fetch(internalUrl, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "x-vercel-protection-bypass": "OykROcuULI6YJwAwk3VnWv4gMMbpAq6q",
        ...(options?.headers ?? {}),
      },
    });
    const data = (await resp.json()) as DailyFetchResponse<T>;
    return data;
  } catch (error) {
    return error as DailyFetchResponse<T>;
  }
}

function getQueryParams(params?: DailyFetchParams) {
  if (!params) {
    return "";
  }
  const queryParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      queryParams.append(key, String(value));
    }
  }
  return queryParams.size !== 0 ? `?${queryParams.toString()}` : "";
}
