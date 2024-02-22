export const AUTH = {
  EMPLOYEE: {
    value: 0,
    landingPage: ["/tache"]
  },
  ADMIN: {
    value: 10,
    landingPage: ["/dashboard"]
  }
}

export function getAuthName (id: number) {
  const auths = AUTH as any;
  const keys = Object.keys(AUTH);
  for (let key of keys) {
    const val = auths[key];
    if (val.value == id) {
      return key;
    }
  }
  return undefined;
}

export function getAuth (id: number) {
  const key = getAuthName(id);
  if (key) {
    return (AUTH as any)[key];
  }
  return AUTH.EMPLOYEE;
}
