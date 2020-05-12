export interface Auth {
  id: number | string;
  name: string;
  token: string;
}

export function createAuth(params: Partial<Auth>) {
  return {
    id: null,
    name: null,
    token: null,
  } as Auth;
}
